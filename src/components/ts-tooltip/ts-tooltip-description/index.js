import { html, LitElement } from "lit";

export class TsTooltipDescription extends LitElement {
    static get properties() {
        return {
            label: { type: String },
        }
    }

    constructor() {
        super();
        this.label = "Hover me!";
    }

    render() {
        return html`
        <span part'description'>
            ${this.label}
        </span>
        `;
    }
}

if (!customElements.get("ts-tooltip-description")) {
    customElements.define("ts-tooltip-description", TsTooltipDescription);
}