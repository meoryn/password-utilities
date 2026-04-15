const { generateStrongPassword } = require('../index');

describe('generateStrongPassword functionality', () => {
    it('should generate a strong password of default length 12', () => {
        const password = generateStrongPassword();
        expect(password).toHaveLength(12);
    });

    it('should generate a strong password of specified length', () => {
        const length = 16;
        const password = generateStrongPassword(length);
        expect(password).toHaveLength(length);
    });

    it('should generate a strong password that meets the strength criteria', () => {
        const password = generateStrongPassword();
        expect(password).toMatch(/[A-Z]/);
        expect(password).toMatch(/[a-z]/);
        expect(password).toMatch(/\d/);
        expect(password).toMatch(/[!@#$%^&*()_+]/);
        expect(password.length).toBeGreaterThanOrEqual(8);
    });

    it('should throw an error if the specified length is less than 8', () => {
        expect(() => generateStrongPassword(7)).toThrow('Password length must be at least 8 characters');
    });
});