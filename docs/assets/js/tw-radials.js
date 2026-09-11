/* =============================================================================
   TaxonWorks radial-menu icons
   -----------------------------------------------------------------------------
   Write inline in any Markdown page:

       click the {radial-annotator} button      {radial-navigator}      {quick-forms}

   Each token becomes an inline copy of the round TaxonWorks radial button, so
   the tutorial shows the same control the reader clicks in the app: a white
   disc, a blue ring and the blue glyph. Styling (incl. the hard-coded
   TaxonWorks colours) is in stylesheets/tw-radials.css. No network, no
   dependencies — the SVG path data is baked in below, lifted verbatim from
   TaxonWorks' Vue VIcon paths (app/javascript/vue/components/ui/VIcon/Paths/*.js).

   Same text-node-walk shape as tw-chips.js; the two regexes don't overlap, so
   {radial-annotator} and {predicate:body length} can sit on the same page.
   ========================================================================== */
(function () {
  "use strict";

  /* --- icon table --------------------------------------------------------
     viewBox + one-or-more <path d="…"> per token. currentColor fill is set
     in CSS. Names/titles match the TaxonWorks UI.

     The wheel and hexagon paths sit tidily inside their own viewBox, so the
     glyph already keeps an even margin from the disc's ring. The navigator
     arrow, though, fills its 0 0 490 490 box corner-to-corner and its mass
     leans to the top-right — dropped straight into the disc it looks oversized
     and shoved into a corner. Its viewBox is padded (and nudged down-left) so
     it reads centred and matches the visual weight of the other two.
     (The standalone assets/images/radials/radial-navigator.svg keeps the raw
     0 0 490 490 box — it's the plain glyph, not the in-disc token.) */
  var ICON = {
    "radial-annotator": {
      label: "Radial annotator",
      viewBox: "0 0 14 15",
      paths: [
        "M5,6.2L1.7,2.9C0.7,4,0.1,5.5,0,7h4.7C4.7,6.7,4.8,6.5,5,6.2z",
        "M9.5,7H14c-0.1-1.6-0.7-3-1.7-4.1L9.2,6.1C9.3,6.4,9.5,6.7,9.5,7z",
        "M8.5,5.4l3.2-3.2c-1.1-1-2.6-1.7-4.2-1.8V5C7.9,5.1,8.2,5.2,8.5,5.4z",
        "M6.6,5V0.5C4.9,0.6,3.5,1.3,2.3,2.3l3.2,3.2C5.8,5.3,6.2,5.1,6.6,5z",
        "M5.8,9.5l-3.3,3.3c1.1,1,2.6,1.6,4.1,1.7V9.8C6.3,9.8,6,9.7,5.8,9.5z",
        "M7.5,9.9v4.6c1.6-0.1,3-0.7,4.1-1.7L8.3,9.6C8.1,9.7,7.8,9.8,7.5,9.9z",
        "M4.7,7.9H0c0.1,1.6,0.8,3.1,1.8,4.3l3.3-3.3C4.9,8.6,4.8,8.3,4.7,7.9z"
      ]
    },
    "radial-navigator": {
      label: "Radial navigator",
      viewBox: "-60 -95 640 640",   /* arrow bbox is 0 0 490 490; pad + shift down-left */
      paths: [
        "M0,226.3l211.6,52.1L263.7,490L490,0L0,226.3z"
      ]
    },
    "quick-forms": {
      label: "Quick forms radial",
      viewBox: "0 0 14.6 14.6",
      paths: [
        "M2.5,6.4l1.7-2.8l-1-1.7L0.5,6.4H2.5z M4.1,11L2.5,8.1h-2l2.6,4.6L4.1,11z " +
          "M5.6,2.7h3.3l1-1.7H4.6L5.6,2.7z M12.1,8.1L10.4,11l1,1.7l2.7-4.6H12.1z " +
          "M9,11.9H5.5l-0.9,1.7H10L9,11.9z M10.4,3.5l1.7,2.9h2l-2.7-4.6L10.4,3.5z"
      ]
    }
  };

  var SKIP_TAGS = { A: 1, CODE: 1, PRE: 1, SCRIPT: 1, STYLE: 1, TEXTAREA: 1, KBD: 1, SAMP: 1 };
  function tokenRe() { return /\{(radial-annotator|radial-navigator|quick-forms)\}/g; }

  /* --- DOM ------------------------------------------------------------- */
  function collectTextNodes(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || node.nodeValue.indexOf("{") === -1) return NodeFilter.FILTER_REJECT;
        for (var p = node.parentNode; p && p !== root; p = p.parentNode) {
          if (p.nodeType === 1) {
            if (SKIP_TAGS[p.tagName]) return NodeFilter.FILTER_REJECT;
            if (p.classList && p.classList.contains("tw-radial")) return NodeFilter.FILTER_REJECT;
          }
        }
        return tokenRe().test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var out = [], n;
    while ((n = walker.nextNode())) out.push(n);
    return out;
  }

  function buildIcon(key) {
    var spec = ICON[key];
    var span = document.createElement("span");
    span.className = "tw-radial tw-radial--" + key;
    span.setAttribute("role", "img");
    span.setAttribute("aria-label", spec.label);
    span.setAttribute("title", spec.label);
    span.innerHTML =
      '<svg viewBox="' + spec.viewBox + '" aria-hidden="true" focusable="false">' +
      spec.paths.map(function (d) { return '<path d="' + d + '"/>'; }).join("") +
      "</svg>";
    return span;
  }

  function transform(node) {
    var re = tokenRe(), text = node.nodeValue, m, last = 0, found = false;
    var frag = document.createDocumentFragment();
    while ((m = re.exec(text))) {
      found = true;
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      frag.appendChild(buildIcon(m[1]));
      last = m.index + m[0].length;
    }
    if (!found) return;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  }

  function run(root) {
    root = root || document.querySelector(".md-content") || document.body;
    if (!root) return;
    collectTextNodes(root).forEach(transform);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(function () { run(); });        // Material instant navigation
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { run(); });
  } else {
    run();
  }
})();
