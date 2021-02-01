import { $ } from "../$";
import { IElement, render, tsx } from "springtype";

describe("General DOM manipulation", () => {

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

	it('can replace an element with another', () => {
		const divRef: any = {};
		render(<div ref={divRef}>Check</div>, document.body) as IElement;
		divRef.current = $(divRef.current).replaceWith(<div tabIndex="2">Check2</div>);
		expect($(divRef.current).attr('tabIndex')).toEqual("2");
	});

	it('remove an element', () => {
		$(document.body).remove();
		expect(document.body).toBeFalsy();
	});
});
