interface Boss {
  id: number;
  name: string;
  icon: string;
}

const afkBosses = JSON.parse(`[
  {
    "id": 0,
    "name": "kane",
    "icon": "/afk.GG/assets/icons/crboss/boss_icon_03.png"
  },
  {
    "id": 1,
    "name": "nemora",
    "icon": "/afk.GG/assets/icons/crboss/boss_icon_04.png"
  },
  {
    "id": 2,
    "name": "shemira",
    "icon": "/afk.GG/assets/icons/crboss/boss_icon_05.png"
  },
  {
    "id": 3,
    "name": "brut",
    "icon": "/afk.GG/assets/icons/crboss/boss_icon_06.png"
  },
  {
    "id": 4,
    "name": "arden",
    "icon": "/afk.GG/assets/icons/crboss/boss_icon_07.png"
  },
  {
    "id": 5,
    "name": "oden",
    "icon": "/afk.GG/assets/icons/crboss/boss_icon_14.png"
  },
  {
    "id": 6,
    "name": "dune",
    "icon": "/afk.GG/assets/icons/crboss/boss_icon_22.png"
  }
]
`);

class BossManager {
  static bosses: Boss[] = afkBosses;
}

export { BossManager };
