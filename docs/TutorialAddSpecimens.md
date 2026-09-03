---
title: Learn to add specimens (and type material)
description: Where specimen data goes in TaxonWorks, how to add type specimens, and how to record types known only from literature.
icon: material/database-plus
---

Comprehensive Guide: [TaxonWorks Docs | Collection Objects](https://docs.taxonworks.org/guide/Manual/collectionobject.html)

A **specimen** in TaxonWorks is a **Collection Object**. This page covers where specimen data goes and how to add **type specimens**, including those known only from a publication.

**Related tutorials**

- [Learn to add images](TutorialAddImages.md) — attaching specimen photos and label images
- [Learn to add sources / literature](TutorialAddSources.md) — creating the Source you will cite
- [Learn to add a new species](TutorialAddSpecies.md) — its "Type" section covers type material entered from the **taxon name** side

---

## Which task to use

- **Comprehensive Specimen Digitization (CSD)** — the all-in-one form: Collection Object, Determinations, Collecting Event, Type Material and Biological Associations on one screen.
- **New Collection Object** — minimal / skeletal stub records for fast batch digitization, parsed later.
- **New Type Specimen** — shortcut for recording type material without the full CSD form.

!!! question "Project decision — to clarify"
    - Which task is our default?
    - Do we digitize full specimens, or mainly type material plus selected vouchers?

## Collection Object

- **Catalog number**: Namespace + identifier. Turn on auto-increment for a run of specimens.
- **Repository**: the collection / museum that physically holds the specimen.
- **Preparation**: pinned, slide, alcohol… (new types via the Data tab).
- **Buffered**: verbatim label text, not to be edited after entry.

!!! question "Project decision — to clarify"
    - Which Namespace(s) do we use for catalog numbers?
    - Do literature-only specimens get a catalog number at all? (see below)
    - Repository naming conventions.

## Determination (identification)

- **OTU / taxon**: what the specimen is identified as. This link is what puts the specimen (and its images) on a page on [TaxonPages](https://catalog.curculionoidea.org/#/).
- **Determiner** and **date** (YYYY-MM-DD).

## Collecting Event (where / when / who)

- Paste raw label data into the **Verbatim** columns (Locality, Latitude, Longitude, Date, Collectors, Habitat, Method…).
- Use **Parse** to atomize into structured fields; add a **Geographic area** and/or a **Georeference** for it to appear on a map.
- **Everything under Verbatim stays verbatim** — coordinates typed there will not show on a map.

## Type Material

In the **Type Material** block, pick the designation, then attach the specimen:

- **Holotype** — the single name-bearing specimen. Most new species have one.
- **Paratype(s)** — further specimens cited in the original description.
- **Syntype(s)** — use singular **Syntype** for one particular syntype, plural **Syntypes** for a whole series entered as one record.
- **Lectotype / Neotype** — later designations; cite the paper that designates them.

Always add the **Source** and the **page number(s)** where the type is designated.

---

## Adding specimens from literature

You can record a type (or any specimen) **without ever seeing it**, straight from a publication — a protologue, a revision or a catalogue.

1. In CSD (or New Type Specimen), pick the type designation, then click **New** to create a fresh Collection Object.
2. Paste the type / label data from the paper into the **Verbatim** collecting-event field (and **Buffered** for the full label transcription).
3. **Source**: cite the publication you took the data from, with page number(s). Cite the original description if that is where the type is designated; otherwise cite the revision / catalogue that reports it. See [Learn to add sources](TutorialAddSources.md).
4. **Repository**: enter one **only if the publication states** where the specimen is deposited. Do not guess ("author X, therefore museum Y").
5. **Collecting event**: put the type locality into **Locality** under Verbatim. Optionally add a country / geographic area or a Georeference.
6. Leave fields you don't have empty. A minimal record (name + type status + source) is still useful.

!!! info "Project decision — to clarify"
    - Do we create a Collection Object for literature-only paratypes / syntypes, or only for the primary type?
    - Catalog number / Namespace for literature-only specimens, or none?
    - How do we flag "not examined, from literature"? (tag? note? confidence?)
    - When is type material entered from the **taxon name** task instead of here?

---

## Images

See [Learn to add images](TutorialAddImages.md). In short: attach photos to the **Collection Object** (not the OTU); tick **"is data depiction"** for label images; if the image is from a publication, add a **Citation** ("Depicted in").

## Quick checklist

- [ ] Right task (default: CSD)
- [ ] Determination → OTU, so the record reaches the taxon page
- [ ] Type designation set (if it is a type)
- [ ] **Source + page number(s)**
- [ ] Repository only if known / stated
- [ ] Collecting event: verbatim first, parse what you can
- [ ] Check the OTU page on [TaxonPages](https://catalog.curculionoidea.org/#/) — changes are live

**To be expanded.**
