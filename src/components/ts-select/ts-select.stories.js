import { html } from "lit";
import "./index.js";
import './ts-select-option/index.js';

export default {
    title: "Components/Select",
    component: 'ts-select',
    parameters: {
        actions: {
            handles: ["ts-selected-item", "ts-select-focus", "ts-select-blur"],
        },
        docs: {
            description: {
                component: "`<ts-select>` is a select component with custom styles and options.",
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-select';
import '@transdevoficial/ts-ds-core/dist/components/ts-select/ts-select-option';

<ts-select
    label='string'
    value='string'
    name='string'
    id='string'
    info-message='string'
    select-options='arrayOfObjects'
    disabled='boolean'
    required='boolean'
    error='boolean'
    success='boolean'
    inverse='boolean'
    @ts-selected-item='event'
    @ts-select-focus='event'
    @ts-select-blur='event'>
        <ts-select-option value='string' label='string'></ts-select-option>
</ts-select>
`
            }
        }
    },
    argTypes: {
        label: {
            name: "label",
            description: "Label of the select",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Label" },
                category: "Inputs",
            },
            control: {
                type: "text",
            },
        },
        value: {
            name: "value",
            description: "Value of the select",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Value" },
                category: "Inputs",
            },
            control: {
                type: "text",
            },
        },
        name: {
            name: "name",
            description: "Name of the select",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Name" },
                category: "Inputs",
            },
            control: {
                type: "text",
            },
        },
        id: {
            name: "id",
            description: "Id of the select",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Id" },
                category: "Inputs",
            },
            control: {
                type: "text",
            },
        },
        placeholder: {
            name: "placeholder",
            description: "Placeholder of the select",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Placeholder" },
                category: "Inputs",
            },
            control: {
                type: "text",
            },
        },
        infoMessage: {
            name: "info-message",
            description: "Info message of the select",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "Info message" },
                category: "Inputs",
            },
            control: {
                type: "text",
            },
        },
        selectOptions: {
            name: "select-options",
            description: "Options of the select - A nested array of objects that contains an ts-option component for each option",
            table: {
                type: { summary: "Empty node" },
                defaultValue: { summary: "<ts-option></ts-option>" },
                category: "Inputs",
            }
        },
        disabled: {
            name: "disabled",
            description: "Disabled state of the select",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
                category: "State",
            },
            control: {
                type: "boolean",
            },
        },
        required: {
            name: "required",
            description: "Required state of the select",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
                category: "State",
            },
            control: {
                type: "boolean",
            },
        },
        error: {
            name: "error",
            description: "Error state of the select",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
                category: "State",
            },
            control: {
                type: "boolean",
            },
        },
        success: {
            name: "success",
            description: "Success state of the select",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
                category: "State",
            },
            control: {
                type: "boolean",
            },
        },
        inverse: {
            name: "inverse",
            description: "Inverse state of the select",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
                category: "State",
            },
            control: {
                type: "boolean",
            },
        },
        'ts-selected-item': {
            name: "ts-selected-item",
            description: "Event that is triggered when the select is changed",
            table: {
                type: { summary: "Event" },
                defaultValue: { summary: "Event" },
                category: "Events",
            },
        },
        'ts-select-focus': {
            name: "ts-select-focus",
            description: "Event that is triggered when the select is focused",
            table: {
                type: { summary: "Event" },
                defaultValue: { summary: "Event" },
                category: "Events",
            },
        },
        'ts-select-blur': {
            name: "ts-select-blur",
            description: "Event that is triggered when the select is blurred",
            table: {
                type: { summary: "Event" },
                defaultValue: { summary: "Event" },
                category: "Events",
            },
        },
    },
}

export const TsSelect = (args) => html`
    <ts-select
        .label=${args.label}
        .value=${args.value}
        .name=${args.name}
        .id=${args.id}
        .placeholder=${args.placeholder}
        .infoMessage=${args.infoMessage}
        .select-options=${args.selectOptions}
        ?disabled=${args.disabled}
        ?required=${args.required}
        ?error=${args.error}
        ?success=${args.success}
        ?inverse=${args.inverse}
        @ts-selected-item=${args['ts-selected-item']}>
        
        ${args.selectOptions.map((option) => {
    return html`
        <ts-select-option label=${option.label} value=${option.value}></ts-select-option>
            `;
})}

</ts-select>
`;

TsSelect.args = {
    label: "Escolha uma opção",
    value: "",
    name: "",
    id: "",
    placeholder: "Escolha uma opção",
    infoMessage: "Info message",
    selectOptions: [
        {
            label: 'Opção 1',
            value: '1'
        },
        {
            label: 'Opção 2',
            value: '2'
        },
        {
            label: 'Opção 3',
            value: '3'
        },
    ],
    disabled: false,
    required: true,
    error: false,
    success: false,
    inverse: false,
}