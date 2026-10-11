---
title: Specimens and Type Material
description: Where specimen data goes in TaxonWorks, how to add type specimens, and how to record types known only from literature.
icon: material/bug
---

Comprehensive Guide: [TaxonWorks Docs | Collection Objects](https://docs.taxonworks.org/guide/Manual/collectionobject.html)  
**Related tutorials**
- [Learn to add images](TutorialAddImages.md): attaching specimen photos and label images
- [Learn to add sources / literature](TutorialAddSources.md): creating the Source you will cite
- [Learn to add a new species](TutorialAddSpecies.md): its "Type" section covers type material entered from the **taxon name** side

!!! warning "Determination should be added even for types"
    Intuitively, you wouldn't add a taxon determination to a specimen that already has a type status. However, this can lead to problems on TaxonPages (specimen not showing up on the map). I tried to make the map as flexible as possible about this, but specimen without determination and geographicArea instead of geogreference are still invisible for the map. Clicking the "fix" button in soft validation is sufficient to add a determation automatically.

## Data Model
A specimen is a **Collection Object**, or a **Field Occurrence** if nothing was collected. Everything else is attached to the specimen: what it was identified as, where and when it was found, which name it is a type of, and what plant it was found on. Those records carry things themselves: a Collecting Event has its Georeference and habitat images, all of them can have citations, etc.
<div class="ba-model ba-model--specimen">
  <div class="ba-model__stage">
    <svg class="ba-model__edges" viewBox="0 0 1920 1080" aria-hidden="true">
      <path d="M639 190 C639 245 800 235 800 290"/>
      <path d="M960 190 L960 290"/>
      <path d="M1281 190 C1281 245 1120 235 1120 290"/>
      <path class="ba-model__edge--main" d="M460 420 L620 420"/>
      <path class="ba-model__edge--main" d="M460 655 L620 655"/>
      <path class="ba-model__edge--main" d="M1300 490 L1460 490"/>
      <path class="ba-model__edge--main" d="M960 690 L960 790"/>
    </svg>
    <div class="ba-model__box ba-model__box--core ba-model__box--sp-specimen">
      <strong class="ba-model__title">Collection Object</strong>
      <span class="ba-model__item">catalog number</span>
      <span class="ba-model__item">repository</span>
      <span class="ba-model__item">preparation type &middot; count</span>
      <div class="ba-model__row"><span class="ba-model__join"></span><span class="ba-model__sub">Citation</span><span class="ba-model__hint">optional</span></div>
      <div class="ba-model__aside">
        <strong>or Field Occurrence</strong>
        <span class="ba-model__hint">no physical specimen: no catalog number, repository or type material</span>
      </div>
    </div>
    <div class="ba-model__box ba-model__box--note ba-model__box--sp-tags">
      <strong class="ba-model__title">{radial-annotator} Tags</strong>
      <div class="ba-model__chips">
        <span>{keyword:Adventive}</span>
      </div>
    </div>
    <div class="ba-model__box ba-model__box--note ba-model__box--sp-attributes">
      <strong class="ba-model__title">{radial-annotator} Data attributes</strong>
      <div class="ba-model__chips">
        <span>{predicate:Microhabitat}</span>
      </div>
      <span class="ba-model__hint ba-model__hint--tight">on a plant: then it goes to the biological association</span>
    </div>
    <div class="ba-model__box ba-model__box--note ba-model__box--sp-depictions">
      <strong class="ba-model__title">{radial-annotator} Depictions</strong>
      <span class="ba-model__item">specimen photos</span>
    </div>
    <div class="ba-model__box ba-model__box--rec ba-model__box--core ba-model__box--sp-determination">
      <strong class="ba-model__title">Determination</strong>
      <span class="ba-model__pick">OTU</span>
      <span class="ba-model__item">determiner &middot; date</span>
      <div class="ba-model__row"><span class="ba-model__join"></span><span class="ba-model__sub">Citation</span><span class="ba-model__hint">optional</span></div>
      <div class="ba-model__aside">
        <span class="ba-model__hint">add even for type specimen,<br>can be blank except for taxon name</span>
      </div>
    </div>
    <div class="ba-model__box ba-model__box--rec ba-model__box--core ba-model__box--sp-type">
      <strong class="ba-model__title">Type Material</strong>
      <span class="ba-model__hint">exactly one type status, e.g.:</span>
      <span class="ba-model__item">holotype &middot; lectotype</span>
      <span class="ba-model__item">paratype &middot; syntypes</span>
      <span class="ba-model__pick">of one species name</span>
      <div class="ba-model__row"><span class="ba-model__join"></span><span class="ba-model__sub">Citation</span><span class="ba-model__hint">optional</span></div>
      <div class="ba-model__aside">
        <span class="ba-model__hint">Collection Object only</span>
      </div>
    </div>
    <div class="ba-model__box ba-model__box--rec ba-model__box--core ba-model__box--sp-event">
      <strong class="ba-model__title">Collecting Event</strong>
      <span class="ba-model__hint">shared/reused by all specimens of one sample</span>
      <span class="ba-model__item">collectors &middot; date</span>
      <span class="ba-model__item">verbatim label &middot; locality</span>
      <span class="ba-model__item">GeographicArea</span>
      <div class="ba-model__nest">
        <strong class="ba-model__title">Georeference</strong>
        <span class="ba-model__item">coordinates</span>
        <span class="ba-model__item">uncertainty radius</span>
        <span class="ba-model__hint">0 or 1</span>
      </div>
      <div class="ba-model__nest">
        <strong class="ba-model__title">{radial-annotator} Depictions</strong>
        <span class="ba-model__item">habitat images</span>
        <span class="ba-model__hint">0 to many</span>
      </div>
    </div>
    <div class="ba-model__box ba-model__box--rec ba-model__box--core ba-model__box--sp-association">
      <strong class="ba-model__title">Biological Association</strong>
      <span class="ba-model__item">with an OTU, another Collection Object or Field Occurrence</span>
      <div class="ba-model__chips"><span>{radial-annotator} {predicate:Microhabitat}</span><span class="ba-model__extra"><strong>Depictions</strong> <em>e.g. feeding marks</em></span></div>
      <span class="ba-model__hint">see <a href="../BiologicalRelationships/">Biological Relationships</a></span>
    </div>
    <span class="ba-model__link ba-model__link--sp-determination">0 to many</span>
    <span class="ba-model__link ba-model__link--sp-type">0 to many</span>
    <span class="ba-model__link ba-model__link--sp-event">0 or 1</span>
    <span class="ba-model__link ba-model__link--sp-association">0 to many</span>
    <div class="ba-model__legend">{radial-annotator} added with the Radial annotator, 0 to many each</div>
  </div>
</div>

!!! info "Conventions"
    - Tag a specimen {keyword:Adventive} only if it is a single displaced specimen. It is not necessary to tag specimens from an introduced population individually: there, the tag goes on the [Asserted Distribution](TutorialAssertedDistributions.md#adventiveintroduced-populations).
    - The data attribute {predicate:Microhabitat} can be added to the specimen. If it describes how the beetle was sitting on a plant (e.g. "sitting in leaf axil"), it should preferably go on the Biological Association with that plant. See [Microhabitats](BiologicalRelationships.md#microhabitats).

## When to add specimens
Adding specimens is tedious. Often, there are faster/easier alternatives: A distribution record could be added as an asserted distribution, a biological association can be linked to the [OTU](./TutorialTaxonWorks.md#the-otu) instead of a **specimen**.

!!! info "It is always preferable to add specimens"
    - Specimens make a claim falsifiable: Someone can visit the collection and check if the specimen was correctly identified. A bare asserted distribution or host plant record cannot be falsified.
    - Specimens add credibility to a claim

## Citations
!!! info "Conventions"
    - When entering specimens from literature for biological associations, add the citation to the biological association, not the specimen

## Collection Object vs Field Occurrence
Use Field Occurrence if no physical specimen exists. It's basically the same as a collection object, but without catalog number and repository. There is a dedicated task to import Field Occurrences from iNaturalist.

---

## Which task to use

- **Comprehensive Specimen Digitization (CSD)**: the all-in-one form: Collection Object, Determinations, Collecting Event, Type Material and Biological Associations on one screen.
- **New Collection Object**: minimal / skeletal stub records for fast batch digitization, parsed later. Not encouraged to use
- **New Type Specimen**: shortcut for recording type material without the full CSD form. Not encouraged, there are less fields and as there is no "Event" form, you can't add a georeference.

## Images

See [Learn to add images](TutorialAddImages.md). In short: attach photos to the **Collection Object** (not the OTU); tick **"is data depiction"** for label images; if the image is from a publication, add a **Citation** ("Depicted in").

!!! info "Conventions"
    - For label images, tick the "is data depiction" box. This will prevent them from showing up for higher taxa on TaxonPages


**To be expanded.**
