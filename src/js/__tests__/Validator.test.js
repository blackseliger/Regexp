import Validator from '../Validator';

describe('check method validateUsername', () => {
  test('return a validate name', () => {
    const expected = 'ca222rNo-t';
    const valideName = new Validator('ca222rNo-t');
    const received = valideName.validateUsername();
    expect(received).toEqual(expected);
  });
  test('return a validate name', () => {
    const expected = undefined;
    const valideName = new Validator('ca22222rNo-t');
    const received = valideName.validateUsername();
    expect(received).toEqual(expected);
  });
});
