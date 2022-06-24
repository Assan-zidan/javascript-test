const Courses = require("../src/data/courses.json");

describe("Testing component", () => {
  let courses = Courses;

  it("expect each cource to have a number ID", () => {
    courses.map((item) => {
        expect(item.id).toEqual(jasmine.any(Number))
    })
  });

});
