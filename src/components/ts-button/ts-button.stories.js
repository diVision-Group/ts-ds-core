import "./index.js";
import { html } from "lit";
import '../ts-skeleton/index.js';

export default {
  title: "Components/Button",
  component: "ts-button",
  parameters: {
    options: {
      showPanel: true,
    },
    actions: {
      handles: ["ts-button-click"],
    },
    docs: {
      description: {
        component:
          "`<ts-button>` component is a button component with a lot of options to customize it.",
      },
      source: {
        code: `
import '@transdevoficial/ts-ds-core/dist/components/ts-button';

<ts-button 
  size="string"
  variant="string"
  format="string"
  label="string"
  disabled="boolean"
  loading="boolean"
  inverse="boolean"
  skeleton="boolean"
  @ts-button-click="event">
</ts-button>
                `,
      },
    },
  },
  argTypes: {
    size: {
      name: "size",
      description: "Size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "medium" },
        category: "Appearance",
      },
      options: ["small", "medium", "large"],
      control: {
        type: "select",
        labels: {
          small: "Small",
          medium: "Medium",
          large: "Large",
        }
      },
    },
    variant: {
      name: "variant",
      description: "Variant of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
        category: "Appearance",
      },
      options: ["primary", "secondary", "danger", "success", "warning"],
      control: {
        type: "select",
        labels: {
          primary: "Primary",
          secondary: "Secondary",
          danger: "Danger",
          success: "Success",
          warning: "Warning",
        }
      },
    },
    format: {
      name: "format",
      description: "Format of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "flat" },
        category: "Appearance",
      },
      options: ["flat", "rounded"],
      control: {
        type: "select",
        labels: {
          flat: "Flat",
          rounded: "Rounded",
        }
      },
    },
    label: {
      name: "label",
      description: "Label of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Button" },
        category: "Inputs",
      },
      control: {
        type: "text",
      },
    },
    disabled: {
      name: "disabled",
      description: "Disabled state of the button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
      control: {
        type: "boolean",
      },
    },
    loading: {
      name: "loading",
      description: "Loading state of the button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
      control: {
        type: "boolean",
      },
    },
    inverse: {
      name: "inverse",
      description: "Inverse state of the button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
      control: {
        type: "boolean",
      },
    },
    skeleton: {
      name: "skeleton",
      description: "Skeleton state of the button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    "ts-button-click": {
      name: "ts-button-click",
      description: "Event dispatched when the button is clicked",
      table: {
        type: { summary: "Event" },
        defaultValue: { summary: "Event" },
        category: "Events",
      }
    },
  },
};

export const TsButton = (args) => html`
  <ts-button
    size=${args.size}
    variant=${args.variant}
    format=${args.format}
    label=${args.label}
    ?disabled=${args.disabled}
    ?loading=${args.loading}
    ?inverse=${args.inverse}
    ?skeleton=${args.skeleton}
    @ts-button-click=${args["ts-button-click"]}
  ></ts-button>
`;

TsButton.args = {
  size: "medium",
  variant: "primary",
  format: "flat",
  label: "Button",
  disabled: false,
  loading: false,
  inverse: false,
  skeleton: false,
};

export const Skeleton = () => html`
  <ts-button skeleton></ts-button>
`;

Skeleton.story = {
  title: "Components/TsButton/Skeleton",
  component: "ts-skeleton",
  parameters: {
    options: {
      showPanel: false,
    },
    docs: {
      storyDescription: "This is a skeleton of a button component.",
      source: {
        code: `
import '@transdevoficial/ts-ds-core/dist/components/ts-button';

<ts-button skeleton></ts-button>
                `,

      }
    }
  },
}