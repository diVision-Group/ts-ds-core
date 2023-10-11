import { html } from 'lit';
import './index.js';

export default {
    title: 'Components/CheckBox',
    component: 'ts-checkbox',
    parameters: {
        actions: {
            handles: ['ts-checkbox-change']
        },
        docs: {
            description: {
                component: '`<ts-checkbox>` component is a simple checkbox component.',
            },
            source: {
                code: `
                
import '@transdevoficial/ts-ds-core/dist/components/ts-checkbox';

<ts-checkbox
    label="string"
    checked="boolean"
    disabled="boolean"
    inverse="boolean"
    @ts-checkbox-change="event">
 </ts-checkbox>
`
            }
        }
    },
    argTypes: {
        label: {
            name: 'label',
            description: 'The label of checkbox',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
                category: 'Inputs'
            },
            control: {
                type: 'text'
            }
        },
        checked: {
            name: 'checked',
            description: 'The checked state of checkbox',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State'
            },
            control: {
                type: 'boolean'
            },
        },
        disabled: {
            name: 'disabled',
            description: 'The disabled state of checkbox',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State'
            },
            control: {
                type: 'boolean'
            },
        },
        inverse: {
            name: 'inverse',
            description: 'The inverse state of checkbox',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State'
            },
            control: {
                type: 'boolean'
            },
        },
        'ts-checkbox-change': {
            name: 'ts-checkbox-change',
            description: 'The event of checkbox',
            table: {
                type: { summary: 'Event' },
                defaultValue: { summary: '{}' },
                category: 'Events'
            }
        }
    }
};

export const TsCheckBox = (args) => html`
    <ts-checkbox
        label=${args.label}
        ?checked=${args.checked}
        ?disabled=${args.disabled}
        ?inverse=${args.inverse}
        @ts-checkbox-change=${args['ts-checkbox-change']}
        ></ts-checkbox>
`;

TsCheckBox.args = {
    label: 'Checkbox',
    checked: false,
    disabled: false,
    inverse: false
};