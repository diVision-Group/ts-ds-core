import { html, LitElement, unsafeCSS } from "lit";
import styles from './styles.scss';
import '../ts-tooltip/index.js';
import '../ts-icon/index.js';
import { classMap } from "lit/directives/class-map.js";

export class TsIconTooltip extends LitElement {
    static get styles() {
        return unsafeCSS(styles);
    }

    static get properties() {
        return {
            icon: { type: String },
            tooltipText: { type: String, attribute: 'tooltip-text' },
            position: { type: String },
            align: { type: String },
            inverse: { type: Boolean },
            disabled: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.icon = '';
        this.tooltipText = '';
        this.position = 'top';
        this.align = 'center';
        this.inverse = false;
        this.disabled = false;
    }

    render() {
        return html`
        <div class='${classMap({
            'ts-icon-tooltip': true,
            'ts-icon-tooltip--disabled': this.disabled,
        })}'>
        <ts-tooltip ?inverse=${this.inverse} ?disabled=${this.disabled} label=${this.tooltipText} position=${this.position} align=${this.align}>
        <ts-icon src=${this.icon} size='large' ?inverse=${this.inverse}></ts-icon>
        </ts-tooltip>
        </div>
        `;
    }
}

if (!customElements.get('ts-icon-tooltip')) {
    customElements.define('ts-icon-tooltip', TsIconTooltip);
}