/*global equal, ok, test, module, parseCents*/

module("parseCents");

test("zero without precision", function () {
    equal(parseCents("0"), 0);
    equal(parseCents(0), 0);
    equal(parseCents("00000.0000"), 0);
});

test("zero with precision", function () {
    equal(parseCents("0.1", 0), 0);
    equal(parseCents(0.1, 0), 0);
    equal(parseCents("00000.001"), 0);
});

test("one", function () {
    equal(parseCents("1"), 100);
    equal(parseCents(1), 100);
    equal(parseCents("100"), 10000);
    equal(parseCents("100", 0), 100);
});

test("minus one", function () {
    equal(parseCents("-1"), -100);
    equal(parseCents(-1), -100);
    equal(parseCents("-100"), -10000);
    equal(parseCents("-100", 0), -100);
});

test("dot without fractional part", function () {
    equal(parseCents("1."), 100);
    equal(parseCents("100."), 10000);
    equal(parseCents("10.", 0), 10);
});

test("dot without integer part", function () {
    equal(parseCents("."), 0);
    equal(parseCents(".1"), 10);
    equal(parseCents(".01", 0), 0);
});

test("garbage", function () {
    ok(isNaN(parseCents("asd")));
});
