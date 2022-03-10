import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from './index';

describe('CdsGrid', () => {
  it('renders', async () => {
    render(
      <CdsGrid aria-label="basic datagrid demo">
        <CdsGridColumn>Type</CdsGridColumn>
        <CdsGridColumn>Description</CdsGridColumn>
        <CdsGridColumn>Amount</CdsGridColumn>
        <CdsGridColumn>Balance</CdsGridColumn>
        <CdsGridRow>
          <CdsGridCell>Deposit</CdsGridCell>
          <CdsGridCell>Item</CdsGridCell>
          <CdsGridCell>$1,000,000.00</CdsGridCell>
          <CdsGridCell>$1,000,000.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Credit</CdsGridCell>
          <CdsGridCell>Billing</CdsGridCell>
          <CdsGridCell>$250.00</CdsGridCell>
          <CdsGridCell>$523,750.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridFooter>Footer</CdsGridFooter>
      </CdsGrid>
    );

    expect(await screen.findByRole('grid', { name: /basic datagrid demo/i })).toBeInTheDocument();
    expect(await screen.findByRole('columnheader', { name: /Type/ })).toBeInTheDocument();
    expect(await screen.findByRole('gridcell', { name: /Deposit/ })).toBeInTheDocument();
    expect(screen.getByText(/Footer/)).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <div>
        <CdsGrid aria-label="basic datagrid demo">
          <CdsGridColumn>Type</CdsGridColumn>
          <CdsGridColumn>Description</CdsGridColumn>
          <CdsGridColumn>Amount</CdsGridColumn>
          <CdsGridColumn>Balance</CdsGridColumn>
          <CdsGridRow>
            <CdsGridCell>Deposit</CdsGridCell>
            <CdsGridCell>Item</CdsGridCell>
            <CdsGridCell>$1,000,000.00</CdsGridCell>
            <CdsGridCell>$1,000,000.00</CdsGridCell>
          </CdsGridRow>
          <CdsGridRow>
            <CdsGridCell>Credit</CdsGridCell>
            <CdsGridCell>Billing</CdsGridCell>
            <CdsGridCell>$250.00</CdsGridCell>
            <CdsGridCell>$523,750.00</CdsGridCell>
          </CdsGridRow>
          <CdsGridFooter></CdsGridFooter>
        </CdsGrid>
      </div>
    );
    expect(container).toMatchSnapshot();
  });
});
