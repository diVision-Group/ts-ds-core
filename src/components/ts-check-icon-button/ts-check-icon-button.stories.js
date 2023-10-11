import { html } from 'lit';
import './index.js';

export default {
    title: 'Components/CheckIconButton',
    component: 'ts-check-icon-button',
    parameters: {
        actions: {
            handles: ['ts-check-icon-button-click'],
        },
        docs: {
            description: {
                component:
                    'The `ts-check-icon-button` component is a button with a check icon. It can be used to toggle a state.',
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-check-icon-button';

<ts-check-icon-button
    checked="boolean"
    disabled="boolean"
    loading="boolean"
    inverse="boolean"
    @ts-check-icon-button-click="event">
</ts-check-icon-button>
                `,
            }
        }
    },
    argTypes: {
        checked: {
            name: 'checked',
            description: 'Toggle the state of the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        disabled: {
            name: 'disabled',
            description: 'Disable the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        loading: {
            name: 'loading',
            description: 'Show a loading animation',
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
            description: 'Inverse the color of the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        'ts-check-icon-button-click': {
            name: 'ts-check-icon-button-click',
            description: 'Event dispatched when the button is clicked',
            table: {
                type: { summary: 'object' },
                defaultValue: { summary: '{}' },
                category: 'Events',
            },
        },
    },
}

export const TsCheckIconButton = (args) => html`
    <ts-check-icon-button
        ?checked=${args.checked}
        ?disabled=${args.disabled}
        ?loading=${args.loading}
        ?inverse=${args.inverse}
        @ts-check-icon-button-click=${args['ts-check-icon-button-click']}>
    </ts-check-icon-button>
`;

TsCheckIconButton.args = {
    checked: false,
    disabled: false,
    loading: false,
    inverse: false,
};