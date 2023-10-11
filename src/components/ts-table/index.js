import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import styles from "./ts-table.styles.scss";

export class TsTable extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  static get properties() {
    return {
      withHeader: { type: Boolean },
      inverse: { type: Boolean },
      data: { type: Array },
    };
  }

  constructor() {
    super();
    this.withHeader = false;
    this.inverse = false;
    this.data = [];
  }

  renderDataHeaders() {
    const headers = this.data[0].headers.map((header, index) => {
      return html`<th role="columnheader">${header}</th>`;
    });
    return html`<thead><tr>${headers}</tr></thead>`;
  }

  renderDataBody() {
    const body = this.data[0].rows;
    const rows = Object.keys(body).map((key) => {
      const row = body[key];
      const cells = row.map((cell, index) => {
        return html`<td>${cell}</td>`;
      });
      return html`<tr>${cells}</tr>`;
    }
    );
    return html`<tbody>${rows}</tbody>`;
  }

  render() {
    return html`
      <div class="${classMap({
      "ts-table": true,
      "ts-table--inverse": this.inverse,
    })}">
        ${this.withHeader ? this.renderDataHeaders() : ""}
        ${this.renderDataBody()}
      </div>
    `;
  }
}

if (!customElements.get("ts-table")) {
  customElements.define("ts-table", TsTable);
}
