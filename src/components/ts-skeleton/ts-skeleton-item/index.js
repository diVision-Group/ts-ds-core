import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from './styles.scss';

export class TsSkeletonItems extends LitElement {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            width: { type: Number },
            height: { type: Number },
            format: { type: String },
        }
    }

    constructor() {
        super();
        this.width = 100;
        this.height = 100;
        this.format = 'flat';
    }

    render() {
        return html`
        <div
            class='${classMap({
            "ts-skeleton-item": true,
            [`ts-skeleton-item--${this.format}`]: this.format,
        })}'
            style='
            width: ${this.width}px; 
            height: ${this.height}px;'>
        </div>
        `;
    }
}

if (!customElements.get("ts-skeleton-item")) {
    customElements.define("ts-skeleton-item", TsSkeletonItems);
}