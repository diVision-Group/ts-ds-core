import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from "./styles.scss";

export class TsSkeleton extends LitElement {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            display: { type: String },
            justifyContent: { type: String, attribute: "justify-content" },
            alignItems: { type: String, attribute: "align-items" },
            gap: { type: Number },
            skeletonItems: { type: Array },
        }
    }

    constructor() {
        super();
        this.display = "flex-row";
        this.justifyContent = "center";
        this.gap = 20;
        this.skeletonItems = [{
            width: 100,
            height: 100,
            format: 'flat',
        }];
    }

    render() {
        return html`
        <div 
            class='${classMap({
            "ts-skeleton": true,
            [`ts-skeleton--${this.display}`]: this.display,
            [`ts-skeleton--justify-content--${this.justifyContent}`]: this.justifyContent,
            [`ts-skeleton--align-items--${this.alignItems}`]: this.alignItems,
        })}'
        style='gap: ${this.gap}px;'>
        <slot></slot>
        </div>
        `;
    }
}

if (!customElements.get("ts-skeleton")) {
    customElements.define("ts-skeleton", TsSkeleton);
}