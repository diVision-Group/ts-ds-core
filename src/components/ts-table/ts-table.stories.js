import { html } from "lit";
import "./index.js";

export default {
  title: "Components/Table",
  component: "ts-table",
  parameters: {
    docs: {
      description: {
        component: `<code>TsTable</code> component description
 
**Related components:**
- <a href="./?path=/docs/component-ts-table-header--default"><code>ts-table-header</code></a>
- <a href="./?path=/docs/component-ts-table-row--default"><code>ts-table-row</code></a>
- <a href="./?path=/docs/component-ts-table-column--default"><code>ts-table-column</code></a>
- <a href="./?path=/docs/component-ts-table-cel--default"><code>ts-table-cel</code></a>

`,
      },
    },
  },
  argTypes: {
    withHeader: {
      name: "withHeader",
      description: "withHeader description",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "withHeader default value" },
        category: "withHeader category",
      },
      control: "boolean",
    },
    inverse: {
      name: "inverse",
      description: "inverse description",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "inverse default value" },
        category: "inverse category",
      },
      control: "boolean",
    },
  },
};

const Template = (args) => html`
  <ts-table
    .data=${args.data}
    ?withHeader=${args.withHeader}
    ?inverse=${args.inverse}
  ></ts-table>
`;

export const TsTable = Template.bind({});

TsTable.args = {
  withHeader: true,
  inverse: false,
  data: [{
    headers: [`Header 1`, "Header 2", "Header 3"],
    rows: {
      0: ["Cell 1-1", "Cell 1-2", "Cell 1-3"],
      1: ["Cell 2-1", "Cell 2-2", "Cell 2-3"],
      2: ["Cell 2-1", "Cell 2-2", "Cell 2-3"],
    }
  }],
};
