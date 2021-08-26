import 'jest';
import AbstractRuleset from './abstract-ruleset';

let ruleset;

beforeEach(() => {
    ruleset = new AbstractRuleset();
});

it('abstract height should exist', () => {
    expect(Object.hasOwnProperty.call(Object.getPrototypeOf(ruleset), 'height')).toBeTruthy();
});

it('abstract width should exist', () => {
    expect(Object.hasOwnProperty.call(Object.getPrototypeOf(ruleset), 'width')).toBeTruthy();
});