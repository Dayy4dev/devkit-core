import { slugify, camelize, truncate } from '../src/string';

describe('String Utilities', () => {
  it('should slugify complex strings', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
    expect(slugify('  Typescript & Node.js  ')).toBe('typescript-nodejs');
  });

  it('should camelize space and hyphenated strings', () => {
    expect(camelize('user_profile_picture')).toBe('userProfilePicture');
  });

  it('should truncate strings with custom suffix', () => {
    expect(truncate('Long sentence example', 10)).toBe('Long se...');
  });
});
