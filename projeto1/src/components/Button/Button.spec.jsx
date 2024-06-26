import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disable when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} disabled={true} />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
  });

  it('should be disable when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} disabled={false} />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const container = render(<Button text="Load more" onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
