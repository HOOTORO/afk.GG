"""Module providing a function accessing os modules."""

import os

import discoworker.async_runner as dar
import numpy as np
import pandas as pd


def on_startup(**kwargs) -> None:
    # meme_md = 'docs/src/.dict/memlink.md'
    # meme_src = "docs/theme/assets/images/meme"
    mkdocs_dir = "docs/src/md/tbl"
    spreadsheet_id = "1_L4LmobsOtmVeBi3RwTCespyMq4vZLSJT1E-QOsXpoY"
    # files = []
    # files = dar.get_memes()
    # if os.path.isdir(meme_src):
    #     files += os.listdir(meme_src)
    if not os.path.isdir(mkdocs_dir):
        os.makedirs(mkdocs_dir)

    # with open(meme_md, 'w', encoding='utf-8') as tmpl:
    #     tmpl.write("/// html | div#memes\n\n")
    #     for m in files:
    #         if m.startswith("http"):
    #             tmpl.write(f"![auto-generated]({m})\n")
    #         else:
    #             tmpl.write(f"![auto-generated](../assets/images/meme/{m})\n")
    #     tmpl.write("\n///")

    sheet_ids = {"val": 156134846, "loc": 249616100, "rf2p": 639889886, "HOOT": 1162827151}
    for k, v in sheet_ids.items():
        url = f"https://docs.google.com/spreadsheets/d/{spreadsheet_id}/export?gid={v}&format=csv"
        df = pd.read_csv(url, index_col=0, na_filter=True, keep_default_na=False, engine='c',
                         dtype={'Diamonds': np.string_})
        save_dir = f"{mkdocs_dir}/{k}.csv"
        df.to_csv(save_dir)
