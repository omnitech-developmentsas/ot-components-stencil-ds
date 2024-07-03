import { newSpecPage } from '@stencil/core/testing';
import { OtTypography } from '../ot-typography';

describe('ot-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OtTypography],
      html: `<ot-typography></ot-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <ot-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ot-typography>
    `);
  });
});
