import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from "./style.scss";
import "../ts-button/index.js";

export class TsButtonGroup extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  static get properties() {
    return {
      buttonPrimaryLabel: { type: String, attribute: "button-primary-label" },
      buttonSecondaryLabel: {
        type: String,
        attribute: "button-secondary-label",
      },
      buttonPrimaryDisabled: {
        type: Boolean,
        attribute: "button-primary-disabled",
      },
      buttonSecondaryDisabled: {
        type: Boolean,
        attribute: "button-secondary-disabled",
      },
      inverse: { type: Boolean },
      skeleton: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.buttonPrimaryLabel = "Primary";
    this.buttonSecondaryLabel = "Secondary";
    this.buttonPrimaryDisabled = false;
    this.buttonSecondaryDisabled = false;
    this.inverse = false;
    this.skeleton = false;
  }

  _tsHandleButtonPrimaryClick() {
    this.dispatchEvent(
      new CustomEvent("ts-button-primary-click", {
        composed: true,
        bubbles: true,
        detail: {
          click: true,
          message: "clicked",
        },
      })
    );
  }

  _tsHandleButtonSecondaryClick() {
    this.dispatchEvent(
      new CustomEvent("ts-button-secondary-click", {
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
        class=${classMap({
      "ts-button-group": true,
      "ts-button-group--inverse": this.inverse,
    })}
      >
      <ts-button
          variant="secondary"
          label=${this.buttonSecondaryLabel}
          ?disabled=${this.buttonSecondaryDisabled}
          ?inverse=${this.inverse}
          ?skeleton=${this.skeleton}
          @ts-button-click=${this._tsHandleButtonSecondaryClick}
          >
        </ts-button>
        <ts-button
        label=${this.buttonPrimaryLabel}
          ?disabled=${this.buttonPrimaryDisabled}
          ?inverse=${this.inverse}
          ?skeleton=${this.skeleton}
          @ts-button-click=${this._tsHandleButtonPrimaryClick}
        >
        </ts-button>
      </div>
    `;
  }
}

if (!customElements.get("ts-button-group")) {
  customElements.define("ts-button-group", TsButtonGroup);
}