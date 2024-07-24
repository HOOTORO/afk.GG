import { elTag } from "../model/constants.js";
import { newEl } from "./helper.js";

export class elBuilder {
  #el: HTMLElement;

  constructor(tag: elTag, props: { [k: string]: string } = {}) {
    this.#el = newEl(tag, props);
  }

  add(el: HTMLElement): elBuilder;
  add(
    tag: elTag,
    props: {
      [k: string]: string;
    },
    inner?: string
  ): elBuilder;
  add(el: HTMLElement | elTag, props: {} = {}, inner: string = "") {
    if (el instanceof HTMLElement) {
      this.#el.appendChild(el);
    } else {
      this.#el.appendChild(newEl(el, props, inner));
    }
    return this;
  }

  html(): HTMLElement {
    return this.#el;
  }
}
