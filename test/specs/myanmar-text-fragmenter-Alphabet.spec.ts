import { MyanmarTextFragmenter } from '../../src/myanmar-text-fragmenter';

describe('MyanmarTextFragmenter#getNextFragment#alphabet', () => {
    let fragmenter: MyanmarTextFragmenter;

    beforeEach(() => {
        fragmenter = new MyanmarTextFragmenter();
    });

    it('should be defined', () => {
        expect(fragmenter).toBeDefined();
    });

    // // ဤ -> ဤ
    // it(String.raw`'\u1024' -> '\u1024'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u1024') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u1024',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeFalsy();
    // });

    // // ဪ -> ဪ
    // it(String.raw`'\u102A' -> '\u102A'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u102A') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u102A',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeFalsy();
    // });

    // // ၊ -> ၊
    // it(String.raw`'\u104A' -> '\u104A'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u104A') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u104A',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeFalsy();
    // });

    // // ။ -> ။
    // it(String.raw`'\u104B' -> '\u104B'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u104B') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u104B',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeFalsy();
    // });

    // // ၌ -> ၌
    // it(String.raw`'\u104C' -> '\u104C'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u104C') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u104C',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeFalsy();
    // });

    // // ၍ -> ၍
    // it(String.raw`'\u104D' -> '\u104D'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u104D') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u104D',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeFalsy();
    // });

    // // ၏ -> ၏
    // it(String.raw`'\u104F' -> '\u104F'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u104F') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u104F',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeFalsy();
    // });

    // // ဤက -> ဤ
    // it(String.raw`'\u1024\u1000' -> '\u1024'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u1024\u1000') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u1024',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeFalsy();
    // });

    // Errors
    // 'ါ' -> 'ါ'
    // it(String.raw`'\u102B' -> '\u102B'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u102B') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u102B',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeTruthy();
    //     expect(fragment.error!.invalidStart).toBeTruthy();
    //     expect(fragment.error!.invalidUnicodeForm).toBeTruthy();
    // });

    // // '္' -> '္'
    // it(String.raw`'\u1039' -> '\u1039'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u1039') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u1039',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeTruthy();
    //     expect(fragment.error!.invalidStart).toBeTruthy();
    //     expect(fragment.error!.invalidUnicodeForm).toBeTruthy();
    // });

    // // '္က' -> '္က'
    // it(String.raw`'\u1039\u1000' -> '\u1039\u1000'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u1039\u1000') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u1039\u1000',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeTruthy();
    //     expect(fragment.error!.invalidStart).toBeTruthy();
    //     expect(fragment.error!.invalidUnicodeForm).toBeTruthy();
    // });

    // // 'ါက' -> 'ါ'
    // it(String.raw`'\u102B\u1000' -> '\u102B'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u102B\u1000') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u102B',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeTruthy();
    //     expect(fragment.error!.invalidStart).toBeTruthy();
    //     expect(fragment.error!.invalidUnicodeForm).toBeTruthy();
    // });

    // // 'ျြွှေိီုူံဲ့ါာ်းက' -> 'ျြွှေိီုူံဲ့ါာ်း'
    // it(String.raw`'\u103B\u103C\u103D\u103E\u1031\u102D\u102E\u102F\u1030\u1036\u1032\u1037\u102B\u102C\u103A\u1038\u1000' -> '\u103B\u103C\u103D\u103E\u1031\u102D\u102E\u102F\u1030\u1036\u1032\u1037\u102B\u102C\u103A\u1038'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u103B\u103C\u103D\u103E\u1031\u102D\u102E\u102F\u1030\u1036\u1032\u1037\u102B\u102C\u103A\u1038\u1000') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u103B\u103C\u103D\u103E\u1031\u102D\u102E\u102F\u1030\u1036\u1032\u1037\u102B\u102C\u103A\u1038',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeTruthy();
    //     expect(fragment.error!.invalidStart).toBeTruthy();
    //     expect(fragment.error!.invalidUnicodeForm).toBeTruthy();
    // });

    // // 'ဳဴဵက' -> 'ဳဴဵ'
    // it(String.raw`'\u1033\u1034\u1035\u1000' -> '\u1033\u1034\u1035'`, () => {
    //     const fragment = fragmenter.getNextFragment('\u1033\u1034\u1035\u1000') as TextFragment;

    //     expect(fragment.matchedString).toBe('\u1033\u1034\u1035',
    //         `\n\nActual fragmentedString: ${formatCodePoints(fragment.matchedString)}`);
    //     expect(fragment.error).toBeTruthy();
    //     expect(fragment.error!.invalidStart).toBeTruthy();
    //     expect(fragment.error!.invalidUnicodeForm).toBeTruthy();
    // });
});