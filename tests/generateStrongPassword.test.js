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
});