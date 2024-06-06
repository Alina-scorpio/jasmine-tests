describe('isEven', function() {
  it('should determine if a number is even', function() {
      expect(isEven(0)).toBe(true);
      expect(isEven(1)).toBe(false);
      expect(isEven(2)).toBe(true);
      expect(isEven(17)).toBe(false);
      expect(isEven(18)).toBe(true);
      expect(isEven(-2)).toBe(true);
      expect(isEven(-3)).toBe(false);
      expect(isEven(null)).toBe(false);
      expect(isEven(undefined)).toBe(false);
      expect(isEven("2")).toBe(false);
      expect(isEven({})).toBe(false);
  });
});
