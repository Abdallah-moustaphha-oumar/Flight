import { ReplaceNullValuePipe } from './replace-null-value.pipe';

describe('ReplaceNullValuePipe', () => {
  it('create an instance', () => {
    const pipe = new ReplaceNullValuePipe();
    expect(pipe).toBeTruthy();
  });
});
