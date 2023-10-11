import { html } from "lit";
import "./index.js";
import * as brands from '@transdevoficial/ds-assets/dist/assets/brand/index.js';

export default {
    title: "Components/Brand",
    component: "ts-brand",
    parameters: {
        docs: {
            description: {
                component: 'The `<ts-brand>` component is a component that renders a brand logo.',
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-brand';

<ts-brand
    src="string"
    size="string"
    format="string"
    alt="string"
    inverse="boolean">
</ts-brand>
                `,
            }
        },
    },
    argTypes: {
        src: {
            name: "src",
            description: "The source of the brand image",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "TransdevPositivo" },
                category: 'Inputs',
            },
            control: {
                type: "select",
                options: Object.keys(brands),
            }
        },
        size: {
            name: "size",
            description: "The size of the brand image",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "medium" },
                category: 'Appearance',
            },
            control: {
                type: "select",
                options: ["small", "medium", "large"]
            }
        },
        format: {
            name: "format",
            description: "The format of the brand image",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "circular" },
                category: 'Appearance',
            },
            control: {
                type: "select",
                options: ["flat", "rounded", "circular"]
            },
        },
        alt: {
            name: "alt",
            description: "The alternative text of the brand image",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "logo" },
                category: 'Inputs',
            },
            control: {
                type: "text"
            },
        },
        inverse: {
            name: "inverse",
            description: "Inverse the brand image",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
                category: 'State',
            },
            control: {
                type: "boolean"
            },
        }
    }
}

export const TsBrand = (args) => html`
    <ts-brand
        src=${brands[args.src]}
        size=${args.size}
        format=${args.format}
        alt=${args.alt}
        ?inverse=${args.inverse}
    ></ts-brand>
`;

TsBrand.args = {
    src: "TransdevPositivo",
    size: "medium",
    format: "circular",
    alt: "logo",
    inverse: false,
};

