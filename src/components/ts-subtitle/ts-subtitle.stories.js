import { html } from 'lit';
import './index.js';

export default {
    title: 'Typography/Subtitle',
    component: 'ts-subtitle',
    parameters: {
        docs: {
            description: {
                component: 'The `<ts-subtitle>` component is used to display a subtitle.',
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-subtitle';

<ts-subtitle
    label='string'
    inverse='boolean'>
</ts-subtitle>
                `,
            }
        }
    },
    argTypes: {
        label: {
            name: 'label',
            description: 'Label of the subtitle',
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

export const TsSubtitle = (args) => html`
    <ts-subtitle
        label="${args.label}"
        ?inverse="${args.inverse}">
    </ts-subtitle>
`;

TsSubtitle.args = {
    label: 'Label',
    inverse: false,
}