export enum Locations {
  main = "/",

  guilds = `${Locations.main}guilds/`,
  blog = `${Locations.main}blog/`,
  game = `${Locations.main}game/`,
  kb = `${Locations.main}kb/`,

  meme = `${Locations.guilds}meme/`,

  abex = `${Locations.kb}abex/`,
  income = `${Locations.kb}income/`,

  modes = `${Locations.game}modes/`,
  ranked = `${Locations.main}ranked/`,
  tools = `${Locations.ranked}tools/`,
  warnotes = `${Locations.tools}warnotes/`,
}
