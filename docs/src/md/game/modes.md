---
title: Cursed/Nightmare
description: >-
    Статистика с персонального акка
author: HOOTSMAN, Лев Николаевич
template: main.html
---

{{ read_csv('../tbl/HOOT.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False, colalign=("center",)) }}
