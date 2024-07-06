---
title: How-to YAGPDB
description: Setup amazing https://yagpdb.xyz/ bot to send interval based notification
date: 2024-06-22
draft: false
categories: [Doc]
tags: [Guide, Bot, Discord, Code Example]
authors: [HOOTSMAN]
slug: yagpdb-notification
toc: true
---

## Yet Another Great Purpose Discord Bot

YAGPDB is great bot for sure. With a little knowledge of how templates work, You can do almost anything you ever want.

### Settings

![alt text](https://i.imgur.com/akCC3Xd.png)

Create CC

![alt text](https://i.imgur.com/6u23Dfo.png)

1. Choose hourly interval
2. Set the value of the trigger frequency during the 24h from midnight
3. destination channel
4. pick out unwanted intervals
5. pick out unwanted days
6. if this is still not enough, well you can add another layers of logic via code. Check snippets bellow

### Code snippets

#### Cursed realm & Nightmare Corridor

```go
{{/* content vars */}}
{{/* Footer icon */}}
{{ $kappa := "https://i.imgur.com/skvKU4y.png" }}
{{/* Body image */}}
{{ $banner := "https://i.imgur.com/RLwzjMa.png" }}
{{/* left side line */}}
{{ $color := 13734373 }}
{{/* RoleID/ChannelID/UserID */}}
{{ $recipient := .Guild.GetRole 1145822210720792626 }}
{{/* Description */}}
{{ $event := "🏁 Результаты 🏁" }}
{{/* end */}}

{{ $currentHour := toInt (currentTime.UTC.Format "15") }}
{{ $remaining := print (sub 12 $currentHour) "ч." }}
{{ 
  sendMessageNoEscape nil ( 
    complexMessage 
    "content" ( mentionRoleID $recipient.ID )
    "embed" (cembed
             "author" (sdict)
             "thumbnail" (sdict )
             "title" ""
             "color" $color
             "description" ""
             "image" (sdict "url" $banner)
             "footer" (sdict  "text" "Lingua latina non penis canis est... GLHF! "  "icon_url" $kappa)
             "fields" (cslice 
                       (sdict "name" "🚨 Событие" "value" $event "inline" true )
                       (sdict "name" "-->" "value" "⚠️" "inline" true )
                       (sdict "name" "Осталось 🕙" "value" $remaining "inline" true )
                      )
             "timestamp" currentTime  
            ) 
  )
  }}
```

#### POE Bet

```go
{{/* content vars */}}
{{/* Footer icon */}}
{{ $kappa := "https://i.imgur.com/skvKU4y.png" }}
{{/* Body image */}}
{{ $banner := "https://i.imgur.com/UEwyutf.png" }}
{{/* left side line */}}
{{ $color := 12245589 }}
{{/* RoleID/ChannelID/UserID */}}
{{ $recipient := .Guild.GetRole 1145877769360785508 }}
{{/* Description */}}
{{ $event := "POE Ставка💸" }}
{{/* end */}}

{{ $currentHour := toInt (currentTime.UTC.Format "15") }}
{{ $remaining := print (sub 24 $currentHour) "ч." }}

{{ 
  sendMessageNoEscape nil ( 
    complexMessage 
    "content" ( mentionRoleID $recipient.ID )
    "embed" (cembed
             "author" (sdict)
             "thumbnail" (sdict )
             "title" ""
             "color" $color
             "description" ""
             "image" (sdict "url" $banner)
             "footer" (sdict  "text" "Lingua latina non penis canis est... GLHF! "  "icon_url" $kappa)
             "fields" (cslice 
                       (sdict "name" "🚨 Событие" "value" $event "inline" true )
                       (sdict "name" "-->" "value" "⚠️" "inline" true )
                       (sdict "name" "Осталось 🕙" "value" $remaining "inline" true )
                      )
             "timestamp" currentTime  
            ) 
  )
  }}
```

#### Solo arena

```go
{{/* content vars */}}
{{/* Footer icon */}}
{{ $kappa := "https://i.imgur.com/skvKU4y.png" }}
{{/* Body image */}}
{{ $banner := "https://i.imgur.com/9RoHCq5.png" }}
{{/* left side line */}}
{{ $color := 16764672 }}
{{/* RoleID/ChannelID/UserID */}}
{{ $recipient := .Guild.GetRole 1252251522285174874 }}
{{/* Description */}}
{{ $event := "Конец сезона 1️⃣🆚1️⃣ " }}
{{/* end */}}

{{ $currentHour := toInt (currentTime.UTC.Format "15") }}
{{ $remaining := print (sub 24 $currentHour) "ч." }}
{{ $week := weekNumber currentTime }}
{{ $isOddWeek := mod $week 2 }}
{{ if gt $isOddWeek (toFloat 0) }}
  {{ 
    sendMessageNoEscape nil ( 
      complexMessage 
      "content" ( mentionRoleID $recipient.ID )
      "embed" (cembed
               "author" (sdict)
               "thumbnail" (sdict )
               "title" ""
               "color" $color
               "description" ""
               "image" (sdict "url" $banner)
               "footer" (sdict  "text" "Lingua latina non penis canis est... GLHF! "  "icon_url" $kappa)
               "fields" (cslice 
                         (sdict "name" "🚨 Событие" "value" $event "inline" true )
                         (sdict "name" "-->" "value" "⚠️" "inline" true )
                         (sdict "name" "Осталось 🕙" "value" $remaining "inline" true )
                        )
               "timestamp" currentTime  
              ) 
    )
   }}
{{end}}
```

#### Treasure Scramble

```go
{{/* content vars */}}
{{/* Footer icon */}}
{{ $kappa := "https://i.imgur.com/skvKU4y.png" }}
{{/* Body image */}}
{{ $banner := "https://i.imgur.com/s0v11M5.png" }}
{{/* left side line */}}
{{ $color := 16665999 }}
{{/* RoleID/ChannelID/UserID */}}
{{ $recipient := .Guild.GetRole 1252251641080578138 }}
{{/* Description */}}
{{ $event := "Призовой раунд!" }}
{{/* end */}}
 
{{ $currentHour := toInt (currentTime.UTC.Format "15") }}
{{ $week := weekNumber currentTime  }}
{{ $wd := currentTime.Weekday }}
{{ $remaining := print (sub 13 $currentHour) "ч." }}
{{ $isOddWeek := gt (mod $week 2) (toFloat 0) }}
 
{{ if and $isOddWeek (eq (toInt $wd) 2) }}
 {{ $footerText: "💢Выбор дороги🌀" }} 
 {{ $remaining := print (sub 24 $currentHour) "ч." }}
{{end}}
{{ 
  sendMessageNoEscape nil ( 
    complexMessage 
    "content" ( mentionRoleID $recipient.ID )
    "embed" (cembed
             "author" (sdict)
             "thumbnail" (sdict )
             "title" ""
             "color" $color
             "description" ""
             "image" (sdict "url" $banner)
             "footer" (sdict  "text" "Lingua latina non penis canis est... GLHF! "  "icon_url" $kappa)
             "fields" (cslice 
                       (sdict "name" "🚨 Событие" "value" $event "inline" true )
                       (sdict "name" "-->" "value" "⚠️" "inline" true )
                       (sdict "name" "Осталось 🕙" "value" $remaining "inline" true )
                      )
             "timestamp" currentTime  
            ) 
  )
  }}
```

#### Misty Valley

```go
{{/* content vars */}}
{{/* Footer icon */}}
{{ $kappa := "https://i.imgur.com/skvKU4y.png" }}
{{/* Body image */}}
{{ $banner := "https://i.imgur.com/bQgRtwG.png" }}
{{/* left side line */}}
{{ $color := 12244432 }}
{{/* RoleID/ChannelID/UserID */}}
{{ $recipient := .Guild.GetRole 1252251875110162523 }}
{{/* Description */}}
{{ $event := "❗  ТУМАНКА 🅰️ЛЕРТ  ❗" }}
{{/* end */}}
 

{{ $d := currentTime.Day }}
{{ if eq $d 11 }}
  {{ 
  sendMessageNoEscape nil ( 
    complexMessage 
    "content" ( mentionRoleID  $recipient.ID)
    "embed" (cembed
             "title" ""
             "image" (sdict "url" $banner)
             "timestamp" currentTime  
             "color" $color
             "fields" (cslice)           
             "footer" (sdict  "text" $event "icon_url" $kappa)
            ) 
  )
  }}
{{end}}
```

#### Ghoulish Gallery & DragonForge Trials

```go
{{/* content vars */}}
{{/* Footer icon */}}
{{ $kappa := "https://i.imgur.com/skvKU4y.png" }}
{{/* Body image */}}
{{ $banner := "https://i.imgur.com/OPjSkDm.png" }}
{{/* left side line */}}
{{ $color := 16711680 }}
{{/* RoleID/ChannelID/UserID */}}
{{ $recipient := .Guild.GetRole 1252251522285174874 }}
{{/* Description */}}
{{ $event := "❗ Последний день ❗" }}
{{/* end */}}

{{ $currentHour := toInt (currentTime.UTC.Format "15") }}
{{ $remaining := print (sub 24 $currentHour) "ч." }}
 
{{ 
  sendMessageNoEscape nil ( 
    complexMessage 
    "content" (mentionRoleID $recipient.ID )
    "embed" (cembed
             "title" ""
             "image" (sdict "url" $banner)
             "timestamp" currentTime  
             "color" $color
             "footer" (sdict  "text" "Lingua latina non penis canis est... GLHF! "  "icon_url" $kappa)
             "fields" (cslice 
                       (sdict "name" "🚨 Событие" "value" $event "inline" true )
                       (sdict "name" "-->" "value" "⚠️" "inline" true )
                       (sdict "name" "Осталось 🕙" "value" $remaining "inline" true )
                      )
            ) 
  )
  }}
```
