/* =============================================================================
   TaxonWorks vocabulary chips
   -----------------------------------------------------------------------------
   Write inline in any Markdown page:

       {keyword:extinct}      {topic:Diagnosis}      {predicate:body length}

   Each becomes a small coloured pill showing the term's TaxonWorks slice icon
   (tag / speech-bubble / document+pencil) and its name. The pill is filled with
   the term's *current* TaxonWorks label colour (css_color); hovering or
   focusing it shows a card with the type, the term's definition and its URI.

   Name is matched case-insensitively against the exact TaxonWorks term name.
   Unknown name  -> neutral dashed pill, card says "not found".
   API offline   -> neutral dashed pill, card says "could not be reached".

   Vanilla JS, no dependencies, same shape as bio-rel.js. Colours are read live
   from the API and cached in sessionStorage for 30 min (cleared on tab close),
   so edits in TaxonWorks show up on the next visit.

   The API server + public read-only project token are read from
   assets/tw-api.yml (same format as the TaxonPages front-end's
   taxa/config/api.yml). Edit that file if either ever changes; if it can't be
   read, the built-in defaults below are used.
   ========================================================================== */
(function () {
  "use strict";

  var SELF = document.currentScript;   // captured now, before any await

  /* --- config -------------------------------------------------------------
     Defaults match taxa/config/api.yml; assets/tw-api.yml overrides them. */
  var DEFAULT_API_URL = "https://sfg.taxonworks.org/api/v1";
  var DEFAULT_PROJECT_TOKEN = "Ots0-yen4dVefn0Etyxvgw";
  var PER = 500;                       // every project's CVT count per type is far below this
  var CACHE_KEY = "tw-chips:cvt:v1";
  var CACHE_TTL_MS = 30 * 60 * 1000;

  var CVT_TYPE = { keyword: "Keyword", topic: "Topic", predicate: "Predicate" };
  var LABEL    = { keyword: "Keyword", topic: "Topic", predicate: "Predicate" };

  /* TaxonWorks radial-annotator slice icons (paths lifted verbatim from
     app/javascript/vue/components/radials/annotator/images/{tag,citation,
     data_attribute}.js), recoloured to currentColor so each chip's ink and
     icon stay legible on its own fill. */
  var ICON = {
    keyword:
      '<svg viewBox="0 0 28 28" aria-hidden="true"><path d="M27.2,13.4L14.6,0.8c-0.5-0.5-1.2-0.8-2-0.8H2.8C1.3,0,0,1.3,0,2.8v9.8c0,0.8,0.3,1.5,0.8,2l12.6,12.6c0.5,0.5,1.2,0.8,2,0.8s1.5-0.3,2-0.8l9.8-9.8c0.5-0.5,0.8-1.2,0.8-2C28,14.6,27.7,13.9,27.2,13.4z M4.9,7C3.7,7,2.8,6.1,2.8,4.9s0.9-2.1,2.1-2.1S7,3.7,7,4.9S6.1,7,4.9,7z"/></svg>',
    topic:
      '<svg viewBox="0 0 25.625 25.625" aria-hidden="true"><path d="M12.812,0.435C5.736,0.435,0,5.499,0,11.747c0,3.168,1.479,6.028,3.855,8.082c-0.521,3.01-3.883,4.23-3.652,5.059c2.84,1.175,8.529-1.412,9.918-2.083c0.869,0.164,1.768,0.255,2.691,0.255c7.076,0,12.813-5.064,12.813-11.313S19.888,0.435,12.812,0.435z M11.904,12.218c0,3.076-1.361,4.802-4.043,5.129c-0.006,0.001-0.01,0.001-0.016,0.001c-0.029,0-0.061-0.011-0.082-0.031c-0.027-0.023-0.043-0.058-0.043-0.094V15.66c0-0.046,0.025-0.088,0.064-0.109c1.223-0.667,1.834-1.717,1.865-3.207H7.845c-0.068,0-0.125-0.056-0.125-0.125V8.286c0-0.069,0.057-0.125,0.125-0.125h3.934c0.068,0,0.125,0.056,0.125,0.125V12.218z M18.869,12.218c0,3.029-1.205,4.563-4.033,5.128c-0.008,0.001-0.016,0.002-0.024,0.002c-0.029,0-0.057-0.01-0.08-0.028c-0.029-0.023-0.045-0.06-0.045-0.097V15.66c0-0.046,0.025-0.088,0.064-0.109c1.223-0.667,1.834-1.717,1.865-3.207h-1.804c-0.068,0-0.125-0.056-0.125-0.125V8.286c0-0.069,0.057-0.125,0.125-0.125h3.932c0.07,0,0.125,0.056,0.125,0.125V12.218z"/></svg>',
    predicate:
      '<svg viewBox="0 0 512 512" aria-hidden="true"><path d="M397.736,78.378c6.824,0,12.358-5.533,12.358-12.358V27.027C410.094,12.125,397.977,0,383.08,0H121.641c-3.277,0-6.42,1.303-8.739,3.62L10.527,105.995c-2.317,2.317-3.62,5.461-3.62,8.738v370.239C6.908,499.875,19.032,512,33.935,512h349.144c14.897,0,27.014-12.125,27.014-27.027V296.289c0.001-6.824-5.532-12.358-12.357-12.358c-6.824,0-12.358,5.533-12.358,12.358v188.684c0,1.274-1.031,2.311-2.297,2.311H33.936c-1.274,0-2.311-1.037-2.311-2.311v-357.88h75.36c14.898,0,27.016-12.12,27.016-27.017V24.716H383.08c1.267,0,2.297,1.037,2.297,2.311V66.02C385.377,72.845,390.911,78.378,397.736,78.378z M109.285,100.075c0,1.269-1.032,2.301-2.3,2.301H49.107l60.178-60.18V100.075z"/><path d="M492.865,100.396l-14.541-14.539c-16.304-16.304-42.832-16.302-59.138,0L303.763,201.28H103.559c-6.825,0-12.358,5.533-12.358,12.358c0,6.825,5.533,12.358,12.358,12.358h175.488l-74.379,74.379H103.559c-6.825,0-12.358,5.533-12.358,12.358s5.533,12.358,12.358,12.358h76.392l-0.199,0.199c-1.508,1.508-2.598,3.379-3.169,5.433l-19.088,68.747h-53.936c-6.825,0-12.358,5.533-12.358,12.358s5.533,12.358,12.358,12.358h63.332c0.001,0,2.709-0.306,3.107-0.41c0.065-0.017,77.997-21.642,77.997-21.642c2.054-0.57,3.926-1.662,5.433-3.169l239.438-239.435C509.168,143.228,509.168,116.7,492.865,100.396z M184.644,394.073l10.087-36.326l26.24,26.24L184.644,394.073z M244.69,372.752l-38.721-38.721l197.648-197.648l38.722,38.721L244.69,372.752z M475.387,142.054l-15.571,15.571l-38.722-38.722l15.571-15.571c6.669-6.668,17.517-6.667,24.181,0l14.541,14.541C482.054,124.54,482.054,135.388,475.387,142.054z"/></svg>'
  };

  var SKIP_TAGS = { A: 1, CODE: 1, PRE: 1, SCRIPT: 1, STYLE: 1, TEXTAREA: 1, KBD: 1, SAMP: 1 };
  function chipRe() { return /\{(keyword|topic|predicate):([^{}|]+)\}/g; }

  /* --- helpers ---------------------------------------------------------- */
  function norm(s) {
    return String(s == null ? "" : s).replace(/\s+/g, " ").trim().toLowerCase();
  }

  function parseHex(v) {
    if (!v) return null;
    var s = String(v).trim().replace(/^#/, "");
    if (/^[0-9a-f]{3}$/i.test(s)) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
    if (!/^[0-9a-f]{6}$/i.test(s)) return null;
    return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
  }

  function cacheGet() {
    try {
      var raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var obj = JSON.parse(raw);
      if (!obj || !obj.ts || Date.now() - obj.ts > CACHE_TTL_MS) return null;
      return obj.data;
    } catch (e) { return null; }
  }
  function cacheSet(data) {
    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: data })); }
    catch (e) { /* private mode / quota — just skip the cache */ }
  }

  /* --- API config (assets/tw-api.yml) --------------------------------- */
  function selfSrc() {
    if (SELF && SELF.src) return SELF.src;
    var ss = document.getElementsByTagName("script");
    for (var i = 0; i < ss.length; i++) {
      if (ss[i].src && /\/tw-chips\.js(\?|#|$)/.test(ss[i].src)) return ss[i].src;
    }
    return location.href;
  }

  function parseApiYml(text) {
    var cfg = {};
    String(text).split(/\r?\n/).forEach(function (line) {
      var s = line.trim();
      if (!s || s === "---" || s.charAt(0) === "#") return;
      var i = s.indexOf(":");
      if (i < 0) return;
      var key = s.slice(0, i).trim();
      var val = s.slice(i + 1).trim().replace(/\s+#.*$/, "").replace(/^["']|["']$/g, "").trim();
      if (key && val) cfg[key] = val;
    });
    return cfg;
  }

  var configPromise = null;
  function loadConfig() {
    if (configPromise) return configPromise;
    var fallback = { url: DEFAULT_API_URL, token: DEFAULT_PROJECT_TOKEN };
    var ymlUrl;
    try { ymlUrl = new URL("../tw-api.yml", selfSrc()).href; } catch (e) { ymlUrl = null; }
    if (!ymlUrl) { configPromise = Promise.resolve(fallback); return configPromise; }
    configPromise = fetch(ymlUrl, { headers: { Accept: "text/yaml, text/plain, */*" } })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.text(); })
      .then(function (t) {
        var c = parseApiYml(t);
        return {
          url: (c.url || DEFAULT_API_URL).replace(/\/+$/, ""),
          token: c.project_token || DEFAULT_PROJECT_TOKEN
        };
      })
      .catch(function (e) {
        if (window.console && console.warn) {
          console.warn("[tw-chips] using built-in API config —", (e && e.message) || e);
        }
        return fallback;
      });
    return configPromise;
  }

  /* --- API ------------------------------------------------------------- */
  function fetchType(cfg, twType) {
    var url = cfg.url + "/controlled_vocabulary_terms.json?project_token=" +
      encodeURIComponent(cfg.token) + "&type=" + encodeURIComponent(twType) + "&per=" + PER;
    return fetch(url, { headers: { Accept: "application/json" } }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status + " for " + twType);
      return r.json();
    });
  }

  function indexRows(rows) {
    var m = Object.create(null);
    (rows || []).forEach(function (row) {
      var k = norm(row && row.name);
      if (k && !(k in m)) {
        m[k] = {
          name: row.name,
          css_color: row.css_color || null,
          definition: row.definition || "",
          uri: row.uri || ""
        };
      }
    });
    return m;
  }

  var vocabPromise = null;
  function loadVocab() {
    if (vocabPromise) return vocabPromise;
    var cached = cacheGet();
    if (cached) { vocabPromise = Promise.resolve(cached); return vocabPromise; }
    var keys = ["keyword", "topic", "predicate"];
    vocabPromise = loadConfig()
      .then(function (cfg) {
        return Promise.all(keys.map(function (k) { return fetchType(cfg, CVT_TYPE[k]); }));
      })
      .then(function (results) {
        var data = {};
        keys.forEach(function (k, i) { data[k] = indexRows(results[i]); });
        cacheSet(data);
        return data;
      });
    return vocabPromise;
  }

  /* --- DOM ------------------------------------------------------------- */
  function collectTextNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || node.nodeValue.indexOf("{") === -1) return NodeFilter.FILTER_REJECT;
        for (var p = node.parentNode; p && p !== root; p = p.parentNode) {
          if (p.nodeType === 1) {
            if (SKIP_TAGS[p.tagName]) return NodeFilter.FILTER_REJECT;
            if (p.classList && p.classList.contains("tw-chip")) return NodeFilter.FILTER_REJECT;
          }
        }
        return chipRe().test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var out = [], n;
    while ((n = walker.nextNode())) out.push(n);
    return out;
  }

  function buildChip(type, rawName) {
    var name = rawName.trim();
    var span = document.createElement("span");
    span.className = "tw-chip tw-chip--" + type + " tw-chip--pending";
    span.setAttribute("data-tw-type", type);
    span.setAttribute("data-tw-name", name);
    span.setAttribute("tabindex", "0");
    span.innerHTML = ICON[type] +
      '<span class="tw-chip__name"></span>' +
      '<span class="tw-chip__card" role="tooltip">' +
        '<strong class="tw-chip__kind"></strong>' +
        '<span class="tw-chip__def"></span>' +
      '</span>';
    span.querySelector(".tw-chip__name").textContent = name;
    span.querySelector(".tw-chip__kind").textContent = LABEL[type];
    span.querySelector(".tw-chip__def").textContent = "Loading…";
    return span;
  }

  function transform(node) {
    var re = chipRe(), text = node.nodeValue, m, last = 0, found = false;
    var frag = document.createDocumentFragment();
    while ((m = re.exec(text))) {
      found = true;
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      frag.appendChild(buildChip(m[1], m[2]));
      last = m.index + m[0].length;
    }
    if (!found) return;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }

  function resolveChip(span, vocab, offline) {
    var type = span.getAttribute("data-tw-type");
    var key = norm(span.getAttribute("data-tw-name"));
    var entry = vocab && vocab[type] ? vocab[type][key] : null;
    var card = span.querySelector(".tw-chip__card");
    var def = card.querySelector(".tw-chip__def");

    span.classList.remove("tw-chip--pending");

    if (entry) {
      if (parseHex(entry.css_color)) {
        span.style.setProperty("--tw-mark", "#" + entry.css_color.replace(/^#/, ""));
        span.classList.add("tw-chip--colored");
      }
      def.textContent = entry.definition || "(no definition recorded)";
      if (entry.uri) {
        var a = document.createElement("a");
        a.className = "tw-chip__uri";
        a.href = entry.uri;
        a.textContent = entry.uri;
        a.target = "_blank";
        a.rel = "noopener";
        card.appendChild(a);
      }
      return;
    }

    span.classList.add(offline ? "tw-chip--offline" : "tw-chip--missing");
    def.textContent = offline
      ? "TaxonWorks could not be reached — colour and definition unavailable."
      : "Not found among this project’s " + LABEL[type] + " terms in TaxonWorks.";
  }

  function run(root) {
    root = root || document.querySelector(".md-content") || document.body;
    if (!root) return;
    collectTextNodes(root).forEach(transform);
    var pending = [].slice.call(root.querySelectorAll(".tw-chip--pending"));
    if (!pending.length) return;
    loadVocab().then(function (vocab) {
      pending.forEach(function (s) { resolveChip(s, vocab, false); });
    }).catch(function (err) {
      if (window.console && console.warn) console.warn("[tw-chips]", err);
      vocabPromise = null;   // let a later page retry
      pending.forEach(function (s) { resolveChip(s, null, true); });
    });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(function () { run(); });        // Material instant navigation
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { run(); });
  } else {
    run();
  }
})();
