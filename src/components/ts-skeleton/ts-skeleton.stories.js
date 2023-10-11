import { html } from "lit";
import "./index.js";
import './ts-skeleton-item/index.js';

export default {
    title: "Components/Skeleton",
    component: "ts-skeleton",
    parameters: {
        docs: {
            description: {
                component:
                    "A `<ts-skeleton>` component that can be used to display a loading state.",
            },
            source: {
                code: `

import "@transdevoficial/ts-ds-core/dist/components/ts-skeleton";
import "@transdevoficial/ts-ds-core/dist/components/ts-skeleton/ts-skeleton-item";

<ts-skeleton
    display="string"
    justify-content="string"
    align-items="string"
    gap="number"
    skeleton-items="array">
        <ts-skeleton-item width='number' height='number' format='string'></ts-skeleton-item>
</ts-skeleton>
                `,

            }
        }
    },
    argTypes: {
        display: {
            name: "display",
            description: "The display type of the skeleton container.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "'flex-row'" },
                category: "Appearance",
            },
            control: {
                type: "select",
                options: ["flex-row", "flex-column"],
            },
        },
        justifyContent: {
            name: "justify-content",
            description: "The justify content type of the skeleton container.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "'center'" },
                category: "Appearance",
            },
            control: {
                type: "select",
                options: ["center", "flex-start", "flex-end", "space-between", "space-around"],
            },
        },
        alignItems: {
            name: "align-items",
            description: "The align items type of the skeleton container.",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "center" },
                category: "Appearance",
            },
            control: {
                type: "select",
                options: ["center", "flex-start", "flex-end"],
            }
        },
        gap: {
            name: "gap",
            description: "The gap of the skeleton container.",
            table: {
                type: { summary: "number" },
                defaultValue: { summary: "20" },
                category: "Inputs",
            },
            control: {
                type: "number",
            }
        },
        skeletonItems: {
            name: "skeleton-items",
            description: "The skeleton items of the skeleton container. Is a nested array of skeleton items.",
            table: {
                type: { summary: "Empty Node" },
                defaultValue: { summary: "<ts-skeleton-item></ts-skeleton-item>" },
                category: "Inputs",
            },
            control: {
                type: "array",
                options: {
                    control: "object",
                    options: {
                        width: {
                            control: "number",
                            description: "The width of the skeleton item.",
                        },
                        height: {
                            control: "number",
                            description: "The height of the skeleton item.",
                        },
                        format: {
                            control: "select",
                            options: ["flat", "rounded", "circular"],
                            description: "The format of the skeleton item.",
                        },
                    },
                },
            },
        },
    },
}

export const TsSkeleton = (args) => html`
    <ts-skeleton
        display=${args.display}
        justify-content=${args.justifyContent}
        align-items=${args.alignItems}
        gap=${args.gap}
        .skeletonItems=${args.skeletonItems}>

        ${args.skeletonItems.map((item) => html`
        <li style='list-style: none;'>
        <ts-skeleton-item
                width=${item.width}
                height=${item.height}
                format=${item.format}>
            </ts-skeleton-item>
            <hr>
        ${item.format}
        </li>    
        `)}
    </ts-skeleton>
`;

TsSkeleton.args = {
    display: "flex-row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    skeletonItems: [
        {
            width: 100,
            height: 100,
            format: 'flat',
        },
        {
            width: 100,
            height: 100,
            format: 'rounded',
        },
        {
            width: 100,
            height: 100,
            format: 'circular',
        }
    ],
}