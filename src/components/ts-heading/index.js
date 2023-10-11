import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from './styles.scss';

export class TsHeading extends LitElement {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            level: { type: String },
            label: { type: String },
            inverse: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.level = 'h1';
        this.label = 'Label';
        this.inverse = false;
    }

    _tsHandleSetLevel() {
        switch (this.level) {
            case 'h1':
                return html`<h1>${this.label}</h1>`;
            case 'h2':
                return html`<h2>${this.label}</h2>`;
            case 'h3':
                return html`<h3>${this.label}</h3>`;
            case 'h4':
                return html`<h4>${this.label}</h4>`;
            case 'h5':
                return html`<h5>${this.label}</h5>`;
            case 'h6':
                return html`<h6>${this.label}</h6>`;
            case 'display':
                return html`<h1 class='ts-heading__display'>${this.label}</h1>`;
            case 'giant':
                return html`<h1 class='ts-heading__giant'>${this.label}</h1>`;
            default:
                return html`<h1>${this.label}</h1>`;
        }
    }

    render() {
        return html`
        <div class='${classMap({
            'ts-heading': true,
            'ts-heading--inverse': this.inverse,
        })}'>
            ${this._tsHandleSetLevel()}
         </div>
        `;
    }
}

if (!customElements.get('ts-heading')) {
    customElements.define('ts-heading', TsHeading);
}