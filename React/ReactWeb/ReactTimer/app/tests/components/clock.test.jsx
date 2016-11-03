/* jshint esversion: 6 */
let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');

let TestUtils = require('react-addons-test-utils');

let Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 615;
            let expected = '10:15';
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds when min/sec are less than 10', () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 61;
            let expected = '01:01';
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});