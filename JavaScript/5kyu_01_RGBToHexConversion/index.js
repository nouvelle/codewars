// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

const rgb = (r, g, b) => {
  function tenTo16(num) {
    if (num <= 0) return "00";
    if (num >= 255) return "FF";
    return `0${num.toString(16).toUpperCase()}`.slice(-2);
  }
  return tenTo16(r) + tenTo16(g) + tenTo16(b);
};

module.exports = { rgb };
