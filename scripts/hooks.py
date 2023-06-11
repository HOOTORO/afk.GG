import os
from io import BytesIO

import pandas as pd
import requests


def on_pre_build(config, **kwargs) -> None:
    if os.environ['disable_hook'] == 1: return None
    spreadsheet_id = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY"
    sheet_ids = [156134846, 249616100]
    url = f"https://docs.google.com/spreadsheets/d/{spreadsheet_id}/export?gid={sheet_ids[0]}&format=csv"
    url2 = f"https://docs.google.com/spreadsheets/d/{spreadsheet_id}/export?gid={sheet_ids[1]}&format=csv"
    # r = requests.get('https://docs.google.com/spreadsheet/ccc?key=1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY&output=csv&gid=')
    # data = r.content
    # df = pd.read_csv(BytesIO(data),na_filter=True, keep_default_na=True, skip_blank_lines=True, index_col=0, usecols=[0,1,2,3,4])
    df = pd.read_csv(url, index_col=0)
    df.to_csv("docs/assets/tables/val1.csv")   
     
    # r2 = requests.get('https://docs.google.com/spreadsheet/ccc?key=1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY&output=csv&gid=')
    # data2 = r.content
    # df2 = pd.read_csv(BytesIO(data2),na_filter=True, keep_default_na=True, skip_blank_lines=True, index_col=0, usecols=[0,1,2,3,4])
    df2 = pd.read_csv(url2, index_col=0)
    df2.to_csv("docs/assets/tables/local1.csv")
    
# https://docs.google.com/spreadsheets/d/1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY/edit?usp=sharing

# usecols=['Name', 'Amount',	'Price(AVG)','Shop(AVG)','Single']