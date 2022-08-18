import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CdsDropdown } from './index';

const TestComponent = ({ defaultHidden = false }: { defaultHidden?: boolean }) => {
  const [hidden, setHidden] = React.useState(defaultHidden);
  const ref = React.useRef<HTMLSpanElement>();

  return (
    <>
      <button onClick={() => setHidden(false)} />
      <span ref={ref}>Anchor Element</span>
      <CdsDropdown hidden={hidden} anchor={ref.current} onCloseChange={() => setHidden(true)}></CdsDropdown>
    </>
  );
};

describe('CdsDropdown', () => {
  // throws Error: Uncaught [TypeError: Cannot read property 'disconnect' of undefined]
  it('renders', () => {
    render(<TestComponent></TestComponent>);
  });

  it('should open and close', async () => {
    const user = userEvent.setup();
    render(<TestComponent defaultHidden></TestComponent>);

    const dropdown = document.querySelector('cds-dropdown');
    expect(dropdown).toHaveAttribute('hidden', 'true');
    expect(await screen.queryByRole('dialog')).not.toBeInTheDocument();

    await user.click(await screen.findByRole('button'));
    expect(dropdown).not.toHaveAttribute('hidden');
    expect(await screen.queryByRole('dialog')).toBeInTheDocument();

    // clicking the backdrop should hide the dropdown
    const overlay = dropdown.shadowRoot.querySelector('.overlay-backdrop');
    expect(overlay).not.toBeUndefined();

    await user.click(overlay);
    expect(dropdown).toHaveAttribute('hidden', 'true');
    expect(await screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('snapshot', () => {
    const vertDivStyle = {
      height: '140px',
      marginTop: '24px',
    };
    const { container } = render(
      <div>
        <CdsDropdown></CdsDropdown>
        <div style={vertDivStyle}>
          <CdsDropdown orientation="vertical">1</CdsDropdown>
        </div>
      </div>
    );
    expect(container).toMatchSnapshot();
  });
});
