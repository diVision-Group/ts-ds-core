import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import styles from "./styles.scss";
import '../ts-icon/index.js';
import closeIcon from '@transdevoficial/ds-assets/dist/assets/icons/close.js';
import checkIcon from '@transdevoficial/ds-assets/dist/assets/icons/check.js';

export class TsSelect extends LitElement {
    static get styles() {
        return unsafeCSS(styles);
    }

    static get properties() {
        return {
            label: { type: String },
            value: { type: String },
            name: { type: String },
            id: { type: String },
            placeholder: { type: String },
            infoMessage: { type: String, attribute: "info-message" },
            selectOptions: { type: Array, attribute: 'select-options' },
            disabled: { type: Boolean },
            required: { type: Boolean },
            error: { type: Boolean },
            success: { type: Boolean },
            inverse: { type: Boolean },

        }
    }

    constructor() {
        super();
        this.label = "Label";
        this.value = "";
        this.name = "";
        this.id = "";
        this.placeholder = "Placeholder";
        this.infoMessage = "Info Message";
        this.selectOptions = [];
        this.disabled = false;
        this.required = false;
        this.error = false;
        this.success = false;
        this.inverse = false;
    }

    firstUpdated() {
        super.firstUpdated();
        const slot = this.shadowRoot.querySelector('slot');
        const childNodes = slot.assignedNodes({ flatten: true });
        const select = this.shadowRoot.querySelector('select.ts-select__select');

        Array.prototype.filter.call(childNodes, (node) => {
            if (node.nodeName.toLowerCase() === 'ts-select-option') {
                const opt = document.createElement('option');
                opt.value = node.value;
                opt.label = node.label;
                select.appendChild(opt);
            }
        });
    }

    _tsHandleSelectedItem(e) {
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('ts-selected-item', {
            bubbles: true,
            composed: true,
            detail: {
                value: this.value
            }
        }));
    }

    _tsHandleFocus() {
        this.shadowRoot.querySelector('select').focus();
        this.dispatchEvent(new CustomEvent('ts-select-focus', {
            bubbles: true,
            composed: true,
        }));
    }

    _tsHandleBlur() {
        this.dispatchEvent(new CustomEvent('ts-select-blur', {
            bubbles: true,
            composed: true,
        }));
    }

    render() {
        return html`
        <div class=${classMap({
            "ts-select": true,
            "ts-select--inverse": this.inverse,
            "ts-select--error": this.error,
            "ts-select--success": this.success,
            "ts-select--disabled": this.disabled
        })}>
        <div class='ts-select__slot'><slot style='display: none;'></slot></div>
            <label for=${this.id} class='ts-select__label'>${this.label}</label>
                <div class='ts-select__wrapper'>
                    <select 
                        class='ts-select__select'
                        id=${this.id} 
                        .name=${this.name} 
                        .value=${this.value}
                        ?disabled=${this.disabled}
                        @input=${this._tsHandleSelectedItem}
                        @focus=${this._tsHandleFocus}
                        @blur=${this._tsHandleBlur}>
                            <option value="" disabled selected hidden>${this.placeholder}</option>
                    </select>
                    </div>
                    ${(this.error || this.success) ? html`
                    <div class='ts-select__info-container'>
                    <span class="ts-select__info-message">${this.infoMessage}</span>
                    <ts-icon size='small' src=${this.error ? closeIcon : checkIcon}></ts-icon>
                    </div>
                ` : ''}
        </div>
                `;
    }
}

if (!customElements.get("ts-select")) {
    customElements.define("ts-select", TsSelect);
}