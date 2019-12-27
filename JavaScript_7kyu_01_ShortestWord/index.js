// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = s => {
  let result = 0;
  s.split(" ").forEach(word => {
    if (result === 0 || result > word.length) result = word.length;
  });
  return result;
};

module.exports = { findShort };
