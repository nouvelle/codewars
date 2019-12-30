// You are organizing a soccer tournament, so you need to build a matches table.

// The tournament is composed by 20 teams. It is a round-robin tournament (all-play-all), so it has 19 rounds, and each team plays once per round. Each team confront the others once in the tournament (each match does not repeat in the tournament).

// Your mission is to implement a function "buildMatchesTable" that receives the number of teams (always a positive and even number) and returns a matrix. Each line of the matrix represents one round. Each column of the matrix represents one match. The match is represented as an array with two teams. Each team is represented as a number, starting from 1 until the number of teams.

// Example:

// buildMatchesTable(4)
// Should return a matrix like that:

// [
//   [[1,2], [3, 4]],  // first round:  1 vs 2, 3 vs 4
//   [[1,3], [2, 4]],  // second round: 1 vs 3, 2 vs 4
//   [[1,4], [2, 3]]   // third round:  1 vs 4, 2 vs 3
// ]
// You should not care about the order of the teams in the match, nor the order of the matches in the round. You should just care about the rules of the tournament.

// Good luck!

// Hint: you may use the predefined function "printTable" to debug your results.

const buildMatchesTable = numberOfTeams => {
  let result = [];
  let table = makeDefaultTable(numberOfTeams);

  while (true) {
    result.push(makeTable(table));
    if (checktable(table)) break;
  }

  function checktable(checktable) {
    let rtn = true;
    for (arr of checktable) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "F") rtn = false;
        if (!rtn) break;
      }
    }
    return rtn;
  }

  function makeTable(checktable) {
    let teams = [];
    let selectedTeam = [];
    for (let i = 0; i < numberOfTeams; i++) {
      for (let j = 0; j < numberOfTeams; j++) {
        let tmp = [];
        if (
          !selectedTeam.includes(i) &&
          !selectedTeam.includes(j) &&
          checktable[i][j] === "F"
        ) {
          tmp = [i + 1, j + 1];
          teams.push(tmp);
          selectedTeam.push(i);
          selectedTeam.push(j);
          table[i][j] = "T";
          table[j][i] = "T";
        }
      }
    }
    // console.log("selectedTeam", selectedTeam);
    // console.log("teams", teams);
    return teams;
  }

  function makeDefaultTable(num) {
    const table = [];
    for (let i = 0; i < num; i++) {
      const tmp = [];
      for (let j = 0; j < num; j++) {
        i === j ? (tmp[j] = "T") : (tmp[j] = "F");
      }
      table[i] = tmp;
    }
    return table;
  }

  console.log("---");
  console.log("result", result);
  return result;
};

module.exports = { buildMatchesTable };

// let matrix = [];
// for (let i = 1; i < numberOfTeams; i++) {
//   let matches = [[1, i + 1]];
//   for (let j = 1; j < numberOfTeams / 2; j++) {
//     matches.push([
//       2 + ((i + j - 1) % (numberOfTeams - 1)),
//       2 + ((numberOfTeams - 2 + i - j) % (numberOfTeams - 1))
//     ]);
//   }
//   matrix.push(matches);
// }
// console.log(matrix);
// return matrix;
// };
