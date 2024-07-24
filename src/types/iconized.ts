import { updateTableData } from "../abex/relicEstimate.js";
import { buttonWrapInput, newEl, storedValue } from "../components/helper.js";
import { elTag, Input } from "../model/constants.js";

export class Iconized {
  constructor(id: number, icon: string);
  constructor(id: number, icon: string, name: string);
  constructor(
    id: number,
    icon: string,
    name: string,
    width: number,
    height: number
  );
  constructor(
    public id: number,
    public icon: string,
    public name?: string,
    public width?: number,
    public height?: number
  ) {}

  html() {
    return newEl(elTag.Img, {
      src: this.icon,
      alt: this.name,
      width: `${this.width}`,
      height: `${this.height}`,
    });
  }

  img() {
    return this.html().getElementsByTagName(elTag.Img)[0];
  }
}

export class IconizedInput extends Iconized {
  private type: Input = Input.Number;
  public init: () => string = () => {
    return storedValue(this.name) ? storedValue(this.name).toString() : "0";
  };
  public update: (x: any) => void = (y: number) => {
    if (y >= 0) {
      this.value = y;
      storedValue(this.name, this.value);
      updateTableData();
    }
  };
  constructor(id: number, src: string, name: string);
  constructor(id: number, src: string, name: string, type: Input);
  constructor(
    id: number,
    src: string,
    name: string,
    type?: Input,
    public buttons?: boolean,
    public value?: number,
    public cssName?: string,
    public namedId?: string
  ) {
    super(id, src);
    this.name = name;
    if (type) {
      this.type = type;
    }
  }

  html(): HTMLElement {
    const img = super.html(),
      container = newEl(elTag.Label, {
        for: this.namedId,
      }),
      props = {
        type: this.type,
        id: this.namedId,
        class: this.cssName,
        name: this.name,
        value: this.init(),
      };
    let input = newEl(elTag.Input, props);

    if (this.buttons) {
      input = buttonWrapInput(input, this.update);
    }
    container.appendChild(img);
    container.appendChild(input);
    return container;
  }
}
