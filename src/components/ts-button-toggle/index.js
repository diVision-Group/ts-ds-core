import { html, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from "./styles.scss";
import SkeletonFactory from "../utils/skeletonFactory";

export class TsButtonToggle extends SkeletonFactory {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            label: { type: String },
            stateLabel: { type: String, attribute: "state-label" },
            checked: { type: Boolean },
            disabled: { type: Boolean },
            inverse: { type: Boolean },
            skeleton: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.label = "Label";
        this.stateLabel = "State Label";
        this.checked = false;
        this.disabled = false;
        this.inverse = false;
        this.skeleton = false;
    }

    updated(changedProperties) {

        let skeletonElement = [
            ".ts-button-toggle__label-text",
            ".ts-button-toggle__state-label",
            {
                component: ".ts-button-toggle__button",
                format: "rounded"
            }];

        if (changedProperties.has("skeleton")) {
            if (this.skeleton) {
                this.renderSkeleton(skeletonElement);
            } else {
                this.removeSkeleton(skeletonElement);
            }
        }
    }

    _tsHandleButtonToggleClick() {
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent("ts-button-toggle-click", {
            bubbles: true,
            composed: true,
            detail: {
                checked: this.checked,
            },
        }));
    }

    render() {
        return html`
        <div class='${classMap({
            "ts-button-toggle": true,
            "ts-button-toggle--inverse": this.inverse,
            "ts-button-toggle--disabled": this.disabled,
            "ts-button-toggle--checked": this.checked,
        })}'>
            <label class="ts-button-toggle__label">
                <span class="ts-button-toggle__label-text">${this.label}</span>
                <div class="ts-button-toggle__button-container">
                    <button
                    aria-label='button-toggle' class="ts-button-toggle__button" @click=${this._tsHandleButtonToggleClick}></button>
                </div>
            </label>
            <span class="ts-button-toggle__state-label">
            ${this.stateLabel}
            </span>
        </div>
        `;
    }
}

if (!customElements.get("ts-button-toggle")) {
    customElements.define("ts-button-toggle", TsButtonToggle);
}