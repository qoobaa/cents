(function () {
    function formatCents(value, precision) {
        var integerPart, fractionalPart,
            minus = "";

        if (!isFinite(precision)) {
            precision = 2;
        }

        value = parseInt(value, 10);

        if (!isFinite(value)) {
            throw new Error("value argument must be a finite number");
        }

        value = String(value);

        if (value[0] === "-") {
            minus = "-";
            value = value.substr(1);
        }

        value = new Array(precision + 1).join("0").slice(value.length - 1) + value;
        integerPart = value.substr(0, value.length - precision);
        fractionalPart = value.slice(-precision);

        if (precision > 0) {
            return minus + [integerPart, fractionalPart].join(".");
        } else {
            return minus + integerPart;
        }
    }

    function parseCents(value, precision) {
        var integerPart, fractionalPart,
            parts = String(value).split(".");

        if (!isFinite(precision)) {
            precision = 2;
        }

        integerPart = parts[0] || "0";
        fractionalPart = parts[1] || "0";
        fractionalPart += new Array(precision + 1).join("0");

        return parseInt(integerPart + fractionalPart.substr(0, precision), 10);
    }

    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            module.exports.formatCents = formatCents;
            module.exports.parseCents = parseCents;
        }
        exports.formatCents = formatCents;
        exports.parseCents = parseCents;
    } else {
        this.formatCents = formatCents;
        this.parseCents = parseCents;
    }
}).call(this);
