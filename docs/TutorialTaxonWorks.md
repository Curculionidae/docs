---
title: Understanding TaxonWorks
#description: Nullam urna elit, malesuada eget finibus ut, ac tortor.
icon: lucide/graduation-cap
---
## Why TaxonWorks?
Working in TaxonWorks creates a highly interlinked data network, that can be queried for almost everything. EVERYTHING you put into TaxonWorks can and should be backed by a citation. 

More information can be found in [About the Tutorial](TutorialAbout.md).
## Cards: Tasks and Data
The tools of TaxonWorks are organized in cards: Task cards and Data cards.  
You can scroll through cards using the arrow buttons for right and left. You can also search for text (name and description) or sort them by category.  
In this video, I'm searching for the "**New Taxon Name**" Task and add it as a favorite for quick access.

<video controls autoplay loop muted >
  <source src="https://weevil-see.com/docs/assets/videos/TaxonWorksInterface.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

Don't be overwhelmed by the large number of cards. Most of them are the solution for very specific problems, and you'll probably need to use only a handful of them.

## The OTU
This is THE most important concept to understand about TaxonWorks: Taxon names and the "taxon itself" are stored seperately. It makes a lot of sense to do so, as **a taxon (called "Operational Taxonomic Unit, OTU") is not the same as its name.**

<div style="position:relative;padding-top:56.25%;">
  <iframe
    src="https://www.youtube.com/embed/SlaEhyLHkwk?start=270"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;">
  </iframe>
</div>
What you need to remember about Taxon Names and OTUs:  
**Never create an OTU without a taxon name, never create a taxon name withouth an OTU.** The database can contain bare OTUs without a taxon name and vice versa, mainly from imports. An OTU without a taxon name is not placed in the taxonomic tree, and a taxon name without an OTU cannot be linked to anything biological, it will only exist as a name.

## Data Structure
Don't think about the data structure as a table, think about it as a network or graph. Keep in mind, not only valid species name have an OTU, subjective synonyms keep their own OTU but the data gets summarized for both of them. Therefore, you can add information from literature to synonymized names. Who knows, maybe the name gets resurrected in the future?  
When adding information, imagine attaching new nodes to the network. **Don't worry, this looks very complicated but in TaxonWorks it isnt!**

<figure markdown="span">
<figcaption>Information, such as distribution, can be added to the OTU of a synonymized name. This allows to retain information for synonymized names, but TaxonWork will summarize everything for you.
This figure is probably very inaccurate, it's just to give an idea.</figcaption>
  ![Image title](/assets/images/datastructure_r.png)
</figure>
<!-- This is the source code for the flowchart, in case you want to adjust it render it on https://mermaid.ai/
```mermaid
---
config:
  theme: redux
---
flowchart TB
    TN1["Taxon name:<br> ___Otiorhynchus dieckmanni___"] <--> OTU1("OTU:<br> ___Otiorhynchus dieckmanni___ Magnano, 1978")
    OTU2("OTU:<br> ___Otiorhynchus indefinitus___ Reitter, 1912") <--> TN2["Taxon name:<br> ___Otiorhynchus indefinitus___"]
    AD1["Asserted Distribution:<br> Germany"] ---> OTU1
    AD2["Asserted Distribution:<br> Italy"] ---> OTU2
    OD1["Citation:<br> Original description:<br> Magnano, 1979"] ---> TN1
    OD2["Citation:<br> Original description:<br> Reitter, 1912"] ---> TN2
    TN1 -- junior subjective synonym, would also get a citation --> TN2
    ct1["Citation:<br>Behne, 1990:<br> Checklist of German Weevils"] ---> AD1
    ct2["Citation:<br>Abbazzi, 1992:<br> Checklist of Italian Weevils"] ---> AD2
    OTU1 ---> sum["_**Otiorhynchus indefinitus**_ Reitter, 1912<br> = *dieckmanni* Magnano, 1978<br>**Germany** ﬂ°°40¶ßBehne, 1990ﬂ°°41¶ß<br>**Italy** ﬂ°°40¶ßAbbazzi, 1992ﬂ°°41¶ß"]
    OTU2 ---> sum

     OTU1:::otu
     TN1:::name
     OTU2:::otu
     TN2:::name
     OD1:::citation
     OD2:::citation
     ct1:::citation
     ct2:::citation
     sum:::summary
    classDef otu fill:#e3f2fd,stroke:#1565c0,stroke-width:2px
    classDef name fill:#fff3e0,stroke:#ef6c00
    classDef citation fill:#e8,stroke:#2e7d32
    classDef summary fill:#f1f8e9,stroke:#1b5e20,stroke-width:3px
    linkStyle default stroke:grey
```
-->
