---
title: Learn to add a new species
description: Nullam urna elit, malesuada eget finibus ut, ac tortor.
icon: material/database-plus
---
Comprehensive Guide: [TaxonWorks Docs | Nomenclature](https://docs.taxonworks.org/guide/Manual/nomenclature.html)

# The "New Taxon Name" task
To add taxon names and synonymy, we use the "**New taxon name**" task.  
You can use this task not only to add a new taxon name, **you can also view or edit existing names** by entering search terms in the field in the top-right.  
By default, "autosave" is activated and everything you enter will be saved automatically. You get notified about saving by the "ping" noise.

## Adding the species name
Start by adding the species epithet in the "name" field.  
**Important:** You should enter the species name with the same grammatical ending as in its **original combination** (= basionym, or [protonym](https://docs.taxonworks.org/about/glossary.html#protonym) in TaxonWorks wording). TaxonWork will adjust the grammatical ending for each subsequent combination:  
A species that was described as _Cleonus obsoletefaciatus_ (_Cleonus_ is gramatically male) will automatically become "_obsoletefasciata_" when combined with the genus name _Asproparthenis_ (grammatically female).

**In the "Parent" field, you select the parent taxon where it is currently placed, where YOU want to place the taxon**. The original combination, as well as other subsequent combinations, will be added later! For species, the parent could be either a genus or a subgenus. Be as specific as possible.  
For synonyms, the parent is always the same as for the valid name.

<video controls autoplay loop muted>
  <source src="/assets/videos/NewTaxonName.webm" >
  Your browser does not support the video tag.
</video>
![Soft Validation in TaxonWorks](/assets/images/soft_validations.png){ align=right }
## Soft Validation
As you create the taxon name, a notification about "Soft Validation" will immediately pop up. It is informing you about missing entries or contradictions in what you entered. It's always good to pay attention to this.  
Most importantly, you have to **add a corresponding OTU to your new TaxonName**. Do this simply by clicking the green "Fix" button.

All other issues will be resolved by themselves as we continue to fill out the form.

Once the OTU has been added, all subsequent changes will be live-updated on [TaxonPages](https://catalog.curculionoidea.org/#/). It’s good practice to follow along to make sure everything appears correctly.

## Authorship
Start by adding the source for the original description. You can search for the source using parts of the author names, the year, but also parts of the title. If you can't find the source, [add it using the "New Source" task](https://docs.taxonworks.org/guide/Manual/Sources/#adding-a-source). After adding the source, add the page number(s).
When entering species names from a list, it's good practice to check the source to verify the original spelling of the name as well as the page number. If the source is lacking a DOI or Biodiversity Heritage Library (BHL) link, you should add it. To edit the source, you can quickly open it in the "New Source" task from the **radial navigator (the circle with the pointer, see video)**. Open the link in a new tab for convenience.  
The author of the source is not necessarily the author of the species name: In most cases, you can go to the "Person" tab and clone the author from the source. If the author is a different person, enter the name.

<video controls autoplay loop muted>
  <source src="/assets/videos/Author.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
Theoretically you could add author and year of the species name as text in the "**Verbatim**" tab. Don't do it: This won't link to the source for the original description, and the author name will not be linked to a person. This can also result in inconsistent spellings of the author name.

## Status and Relationships
The **"Status" block** is for the nomenclatural status of the name (e.g. unavailable). It's best to choose the right category directly from "Show all", to be as specific as possible. Add a citation through the **radial annotator (the circle with many facets, see video below)**.
<video controls autoplay loop muted>
  <source src="/assets/videos/Status_Relationship.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
The **"Relationship" block** is for the relationship (synonymy) with other names. Always go from the invalid name to the valid name: Enter nothing here if the name is valid. Instead, go to the invalid name, and add e.g. "junior subjective synonym".  
Both for Status and Relationship: You really should cite a source. If you know the source was the first one that revealed the status/synonymy, tick the box for "**Is original**"


**To be continued soon!**
