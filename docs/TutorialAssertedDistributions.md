---
title: Asserted Distributions
description:
icon: material/database-plus
---
!!! info "Conventions"
    - **We avoid adding asserted distributions to anything other than species/subspecies**. Asserted distributions on higher-level taxa are difficult to curate in case the taxon gets split.

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

We shouldn't ignore **Source A**, to ensure that no other curator will add it again, oblivious to the mistake. Instead:

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
