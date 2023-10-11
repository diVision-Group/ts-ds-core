import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from './styles.scss';

export class TsParagraph extends LitElement {
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
            <div class="${classMap({
            'ts-paragraph': true,
            'ts-paragraph--inverse': this.inverse,
        })}">
                <p>${this.label}</p>
            </div>
        `;
    }
}

if (!customElements.get('ts-paragraph')) {
    customElements.define('ts-paragraph', TsParagraph);
}