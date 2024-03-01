import { isNone, isSome } from 'fp-ts/lib/Option';
import { safeHead } from '../src/Option';

describe('option', () => {
    describe('safeHead', () => {
        it('should return the first number of an array', () => {
            const result = safeHead([1,2,3,4])
            expect(isSome(result)).toBe(true)
        });
        it('should return none when the array is empty', () => {
            const result = safeHead([])
            expect(isNone(result)).toBe(true)
        });
    });
});