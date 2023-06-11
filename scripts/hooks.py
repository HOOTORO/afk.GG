from io import BytesIO

import numpy as np
import pandas as pd


def on_startup(**kwargs) -> None:
    spreadsheet_id = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY" # values
    sheet_ids = {"val": 156134846, "loc": 249616100, "rf2p": 639889886}
    for k,v  in sheet_ids.items():
        url = f"https://docs.google.com/spreadsheets/d/{spreadsheet_id}/export?gid={v}&format=csv"
        df = pd.read_csv(url, index_col=0,na_filter=True, keep_default_na=False, engine='c', dtype={'Diamonds': np.string_})
        savedir = f"docs/assets/tables/{k}.csv"
        df.to_csv(savedir)   
        
        
    # url2 = f"https://docs.google.com/spreadsheets/d/{spreadsheet_id}/export?gid={sheet_ids[1]}&format=csv"
     
    # df2 = pd.read_csv(url2, index_col=0)
    # df2.to_csv("docs/assets/tables/local.csv")
    
# https://docs.google.com/spreadsheets/d/1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY/edit?usp=sharing
# r2 = requests.get('https://docs.google.com/spreadsheet/ccc?key=1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY&output=csv&gid=')
# df2 = pd.read_csv(BytesIO(r.content),na_filter=True, keep_default_na=True, skip_blank_lines=True, index_col=0, usecols=[0,1,2,3,4])
# usecols=['Name', 'Amount',	'Price(AVG)','Shop(AVG)','Single']

# 