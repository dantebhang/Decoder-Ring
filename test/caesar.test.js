const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;
describe("caesar() tests", () => {
	it("should return false if the shift input is 0", () => {
		const text = "fhjh";
		const expected = false;
		const actual = caesar(text, 0, true);
		expect(actual).to.equal(expected);
	});
	it("should return false if shift input is greater than 25", () => {
		const text = "fdjks";
		const expected = false;
		const actual = caesar(text, 43, true);
		expect(actual).to.equal(expected);
	});
	it("should return false if shift input is less than -25", () => {
		const text = "djfd";
		const expected = false;
		const actual = caesar(text, -43, true);
		expect(actual).to.equal(expected);
	});
	it("should encode each letter with shift value 3", () => {
		const expected = "wklqnixo";
		const actual = caesar("thinkful", 3);
		expect(actual).to.equal(expected);
	});
	it("should return false is no shift or encode input", () => {
		const text = "thinkful";
		const expected = false;
		const actual = caesar(text);
		expect(actual).to.equal(expected);
	});
	it("should keep spaces and special characters while encoding", () => {
		const expected = "bpqa qa i amkzmb umaaiom!";
		const actual = caesar("This is a secret message!", 8);
		expect(actual).to.equal(expected);
	});
	it("should encrypt even if original message is all uppercase", () => {
		const expected = "wklqnixo";
		const actual = caesar("THINKFUL", 3, true);
		expect(actual).to.equal(expected);
	});
});
