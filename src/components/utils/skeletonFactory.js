import { LitElement } from "lit";

export default class SkeletonFactory extends LitElement {

    constructor() {
        super();
    }

    getSourceElement(element) {
        return this.sourceElement = this.shadowRoot.querySelector(element);
    }

    getTypeSourceElement(element) {
        return this.typeSourceElement = typeof this.shadowRoot.querySelector(element);
    }

    getDimentions(element) {
        let sourceElement = this.getSourceElement(element);
        let sourceElementStyle = sourceElement.currentStyle || window.getComputedStyle(sourceElement);

        return this.dimentions = {
            width: sourceElement.offsetWidth,
            height: sourceElement.offsetHeight,
            margins: {
                top: parseInt(sourceElementStyle.marginTop),
                right: parseInt(sourceElementStyle.marginRight),
                bottom: parseInt(sourceElementStyle.marginBottom),
                left: parseInt(sourceElementStyle.marginLeft),
            },
        };
    }

    createNewSkeleton(element, skeletonFormat) {
        let dimentions = this.getDimentions(element);
        let skeleton = document.createElement('ts-skeleton-item');

        skeleton.setAttribute('width', dimentions.width);
        skeleton.setAttribute('height', dimentions.height);
        skeleton.setAttribute('format', skeletonFormat ? skeletonFormat : 'flat');
        skeleton.setAttribute('style', `margin: ${dimentions.margins.top}px ${dimentions.margins.right}px ${dimentions.margins.bottom}px ${dimentions.margins.left}px`);

        return skeleton;
    }

    renderSkeleton(element) {
        let sourceElement;
        let skeletonElement;

        if (typeof element === 'object') {
            element.forEach(e => {
                try {
                    if (typeof e === 'string') {
                        sourceElement = this.getSourceElement(e);
                        skeletonElement = this.createNewSkeleton(e);
                    } else {
                        sourceElement = this.getSourceElement(e.component);
                        skeletonElement = this.createNewSkeleton(e.component, e.format);
                    }
                } catch (error) {
                    console.warn("Error: One or more elements can't be parsed: ", error);
                    return;
                }

                return sourceElement.style.display = 'none', sourceElement.parentNode.insertBefore(skeletonElement, sourceElement);
            })
        } else if (typeof element === 'string') {
            sourceElement = this.getSourceElement(element);
            skeletonElement = this.createNewSkeleton(element);

            return sourceElement.style.display = 'none', sourceElement.parentNode.insertBefore(skeletonElement, sourceElement);
        }
    }

    removeSkeleton(element) {
        let sourceElement;
        let skeletonElement;

        if (typeof element === 'object') {
            element.forEach(e => {
                try {
                    if (typeof e === 'string') {
                        skeletonElement = this.getSourceElement("ts-skeleton-item");
                        sourceElement = this.getSourceElement(e);
                    } else {
                        skeletonElement = this.getSourceElement('ts-skeleton-item');
                        sourceElement = this.getSourceElement(e.component);
                    }
                } catch (error) {
                    console.warn("Error: One or more elements can't be parsed: ", error);
                    return;
                }
                if (!sourceElement || !skeletonElement) {
                    return;
                }

                return skeletonElement.remove(), sourceElement.style = '';
            });
        } else if (typeof element === 'string') {
            skeletonElement = this.shadowRoot.querySelector('ts-skeleton-item');
            sourceElement = this.getSourceElement(element);

            if (!sourceElement || !skeletonElement) {
                return;
            }

            return skeletonElement.remove(), sourceElement.style = '';
        }
    }
}