---
title: Asserted Distributions
description:
icon: material/earth
---
!!! info "Conventions"
    - **We avoid adding asserted distributions to anything other than species/subspecies**. Asserted distributions on higher-level taxa are difficult to curate in case the taxon gets split.

## Data Model
An asserted distribution states that a taxon is present in (or absent from) an area, according to at least one source. In TaxonWorks, the area is called the **shape**: either a GeographicArea (countries, states, TDWG regions...) or a custom [Gazetteer](TutorialGazetteers.md).

<div class="ba-model">
  <div class="ba-model__stage">
    <svg class="ba-model__edges" viewBox="0 0 1920 1080" aria-hidden="true">
      <defs>
        <marker id="ad-model-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0 0 L10 5 L0 10 z"/>
        </marker>
      </defs>
      <path d="M760 230 C760 300 860 300 860 370"/>
      <path d="M1160 230 C1160 300 1060 300 1060 370"/>
      <path d="M960 830 L960 690"/>
      <path class="ba-model__edge--main" d="M470 530 L597 530" marker-end="url(#ad-model-arrow)"/>
      <path class="ba-model__edge--main" d="M1320 530 L1447 530" marker-end="url(#ad-model-arrow)"/>
    </svg>
    <div class="ba-model__box ba-model__box--note ba-model__box--tags">
      <strong class="ba-model__title">{radial-annotator} Tags</strong>
      <div class="ba-model__chips">
        <span>{keyword:Adventive}</span>
        <span>{keyword:Endemic}</span>
      </div>
    </div>
    <div class="ba-model__box ba-model__box--note ba-model__box--attributes">
      <strong class="ba-model__title">{radial-annotator} Data attributes</strong>
      <div class="ba-model__chips">
        <span>{predicate:Reassessment}</span>
        <span class="ba-model__join"></span>
        <span class="ba-model__sub">Citation</span>
      </div>
    </div>
    <div class="ba-model__box ba-model__box--core ba-model__box--subject">
      <strong class="ba-model__title">OTU</strong>
      <span class="ba-model__hint">by convention only:</span>
      <span class="ba-model__item">species</span>
      <span class="ba-model__item">subspecies</span>
    </div>
    <div class="ba-model__hex">
      <div class="ba-model__hex-in">
        <strong class="ba-model__title">Asserted Distribution</strong>
        <span class="ba-model__hint">exactly one of:</span>
        <span class="ba-model__item">is present in</span>
        <span class="ba-model__item">is absent from</span>
      </div>
    </div>
    <div class="ba-model__box ba-model__box--core ba-model__box--object">
      <strong class="ba-model__title">Shape</strong>
      <span class="ba-model__hint">exactly one of:</span>
      <span class="ba-model__item">GeographicArea</span>
      <span class="ba-model__item">Gazetteer</span>
    </div>
    <div class="ba-model__box ba-model__box--pill ba-model__box--evidence">
      <strong class="ba-model__title">Citation</strong>
      <span class="ba-model__item">source, ideally with page number</span>
    </div>
    <span class="ba-model__link ba-model__link--tags">0 to many</span>
    <span class="ba-model__link ba-model__link--attributes">0 to many</span>
    <span class="ba-model__link ba-model__link--evidence">1 to many</span>
    <div class="ba-model__legend">{radial-annotator} added with the Radial annotator</div>
  </div>
</div>

## Adventive/Introduced populations
Tag the Asserted Distribution with {keyword:adventive}  
We can't add tags to individual citations, but it is sufficient if at least one of the cited sources for the species-area pair is making a statement on status.  
**Example:** *[Parascythopus intrusus](https://catalog.curculionoidea.org/#/otus/726839/overview)*

## Endemism
Adding statements on endemisms are a bit problematic: What if the species is later being discovered to occur elsewhere?  
However, it can be useful to add information on endemism. A viewer does not know if all asserted distributions were added. Is it only found on that island, or are there records from other areas not entered on TaxonWorks?  
Tagging the asserted distribution with {keyword:endemic} will communicate "All known distributions for this species have been added, it does not occur elsewhere".  
Use only in well-documented cases (only found on an very isolated island, only found in one mountain range in a well-surveyed region).  
**Example:** *[Caneorhinus biangulatus](https://catalog.curculionoidea.org/#/otus/715481/overview)*

## Absence/Correcting false claims
From the perspective of logic, it is not possible to prove the absence of a species in an area. The most likely reason to record a species as absent in an area would be: 

- **Source A** claims an asserted distribution
- **Source B** shows that the specimen cited in Source A were misidentified. Thus, the presence of the species in the area is refuted

We shouldn't ignore **Source A**, to ensure that no other curator will add it again, oblivious to the correction. Instead:

- The asserted distribution of **Source A** is getting a data attribute {predicate:reassessment}. In the "value" field, explain the situation and clearly state the source that is refuted: `Asserted distribution by Tanner (1943) is based on misidentified specimen of B. lunatoides`. This is important since an asserted distribution can carry multiple sources. Add the citation for on the data attribute.
- Add a second asserted distribution for the same species-area pair with the "is absent" box ticked and a citation for **Source B**.

**Example:** *[Bagous lunatus](https://catalog.curculionoidea.org/#/otus/1385470/overview)*

!!! info "Conventions"
    - {predicate:reassessment} can also be used if a source is just expressing doubt instead of refuting the claim.
<!--
TODO (Jakob): write this section. Remember to add a note about the France
problem — asserted distributions must always name either a specific French
overseas territory (Guadeloupe, Martinique, French Guiana, Réunion, Mayotte,
New Caledonia, French Polynesia, ...) or mainland European France. A bare,
unspecified Country-level "France" is ambiguous and needs to be corrected to
mainland France (or to the correct territory, if that's actually what was
meant).

Also note: this is only about the *Country*-type "France" (ISO FR). The
project also has TDWG Level 3/4 "France" regions (WGSRPD scheme) — those are
NOT ambiguous, since they exclude Corsica and every overseas
department/territory by design (each is its own separate TDWG unit). Don't
flag those. The helper below got this wrong until 2026-09-05: it matched on
name alone and flagged ~816 correct TDWG "France" records (e.g. Baromiamima
heydeni) alongside the single real Country-level case.
-->

---
## Data curation helper
The tool below fetches every asserted distribution in the project whose geographic area is the bare, unspecified Country-level "France" (not the TDWG "France" region, which is precise by design). **That is problematic, as "France" includes overseas territories such as French Guiana**. Click **Refresh from TaxonWorks** to load it; each row links straight to the "New/Edit Asserted Distribution" task where you can correct the geographic area.
A fixed record drops off on the next refresh.

<iframe src="/docs/assets/datacuration_helpers/asserted_distributions_france.html"
        title="Asserted distributions with unspecified France"
        data-theme-sync
        loading="lazy"
        style="width:100%;min-height:640px;border:1px solid var(--md-default-fg-color--lightest);border-radius:.4rem;"></iframe>

Prefer a standalone version? [Open the tool ↗](assets/datacuration_helpers/asserted_distributions_france.html){target="_blank" rel="noopener"}
