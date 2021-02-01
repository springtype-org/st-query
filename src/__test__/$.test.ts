import { $ } from "../$";

describe("$", () => {
	it('is defined', () => {
		expect($).toBeDefined();
	});

	it('implements all methods', () => {
		expect($(document.body).addClass).toBeInstanceOf(Function);
		expect($(document.body).attr).toBeInstanceOf(Function);
		expect($(document.body).empty).toBeInstanceOf(Function);
		expect($(document.body).html).toBeInstanceOf(Function);
		expect($(document.body).hasClass).toBeInstanceOf(Function);
		expect($(document.body).removeClass).toBeInstanceOf(Function);
		expect($(document.body).toggleClass).toBeInstanceOf(Function);
	});
});
