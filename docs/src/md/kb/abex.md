---
title: AbEx | Helper
description: >-
  Ваш помощник в сезон экспедиции в Бездну.
template: templates/abex.j2
---

## Apps

//// warning | Development in progress

Половина AbEx осталась позади, так что вывел на общее пользование эту функцию в пре-альфа-даже-не-в-раннем-доступе версии, пока она еще актуальна.
При этом более половины от запланированного еще не реализовано.
На данный момент вы можете выбрать команду, добавить результаты теста и экспортировать следующие данные: члены команды, урон питомца и комментарий.
Наверняка есть баги, если вы их нашли или у вас есть идеи/пожелания, вы можете оставить отзыв здесь. [:fontawesome-brands-discord: Обратная связь](https://discord.gg/xjJavhAvv6){.md-button .md-button--primary }

/// details | English description
    type: example

As half AbEx passed, introducing this feature in pre-alpha-not-even-early-access-state-version while it relevant.
That said, more than a half from planned not developed yet.
As of now you can choose team add test results and export following data: team members, pet damage and comment.
There are a bugs for sure, if you found one or have ideas/feature request you can leave feedback here [:fontawesome-brands-discord: Submit Feedback](https://discord.gg/xjJavhAvv6){.md-button .md-button--primary }
///

=== "Relic Estimate"
    /// html | div#relic-app
    ///

=== "Bag"
    /// html | div#relic-bag
    ///

=== "Run Test Form"
    /// html | div#attack-app
    ///

    //// details | Team management
        type: settings
        open: False

    /// html | div#team-set
    ///
    ////

=== "Attack Remain Calculator"
    /// html | div#rem-food
    ///

    //// tip | Don't miss a thing!
    Калькулятор атак по ласт боссу.  
    Указываете количество зрителей и текущую стамину,  
    он считает сколько атак можно сделать без потери атаки и сколько ретраев можно сделать.  

    [=100% "over9999%"]{: .candystripe .candystripe-animate .abex-progress}

    Удачи всем!
    ////

////

## Timeleft

<div id="main-event">
  <h1>
    Abyssal Expedition #10
  </h1>
  <div class="main-container">
    <span id="start"></span>
    <span id="silent"></span>
    <span id="left"></span>
  </div>
</div>

## Relics

=== "![all](/afk.GG/assets/icons/tree/hero_tag_all.png){width=24 .skip-lb}"
    ![a][rela]
=== "![Rangers](/afk.GG/assets/icons/tree/tree-ranger.png){width=24 .skip-lb}"
    ![c][relcel]
=== "![Support](/afk.GG/assets/icons/tree/tree-support.png){width=24 .skip-lb}"
    ![su][relsup]
=== "![Mages](/afk.GG/assets/icons/tree/tree-mage.png){width=24 .skip-lb}"
    ![sr][relsor]
=== "![Tank](/afk.GG/assets/icons/tree/tree-tank.png){width=24 .skip-lb}"
    ![rt][reltan]
=== "![Warrior ](/afk.GG/assets/icons/tree/tree-might.png){width=24 .skip-lb}"
    ![rw][relwar]

## Old reddit guide for newcomers

![g][nb]

[nb]: https://media.discordapp.net/attachments/1128524376929742879/1128524655804825690/aenewbieguide.webp
[rela]: https://media.discordapp.net/attachments/1128524376929742879/1128524476540260444/all.jpg
[relcel]: https://media.discordapp.net/attachments/1128524376929742879/1128524477207171082/celerity.jpg
[relsup]: https://media.discordapp.net/attachments/1128524376929742879/1128524477723054220/image6.jpg
[relsor]: https://media.discordapp.net/attachments/1128524376929742879/1128524478964580503/sorc.jpg
[reltan]: https://media.discordapp.net/attachments/1128524376929742879/1128524480143179866/tanks.jpg
[relwar]: https://media.discordapp.net/attachments/1128524376929742879/1128524480642302093/war.jpg
