import { html } from "lit";
import { unsafeCSS } from "lit";
import RenderSvg from "../utils/renderSvg";
import { classMap } from "lit-html/directives/class-map.js";
import styles from "./style.scss";

export class TsIcon extends RenderSvg {
  static get styles() {
    return unsafeCSS(styles);
  }

  static get properties() {
    return {
      src: { type: String },
      size: { type: String },
      color: { type: String },
      inverse: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.src = "";
    this.size = "medium";
    this.color = "";
    this.inverse = false;
  }

  setColor() {
    this.inverse && !this.color ? (this.color = "") : null;
    return this.color;
  }

  render() {
    return html`
      <div
        part="icon"
        class="${classMap({
      "ts-icon": true,
      [`ts-icon--${this.size}`]: this.size,
      "ts-icon--inverse": this.inverse,
    })}"
    style="color: ${this.setColor()}"
      >
        ${this.renderSvg()}
      </div>
    `;
  }
}

if (!customElements.get("ts-icon")) {
  customElements.define("ts-icon", TsIcon);
}