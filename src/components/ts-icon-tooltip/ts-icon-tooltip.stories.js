import { html } from "lit";
import "./index.js";
import * as icons from '@transdevoficial/ds-assets/dist/assets/icons/index.js';

export default {
    title: "Components/Tooltip/IconTooltip",
    component: "ts-icon-tooltip",
    parameters: {
        docs: {
            description: {
                component: "`<ts-icon-tooltip>` is a tooltip component with custom styles and options.",
            },
            source: {
                code: `

import '@transdevoficial/ts-ds-core/dist/components/ts-icon-tooltip';

<ts-icon-tooltip
    icon='string'
    tooltipText='string'
    position='string'
    align='string'
    inverse='boolean'
    disabled='boolean'>
</ts-icon-tooltip>
                `
            }
        }
    },
    argTypes: {
        icon: {
            name: "icon",
            description: "Icon to be used",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "HelpCircle" },
                category: 'Inputs',
            },
            control: {
                type: "select",
                options: Object.keys(icons)
            }
        },
        tooltipText: {
            name: "tooltip-text",
            description: "Tooltip text",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "'Some message'" },
                category: 'Inputs',
            },
            control: {
                type: "text",
            },
        },
        position: {
            name: "position",
            description: "Position of the tooltip",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "top" },
                category: 'Appearance',
            },
            control: {
                type: "select",
                options: ["top", "bottom", "left", "right"]
            }
        },
        align: {
            name: "align",
            description: "Alignment of the tooltip",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "center" },
                category: 'Appearance',
            },
            control: {
                type: "select",
                options: ["center", "start", "end"]
            }
        },
        inverse: {
            name: "inverse",
            description: "Inverse color",
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
        }
    }
}

export const TsIconTooltip = (args) => html`
<ts-icon-tooltip
        icon=${icons[args.icon]}
        tooltip-text=${args.tooltipText}
        position=${args.position}
        align=${args.align}
        ?inverse=${args.inverse}
        ?disabled=${args.disabled}>
</ts-icon-tooltip >
    `;

TsIconTooltip.args = {
    icon: "HelpCircle",
    tooltipText: "Tooltip text",
    position: "top",
    align: "center",
    inverse: false,
    disabled: false
}