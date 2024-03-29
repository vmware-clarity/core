import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from './index';

describe('CdsModal', () => {
  it('renders', async () => {
    render(
      <CdsModal>
        <CdsModalHeader>
          <h3 cds-text="title">My Modal</h3>
        </CdsModalHeader>
        <CdsModalContent>
          <div cds-layout="vertical gap:md p-y:xs">
            <p cds-text="body">Lorem Ipsum</p>
          </div>
        </CdsModalContent>
        <CdsModalActions>
          <div cds-layout="horizontal gap:sm align:right">Foo</div>
        </CdsModalActions>
      </CdsModal>
    );

    expect(await screen.findByText('My Modal')).toBeInTheDocument();
    expect(document.querySelector('cds-modal-content')).toHaveTextContent(/Lorem Ipsum/);
    expect(document.querySelector('cds-modal-actions')).toHaveTextContent(/Foo/);

    expect(document.querySelector('cds-modal')).not.toHaveAttribute('hidden');
  });

  it('should open and close', async () => {
    const user = userEvent.setup();
    const TestComponent = () => {
      const [hidden, setHidden] = React.useState(true);
      return (
        <>
          <button onClick={() => setHidden(false)}></button>
          <CdsModal hidden={hidden} onCloseChange={() => setHidden(true)}>
            <CdsModalHeader>
              <h3 cds-text="title">My Modal</h3>
            </CdsModalHeader>
          </CdsModal>
        </>
      );
    };

    render(<TestComponent></TestComponent>);

    const modal = document.querySelector('cds-modal');
    expect(modal).toHaveAttribute('hidden', 'true');

    await user.click(screen.getByRole('button'));
    expect(modal).not.toHaveAttribute('hidden');

    // clicking the backdrop should hide the modal
    await user.click(modal.shadowRoot.querySelector('.overlay-backdrop'));
    expect(modal).toHaveAttribute('hidden', 'true');
  });

  it('snapshot', () => {
    const { container } = render(
      <CdsModal>
        <CdsModalHeader>
          <h3 cds-text="title">My Modal</h3>
        </CdsModalHeader>
        <CdsModalContent>
          <div cds-layout="vertical gap:md p-y:xs">
            <p cds-text="body">Lorem Ipsum</p>
          </div>
        </CdsModalContent>
        <CdsModalActions>
          <div cds-layout="horizontal gap:sm align:right">Foo</div>
        </CdsModalActions>
      </CdsModal>
    );
    expect(container).toMatchSnapshot();
  });
});
