/* jshint esversion: 6 */
let expect = require('expect');
let React = require('react');
let ReactDOM = require('react-dom');
let TestUtils = require('react-addons-test-utils');

let Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');

        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(1);
            done();
        }, 1001);
    });

    it('should pause timer on paused status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');
        setTimeout(() => {
            timer.handleStatusChange('paused');
            setTimeout(() => {
                expect(timer.state.count).toBe(2);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 1001);
        }, 2001);
    });

    it('should zero timer on stopped status', () => {
        let timer = TestUtils.renderIntoDocument(<Timer />);
        timer.handleStatusChange('started');
        setTimeout(() => {
            timer.handleStatusChange('stopped');
            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
                done();
            }, 1001);
        }, 2001);
    });
});
