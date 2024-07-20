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
lastmod: 2024-07-20T11:04:10.774Z
---

/// details | Dev. In Progress
    type: new
    open: False

^^Возможны баги^^, при обнаружении тыкать в кнопку Feedback.

Calculates estimate for a given goal, based on towns/essence and loot.  
There are can be minor inaccuracies, see detail in the "bag" section.  
Overall should be pretty accurate as it takes into account [**entered** ess.| **Income** | **SELL** | town based avg. **value of dropping relics**<sup id="sp1"><a href="#fn1">1</a></sup>]
///

***

//// tab | Relic Estimate
/// html | div#relic-app
///
////

//// tab | Bag
/// html | div#relic-bag
///
////

### Footnotes

/// details | MATH UNDER THE HOOD?<a id="fn1" href="#sp1">↩︎</a>
    type: question
    open: False

>_ESS~rem~ 🟰 ∑GOAL~fc~ ➖ ESS~actual~ ➖ ∑SoldRelics ➖ ∑KeptRelics_
>
>_ESS~drop~ 🟰 RD~avg~ ➗ t~drop~ ✖️ P~rrd~  ➕ (1 ➖ P~rrd~) ✖️ RD~avg~ ➗ t~drop~ ✖️ C~sell~_
>
>_Timeleft 🟰 ESS~rem~ ➗ ( ESS~inc~ ➕ ESS~drop~ )_

^^RD^^

:   Relic drop

^^P~rrd~^^

:   chance required relic drop

^^C~sell~^^

:   sell price coefficient, which is 40%

///
