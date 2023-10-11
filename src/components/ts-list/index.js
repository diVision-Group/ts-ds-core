import { html, LitElement, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './styles.scss';

export class TsList extends LitElement {
    static get styles() {
        return unsafeCSS(styles);
    }

    static get properties() {
        return {
            data: { type: Array },
            inverse: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.data = [];
        this.inverse = false;
    }

    firstUpdated() {
        const slot = this.shadowRoot.querySelector('slot');
        const childNodes = slot.assignedNodes();

        Array.prototype.filter.call(childNodes, (node) => {
            if (node.nodeName.toLowerCase() === 'ts-list-item') {
                const listItem = document.createElement('li');
                listItem.appendChild(node);
                this.shadowRoot.querySelector('.ts-list__list').appendChild(listItem);
            }
        }
        );
    }

    render() {
        return html`
            <div class="${classMap({
            'ts-list': true,
            'ts-list--inverse': this.inverse,
        })}">
                <ul class="ts-list__list">
                    <slot></slot>
                </ul>
            </div>
            `;
    }
}

if (!customElements.get('ts-list')) {
    customElements.define('ts-list', TsList);
}
