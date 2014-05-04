/*global equal, throws, test, module, formatCents*/

module("formatCents");

test("zero without precision", function () {
    equal(formatCents("0"), "0.00");
    equal(formatCents(0), "0.00");
    equal(formatCents("0.0000"), "0.00");
    equal(formatCents("0.1"), "0.00");
});

test("zero with precision", function () {
    equal(formatCents("0", 0), "0");
    equal(formatCents(0, 3), "0.000");
    equal(formatCents("0.1", 10), "0.0000000000");
});

test("one", function () {
    equal(formatCents("1", 0), "1");
    equal(formatCents(100, 2), "1.00");
    equal(formatCents(1000, 3), "1.000");
});

test("minus one", function () {
    equal(formatCents("-1", 0), "-1");
    equal(formatCents(-100, 2), "-1.00");
    equal(formatCents(-1000, 3), "-1.000");
});

test("positive", function () {
    equal(formatCents(123123, 0), "123123");
    equal(formatCents(123123, 2), "1231.23");
});

test("garbage", function () {
    throws(function () {
        formatCents("", 0);
    });
    throws(function () {
        formatCents(null, 0);
    });
    throws(function () {
        formatCents(NaN, 0);
    });
    throws(function () {
        formatCents(Infinity, 0);
    });
});
