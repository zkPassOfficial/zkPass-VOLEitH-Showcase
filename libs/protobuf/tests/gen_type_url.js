var tape = require("tape");

var TypeUrlTest = require("./data/type_url").TypeUrlTest;

tape.test("getTypeUrl method", function(test) {
    test.equal(TypeUrlTest.getTypeUrl(), "type.googleapis.com/TypeUrlTest", "should have a valid type url");
    test.equal(TypeUrlTest.Nested.getTypeUrl(), "type.googleapis.com/TypeUrlTest.Nested", "nested messages should have a valid type url");
    test.equal(TypeUrlTest.getTypeUrl("example.com"), "example.com/TypeUrlTest", "should have a valid type url override");
    test.equal(TypeUrlTest.Nested.getTypeUrl("example.com"), "example.com/TypeUrlTest.Nested", "nested messages should have a valid type url override");
    test.end();
});
