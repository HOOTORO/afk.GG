---
title: Статистика Cursed/Nightmare
description: >-
    Разнообразная статистика собранная на персональном аккаунте
author: HOOTSMAN, Лев Николаевич
template: templates/blog.j2
---

{{ read_csv('../tbl/HOOT.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False, colalign=("center",)) }}
