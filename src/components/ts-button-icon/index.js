import { html, unsafeCSS } from "lit";
import styles from './styles.scss';
import '../ts-icon/index.js';
import { classMap } from "lit/directives/class-map.js";
import SkeletonFactory from "../utils/skeletonFactory";

export class TsButtonIcon extends SkeletonFactory {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            iconSrc: { type: String, attribute: 'icon-src' },
            label: { type: String },
            size: { type: String },
            variant: { type: String },
            labeled: { type: Boolean },
            disabled: { type: Boolean },
            inverse: { type: Boolean },
            skeleton: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.iconSrc = '';
        this.label = 'Label';
        this.size = 'medium';
        this.variant = 'primary';
        this.labeled = false;
        this.disabled = false;
        this.inverse = false;
        this.skeleton = false;
    }

    updated(changedProperties) {

        let skeletonElement = [
            ".ts-button-icon__button",
            ".ts-button-icon__label",
        ]

        if (changedProperties.has('skeleton')) {
            if (this.skeleton) {
                this.renderSkeleton(skeletonElement);
            } else {
                this.removeSkeleton(skeletonElement);
            }
        }
    }

    _tsHandleButtonIconClick() {
        this.dispatchEvent(
            new CustomEvent("ts-button-icon-click", {
                composed: true,
                bubbles: true,
                detail: {
                    click: true,
                    message: "clicked",
                },
            })
        );
    }

    render() {
        return html`
        <div class='${classMap({
            'ts-button-icon': true,
            [`ts-button-icon--${this.variant}`]: this.variant,
            [`ts-button-icon--${this.size}`]: this.size,
            [`ts-button-icon--labeled`]: this.labeled,
            [`ts-button-icon--disabled`]: this.disabled,
            [`ts-button-icon--inverse`]: this.inverse,
        })}'>
            
        <button aria-label='button-icon' aria-labelledby='${this.label ? 'label' : 'icon'}' type='button' class='${classMap({
            'ts-button-icon__button': true,
            [`ts-button-icon__button--${this.variant}`]: this.variant,
            [`ts-button-icon__button--inverse`]: this.inverse,
        })}' @click=${this._tsHandleButtonIconClick}
        title="${this.label}">
            <ts-icon src=${this.iconSrc} size=${this.size} ?inverse=${this.inverse} id='icon'></ts-icon>
        </button>
        ${this.labeled ? html`
        <div class="ts-button-icon__label" id="${this.label ? 'label' : this.label}">
            <span>${this.label || "Button"}</span>
        </div>
            ` : ''}
        </div>
        `;
    }
}

if (!customElements.get('ts-button-icon')) {
    customElements.define('ts-button-icon', TsButtonIcon);
}