---
title: Curating Legacy Plant OTUs
description:
icon: material/database-plus
---
# About
Our database contains thousands of plants as OTU without a taxon name associated. Thus, they have no taxonomical hierarchy and no TaxonPage.  
OTUs need to fullfill the following requirements:

- **Taxon name assigned** (otherwise they will not have TaxonPages and no taxonomical hierarchy that is used to search, filter and summarize data)
- **OTU assigned**
- **OTU name needs to be empty** or the search bar at TaxonPages will not find the plant

## How to assign a taxon name
You can do it as usual using the "**New taxon name**" task, but it is probably quicker to use "**Assign taxon name to OTU**". This task can import taxon names from Catalogue of Life, importing them together with their parent taxonomical hierarchy. Very convenient!  
From the list (alphabetical, several pages), click the magnifying glass to start searching for a taxon name. The search will go through three stages: TaxonWorks, TaxonWorks (fuzzy matching), Catalogue of Life.  
The name will be imported along with names that are part of parent hierarchy.  
**Important: You have to delete the OTU name (keeping only the taxon name) from the OTU, otherwise it will not be found by the search bar on TaxonPages!** 
<video controls autoplay loop muted>
  <source src="/docs/assets/videos/TutorialCuratePlants/AssignTaxonNameToOTU.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
(In the video, I am opening the "Browse OTU" page for Populus tremula by clicking the OTU name with my mouse wheel)

## Adding OTU to the batch-imported parent taxon names
If you import something like *Populus tremula*, its parent names like genus *Populus* etc will also be imported if not already present. Those will be **Taxon names without OTU**. Damn! Luckily it is only a few clicks to add OTUs to all valid taxon names without an OTU. They will be fine right away, no need to remove an OTU name.
<video controls autoplay loop muted>
  <source src="/docs/assets/videos/TutorialCuratePlants/SynchronizeTaxonNames.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

## Why do I need to remove the OTU name?
If both the "Name" field and the "Taxon name" field are filled out for an OTU, this will exclude it from the Search Bar results on TaxonPages.  
![Don't do it like this!](assets/images/TutorialCuratePlants/ChenopodiumWrong.png)
![Do it like this!](assets/images/TutorialCuratePlants/ChenopodiumRight.png)



### When do I use an OTU name?
Sometimes you may need a name for a taxon that is not its scientific name. Think "Chenopodium sp." or "Chenopodium spp." or "Thin-leaved species of Salix", all of which could be useful for biological associations.  
You can create as many OTU as you like for the same taxon name. Just make sure only one of them has the name field empty.  
Avoid OTU without taxon name or taxon name without OTU, those do make problems!
![Do it like this!](assets/images/TutorialCuratePlants/ChenopodiumSP.png)
![Do it like this!](assets/images/TutorialCuratePlants/OTUNames.png)







