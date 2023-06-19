---
permalink: tools
template: tools.html
title: Table data
---
# Dia Shop Values { .red-font }

!!! warning "ВНИМАНИЕ"

        Цена _Желтых грав_ и _Эссенции_ основана на рефреше магазина, локальная цена опущена из расчетов, так как золото и кормовые герои стали бесполезными  
        Цена _Карт храма и Пое_ взята как средняя с учетом всех доступных для покупки мест    
        В Разломе разные цены на **одинаковые** товары усреднены   
<!-- {{ read_excel('../assets/tables/AFKDiavalues.xlsx', engine='openpyxl', na_filter=False) }} -->

## Dia Prices

{{ read_csv('../assets/tables/val.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False,  colalign=("center",)) }}  

## Local Prices

{{ read_csv('../assets/tables/loc.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False,  colalign=("center",)) }}  

## Deals Value

