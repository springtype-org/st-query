import { IElement, Ref, render, tsx } from 'springtype';
import { $ } from '..';

describe('General DOM manipulation', () => {
  it('can update children of a SpringType-created DOM element', () => {
    const el = render(<div>Check</div>) as IElement;
    $(el).html(<div>Check2</div>);
    expect(el.childNodes[0].textContent).toEqual('Check2');
  });

  it('can empty an element', () => {
    document.body.innerHTML = '<div>Test</div>';
    $(document.body).empty();
    expect(document.body.childNodes[0]).toBeFalsy();
  });

  it('can set an attribute', () => {
    $(document.body).attr('foo', 'bar');
    expect(document.body.getAttribute('foo')).toEqual('bar');
  });

  it('can get an attribute', () => {
    $(document.body).attr('foo2', 'bar');
    expect($(document.body).attr('foo2')).toEqual('bar');
  });

  it('can get an input value', () => {
    const inputRef: Ref = {};
    render(<input ref={inputRef} value="123" />, document.body) as IElement;
    expect($(inputRef.current!).val()).toEqual('123');
  });

  it('can set an input value', () => {
    const inputRef: Ref = {};
    render(<input ref={inputRef} value="123" />, document.body) as IElement;
    $(inputRef.current!).val('345');
    expect($(inputRef.current!).val()).toEqual('345');
  });

  it('can get a checkbox checked value', () => {
    const inputRef: Ref = {};
    render(<input ref={inputRef} type="checkbox" checked />, document.body) as IElement;
    expect($(inputRef.current!).val()).toEqual(true);
  });

  it('can set a checkbox checked value', () => {
    const inputRef: Ref = {};
    render(<input ref={inputRef} type="checkbox" />, document.body) as IElement;
    $(inputRef.current!).val(true);
    expect($(inputRef.current!).val()).toEqual(true);
  });

  it('can replace an element with another', () => {
    const divRef: any = {};
    render(<div ref={divRef}>Check</div>, document.body) as IElement;
    divRef.current = $(divRef.current).replaceWith(<input tabIndex="-2" />);
    expect($(divRef.current).attr('tabIndex')).toEqual('-2');
  });

  it('remove an element', () => {
    $(document.body).remove();
    expect(document.body).toBeFalsy();
  });
});
