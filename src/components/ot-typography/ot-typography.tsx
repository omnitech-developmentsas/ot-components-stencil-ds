import { Component, JSX, Prop, h } from '@stencil/core';

@Component({
  tag: 'ot-typography',
})
export class OtTypography {
  ColorClasses = {
    primary: 'text-primary-600',
    secondary: 'text-secondary-500',
    success: 'text-green-500',
    danger: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500',
    light: 'text-black',
    dark: 'text-white',
  };
  SizeClasses = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
    p: 'text-base',
    span: 'text-base',
  }
    /**
   * The HTML tag to render
   * @default 'p'
   * @type {'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'}
   */
  @Prop() as: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' = 'p';
  /**
   * The color of the text
   * @default 'light'
   * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light'
   * | 'dark'}
   */
  @Prop() color: keyof typeof this.ColorClasses = 'light';

  render() {
    const Tag = this.as as keyof JSX.IntrinsicElements;
    const listClass = [
      this.ColorClasses[this.color],
      this.SizeClasses[this.as],
    ]
    return (
      <Tag class={listClass.join(' ')}>
        <slot />
      </Tag>
    );
  }
}
