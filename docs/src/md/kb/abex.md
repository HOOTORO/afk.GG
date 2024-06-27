---
title: AbEx | Helper
description: >
    Ваш помощник в сезон экспедиции в Бездну.
template: main.html
---

## Apps

////// new | Development in progress

There are a bugs for sure, if you found one or have ideas/feature request click "Feedback".

***

Возможны баги, при обнаружении, а так же с идеями/предложениями, обращаться в дискорде (кнопка Feedback).

///// tab | Relic Estimate
/// warning | CAUTION
Calculates estimate for a given goal, based on towns/essence and loot.  
There are can be minor inaccuracies, see detail in the "bag" section.  
Overall should be pretty accurate as it takes into account [ **entered** ess.| **Income** | **SELL** | town based avg. **value of dropping relics**<sup id="sp1"><a href="#fn1">1</a></sup>]
///
/// html | div#relic-app
///
/////

///// tab | Bag
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
/////

///// tab | Run Test Form
/// info | Description
Setup team, add attack data and export to csv.
///
/// html | div#attack-app
///

//// details | Team management
    type: settings
    open: False

/// html | div#team-set
///
////
/////

///// tab | Attack Remain Calculator
/// info | Description

Calculates how many attacks on boss can be done + retries.

***

Калькулятор атак по ласт боссу.
Показывает кол-во атак и запас ретраев до потери атаки.

///
/// html | div#rem-food
///

/////
//////
