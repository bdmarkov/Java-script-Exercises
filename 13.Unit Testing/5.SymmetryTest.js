const {expect} = require('chai');
const { isSymmetric} = require('./5. Symmetry');

describe('Symmetry Checker', () => {
    it('works with symmetric numeric array', () => {
        exprect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('returns false for non-symmetric numeric array', () => {
        exprect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('returns false for non array', () => {
        exprect(isSymmetric(5)).to.be.false;
    });
    it('works with symmetric odd-length array', () => {
        exprect(isSymmetric[1, 2, 1]).to.be.true;
    });
    it('works with symmetric string array', () => {
        exprect(isSymmetric['a', 'b', 'b', a]).to.be.false;
    });
})