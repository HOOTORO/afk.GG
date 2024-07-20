import { elTag, newEl } from "../components/helper.js";

export class Iconized {
  constructor(public id: number, public icon: string, public name: string) {}

  html() {
    return newEl(elTag.Img, { src: this.icon, alt: this.name });
  }
}
