import os

import discord
from dotenv import load_dotenv

load_dotenv()

def env(k):
    if os.getenv(k):
        return os.getenv(k)
    else:
        return  ""

class MemeScapper(discord.Client):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    async def setup_hook(self) -> None:
        # create the background task and run it in the background
        self.bg_task = self.loop.create_task(self.my_background_task())

    async def on_ready(self):
        print(f'Logged in as {self.user} (ID: {self.user.id})')
        print('------')

    async def my_background_task(self):
        try:
            await self.wait_until_ready()
            channel = self.get_channel(int(env("memesch")))  # channel ID goes here
            print(f'1.   Channel => {channel.name}')
            
            while not self.is_closed():
                self.imageLinks = []
                async for message in channel.history(limit=200):
                    if len(message.attachments) > 0:
                        for a in message.attachments:
                            self.imageLinks.append(a.url)
                await self.close()
                    # await channel.send(msg)
                    # await asyncio.sleep(2)  # task runs every 60 seconds
        except Exception:
            await channel.send("ZERO IMAGES DESU")
            await self.close()



def getMemes():
    intents = discord.Intents.default()
    intents.members = True

    client = MemeScapper(intents=intents)
    client.run(env("disbotok"))
    # print(f'imsgs => {client.imageLinks}')
    return client.imageLinks
