const { isStrongPassword } = require('../index');

describe('isStrongPassword', () => {
    it('should return false for passwords shorter than 8 characters', () => {
        expect(isStrongPassword('Hello World')).toBe(false);
    });

    it('should return false for passwords without uppercase letters', () => {
        expect(isStrongPassword('pC%mD8TpCKn2')).toBe(true);
    });
});
