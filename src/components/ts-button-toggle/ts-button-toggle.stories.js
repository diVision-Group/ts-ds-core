import { html } from 'lit';
import './index.js';

export default {
    title: 'Components/Button/ButtonToggle',
    component: 'ts-button-toggle',
    parameters: {
        options: {
            showPanel: true,
        },
        actions: {
            handles: ['ts-button-toggle-click'],
        },
        docs: {
            description: {
                component:
                    'The `<ts-button-toggle>` component is a toggle button that can be used to toggle between two states.',
            },
            source: {
                code: `

import "@transdevoficial/ts-ds-core/dist/components/ts-button-toggle";

<ts-button-toggle
    label="string"
    state-label="string"
    checked="boolean"
    disabled="boolean"
    inverse="boolean"
    skeleton="boolean"
    @ts-button-toggle-click="event">
</ts-button-toggle>
                `,
            }
        }
    },
    argTypes: {
        label: {
            name: 'label',
            description: 'Label of the button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Label' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        stateLabel: {
            name: 'state-label',
            description: 'Label of the state',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'State Label' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        checked: {
            name: 'checked',
            description: 'Checked state of the button',
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
            description: 'Disabled state of the button',
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
            description: 'Inverse state of the button',
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
            description: 'Skeleton state of the button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        'ts-button-toggle-click': {
            name: 'ts-button-toggle-click',
            description: 'Event emitted when the button is clicked',
            table: {
                type: { summary: 'Event' },
                defaultValue: { summary: 'Event' },
                category: 'Events',
            },
        },
    }
}

export const TsButtonToggle = (args) => html`
    <ts-button-toggle
        label=${args.label}
        state-label=${args.stateLabel}
        ?checked=${args.checked}
        ?disabled=${args.disabled}
        ?inverse=${args.inverse}
        ?skeleton=${args.skeleton}
        @ts-button-toggle-click=${args['ts-button-toggle-click']}>
    ></ts-button-toggle>
`;

TsButtonToggle.args = {
    label: 'Label',
    stateLabel: 'State Label',
    checked: false,
    disabled: false,
    inverse: false,
    skeleton: false,
}

export const Skeleton = () => html`
    <ts-button-toggle skeleton></ts-button-toggle>
`;

Skeleton.story = {
    title: "Components/TsButton/Skeleton",
    component: "ts-skeleton",
    parameters: {
        options: {
            showPanel: false,
        },
        docs: {
            storyDescription: "This is a skeleton of a button toggle component.",
            source: {
                code: `
import '@transdevoficial/ts-ds-core/dist/components/ts-button-toggle';

<ts-button-toggle skeleton></ts-button-toggle>
                  `,

            }
        }
    },
}