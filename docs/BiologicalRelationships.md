# Biological Relationships

**Problems/Limitations:** More work would be needed to include the biology of exceptional groups such as Scolytinae/Platypodinae/Cossoninae, pollination, interactions with fungi/other animals, or the biology of those species that are saproxylic. In saproxylic species, the problem would be that the identity of the "host" is often unclear, the biology of those weevils cannot easily be understood as a biological relationship between two species, its more a biological relationship between a weevil and a micro-habitat.

**To do:** Add Properties for "asserted" and "direct evidence" to have a clearer separation between statements that are assertive vs reports that are backed by an observation. Also a separation between statements about whole species vs statements about single observation would make sense.

---

## Preface

### Biological Relationship vs Biological Association?

In TaxonWorks, **Biological Relationships are definitions of biological interaction** that can take place between two objects. In the context of TaxonWorks, Biological Relationships provide a name for the relationship, and may also define properties that further classify the object on each side of the relationship.

**Biological associations** are instances that utilize BiologicalRelationship:

- Biological associations involve the BiologicalRelationship plus **any two** of **1)** species (OTU), **2)** "specimens" (FieldOccurrence or CollectionObject) or **3)** AnatomicalParts (life stage or body part, e.g. "`larva of Adosomus`). So for example you could have a `CollectionObject of Adosomus roridus` that was `reared from` an AnatomicalPart `stem of Achillea`".
- They can be further annotated e.g. with an asserted distribution or images.

#### Example

Masur & Wartmann (2025) reported from Baden-Württemberg that they observed larvae of *Adosomus roridus* feeding in the roots of *Achillea millefolium*.

This can be modeled as a biological association between *Adosomus roridus* and *Achillea millefolium*, where:

- *Adosomus roridus* participates in the interaction as the AnatomicalPart [larva], with the BiologicalRelationship [consumer in a trophic relationship].
- *Achillea millefolium* participates in the interaction as AnatomicalPart [root]
- The interaction between both was observed in a locality (can be modeled as AssertedDistrution Baden-Württemberg, alternatively using CollectionObject or FieldOccurrence with a  or a more precise place)
- The whole of the data has a citation: Masur & Wartmann (2005)

All of these aspects can be represented in TaxonWorks. The properties may appear redundant in some cases, but they are important as they assure semantic meaning and allow to filter the dataset. Another relationship can be defined for adult feeding of the weevils on their host plant, which was also reported in the same paper.

In TaxonWorks, the relationship (= e.g. larva feeding in roots of) cannot be composed dynamically by mixing a custom range of properties for each particular instance (= e.g. larva of *Adosomus* on *Achillea*) of the relationship. Instead, a **relationship** is defined once for reuse across many interaction instances, with fixed participant role properties.

<table class="bio-rel">
<thead>
<tr>
  <th colspan="3" class="subject">Partner 1</th>
  <th colspan="3" class="object">Partner 2</th>
</tr>
<tr>
  <th class="subject">Taxon</th>
  <th class="subject">Interaction properties</th>
  <th class="subject">Interaction name</th>
  <th class="object">Interaction inverted name</th>
  <th class="object">Interaction properties</th>
  <th class="object">Taxon</th>
</tr>
</thead>
<tbody>
<tr>
  <td><em>Adosomus roridus</em></td>
  <td>[larva], [endophagous feeding], [consumer in trophic relationship]</td>
  <td>endophagous larva feeds in roots of</td>
  <td>roots are fed upon by endophagous larva of</td>
  <td>[root], [resource in trophic relationship]</td>
  <td><em>Achillea millefolium</em></td>
</tr>
<tr>
  <td colspan="6" class="note"><strong>Asserted distribution:</strong> Baden-Württemberg (if the relationship is used for specimens instead of species, the locality can be exact coordinates)</td>
</tr>
<tr>
  <td colspan="6" class="note"><strong>Citation:</strong> Masur &amp; Wartmann 2025</td>
</tr>
</tbody>
</table>

---

## Theory

- Our knowledge about the biology of weevils is limited and will always stay limited.
- Therefore, any attempt to catalog weevil-hostplant interactions should focus on capturing information on published statements or direct observations: Rather than trying to capture biological reality itself, we have to focus on *what was actually observed*, ("a specimen was reared from a seedpod of plant xy at place xy, according to source xy") rather than "the species is developing in seed pods of plant xy")

### Scope: What kind of information do we want to store?

- When putting data into a structured format, some information is always lost. But the database will also be **an index to literature** and other evidence. Not all details are captured within TaxonWorks, but the original source can always be consulted for a more detailed, but only human-readable description.
- We need to be able to extract the most relevant information from the dataset.
    - Asserted statements from literature (sometimes not directly backed by evidence). Asserted statements from literature can have a lot of detail, or they just link the taxon names of the two species.
    - Direct observation (either from literature or from field occurrence/collection object)
        - Observation data: needs different lines of evidence. Was the beetle sitting on the plant or was it feeding?
- Images of interactions: feeding marks or galls can be distinctive. We would like to have a collection of images that illustrate the relationship

**What's most important?:**

- Was the plant just visited, or was there feeding by adults, or was there feeding by larvae?
- What plant part are the larvae feeding on? (problem: larvae are usually not identified or collected. Evidence is often by other means, such as rearing, or finding adult specimen in pupal chambers within the plant)
- Is the relationship characterized by structures like galls or leaf rolls?
- (maybe) What plant part are the adults sitting on?

**Biological assumptions:**

- Interactions between larvae and plants are more relevant than interactions by adults: They are more likely to have evolutionary significance, and the presence of suitable larval hosts is required for reproduction, having implications for conservation, crop protection and species distribution.

### Data structure

The properties could be interlinked as part of an ontology. This would make some properties redundant for some relationships (e.g. [resource for larval feeding] is a subset of [resource in a trophic relationship]). But it's better to store all properties to make the dataset more self-contained.

---

## List of Properties

**Insect life stages:**

- **imago** (insect life stage: adult)
- **larva** (insect life stage: larva)

**Plant anatomical parts:**

- **roots** (plant anatomical part: referring to the root system in general)
- **root collar** (plant anatomical part: transitional zone between roots and stem)
- **storage organ** (general term for bulbs, tubers, rhizomes etc.)
- **stem** (plant anatomical part: stem)
- **leaf** (plant anatomical part: leaf)
- **bud, unspecified** (plant anatomical part: bud, unspecified)
- **bud, vegetative** (plant anatomical part: bud of vegetative growth, not a flower bud)
- **bud, flower** (plant anatomical part: flower bud)
- **flower** (plant anatomical part: flower of a plant/inflorescence)
- **fruit** (plant anatomical part: fruit)
- **Plant, part unspecified** (plant anatomical part: unspecified)

**Feeding modes:**

- **exophagous** (feeding while dwelling outside of the trophic resource)
- **endophagous** (feeding while dwelling inside of the trophic resource)

**Ecology:**

- **consumer in trophic relationship** (e.g. a weevil that is feeding on something)
- **resource in a trophic relationship** (e.g. a plant that is consumed by a weevil)
- **consumer in saprophagous trophic relationship**
- **resource in saprophagous trophic relationship**
- **resource for larval feeding** (has special importance because larvae are often more specialized than adults)
- **galler** (consumer in a trophic relationship involving a gall, always to be used together with [consumer in a trophic relationship]. This is referring to the organism found in the gall, not necessarily the one that has formed the gall)
- **gall host** (resource in a trophic relationship involving a gall, always to be used together with [resource in trophic relationship]. This is referring to the organism that is bearing a gall.)
- **leaf roller** (consumer in a trophic relationship involving a leaf roll, always to be used together with [consumer in a trophic relationship]. This is referring to the organism found in the leaf roll, not necessarily the one that has formed the leaf roll)
- **leaf roller host** (resource in a trophic relationship involving a leaf roll, always to be used together with [resource in trophic relationship] and [leaf]. This is referring to the organism that is bearing a leaf roll.)
- **inquiline** (not necessarily consumer in a trophic relationship)
- **inquiline host** (not necessarily resource in a trophic relationship)

**Economy:**

- **agricultural pest** (insect that has been reported to be an agricultural pest)

---

## List of Biological Relationships

### Format explanation

<!-- Editor note: Use the /// bio-rel shorthand for all tables in this section.
     See Readme.md → bio-rel table syntax for details. -->

```bio-rel
Relationship name | Inverted relationship name
Definition of the relationship
```

### First set, focus on lines of evidence

```bio-rel
undefined relationship with | undefined relationship with
Definition: None (no information given)
```

```bio-rel
feeding observed in the wild on | fed upon in the wild by
Used if feeding was observed in wild by any life stage of an organism. Use this one too, if the specimen was later collected since “feeding in wild” is the more valuable information.
```

```bio-rel
feeding observed in experimental setup on | fed upon in experimental setup by
A specimen has been observed feeding on a plant in an experimental setup (for example in a petri dish).
```

```bio-rel
reared from | yielded by rearing
Used if the complete life cycle of a weevil was observed (either in wild or in an experimental setup)
```

### Second set, focus on biology

```bio-rel
inquiline of | host for inquiline
[inquiline] | [inquiline host]
Inquilinism without defining life stages or plant organs. Can also be used to describe a relationship between weevils and ants, or between <em>Hormops</em> and squirrels. See also "larva is inquiline of", which is more suitable for inquilines in galls.
```

### Third set, focus on larval biology

```bio-rel
larva feeds on | larval host for
[larva] [consumer in a trophic relationship] | [plant, part unspecified] [resource in a trophic relationship] [resource for larval feeding]
This is a relationship that can be used for unspecified larval relationships. The relationship should only be used if evidence for larval feeding is presented by the source! Otherwise, use something like "asserted relationship".
```

```bio-rel
larva is inquiline of | host for inquiline larva
[larva] [inquiline] | [inquiline host]
This will often try to represent tripartite relationships, usually between two insects and a plant. TaxonWorks does not support that directly. I suggest making two entries, one between the inquiline and its insect host (using this relationship), and one with the plant (using another relationship, such as one of the larval galler relationships).
```

```bio-rel
larva in leaf roll on | has leaf roll with larvae of
[larva] [leaf roller] [consumer in trophic relationship] | [leaf] [leaf roller host] [resource in a trophic relationship] [resource for larval feeding]
This relationship is used for the leaf rolls of Attelabidae.
```

### Fourth set, larval development for each plant part

The following relationships have to be realized for all 11 plant anatomical parts, resulting in a total of 33 unique biological relationships. Replace **XXX** with a plant anatomical part from the List of Properties.

```bio-rel
exophagous larva feeds on XXX of | XXX is fed upon by exophagous larva of
[larva] [consumer in trophic relationship] [exophagous] | [XXX] [resource in a trophic relationship] [resource for larval feeding]
Vagrant larvae feeding on XXX (they are not dwelling in the resource). (only use if evidence for larval feeding is given)
```

```bio-rel
endophagous larva feeds in XXX of | XXX is inhabited by endophagous larva of
[larva] [consumer in trophic relationship] [endophagous] | [XXX] [resource in a trophic relationship] [resource for larval feeding]
Larvae are dwelling within XXX (usually boring within the resource). (only use if evidence for larval feeding is given)
```

```bio-rel
larva is galler on XXX of | XXX is gall location for larva of
[larva] [consumer in trophic relationship] [galler] | [XXX] [resource in a trophic relationship] [gall host] [resource for larval feeding]
Larvae are inducing a gall on XXX of the resource. (only use if evidence for larval feeding is given)
```

---

## Decision Chart

[View decision chart (Google Drive)](https://drive.google.com/file/d/1wH2D9EwOsoI-XfKKipNpkV4TOxbqBsV-/view?usp=sharing)

An attempt to sort relationships according to "asserted", "asserted or observational" and "observational":
[View sorting chart (Google Drive)](https://drive.google.com/file/d/1zf3lQmlWib-aO218YkNnpL579aAiPRW8/view?usp=sharing)

---

## Preview: TaxonPages

An example can be seen on TaxonPages:

- [*Adosomus roridus* (weevil, with list of plants)](https://catalog.curculionoidea.org/#/otus/732686/overview)
- [*Achillea millefolium* (plant, with list of weevils)](https://catalog.curculionoidea.org/#/otus/735489/overview)

TaxonPages, which is a static page to display data via the TaxonWorks API, has currently some shortcomings in how it displays Biological relationships:

- No search bar for plants
- Asserted distribution of a biological relationship is not provided (ideas: as text within the table, or on the map for the species distribution in a separate color)
- Citation for the relationship is given as short reference only, without the option to open it to see the full record with clickable links/DOI
- Under certain circumstances, plants can inherit the distribution of their insect associates
