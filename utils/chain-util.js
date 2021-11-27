const EC = require("elliptic").ec;

const ec = new EC("secp256k1");

class ChainUtil {
	constructor() {}

	static genKeyPair() {
		return ec.genKeyPair();
	}
}

module.exports = ChainUtil;
