import InitError from './errors/init-error';

/**
 * @param {AbstractRuleset} ruleset 
 */
function createBoard(ruleset) {
    if (!ruleset) {
        throw new InitError('board requires rules');
    }
    if (!ruleset.height || !ruleset.width) {
        throw new InitError('board missing one of or both dimensions');
    } 
    return new Board(ruleset.height, ruleset.width);
}

class Board {

    /**
     * @param {number} height 
     * @param {number} width 
     */
    constructor(height, width) {
        this._height = height;
        this._width = width;
    }
}


export { createBoard };