import { html } from "lit";
import "./index.js";
import './ts-tooltip-description/index.js';

export default {
    title: "Components/Tooltip",
    component: "ts-tooltip",
    parameters: {
        docs: {
            description: {
                component: "`<ts-tooltip>` is a tooltip component with custom styles and options.",
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-tooltip';

<ts-tooltip
    label='string'
    align='string'
    position='string'
    inverse='boolean'
    disabled='boolean'>
        <ts-tooltip-description>

        // Or you can use a slot

        </ts-tooltip-description>
</ts-tooltip>
                `
            }
        }
    },
    argTypes: {
        label: {
            name: "label",
            description: "Tooltip label",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "'Some message'" },
                category: 'Inputs',
            },
            control: {
                type: "text",
            },
        },
        align: {
            name: "align",
            description: "Tooltip alignment",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "center" },
                category: 'Appearance',
            },
            control: {
                type: "select",
                options: ["center", "start", "end"],
            }
        },
        position: {
            name: "position",
            description: "Tooltip position",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "top" },
                category: 'Appearance',
            },
            control: {
                type: "select",
                options: ["top", "bottom", "left", "right"],
            }
        },
        inverse: {
            name: "inverse",
            description: "Inverse style",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
                category: 'State',
            },
            control: {
                type: "boolean",
            }
        },
        disabled: {
            name: "disabled",
            description: "Disabled state",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
                category: 'State',
            },
            control: {
                type: "boolean",
            }
        },
    }
}

export const TsTooltip = (args) => html`
    <ts-tooltip
        label=${args.label}
        align=${args.align}
        position=${args.position}
        ?inverse=${args.inverse}
        ?disabled=${args.disabled}>
        <ts-tooltip-description>
        </ts-tooltip-description>
    </ts-tooltip>
`;

TsTooltip.args = {
    label: "Some message",
    align: "center",
    position: "top",
    inverse: false,
    disabled: false,
}