import { html } from 'lit';
import './index.js';

export default {
    title: 'Typography/Heading',
    component: 'ts-heading',
    parameters: {
        docs: {
            description: {
                component:
                    'The `<ts-heading>` component is a typographic component that can be used to create headings.',
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-heading';

<ts-heading
    level="string"
    label="string"
    inverse="boolean">
</ts-heading>
`,
            }
        },
    },
    argTypes: {
        level: {
            name: 'Level',
            description: 'Heading level',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'h1' },
                category: 'Appearance',
            },
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display', 'giant'],
            },
        },
        label: {
            name: 'Label',
            description: 'Heading label',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Label' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        inverse: {
            name: 'Inverse',
            description: 'Inverse heading',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
    },
}

export const TsHeading = (args) => html`
<ts-heading
    level="${args.level}"
    label="${args.label}"
    ?inverse="${args.inverse}">
</ts-heading >
                `;

TsHeading.args = {
    level: 'h1',
    label: 'Label',
    inverse: false,
}