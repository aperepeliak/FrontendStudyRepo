/* jshint esversion:6 */
let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let TestUtils = require('react-addons-test-utils');
let $ = require('jQuery');

let Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
            let $el = $(ReactDOM.findDOMNode(controls));

            // Here we are using jQuery filter 'contains()', that checks text value
            let $pauseButton = $el.find('button:contains(Pause)');

            // checking with length because jQuery returns a collection
            expect($pauseButton.length).toBe(1);
        });

        it('should render start when paused', () => {
            let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
            let $el = $(ReactDOM.findDOMNode(controls));

            let $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });
});