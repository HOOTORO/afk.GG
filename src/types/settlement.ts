import { newEl } from "../components/helper.js";
import { AbExSellModifier, elTag, RelicBase } from "../model/constants.js";
import { IconizedInput } from "./iconized.js";
import { Tier } from "./tier.js";

export class Settlement extends IconizedInput {
  essencePerHour: number;
  yield: number;
  dropTier: number;
  dropTime: number;
  constructor(
    id: number,
    icon: string,
    name: string,
    essencePerHour: number,
    yld: number,
    dropTier: number,
    dropTime: number
  ) {
    // const hcls = "";
    const hcls = "abex input town";

    super(id, icon, name);
    this.cssName = hcls;
    this.essencePerHour = essencePerHour;
    this.yield = yld;
    this.dropTier = dropTier;
    this.dropTime = dropTime;
    this.buttons = true;
    this.value = parseInt(this.init());
    this.width = 58;
    this.height = 30;
  }

  public EPH() {
    return (
      this.value *
      (this.essencePerHour + (this.essencePerHour * this.yield) / 100)
    );
  }
  public RelicDrop() {
    return this.dropTime / this.value / 3600;
  }

  public ConvertedDropEssValue(avgPrice: number, wantedQuantity: number) {
    const hitProbability = wantedQuantity / RelicBase;
    return (
      (avgPrice / this.RelicDrop()) * hitProbability +
      (((1 - hitProbability) * avgPrice) / this.RelicDrop()) * AbExSellModifier
    );
  }

  public Tier(): Tier {
    return new Tier(this.dropTier);
  }

  htmlInfo(): HTMLElement {
    const color = this.Tier().color();
    const el = newEl(
      elTag.Span,
      {
        style: `color: ${color}`,
      },
      `${this.name} : [ ${this.RelicDrop().toPrecision(3)}h ]`
    );
    return el;
  }
}
