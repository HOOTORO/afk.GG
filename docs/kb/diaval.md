# Dia Shop Values { .red-font }

!!! warning "CONSIDERATIONS"

        _EG.Yellow_, _Juice_ based on refresh shop cost, local price omitted from calculations since gold and fodder eventually became useless  
        _TC, POE_ costs average values of all income places  
        Rift values of different prices **same** resource averaged  
<!-- {{ read_excel('../assets/tables/AFKDiavalues.xlsx', engine='openpyxl', na_filter=False) }} -->
## Dia Prices

{{ read_csv('../assets/tables/val.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False,  colalign=("center",)) }} 

## Local Prices

{{ read_csv('../assets/tables/local.csv', na_filter=True, keep_default_na=False, skip_blank_lines=False,  colalign=("center",)) }} 
