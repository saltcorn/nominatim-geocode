var crypto = require("crypto");
var getSHA256ofJSON = function (input) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(input))
    .digest("hex");
};
class Query {
  hash() {
    const h = getSHA256ofJSON(this);
    return h;
  }

  // Axios needs a plain object
  plainObject() {
    return JSON.parse(JSON.stringify(this));
  }
}

module.exports = Query;
/*
{"format":"json","limit":1,"postalcode":"NW2 2QE","country":"UK"} 68429ab8dfb478ac81909ea779a6dd92090ee806
{"format":"json","limit":1,"postalcode":"BL2 2LE","country":"UK"} 68429ab8dfb478ac81909ea779a6dd92090ee806
*/
