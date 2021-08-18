// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
	const abcArr = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	function substitution(input, alphabet, encode = true) {
		if (
			!alphabet ||
			alphabet.length !== 26 ||
			!input ||
			typeof input !== "string"
		)
			return false;
		let alphaArr = alphabet.toLowerCase().split("");
		let duplicate = alphaArr.some((el, i) => alphabet.indexOf(el) !== i);
		if (duplicate) return false;

		let result = "";
		input = input.toLowerCase().split("");
		if (encode) {
			for (let i = 0; i < input.length; i++) {
				const codeLttr = alphaArr[abcArr.indexOf(input[i])];
				if (codeLttr) {
					result += codeLttr;
				} else {
					result += " ";
				}
			}
		}
		if (!encode) {
			for (let i = 0; i < input.length; i++) {
				const deCode = abcArr[alphaArr.indexOf(input[i])];
				if (deCode) {
					result += deCode;
				} else {
					result += " ";
				}
			}
		}
		return result;
	}

	return {
		substitution,
	};
})();

module.exports = { substitution: substitutionModule.substitution };
