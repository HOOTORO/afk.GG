---
title: Table data
description: >
  Data loaded from gsheets
template: main.html
---

/// warning | ВНИМАНИЕ
Цена _Желтых гравировок_ и _Эссенции_ основана на обновлении магазина, локальная цена опущена из расчетов,
так как золото и кормовые герои стали бесполезными  
Цена _Карт храма и Пое_ взята как средняя с учетом всех доступных для покупки мест
В Разломе разные цены на **одинаковые** товары усреднены
///

## Dia Prices

{{ read_csv('../tbl/val.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False, colalign=("center",)) }}

## Local Prices

{{ read_csv('../tbl/loc.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False, colalign=("center",)) }}

## Furniture enchant + stats

{{ read_excel('../../../theme/assets/tables/furniture.xlsx', engine='openpyxl', na_filter=False) }}
