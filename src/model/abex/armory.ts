type BranchName = "warrior" | "tank" | "celerity" | "mage" | "support"
type relicLvl = 10 | 20 | 30 | 40 | 50;

type slotId = 1 | 2 | 3 | 4 | 5 | 6

type AbexRelics = Record<BranchName, Record<slotId, relicLvl>>

class Armory {
  equipped: AbexRelics
  wanted: AbexRelics

  constructor() {
    this.equipped = {
      warrior: {1: 10,2:10, 3:10,4:10, 5:10, 6:10},
      tank: {1: 10,2:10, 3:10,4:10, 5:10, 6:10},
      celerity: {1: 10,2:10, 3:10,4:10, 5:10, 6:10},
      mage: {1: 10,2:10, 3:10,4:10, 5:10, 6:10},
      support: {1: 10,2:10, 3:10,4:10, 5:10, 6:10},
    } 

    this.wanted = this.equipped
  }
  
  public up(b: BranchName, s: slotId , want?: boolean){
    if (this.equipped[b][s]<50) {
      this.equipped[b][s] = this.equipped[b][s] + 10 as relicLvl;
  }else { this.equipped[b][s] = 10}
  
}
}
// class Armory {
//   constructor(parameters) {
    
//   }
// }