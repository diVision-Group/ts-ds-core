import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from "./style.scss";
import checkIcon from '@transdevoficial/ds-assets/dist/assets/icons/check.js';
import minusIcon from '@transdevoficial/ds-assets/dist/assets/icons/minus.js';
import '../ts-icon/index.js';

export class TsCheckBox extends LitElement {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            label: { type: String },
            checked: { type: Boolean },
            disabled: { type: Boolean },
            inverse: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.label = "";
        this.disabled = false;
        this.checked = false;
        this.inverse = false;
    }

    _tsHandleCheckboxChange() {
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('ts-checkbox-change', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
                checked: this.checked
            }
        }))
    }

    render() {
        return html`
        <div class=${classMap({
            "ts-checkbox": true,
            "ts-checkbox--disabled": this.disabled,
            "ts-checkbox--inverse": this.inverse
        })}>
        <label class="ts-checkbox__label">
            <input
            class='ts-checkbox__input'
            type="checkbox"
            ?checked=${this.checked}
            ?disabled=${this.disabled}
            @click=${this._tsHandleCheckboxChange}
            />
            <span class="checkmark">
            ${this.checked
                ? html` <ts-icon
                  size="small"
                  src=${checkIcon}
                >
                </ts-icon>`
                : html`
                <ts-icon
                    size="small"
                    src=${minusIcon}
                >
                </ts-icon>
                `}
          </span>
            <span>${this.label}</span>
        </label>
        </div>
        `;
    }
}

if (!customElements.get('ts-checkbox')) {
    customElements.define("ts-checkbox", TsCheckBox);
}