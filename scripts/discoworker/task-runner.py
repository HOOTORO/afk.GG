import os

import discord
from discord.ext import tasks
from dotenv import load_dotenv

load_dotenv()

def env(k):
    if os.getenv(k):
        return os.getenv(k)
    else:
        return  ""

class MyClient(discord.Client):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # an attribute we can access from our task
        self.counter = 0

    async def setup_hook(self) -> None:
        # start the task to run in the background
        self.my_background_task.start()

    async def on_ready(self):
        print(f'Logged in as {self.user} (ID: {self.user.id})')
        print('------')

    @tasks.loop(seconds=2,count= 4)  # task runs every 60 seconds
    async def my_background_task(self):
        try:
            channel = self.get_channel(int(env("testchan")))  # channel ID goes here
            user = self.get_user(int(env("pivo")))
            print(f'User => {channel.members}')
            self.counter += 1
            if (self.counter > 3 ):
                await channel.send(f'TYPEEDOR O5  {list(channel.members)[1].mention}')
                await self.close()
            else :
                await channel.send(self.counter)
        except Exception:
            print(f'exception bitch')
            await self.close()

    @my_background_task.before_loop
    async def before_my_task(self):
        await self.wait_until_ready()  # wait until the bot logs in

intents = discord.Intents.default()
intents.members = True

client = MyClient(intents=intents)
client.run(env("disbotok"))