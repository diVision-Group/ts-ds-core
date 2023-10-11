import { html, LitElement } from "lit";

export class TableOfComponents extends LitElement {
    constructor() {
        super();
        this.data = [{
            headers: ["Component", "Web Component", "Documentation"],
            rows: {
            }
        }]
    }

    firstUpdated() {
        console.clear();

        const list = document.createElement("list-of-components");
        this.appendChild(list);

        const components = list.components;

        components.map((component) => {
            this.data[0].rows[components.indexOf(component)] = [html`${component}`];

            this.data[0].rows[components.indexOf(component)].push(html`<ts-icon size='small' color='green'/>`);
            this.data[0].rows[components.indexOf(component)].push(html`<ts-icon size='small' color='green'/>`);
        })

    }

    render() {
        return html`
        <ts-table .data=${this.data} withHeader></ts-table>
        `;
    }

}

if (!customElements.get("table-of-components")) {
    customElements.define("table-of-components", TableOfComponents);
}