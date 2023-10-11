import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import SkeletonFactory from "../utils/skeletonFactory";
import styles from "./styles.scss";

export class TsTextArea extends SkeletonFactory {
    static get styles() {
        return unsafeCSS(styles);
    }

    static get properties() {
        return {
            label: { type: String },
            placeholder: { type: String },
            infoMessage: { type: String, attribute: "info-message" },
            id: { type: String },
            name: { type: String },
            count: { type: Number },
            maxCount: { type: Number, attribute: "max-count" },
            disabled: { type: Boolean },
            inverse: { type: Boolean },
            onlyTextArea: { type: Boolean, attribute: "only-text-area" },
            skeleton: { type: Boolean }
        }
    }

    constructor() {
        super();
        this.label = "Label";
        this.placeholder = "Placeholder";
        this.infoMessage = "Info message";
        this.id = "textarea";
        this.name = "textarea";
        this.count = 0;
        this.maxCount = 100;
        this.disabled = false;
        this.inverse = false;
        this.onlyTextArea = false;
        this.skeleton = false;
    }

    firstUpdated() {
        this.shadowRoot.querySelector("textarea").addEventListener("input", () => {
            this._tsHandleTextAreaCount();
        });
    }

    _tsHandleTextAreaCount() {
        this.count = this.shadowRoot.querySelector("textarea").value.length;
        this.dispatchEvent(new CustomEvent("ts-textarea-count-change", {
            composed: true,
            bubbles: true,
            cancelable: false,
            detail: {
                count: this.count
            }
        }));
    }

    updated(changedProperties) {
        if (changedProperties.has("skeleton")) {
            if (this.skeleton) {
                this.renderSkeleton([
                    ".ts-textarea__label-text",
                    ".ts-textarea__input",
                    ".ts-textarea__info-message-text",
                    ".ts-textarea__count"
                ]);
            } else {
                this.removeSkeleton([
                    ".ts-textarea__label-text",
                    ".ts-textarea__input",
                    ".ts-textarea__info-message-text",
                    ".ts-textarea__count",
                ]);
            }
        }
    }

    render() {
        return html`
            <div class='${classMap({
            "ts-textarea": true,
            "ts-textarea--inverse": this.inverse,
            "ts-textarea--disabled": this.disabled,
        })}'>
        ${this.onlyTextArea ? html`
            <textarea
                name=${this.name}
                id=${this.id}
                class='ts-textarea__input'
                placeholder=${this.placeholder}
                ?disabled=${this.disabled}
                rows='10'
                cols='60'
                maxlength=${this.maxCount}
            ></textarea>
        ` : html`
        <label for=${this.name} class='ts-textarea__label'>
        <span class='ts-textarea__label-text'>
        ${this.label}
        </span>
        </label>
                <textarea
                    name=${this.name}
                    id=${this.id}
                    class='ts-textarea__input'
                    placeholder='${this.placeholder}'
                    ?disabled='${this.disabled}'
                    rows="10" 
                    cols="60"
                    maxlength=${this.maxCount}
                ></textarea>
                <div class='ts-textarea__info-message'>
                <span class="ts-textarea__info-message-text">
                ${this.infoMessage}
                </span>
                <div class='${classMap({
            "ts-textarea__count": true,
            "ts-textarea__count--orange": this.count > (this.maxCount / 2),
            "ts-textarea__count--red": this.count === this.maxCount,
        })}'>
                <span>
                ${this.count}
                </span>
                <span>
                /${this.maxCount}
                </span>
                </div>
                </div>
                `}
            </div>
        `;
    }
}

if (!customElements.get("ts-textarea")) {
    customElements.define("ts-textarea", TsTextArea);
}