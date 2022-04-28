import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsMenu, CdsMenuItem } from './index';

describe('CdsMenu', () => {
  it('renders', async () => {
    render(
      <>
        <CdsMenu>
          <CdsMenuItem>item 1</CdsMenuItem>
          <CdsMenuItem>item 2</CdsMenuItem>
        </CdsMenu>
      </>
    );

    expect((await screen.findAllByRole('menu')).length).toEqual(1);
    expect(document.querySelectorAll('cds-menu').length).toEqual(1);
    expect(document.querySelectorAll('cds-menu-item').length).toEqual(2);
  });

  it('snapshot', () => {
    const { container } = render(
      <>
        <CdsMenu>
          <CdsMenuItem>item 1</CdsMenuItem>
          <CdsMenuItem>item 2</CdsMenuItem>
        </CdsMenu>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
