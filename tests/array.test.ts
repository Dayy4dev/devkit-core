import { chunk, compact } from '../src/array';
describe('Array Utilities', () => {
  it('should chunk correctly', () => {
    expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  });
});
