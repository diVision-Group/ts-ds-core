import { html } from 'lit-element';
import './index.js';

export default {
    title: 'Typography/Paragraph',
    component: 'ts-paragraph',
    parameters: {
        docs: {
            description: {
                component: 'The `<ts-paragraph>` component is used to display a paragraph.',
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-paragraph';

<ts-paragraph
    label='string'
    inverse='boolean'>
</ts-paragraph>
                `,
            }
        }
    },
    argTypes: {
        label: {
            name: 'label',
            description: 'Label of the paragraph',
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
    },
}

export const TsParagraph = (args) => html`
    <ts-paragraph
        label="${args.label}"
        ?inverse="${args.inverse}">
    </ts-paragraph>
`;

TsParagraph.args = {
    label: 'Label',
    inverse: false,
}