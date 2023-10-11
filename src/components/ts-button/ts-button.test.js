import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import "./index.js";

describe("Testing Button", () => {
    it('Test default props', async () => {
        const el = await fixture(html`<ts-button></ts-button>`);
        await expect(el.size).to.equal("medium");
        await expect(el.variant).to.equal("primary");
        await expect(el.format).to.equal("flat");
        await expect(el.label).to.equal("Button");
        await expect(el.disabled).to.equal(false);
        await expect(el.loading).to.equal(false);
        await expect(el.inverse).to.equal(false);
        await expect(el.skeleton).to.equal(false);
    })
})