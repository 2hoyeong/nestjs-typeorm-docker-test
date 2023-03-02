import { generateRandomString } from './random.util';

describe('random.util', () => {
  describe('generateRandomString', () => {
    it('무작위의 32자 랜덤 스트링이 생성된다.', () => {
      const randomString = generateRandomString();

      expect(randomString).toHaveLength(32);
      expect(typeof randomString).toBe('string');
    });

    it('length를 지정하면, 해당 길이를 가진 스트링이 생성된다.', () => {
      const randomString = generateRandomString(10);

      expect(randomString).toHaveLength(10);
      expect(typeof randomString).toBe('string');
    });

    it('char를 지정하면, 해당 문자열에서 랜덤하게 문자를 선택한다.', () => {
      const randomString = generateRandomString(10, 'abc');

      expect(randomString).toHaveLength(10);
      expect(typeof randomString).toBe('string');
      expect(randomString).toMatch(/^[abc]+$/);
    });
  });
});
