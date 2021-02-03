import { IElement, render, tsx } from 'springtype';
import { $ } from '..';

describe('Event handling', () => {
  it('can register for an event programmatically', () => {
    const elRef: any = {};
    render(
      <button type="button" ref={elRef}>
        Click me
      </button>,
    ) as IElement;

    const onClick = jest.fn(() => {});
    $(elRef.current).on('click', onClick);

    elRef.current.click();

    expect(onClick.mock.calls.length).toEqual(1);
  });

  it('can *un*register for an event programmatically', () => {
    const elRef: any = {};
    render(
      <button type="button" ref={elRef}>
        Click me
      </button>,
    ) as IElement;

    const onClick = jest.fn(() => {});
    $(elRef.current).on('click', onClick);
    $(elRef.current).off('click', onClick);

    elRef.current.click();

    expect(onClick.mock.calls.length).toEqual(0);
  });
});
