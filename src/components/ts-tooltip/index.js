import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from './styles.scss';
import exclamationCircleIcon from "@transdevoficial/ds-assets/dist/assets/icons/exclamation_circle.js";

export class TsTooltip extends LitElement {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            label: { type: String },
            align: { type: String },
            position: { type: String },
            inverse: { type: Boolean },
            disabled: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.label = "Some message";
        this.align = "default";
        this.position = "top";
        this.inverse = false;
        this.disabled = false;
    }

    render() {
        return html`
        <div class='${classMap({
            'ts-tooltip': true,
            'ts-tooltip--inverse': this.inverse,
            'ts-tooltip--disabled': this.disabled,
        })}'>
            <slot></slot>
            <span class='${classMap({
                'ts-tooltip__content': true,
                [`ts-tooltip__content--${this.align}`]: this.align,
                [`ts-tooltip__content--${this.position}`]: this.position,
            })}'>
            ${this.label}
            <ts-icon size='small' src=${exclamationCircleIcon}></ts-icon>
            </span>
        </div>
        `;
    }
}

if (!customElements.get("ts-tooltip")) {
    customElements.define("ts-tooltip", TsTooltip);
}