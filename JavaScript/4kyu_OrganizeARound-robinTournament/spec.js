const { expect } = require("chai");
const { buildMatchesTable } = require(".");

describe.only("4kyu: Organize a Round-robin tournament", () => {
  describe("A tournament with only 2 teams", () => {
    var result = buildMatchesTable(2);
    it("Should have 1 round", () => {
      expect(Array.isArray(result)).to.be.true;
      expect(result.length).to.eql(1);
    });
    it("The round should have 1 match", () => {
      expect(Array.isArray(result[0])).to.be.true;
      expect(result[0].length).to.eql(1);
    });
    it("The match should be team 1 vs team 2", () => {
      expect(result[0][0].sort((a, b) => a - b)).to.eql([1, 2]);
    });
  });
  describe("A tournament with 3 teams", () => {
    var result = buildMatchesTable(3);
    it("Should have 1 round", () => {
      expect(Array.isArray(result)).to.be.true;
      expect(result.length).to.eql(3);
    });
    it("The round should have 1 match", () => {
      expect(Array.isArray(result[0])).to.be.true;
      expect(result[0].length).to.eql(1);
    });
    it("The match should be team 1 vs team 2", () => {
      expect(result[0][0].sort((a, b) => a - b)).to.eql([1, 2]);
    });
  });

  describe("A tournament with 4 teams", () => {
    var rounds = buildMatchesTable(4);
    var teams = [];
    for (var t = 1; t <= 4; t++) {
      teams.push(t);
    }
    it("Should have 3 rounds", () => {
      expect(Array.isArray(rounds)).to.be.true;
      expect(rounds.length).to.eql(3);
    });
    rounds.forEach(function(round) {
      it("Each round should have 2 matches", () => {
        expect(Array.isArray(round)).to.be.true;
        expect(round.length).to.eql(2);
      });
      round.forEach(function(match) {
        it("Each match should have 2 teams", () => {
          expect(Array.isArray(match)).to.be.true;
          expect(match.length).to.eql(2);
        });
      });
      it("Each round should have matches with every team", () => {
        var teamsInRound = round
          .reduce((prev, cur) => prev.concat([cur[0], cur[1]]), [])
          .sort((a, b) => a - b);
        expect(teamsInRound).to.deep.equal(teams);
      });
    });
    it("Each match should be unique in the tournament", () => {
      var matches = [];
      rounds.forEach(function(round) {
        round.forEach(function(match) {
          var matchHash = match.sort((a, b) => a - b).join(",");
          expect(matches.indexOf(matchHash) < 0).to.be.true;
          matches.push(matchHash);
        });
      });
    });
  });
  describe("A tournament with 20 teams", () => {
    var result = buildMatchesTable(20);
    it("Should have 1 round", () => {
      expect(Array.isArray(result)).to.be.true;
      expect(result.length).to.eql(19);
    });
  });
});
