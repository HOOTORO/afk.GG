---
title: AbEx | Helper
description: >
    Ваш помощник в сезон экспедиции в Бездну.
template: templates/abex.j2
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

## Ranking Seasons

| #  | Boss        | Start      | End        |
|----|-------------|------------|------------|
| 1  | Gouldos     | 2020.05.30 | 2020.06.19 |
| 2  | Gouldos     | 2020.08.08 | 2020.08.28 |
| 3  | Ainz+Albedo | 2020.12.12 | 2020.12.28 |
| 4  | Ezizh       | 2021.05.02 | 2021.05.18 |
| 5  | Balancer    | 2021.10.30 | 2021.11.15 |
| 6  | Balancer    | 2022.03.05 | 2021.03.21 |
| 7  | Marsha      | 2022.09.03 | 2021.09.19 |
| 8  | Marsha      | 2022.11.05 | 2021.11.21 |
| 9  | Clawlossus  | 2023.05.07 | 2021.05.23 |
| 10 | Clawlossus  | 2023.07.05 | 2021.07.21 |

## Abyssal Expedition #11

///// html | div#main-event
//// html | div.main-container
/// html | span#abex-timer
///
////
/////
[^teo]: Hypothetically of course , based on past seasons

### Footnotes

//// example | FORMULA<a id="fn1" href="#sp1">↩︎</a>
*RD~avg~ ÷ t~drop~ × P~rrd~  + (1 - P~rrd~) × RD~avg~ ÷ t~drop~ × C~sell~*

/// define
RD

- Relic drop

P~rrd~

- chance drop required relic

C~sell~

- sell price coefficient, which is 40%
  ///

////

