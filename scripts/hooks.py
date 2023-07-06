import numpy as np
import os
import pandas as pd
import json

def on_startup(**kwargs) -> None:
    memeSrc = "docs/theme/assets/images/meme"
    memeTarget = "docs/src/md/memes.json"
    mkdocsDir="docs/src/md/tbl"
    spreadsheet_id = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY" # values
    files = {}
    
    if os.path.isdir(memeSrc):
        files["memes"] = os.listdir(memeSrc)
        with open(memeTarget, 'w') as outfile:
            json.dump(files, outfile)
    
    if not os.path.isdir(mkdocsDir):
        os.makedirs(mkdocsDir)
        
    sheet_ids = {"val": 156134846, "loc": 249616100, "rf2p": 639889886, "HOOT":1162827151}
    for k,v  in sheet_ids.items():
        url = f"https://docs.google.com/spreadsheets/d/{spreadsheet_id}/export?gid={v}&format=csv"
        df = pd.read_csv(url, index_col=0,na_filter=True, keep_default_na=False, engine='c', dtype={'Diamonds': np.string_})
        savedir = f"{mkdocsDir}/{k}.csv"
        df.to_csv(savedir)