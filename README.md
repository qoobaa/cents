# Cents

Cents is a small JavaScript library for parsing and formatting cents values.

## Installation

    npm install cents

## Usage

    formatCents(1) //=> "0.01"
    formatCents(1, 0) //=> "1"
    formatCents(1234, 3) //=> "1.234"

    parseCents("0.01") //=> 1
    parseCents("1", 0) //=> 1
    parseCents("1.2", 1) //=> 12

## Copyright

Copyright © 2014 Kuba Kuźma. See LICENSE for details.
