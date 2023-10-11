import { html, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import RenderSvg from "../utils/renderSvg";
import styles from './styles.scss';

export class TsBrand extends RenderSvg {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            src: { type: String },
            size: { type: String },
            format: { type: String },
            alt: { type: String },
            inverse: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.src = "TransdevPositivo";
        this.size = "medium";
        this.format = "circular";
        this.alt = "logo";
        this.inverse = false;
    }

    render() {
        return html`
            <div
                class="${classMap({
            "ts-brand": true,
            [`ts-brand--${this.size}`]: this.size,
            "ts-brand--inverse": this.inverse,
            [`ts-brand--${this.format}`]: this.format,
        })}">
                ${this.renderSvg()}
            </div>
        `;
    }
}

if (!customElements.get("ts-brand")) {
    customElements.define("ts-brand", TsBrand);
}