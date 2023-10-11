import { html, LitElement } from "lit";
import defaultIcon from "@transdevoficial/ds-assets/dist/assets/icons/bullet.js";

export default class RenderSvg extends LitElement {
  constructor() {
    super();
  }

  createSvg(svg) {
    if (svg === undefined || svg === null || svg === "") {
      return document.createRange().createContextualFragment(defaultIcon);
    }

    return document.createRange().createContextualFragment(svg);
  }

  renderSvg() {
    return html`${this.createSvg(this.src)}`;
  }
}
