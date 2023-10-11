import { LitElement, html } from "lit";

export class TsSelectOption extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            value: { type: String }
        }
    }

    constructor() {
        super();
        this.label = "";
        this.value = "";
    }

    render() {
        return html`
            <option value=${this.value}>${this.label}</option>
        `;
    }
}

if(!customElements.get("ts-select-option")) {
    customElements.define("ts-select-option", TsSelectOption);
}