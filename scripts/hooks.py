import numpy as np
import pandas as pd


def on_startup(**kwargs) -> None:
    spreadsheet_id = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY" # values
    sheet_ids = {"val": 156134846, "loc": 249616100, "rf2p": 639889886, "HOOT":1162827151}
    for k,v  in sheet_ids.items():
        url = f"https://docs.google.com/spreadsheets/d/{spreadsheet_id}/export?gid={v}&format=csv"
        df = pd.read_csv(url, index_col=0,na_filter=True, keep_default_na=False, engine='c', dtype={'Diamonds': np.string_})
        savedir = f"docs/assets/tables/{k}.csv"
        df.to_csv(savedir)