/**
 * @param {AbstractRuleset} ruleset 
 */
function createBoard(ruleset) {
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