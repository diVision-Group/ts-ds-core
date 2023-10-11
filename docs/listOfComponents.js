import { html, LitElement } from "lit";
import link from "@transdevoficial/ds-assets/dist/assets/icons/link.js";
import * as components from "../src/index.js";

export class ListOfComponents extends LitElement {
    constructor() {
        super();
        this.components = Object.keys(components);
    }

    render() {
        return html`
        <ts-list data=${components}>
            ${this.components
                .map((component) => {

                    const withoutPrefix = component.slice(2).toLowerCase();
                    const finalComponent = component.split(/(?=[A-Z])/).join("-").toLowerCase();

                    return html`
                <ts-list-item>
                    <ts-link 
                    with-icon
                    icon-src=${link}
                    label="${component}"
                    link="?path=/story/components-${withoutPrefix}--${finalComponent}" />
                </ts-list-item>
            `
                }
                )}
        </ts-list>
        `;
    }
}

if (!customElements.get("list-of-components")) {
    customElements.define("list-of-components", ListOfComponents);
}