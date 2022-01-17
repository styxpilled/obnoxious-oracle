import { foretell, PROPHECIES } from './prophecies';


function assert(condition: boolean, message?: string): void {
    if (!condition) {
        throw new Error(message || 'Assertion failed');
    }
}

function it(message: string, test: () => void): void {
    try {
        test();
        console.log('\x1b[32m%s\x1b[0m', `✓ ${message}`);
    } catch (e) {
        console.log('\x1b[31m%s\x1b[0m', `✗ ${message}`);
        console.error(e);
    }
}

it('should be typeof string', () => {
    for (const prophecy of PROPHECIES) {
        assert(typeof prophecy === 'string');
    }
});

it('should return a string', () => {
    assert(typeof foretell() === undefined);
});
