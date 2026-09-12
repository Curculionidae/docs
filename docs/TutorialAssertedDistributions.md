---
title: Asserted Distributions
description:
icon: material/database-plus
---
!!! info "Conventions"
    - **We avoid adding asserted distributions to anything other than species/subspecies**. Asserted distributions on higher-level taxa are difficult to curate in case the taxon gets split.

## Adventive/Introduced populations
Tag the Asserted Distribution with {keyword:adventive}  
We can't add tags to individual citations, but it is sufficient if at least one of the cited sources for the species-area pair is making a statement on adventiveness

## Endemic species


## Absence
From the perspective of logic, it is not possible to prove the absence of a species in an area. The most likely reason to record a species as absent in an area would be:  
- Source A claims an asserted distribution
- Source B shows that the specimen cited in Source A were misidentified. Thus, the presence of the species in the area

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
