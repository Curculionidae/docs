---
title: Learn to add images
description: Where to attach images in TaxonWorks so they appear on TaxonPages, how to label them, and how to tag them.
icon: material/image-plus
---

**Images** are uploaded once, but can be re-used for multiple **Depictions**. Depictions carry a caption and are attached to a data object: a specimen, an OTU, a collecting event or even a [biological association](BiologicalRelationships.md) (or many more).  
**Where you attach the image decides where it shows up on [TaxonPages](https://catalog.curculionoidea.org/#/)**, and some attachment points are never shown there at all (see table below).

## Image metadata
It is extremely important that all images are correctly licensed or cited. Use the radial annotator to **add at least one of these two**:  

- Attribution (needs to carry a license, year and either Creator, Editor, Owner or Copyright holder)
- Citation (add a source)

If someone allows you to upload their images on TaxonWorks, make sure to ask what license to use. Ideally, document the decision somewhere.

## Depiction metadata
- The depiction can get a "Label" and a "Caption". Ideally, fill out only "Caption".  

**What you do _not_ put into the label/caption:** the taxon name, authorship and **type status** shown next to a photo are read from the **OTU** or the **Collection Object's identification and type-material record**, not from the image. Keep names/type status on the specimen and OTU, not typed into the caption.

If in doubt: save the record and check TaxonPages to see if everything is looking good.

### Dealing with label images for specimens: "is data depiction"
Images of collection objects are used on TaxonPages to illustrate the taxon. A label image shouldnt illustrate a taxon. If an image shows **information about** the object rather than the object itself, mark it as "is data depiction". The depiction will be displayed on TaxonPages for the collection object, but not in the OTU gallery:  
In the depiction editor (radial annotator → **Depiction**, or the image task) there is a checkbox **"Is data depiction"** (`is_metadata_depiction`). Use it for:  

- photographs of **specimen labels**, determination labels, unit trays
- a photo of the **collection site** (alternatively, add those depictions to the event of the specimen. In that case DONT mark them as "is data depiction", as the event itself is depicted)

---

## 1. Where to attach images

| Attach the depiction to… | Shown in Gallery at TaxonPages | Use for |
|---|---|---|
| **Collection Object** (a specimen) | ✅ yes, on the page of the OTU the specimen is **identified as**, unless the depiction has "is data depiction" (for labels) | Photos of a pinned specimen, habitus of a voucher, genitalia etc, anything that is a collection object. **If you have label images, make sure to tick the box for "is data depiction"** |
| **Field Occurrence** (an observation record) | ✅ yes, same as Collection Object | Live specimen (but you could use collection object if you also collected them) |
| **Event** (of either CollectionObject or FieldOccurrence) | ❌ , but **will be displayed in the specimen popup** (if we have a lot of data like this, we can add a habitat images panel) | Images of the habitat or other field photos that illustrate the collecting event rather than the specimen |
| **Biological Association** | ❌ no (but shown in Biological Associations panel) | Images that illustrate an interaction, like images of feeding damage |
| **OTU** | ✅ yes, directly | **Avoid if possible:** It is preferable to add images to specimen, in order to provide as much context as possible. Even minimal records are useful (e.g. only the collection where the specimen is placed is known, only the name of the person who identified it is known). If you lack time, provide as much context as possible in the caption ("photographed at Natural History Museum, London"). **Use the OTU for anything that illustrates the *taxon* rather than one specimen**, like a drawing or an image without further information. **Worst case:** If you add several images for the same collection object to the OTU instead of a collection object, the association between those images is lost.|

In theory, you can add depictions to many more data objects. Usually, we haven't implemented a way to display those on TaxonPages. 

### ⚠️ No need to attach specimen photos to the Collection Object *and* the OTU

If you attach **only** to the Collection Object, the image still reaches the taxon page — TaxonPages walks *specimen → current identification → OTU*

---

## Quick checklist for a specimen photo

- [ ] Attach the depiction to the most specific instance (ideally a collection object or an event)
- [ ] Depiction: tick "is data depiction" if applicable
- [ ] Add an **Attribution** (creator + licence) or at least a source
- [ ] Add a **Caption** if the image needs explaining. A specimen image usually carries its own explanation via the collection object (e.g. type status is attached to it already, no need to write text)
- [ ] If it comes from a publication: add a **Citation** to that Source ("Depicted in").
- [ ] Check the OTU page on [TaxonPages](https://catalog.curculionoidea.org/#/) to check everything works as expected. Changes are live.
