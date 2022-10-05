---
layout: blocks.njk
bodyClasses: "blocks-page has-full-height-image"

seo:
  title: Metalsmith Bare-bones Starter
  description: "This starter should get you up and running with your new favorite static site genrator Metalsmith"
  socialImage: "/assets/images/metalsmith-starter-social.png"
  canonicalOverwrite: ""

sections:
  - container: section # section || article || aside
    containerFields:
      disabled: false
      containerId: "banner"
      containerClass: "banner"
      inContainer: false
      margin:
        top: false
        bottom: false
      padding:
        top: false
        bottom: false
      background:
        color: ""
        image: ""
        isDark: false
    columns:
      - column:
        blocks:
          - name: full-page-image-slider
            slides:
              - slide:
                image: 
                  src: "v1664401060/zeche-nordstern/banner8_covkch.jpg"
                  alt: "Zeche Hannover"
                  aspectRatio: "65.8"
                  caption: "Photo by Daniel Mennerich"
                text:
                  title: Ruhrpott
                  header: "h1"
                  subTitle: ""
                  prose: |-
                    Geologically, the region is defined by coal-bearing layers from the upper Carboniferous period. The coal seams reach the surface in a strip along the river Ruhr and dip downward from the river to the north. Beneath the Lippe, the coal seams lie at a depth of 2,000 to 2,600 ft.   
              - slide:
                image: 
                  src: "v1664401059/zeche-nordstern/banner2_a6famj.jpg"
                  alt: "Zeche Nordstern"
                  aspectRatio: "66.7"
                  caption: "Photo by Daniel Mennerich"
                text:
                  title: Ruhrpott
                  header: "h1"
                  subTitle: ""
                  prose: |-
                    Once known for its belching steelworks and filthy coal mines, the Ruhrgebiet – a sprawling post-industrial region of 53 cities  – is considered part of the larger Rhine-Ruhr metropolitan region, which is among the largest in Europe, behind only London and Paris.
              - slide:
                image:
                  src: "v1664401059/zeche-nordstern/banner6_znfqdw.jpg"
                  alt: "Zeche Zollverein"
                  aspectRatio: "73.6"
                  caption: "Photo by Daniel Mennerich"
                text:
                  title: Ruhrpott
                  header: "h1"
                  subTitle: ""
                  prose: |-
                    The Ruhrpott is a former industrial area centrally located in North Rhine Westphalia. The region takes its name partly from the river Ruhr and the word “Pott” which comes from “Kohlenpott” (meaning “coal pot”) alluding to the area’s coal-mining past.  
            scrollTarget: "section1"    
  - container: article # section || article || aside
    containerFields:
      disabled: false
      containerId: "section1"
      containerClass: "this-class"
      inContainer: false
      margin:
        top: false
        bottom: true
      padding:
        top: false
        bottom: false
      background:
        color: ""
        image: ""
        isDark: false 
    columns:
      - column:
        blocks:
          - name: text
            prefix: ""
            title: What is this website?
            header: "h2"
            subTitle: "A reference implementation of a static website, build with Metalsmith."
            prose: |-
              This website was built with [Metalsmith](https://metalsmith.io/), a static site generator. It uses the [Nunjucks](https://mozilla.github.io/nunjucks/) templating language, which is similar to Liquid and Twig. The site is hosted on [Netlify](https://www.netlify.com/), and the source code is available on GitHub.
              
          - name: ctas
            ctas:
              - url: "https://metalsmith.io/"
                label: "Learn more about Metalsmith"
                isExternal: true
                isButton: true
                buttonStyle: "primary"
  - container: article # section || article || aside
    containerFields:
      disabled: false
      containerId: "section2"
      containerClass: "this-class"
      inContainer: true
      margin:
        top: false
        bottom: true
      padding:
        top: false
        bottom: false
      background:
        color: "#333"
        image: ""
        isDark: true
    columns:
      - column:
        blocks:
          - name: image
            src: "v1664225765/company-starter/pexels-andrea-piacquadio-3846508_nhl2jk.jpg"
            alt: "nunjucks"
            aspectRatio: "66.67"
            caption: "Photo by Andrea Piacquadio from Pexels"
      - column:
        blocks:
          - name: text
            title: And there is more
            header: "h1"
            subTitle: "what noch mehr?"
            prose: |-
              The starter is now using [Barba](https://barba.js.org/) to enable smooth and fluid page transitions. This feels a lot like a Single Page Application.
          - name: ctas
            ctas:
              - url: "//apple.com"
                label: "go to apple"
                isExternal: true
                isButton: true
                buttonStyle: "primary"
  - container: article # section || article || aside
    containerFields:
      disabled: false
      containerId: "section3"
      containerClass: "this-class"
      inContainer: true
      margin:
        top: false
        bottom: true
      padding:
        top: false
        bottom: false
      background:
        color: "#333"
        image: ""
        isDark: true
    columns:
      - column:
        blocks:
          - name: image
            src: "v1664225765/company-starter/pexels-andrea-piacquadio-3846508_nhl2jk.jpg"
            alt: "nunjucks"
            aspectRatio: "66.67"
            caption: "Photo by Andrea Piacquadio from Pexels"
      - column:
        blocks:
          - name: text
            title: And there is more
            header: "h1"
            subTitle: "what noch mehr?"
            prose: |-
              The starter is now using [Barba](https://barba.js.org/) to enable smooth and fluid page transitions. This feels a lot like a Single Page Application.
          - name: ctas
            ctas:
              - url: "//apple.com"
                label: "go to apple"
                isExternal: true
                isButton: true
                buttonStyle: "primary"
---
