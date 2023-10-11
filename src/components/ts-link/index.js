import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import '../ts-icon/index.js';
import styles from './style.scss';

export class TsLink extends LitElement {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            link: { type: String },
            label: { type: String },
            target: { type: String },
            disabled: { type: Boolean },
            inverse: { type: Boolean },
            withIcon: { type: Boolean, attribute: 'with-icon' },
            iconSrc: { type: String, attribute: 'icon-src' },
        }
    }

    constructor() {
        super();
        this.link = '#';
        this.label = 'Link';
        this.target = '_self';
        this.iconSrc = '';
        this.disabled = false;
        this.inverse = false;
        this.withIcon = false;
    }

    _handleTsLinkClick() {
        this.dispatchEvent(new CustomEvent('ts-link-click', {
            bubbles: true,
            composed: true,
            detail: {
                link: this.link,
                label: this.label,
                target: this.target,
                iconSrc: this.iconSrc,
                disabled: this.disabled,
                inverse: this.inverse,
                withIcon: this.withIcon,
            }
        }));
    }

    render() {
        return html`
        <div class=${classMap({
            'ts-link': true,
            'ts-link--disabled': this.disabled,
            'ts-link--inverse': this.inverse,
            'ts-link--icon': this.withIcon
        })}>
            <a class='ts-link__link' href=${this.link} target=${this.target} @click=${this._handleTsLinkClick}>
            ${this.withIcon ? html`
            <span>${this.label || "Link"}</span><ts-icon src=${this.iconSrc} size='small' ?inverse=${this.inverse}></ts-icon>
            ` : html`
            <span>${this.label || "Link"}</span>
            `}
            </a>
        </div>
        `;
    }
}

if (!customElements.get('ts-link')) {
    customElements.define('ts-link', TsLink)
}