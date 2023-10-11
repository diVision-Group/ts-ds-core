import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from './styles.scss';
import '../ts-button-icon/index.js';
import '../ts-icon/index.js';
import plusIcon from '@transdevoficial/ds-assets/dist/assets/icons/plus.js';
import checkIcon from "@transdevoficial/ds-assets/dist/assets/icons/check.js";

export class TsCheckIconButton extends LitElement {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            checked: { type: Boolean },
            disabled: { type: Boolean },
            loading: { type: Boolean },
            inverse: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.checked = false;
        this.disabled = false;
        this.loading = false;
        this.inverse = false;
    }

    _tsHandleCheckIconButtonClick() {
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('ts-check-icon-button-click', {
            bubbles: true,
            composed: true,
            detail: {
                checked: this.checked,
            },
            cancelable: true,
        }));
    }

    render() {
        return html`
        <div class='${classMap({
            'ts-check-icon-button': true,
            'ts-check-icon-button--checked': this.checked,
            'ts-check-icon-button--disabled': this.disabled,
            'ts-check-icon-button--loading': this.loading,
            'ts-check-icon-button--inverse': this.inverse,
        })}'>

            <button aria-label="check-icon-button" class='ts-check-icon-button ts-check-icon-button__button' @click='${this._tsHandleCheckIconButtonClick}'>
                ${this.checked ? html`
                    <ts-icon src=${checkIcon} size='small' ?inverse=${this.inverse}></ts-icon>
                ` : html`
                    <ts-icon src=${plusIcon} size='small' ?inverse=${this.inverse}></ts-icon>
            `}
            </button>
        </div>
        `;
    }
}

if (!customElements.get('ts-check-icon-button')) {
    customElements.define('ts-check-icon-button', TsCheckIconButton);
}