describe('ageClassification', function() {
  it('should classify age correctly', function() {
      expect(ageClassification(-1)).toBe(null); // -1 : null
      expect(ageClassification(1)).toBe("детский возраст"); // 1 : детский возраст
      expect(ageClassification(24)).toBe("детский возраст"); // 24 : детский возраст
      expect(ageClassification(24.01)).toBe("молодой возраст"); // 24.01 : молодой возраст
      expect(ageClassification(44)).toBe("молодой возраст"); // 44 : молодой возраст
      expect(ageClassification(44.01)).toBe("средний возраст"); // 44.01 : средний возраст
      expect(ageClassification(65)).toBe("средний возраст"); // 65 : средний возраст
      expect(ageClassification(65.1)).toBe("пожилой возраст"); // 65.1 : пожилой возраст
      expect(ageClassification(75)).toBe("пожилой возраст"); // 75 : пожилой возраст
      expect(ageClassification(75.01)).toBe("старческий возраст"); // 75.01 : старческий возраст
      expect(ageClassification(90)).toBe("старческий возраст"); // 90 : старческий возраст
      expect(ageClassification(90.01)).toBe("долгожители"); // 90.01 : долгожители
      expect(ageClassification(122)).toBe("долгожители"); // 122 : долгожители
      expect(ageClassification(122.01)).toBe(null); // 122.01 : null
      expect(ageClassification(150)).toBe(null); // 150 : null
  });
});
