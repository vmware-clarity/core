import * as React from 'react';
import { render } from '@testing-library/react';
import { CdsSignpost } from './index';

describe('CdsSignpost', () => {
  it('renders', async () => {
    render(<CdsSignpost>Oh hai</CdsSignpost>);

    expect(document.querySelector('cds-signpost')).toBeInTheDocument();
  });

  it('snapshot', () => {
    const vertDivStyle = {
      height: '140px',
      marginTop: '24px',
    };
    const { container } = render(
      <>
        <CdsSignpost></CdsSignpost>
        <div style={vertDivStyle}>
          <CdsSignpost orientation="vertical">1</CdsSignpost>
        </div>
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
