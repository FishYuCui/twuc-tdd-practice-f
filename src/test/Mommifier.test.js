import Mommifier from "../Mommifier";

describe('Mommifier Test', () => {
    test('demo test', () => {
        const mommifier = new Mommifier();

        expect(1).toBe(1);
    })
    test('should enter ""', () => {
        const mommifier = new Mommifier("");

        expect("").toBe(mommifier.mommifier());
    })
    test('should enter a', () => {
        const mommifier = new Mommifier("a");

        expect("mommy").toBe(mommifier.mommifier());
    })
    test('should enter b', () => {
        const mommifier = new Mommifier("b");

        expect("b").toBe(mommifier.mommifier());
    })
    test('should enter abbbb', () => {
        const mommifier = new Mommifier("abbbb");

        expect("abbbb").toBe(mommifier.mommifier());
    })
    test('should enter abc', () => {
        const mommifier = new Mommifier("abc");

        expect("mommybc").toBe(mommifier.mommifier());
    })
    test('should enter aeuio', () => {
        const mommifier = new Mommifier("aeuio");

        expect("mommy").toBe(mommifier.mommifier());
    })
})