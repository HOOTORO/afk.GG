export enum Locations {
  main = "/",

  guilds = `${Locations.main}guilds/`,
  blog = `${Locations.main}blog/`,
  game = `${Locations.main}game/`,
  kb = `${Locations.main}kb/`,

  meme = `${Locations.guilds}meme/`,

  income = `${Locations.kb}income/`,

  modes = `${Locations.game}modes/`,
  ranked = `${Locations.main}ranked/`,
  tools = `${Locations.ranked}tools/`,
  abex = `${Locations.tools}abex/`,
  warBook = `${Locations.tools}warnotes/`,
}
