import { html } from 'lit';
import './index.js';
import * as icons from '@transdevoficial/ds-assets/dist/assets/icons/index.js';

export default {
    title: 'Components/Link',
    component: 'ts-link',
    parameters: {
        actions: {
            handles: ['ts-link-click'],
        },
        docs: {
            description: {
                component: '`<ts-link>` component is a link component with a lot of options to customize it'
            },
            source: {
                code: `
import '@transdevoficial/ts-ds-core/dist/components/ts-link';

<ts-link 
    link='string' 
    label='string' 
    target='string' 
    icon-src='string' 
    disabled='boolean' 
    inverse='boolean' 
    with-icon='boolean' 
    @ts-link-click='event'>
</ts-link>
                `
            }
        }
    },
    argTypes: {
        link: {
            name: 'link',
            description: 'Link of the link',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '#' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        label: {
            name: 'label',
            description: 'Label of the link',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Link' },
                category: 'Inputs',
            },
            control: {
                type: 'text',
            },
        },
        target: {
            name: 'target',
            description: 'Target of the link',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '_self' },
                category: 'Inputs',
            },
            control: {
                type: 'select',
                options: ['_self', '_blank', '_parent', '_top'],
            },
        },
        iconSrc: {
            name: 'icon-src',
            description: 'Icon src of the link',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
                category: 'Inputs',
            },
            control: {
                type: 'select',
                options: Object.keys(icons),
            },
        },
        disabled: {
            name: 'disabled',
            description: 'Disabled state of the link',
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
            description: 'Inverse state of the link',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        withIcon: {
            name: 'with-icon',
            description: 'With icon state of the link',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'State',
            },
            control: {
                type: 'boolean',
            },
        },
        'ts-link-click': {
            name: 'ts-link-click',
            description: 'Event fired when the link is clicked',
            table: {
                type: { summary: 'CustomEvent' },
                defaultValue: { summary: '{}' },
                category: 'Events',
            },
        },
    },
}

export const TsLink = (args) => html`
    <ts-link
        link=${args.link}
        label=${args.label}
        target=${args.target}
        icon-src=${icons[args.iconSrc]}
        ?disabled=${args.disabled}
        ?inverse=${args.inverse}
        ?with-icon=${args.withIcon}
        @ts-link-click=${args['ts-link-click']}
        ></ts-link>
`;

TsLink.args = {
    link: '#',
    label: 'Link',
    target: '_self',
    iconSrc: '',
    disabled: false,
    inverse: false,
    withIcon: false,
}