const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;
describe("polybius() tests", () => {
	it("should return false if input is not a string", () => {
		const text = 12345;
		const expected = false;
		const actual = polybius(text, false);
		expect(actual).to.equal(expected);
	});
	it("should return false while decoding if the number of characters is odd.", () => {
		const text = "4567562";
		const expected = false;
		const actual = polybius(text, 0);
		expect(actual).to.equal(expected);
	});
	it("should disregard capital letters", () => {
		const text = "ABCD";
		const expected = "11213141";
		const actual = polybius(text, true);
		expect(actual).to.equal(expected);
	});
	it("'I' and 'J' should share a space. Both letters are encoded to 42 but show both letters when decoded", () => {
		const text = "4432423352125413";
		const expected = "th(i/j)nkful";
		const actual = polybius(text, false);
		expect(actual).to.equal(expected);
	});
	it("should return false if the input numbers do not match the numbers in the cipher object", () => {
		expected = false;
		actual = polybius(16273849);
		expect(actual).to.equal(expected);
	});
});
