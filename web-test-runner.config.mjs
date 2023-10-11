import { esbuildPlugin } from "@web/dev-server-esbuild";
import { legacyPlugin } from "@web/dev-server-legacy";

export default {
    files: 'src/**/*.test.js',
    plugins: [
        esbuildPlugin({
            loaders: {
                '.scss': 'text',
                '.svg': 'text',
            }
        }),
        legacyPlugin({
            polyfills: {
                webcomponents: true,
                custom: [
                    {
                        name: 'lit-polifill-suport',
                        path: 'node_modules/lit/polyfill-support.js',
                        test: "!('attachShadow' in Element.prototype)",
                        module: false,
                    }
                ]
            }
        })
    ]
}