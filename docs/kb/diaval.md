# Dia Shop Values { .red-font }

<!-- {{ read_excel('../assets/tables/AFKDiavalues.xlsx', engine='openpyxl', na_filter=False) }} -->
## Dia Prices

{{ read_csv('../assets/tables/val1.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False,  colalign=("center",)) }}

## Local Prices

{{ read_csv('../assets/tables/local1.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False,  colalign=("center",)) }}
