import { should,assert } from 'chai';
import {woodenlong} from '../index.js';

it('should be a function', function () {
    assert.isFunction(woodenlong.log);
});
describe('log', function () {
    it('should return true', function () {
        assert.equal(woodenlong.log('test'), true);
    });
});
describe('warn', function () {
    it('should return true', function () {
        assert.equal(woodenlong.warn('test'), true);
    });
});
describe('error', function () {
    it('should return true', function () {
        assert.equal(woodenlong.error('test'), true);
    });
});

