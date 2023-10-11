import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from './styles.scss';

export class TsSubtitle extends LitElement {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            label: { type: String },
            inverse: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.label = 'Label';
        this.inverse = false;
    }

    render() {
        return html`
        <div class='${classMap({
            'ts-subtitle': true,
            'ts-subtitle--inverse': this.inverse,
        })}'>
            <span>${this.label}</span>
        </div>
        `;
    }
}

if (!customElements.get('ts-subtitle')) {
    customElements.define('ts-subtitle', TsSubtitle);
}
