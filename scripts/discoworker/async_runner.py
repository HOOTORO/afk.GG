import os
# import sqlite3

import discord


def env(k):
    if os.getenv(k):
        return os.getenv(k)
    else:
        return  ""

if env("LOCAL_BUILD"):
    from dotenv import load_dotenv
    load_dotenv()

class MemeScrapper(discord.Client):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    async def setup_hook(self) -> None:
        # create the background task and run it in the background
        self.bg_task = self.loop.create_task(self.my_background_task())

    async def on_ready(self):
        print(f'Logged in as {self.user} (ID: {self.user.id})')
        # emos = self.emojis
        # await load_emojis(emos)
        print('------')

    async def my_background_task(self):
        try:
            await self.wait_until_ready()
            channel = self.get_channel(int(env("MEMESCH")))  # channel ID goes here
            log_channel = self.get_channel(int(env("LOGCHAN")))
            while not self.is_closed():
                self.imageLinks:str = []
                async for message in channel.history(limit=200):
                    if len(message.attachments) > 0:
                        for a in message.attachments:
                            self.imageLinks.append(a.url)
                await self.close()
        except Exception:
            await log_channel.send("memes fetch failed, something went wrong")
            await self.close()



def get_memes():
    print(env("SECTEST"))
    intents = discord.Intents.default()
    intents.members = True
    client = MemeScrapper(intents=intents)
    client.run(env("DISBOTOK"))
    return client.imageLinks


# async def load_emojis(emo):
#         if os.path.exists("docs/theme/assets/disco.db"):
#             os.remove("docs/theme/assets/disco.db")
#         con = sqlite3.connect("docs/theme/assets/disco.db")
#         cur = con.cursor()
#         cur.execute("CREATE TABLE emos(name, url)")

#         for em in emo:
#             ext = ".png"
#             if em.animated:
#                 ext = ".gif"
#             link = f'https://cdn.discordapp.com/emojis/{em.id}{ext}'
#             cur.execute(f'INSERT INTO emos VALUES("{em.name}", "{link}")')
#             con.commit()

#         con.close()