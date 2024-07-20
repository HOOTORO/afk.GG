---
title: AbEx | Rel. Estimate
description: |
  Ваш помощник в сезон экспедиции в Бездну.
authors:
  - HOOTSMAN
categories:
  - Game
tags:
  - Tool
  - AbEx
  - AFK Arena
template: templates/apps.j2
slug: helper
lastmod: 2024-07-19T02:33:12.606Z
---

/// details | Development in progress
    type: new
    open: True
    attrs: {id: app}

^^Возможны баги^^, при обнаружении тыкать в кнопку Feedback.
///

***

//// tab | Relic Estimate
/// warning | CAUTION
Calculates estimate for a given goal, based on towns/essence and loot.  
There are can be minor inaccuracies, see detail in the "bag" section.  
Overall should be pretty accurate as it takes into account [**entered** ess.| **Income** | **SELL** | town based avg. **value of dropping relics**<sup id="sp1"><a href="#fn1">1</a></sup>]
///
/// html | div#relic-app
///
////

//// tab | Bag
/// info | Description
Some relic recipes can be incorrect, it shouldn't be problem since on each tier prices not differs much.  
Just in case left for first time additional info about each relic (1):
{ .annotate }

1. Click|Tap relic image will show it

- id: number used as ref in recipes
- price: build cost only.
- recipe: required relics

let me know if found any.
///

/// html | div#relic-bag
///
////

### Footnotes

/// question | MATH UNDER THE HOOD?<a id="fn1" href="#sp1">↩︎</a>

>_ESS~rem~ 🟰 ∑GOAL~fc~ ➖ ESS~actual~ ➖ ∑SoldRelics ➖ ∑KeptRelics_

>_ESS~drop~ 🟰 RD~avg~ ➗ t~drop~ ✖️ P~rrd~  ➕ (1 ➖ P~rrd~) ✖️ RD~avg~ ➗ t~drop~ ✖️ C~sell~_

>_Timeleft 🟰 ESS~rem~ ➗ ( ESS~inc~ ➕ ESS~drop~ )_


^^RD^^

:   Relic drop

^^P~rrd~^^

:   chance required relic drop

^^C~sell~^^

:   sell price coefficient, which is 40%

///
