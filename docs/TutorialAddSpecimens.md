---
title: Learn to add specimens (and type material)
description: Where specimen data goes in TaxonWorks, how to add type specimens, and how to record types known only from literature.
icon: material/database-plus
---

Comprehensive Guide: [TaxonWorks Docs | Collection Objects](https://docs.taxonworks.org/guide/Manual/collectionobject.html)  
**Related tutorials**
- [Learn to add images](TutorialAddImages.md): attaching specimen photos and label images
- [Learn to add sources / literature](TutorialAddSources.md): creating the Source you will cite
- [Learn to add a new species](TutorialAddSpecies.md): its "Type" section covers type material entered from the **taxon name** side

## When to add specimen
Adding specimen is tedious. Often, there are faster/easier alternatives: A distribution record could be added as an asserted distribution, a biological association can be linked to the [OTU](./TutorialTaxonWorks.md#the-otu) instead of a **specimen**.

!!! info "It is always preferable to add specimen"
    - Specimen make a claim falsifiable: Someone can visit the collection and check if the specimen was correctly identified. A bare asserted distribution or host plant record cannot be falsified.
    - Specimen add credibility to a claim

## Citations
!!! info "Conventions"
    - When adding specimen from literature for biological associations, add the citation to the biological association, not the specimen

## Collection Object vs Field Occurrence
Use Field Occurrence if no physical specimen exists. It's basically the same as a collection object, but without catalog number and repository. There is a dedicated task to import Field Occurrences from iNaturalist.

---

## Which task to use

- **Comprehensive Specimen Digitization (CSD)**: the all-in-one form: Collection Object, Determinations, Collecting Event, Type Material and Biological Associations on one screen.
- **New Collection Object**: minimal / skeletal stub records for fast batch digitization, parsed later. Not encouraged to use
- **New Type Specimen** — shortcut for recording type material without the full CSD form. Not encouraged, there are less fields and as there is no "Event" form, you can't add a georeference.

## Images

See [Learn to add images](TutorialAddImages.md). In short: attach photos to the **Collection Object** (not the OTU); tick **"is data depiction"** for label images; if the image is from a publication, add a **Citation** ("Depicted in").

!!! info "Conventions"
    - When label images, tick the "is data depiction" box for those


**To be expanded.**
