var expect = require("expect.js"),
  dottie = require('../dottie');

describe("dottie.wrap", function () {
  dottie.extend();

  var DottieGet       = dottie.get.toString();
  var DottieSet       = dottie.set.toString();
  var DottieTransform = dottie.transform.toString();

  it("should have $get match", function () {
    expect({}.$get.toString()).to.equal(DottieGet);
  });

  it("should have $set match", function () {
    expect({}.$set.toString()).to.equal(DottieSet);
  });

  it("should have $transform match", function () {
    expect({}.$transform.toString()).to.equal(DottieTransform);
  });

});
