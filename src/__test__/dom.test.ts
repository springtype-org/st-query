import { $ } from "../$";

describe("General DOM manipulation", () => {
	it('can set html as string', () => {
		$(document.body).html('<div>Check</div>');
		expect(document.body.querySelector('div')!.childNodes[0]).toBeDefined();
	});

	it('can get html as string', () => {
		$(document.body).html('<div>Check2</div>');
		expect($(document.body).html()).toEqual('<div>Check2</div>');
	});

	it('can empty an element', () => {
		$(document.body).html('<div>Check2</div>');
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
});
