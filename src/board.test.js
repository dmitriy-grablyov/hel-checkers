import { createBoard } from './board';
import InitError from './errors/init-error';


it('should not create a board without rules', () => {
    expect(() => createBoard()).toThrow(InitError);
});

it.each([
    {},
    { width: 2 },
    { height: 2 }
])('should not create a board without dimensions as height: $height, width: $width', (ruleset) => {
    expect(() => createBoard(ruleset)).toThrow(InitError);
});