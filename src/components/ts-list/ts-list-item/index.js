import { html, LitElement } from "lit";

export class TsListItem extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <li>
                <slot></slot>
            </li>
        `;
    }
}

if (!customElements.get("ts-list-item")) {
    customElements.define("ts-list-item", TsListItem);
}