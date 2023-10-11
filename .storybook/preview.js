import { html } from "lit";

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Themes",
    description: "Themes of the application",
    defaultValue: "transdev/tema-1",
  },
  mode: {
    name: "Mode",
    description: "Mode of the application",
    defaultValue: "light",
    right: true,
    toolbar: {
      icon: "edit",
      items: [
        { value: "light", title: "Light", right: "Light" },
        { value: "dark", title: "Dark", right: "Dark" },
      ],
      showname: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    let style = "";
    let split = context.globals.theme.split("/");
    let brand = split[0];
    let theme = split[1];

    if (context.globals.mode == "dark") {
      style = `
        .sb-show-main {
          background-color: #202020 !important;
        }
      `;
    }

    if (context.args.inverse) {
      style = `
        .sb-show-main, .docs-story {
          background-color: #202020 !important;
        }
        `;
      }
      
    return html`
      <style>
        ${style}
      </style>

      <div brand=${brand} theme=${theme} mode=${context.globals.mode}>
        <link
          rel="preload"
          type="text/css"
          href="tokens/globals.css"
          as="style"
        />
        <link
          rel="preload"
          type="text/css"
          href="tokens/${context.globals.theme}/${context.globals.mode}.css"
          as="style"
        />
        ${Story()}
      </div>
    `;
  },
];