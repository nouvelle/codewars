const { expect } = require("chai");
const { Lamp } = require(".");

const myLamp = new Lamp("Blue");

describe.only("6kyu_02_TheLamp_Revisited", () => {
  it("Lamp", () => {
    expect(myLamp.color).to.eql("Blue");
    expect(myLamp.on).to.be.false;
    expect(myLamp.state()).to.eql("The lamp is off.");
    // now switch it on
    myLamp.toggleSwitch();
    expect(myLamp.state()).to.eql("The lamp is on.");
  });
});
