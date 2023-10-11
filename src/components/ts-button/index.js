import { html, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import SkeletonFactory from "../utils/skeletonFactory";
import styles from "./style.scss";

export class TsButton extends SkeletonFactory {
  static get styles() {
    return unsafeCSS(styles);
  }

  static get properties() {
    return {
      size: { type: String },
      variant: { type: String },
      format: { type: String },
      label: { type: String },
      disabled: { type: Boolean },
      loading: { type: Boolean },
      inverse: { type: Boolean },
      skeleton: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.size = "medium";
    this.variant = "primary";
    this.format = "flat";
    this.label = "Button";
    this.disabled = false;
    this.loading = false;
    this.inverse = false;
    this.skeleton = false;
  }

  updated(changedProperties) {
    if (changedProperties.has("skeleton")) {
      if (this.skeleton) {
        this.renderSkeleton(".ts-button__button");
      } else {
        this.removeSkeleton(".ts-button__button");
      }
    }
  }

  _tsHandleButtonClick() {
    this.dispatchEvent(
      new CustomEvent("ts-button-click", {
        composed: true,
        bubbles: true,
        detail: {
          click: true,
          message: "clicked",
        },
      })
    );
  }

  render() {
    return html`
      <div
        class="${classMap({
      "ts-button": true,
      [`ts-button--${this.size}`]: this.size,
      [`ts-button--${this.variant}`]: this.variant,
      [`ts-button--${this.format}`]: this.format,
      "ts-button--loading": this.loading,
      "ts-button--inverse": this.inverse,
      "ts-button--disabled": this.disabled,
    })}"
      >
        <button
          class="ts-button ${classMap({
      "ts-button__button": true,
      [`ts-button__button--${this.variant}`]: this.variant,
      "ts-button__button--inverse": this.inverse,
    })}"
          @click=${this._tsHandleButtonClick}
          type="button"
          aria-label=${this.loading ? "Loading" : undefined}
          aria-disabled=${this.disabled}
          ?disabled=${this.disabled}
        >
          <span>
          ${this.loading ? `Loading` : (this.label ? this.label : "Button")}
          </span>
        </button>
      </div>
    `;
  }
}

if (!customElements.get("ts-button")) {
  customElements.define("ts-button", TsButton);
}