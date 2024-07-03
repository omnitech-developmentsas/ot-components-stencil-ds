/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface OtTypography {
        /**
          * The HTML tag to render
          * @default 'p'
          * @type {'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'}
         */
        "as": 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
        /**
          * The color of the text
          * @default 'light'
          * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light'    * | 'dark'}
         */
        "color": keyof typeof this.ColorClasses;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLOtTypographyElement extends Components.OtTypography, HTMLStencilElement {
    }
    var HTMLOtTypographyElement: {
        prototype: HTMLOtTypographyElement;
        new (): HTMLOtTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "ot-typography": HTMLOtTypographyElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface OtTypography {
        /**
          * The HTML tag to render
          * @default 'p'
          * @type {'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'}
         */
        "as"?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
        /**
          * The color of the text
          * @default 'light'
          * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light'    * | 'dark'}
         */
        "color"?: keyof typeof this.ColorClasses;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "ot-typography": OtTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ot-typography": LocalJSX.OtTypography & JSXBase.HTMLAttributes<HTMLOtTypographyElement>;
        }
    }
}
