"""Module providing a function accessing os modules."""

import os

import discord

# local builds only
# from dotenv import load_dotenv
# load_dotenv()

class MemeScrapper(discord.Client):
    """Collects image urls in a given channel"""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.image_links:list = []
        self.bg_task = None

    async def setup_hook(self) -> None:
        # create the background task and run it in the background
        self.bg_task = self.loop.create_task(self.my_background_task())

    async def on_ready(self):
        """appears on successful discord login"""
        print(f'Logged in as {self.user} (ID: {self.user.id})')
        print('------')

    async def my_background_task(self):
        """bot actions that needs to be done in bg"""
        log_channel = self.get_channel(int(os.getenv("LOGCHAN")))
        try:
            await self.wait_until_ready()
            channel = self.get_channel(int(os.getenv("MEMESCH")))  # channel ID goes here
            while not self.is_closed():
                async for message in channel.history(limit=200):
                    if len(message.attachments) > 0:
                        for a in message.attachments:
                            self.image_links.append(a.url)
                await self.close()
        except Exception as e:
            await log_channel.send("memes fetch failed, something went wrong")
            await self.close()
            raise e


def get_memes():
    """Collects image urls in a given channel"""
    intents = discord.Intents.default()
    intents.members = True
    client = MemeScrapper(intents=intents)
    client.run(os.getenv("DISBOTOK"))
    return client.image_links
