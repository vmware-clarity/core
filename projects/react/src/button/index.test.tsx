import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsButton } from './index';

describe('CdsButton', () => {
  it('renders', async () => {
    render(
      <>
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="danger" disabled>
          disabled
        </CdsButton>
      </>
    );

    expect(await screen.findByRole('button', { name: 'primary' })).toHaveAttribute('status', 'primary');
    expect(await screen.findByRole('button', { name: 'success' })).toHaveAttribute('status', 'success');
    // There's a lit issue that is resulting in this being 'true' instead of ''
    // https://github.com/lit/lit/issues/2799#issuecomment-1203178300
    expect(await screen.findByRole('button', { name: 'disabled' })).toHaveAttribute('disabled', 'true');
  });

  it('snapshot', () => {
    const { container } = render(
      <>
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="danger" disabled>
          disabled
        </CdsButton>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
