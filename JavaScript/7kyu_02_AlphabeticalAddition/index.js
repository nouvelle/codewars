// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'

// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

const addLetters = (...letters) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let total = letters.reduce((sum, val) => {
    return (sum += alphabet.indexOf(val) + 1);
  }, 0);
  if (total > 26) return alphabet.charAt((total % 26) - 1);
  if (total < 1) return "z";
  return alphabet.charAt(total - 1);
};

module.exports = { addLetters };
