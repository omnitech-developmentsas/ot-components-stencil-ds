import { newE2EPage } from '@stencil/core/testing';

describe('ot-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ot-typography></ot-typography>');

    const element = await page.find('ot-typography');
    expect(element).toHaveClass('hydrated');
  });
});
