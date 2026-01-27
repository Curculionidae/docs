---
title: About the Tutorial
#description: Nullam urna elit, malesuada eget finibus ut, ac tortor.
icon: material/information-outline
---
This tutorial is following the workflow that is used to move the **[World Catalogue of the Curculionidae: Lixinae: Cleonini](https://weevil.myspecies.info/content/world-catalogue-curculionidae-lixinae-cleonini)** by Massimo Meregalli into TaxonWorks.  

The Cleonini Catalogue was previously published as a website (html), but each genus was also summarized in a PDF file identical to the respective webpage.  
Therefore, the data was arranged in a verbatim format optimized for human readability.
<figure markdown="span">
  ![Image title](/assets/images/MeregalliCleonini.png)
  <figcaption>Entry for a genus in the original Cleonini Catalogue. Below, not covered by the screenshot, are the full references for each citation.</figcaption>
</figure>
In this image, we see a lot of information that needs to be transferred into TaxonWorks:

 - **Names** for genus, subgenus and species, including synonyms. Synonyms can have a status e.g. as homonym
 - Citation for **original description**, with page number
 - **Images**, usually depicting a type specimen
 - **Original genus** for names that where described in a different genus
 - **Type locality**, sometimes in verbatim ("Steppes des Kirguises")
 - Asserted **distribution**: List of countries/provinces from which the species was recorded, with citation. 
 - **Type seen** by Massimo Meregalli ("!")
 - Verbatim text ("**Remarks**: A lectotype [...]")

All of this is extremely valuable information and easily represented in the data model of TaxonWorks. On top, we will add the following whenever possible:

 - host plants
 - subsequent combinations (combinations between genus and species that where used after the original description but before the one that is currently used), with citation
 - identification keys
 - much more possible: DNA, morphological traits, etc...

## Can I import an existing dataset instead of doing everything by hand?
Yes, definitely! But your dataset needs to have the right format. One strength of TaxonWorks is that you can export your data in a structured format, making it easier to move it to another application.
