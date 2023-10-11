import { html } from 'lit';
import './index.js';
import '../ts-skeleton/index.js';
import '../ts-skeleton/ts-skeleton-item/index.js';

export default {
    title: 'Components/TextArea',
    component: 'ts-textarea',
    parameters: {
        options: {
            showPanel: true,
        },
        actions: {
            handles: ['ts-textarea-count-change']
        },
        docs: {
            description: {
                component: "`ts-textarea` is a textarea component with a label, placeholder, info message, and a counter.",
            },
            source: {
                code: `

import "@transdevoficial/ts-ds-core/dist/components/ts-textarea";

<ts-textarea
    label="string"
    placeholder="string"
    info-message="string"
    max-count="number"
    id="string"
    name="string"
    disabled="boolean"
    inverse="boolean"
    only-text-area="boolean"
    skeleton="boolean"
    @ts-textarea-count-change="event">
</ts-textarea>
                `,
            }
        },
    },
    argTypes: {
        label: {
            name: 'label',
            description: 'Label of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Label' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        placeholder: {
            name: 'placeholder',
            description: 'Placeholder of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Placeholder' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        infoMessage: {
            name: 'info-message',
            description: 'Info message of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Info message' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        maxCount: {
            name: 'max-count',
            description: 'Max count of the textarea',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'Max count' },
                category: 'Inputs',
            },
            control: {
                type: 'number',
            },
        },
        id: {
            name: 'id',
            description: 'Id of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Id' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        name: {
            name: 'name',
            description: 'Name of the textarea',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Name' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        disabled: {
            name: 'disabled',
            description: 'Disabled state of the textarea',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        inverse: {
            name: 'inverse',
            description: 'Inverse style',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        onlyTextArea: {
            name: 'only-text-area',
            description: 'Only text area',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        skeleton: {
            name: 'skeleton',
            description: 'Skeleton state',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            }
        },
        'ts-textarea-count-change': {
            name: 'ts-textarea-count-change',
            description: 'Event dispatched when the textarea count changes',
            table: {
                type: { summary: 'Event' },
                defaultValue: { summary: 'Event' },
                category: 'Events',
            },
        },
    },
}

export const TsTextArea = (args) => html`
    <ts-textarea
        label=${args.label}
        placeholder=${args.placeholder}
        info-message=${args.infoMessage}
        id=${args.id}
        name=${args.name}
        max-count=${args.maxCount}
        ?disabled=${args.disabled}
        ?inverse=${args.inverse}
        ?only-text-area=${args.onlyTextArea}
        ?skeleton=${args.skeleton}
    ></ts-textarea>
`;

TsTextArea.args = {
    label: 'Label',
    placeholder: 'Placeholder',
    infoMessage: 'Info message',
    id: 'textarea',
    name: 'textarea',
    maxCount: 100,
    disabled: false,
    inverse: false,
    onlyTextArea: false,
    skeleton: false,
}

export const Skeleton = () => html`
    <ts-textarea skeleton></ts-textarea>
`;

Skeleton.story = {
    title: "Components/TsTextArea/Skeleton",
    component: "ts-skeleton",
    parameters: {
        options: {
            showPanel: false,
        },
        docs: {
            description: {
                story: "This is a skeleton of a `ts-textarea` component.",
            },
            source: {
                code: `
import "@transdevoficial/ts-ds-core/dist/components/ts-textarea";

<ts-textarea skeleton></ts-textarea>
                  `,

            }
        }
    },
}