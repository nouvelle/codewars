// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

const cleanString = s => {
  const rtn = [];
  for (const char of s) {
    char !== "#" ? rtn.push(char) : rtn.pop();
  }
  return rtn.join("");
};

// const clean_string = s =>
//   s.split("").reduce((r, e) => (e == "#" ? r.slice(0, -1) : r + e), "");

module.exports = { cleanString };
