import NotImplementedError from '../errors/not-implemented-error';

class AbstractRuleset {

    /** 
     * board width for this rule 
     * @type {number}
     */
    get width() {
        throw new NotImplementedError(`${this.constructor.name} ruleset must define board width`);
    }

    /** 
     * board height for this rule 
     * @type {number}
     */
    get height() {
        throw new NotImplementedError(`${this.constructor.name} ruleset must define board height`);
    }
}

export default AbstractRuleset;