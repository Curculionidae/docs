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

!!! warning "Taxon Determinations"
    Intuitively, you wouldn't add a taxon determination to a specimen that already has a type status. However, this can lead to problems on TaxonPages (specimen not showing up on the map). I tried to make the map as flexible as possible about this, but specimen without determination and geographicArea instead of geogreference are still invisible for the map. Clicking the "fix" button in soft validation is sufficient to add a determation automatically.

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
