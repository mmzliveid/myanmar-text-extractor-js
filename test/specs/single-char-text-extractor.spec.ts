import { SingleCharTextExtractor } from '../../src/single-char-text-extractor';
import { TextFragment, FragmentType } from '../../src/text-fragment';

describe('SingleCharTextExtractor', () => {
    let extractor: SingleCharTextExtractor;

    beforeEach(() => {
        extractor = new SingleCharTextExtractor();
    });

    describe('not', () => {
        it(String.raw`should NOT return fragment with when input Shan letter 'ဢ'`, () => {
            const input = 'ဢ';
            const fragment = extractor.extractNext(input, input.codePointAt(0) as number);
            expect(fragment).toBeFalsy();
        });

        it(String.raw`should NOT return fragment with when input Mon letter 'ဨ'`, () => {
            const input = 'ဨ';
            const fragment = extractor.extractNext(input, input.codePointAt(0) as number);
            expect(fragment).toBeFalsy();
        });

        it(String.raw`should NOT return fragment with when input Mon diacritic symbol 'ဳ'`, () => {
            const input = 'ဳ';
            const fragment = extractor.extractNext(input, input.codePointAt(0) as number);
            expect(fragment).toBeFalsy();
        });

        it(String.raw`should NOT return fragment with when input Mon diacritic symbol 'ဴ'`, () => {
            const input = 'ဴ';
            const fragment = extractor.extractNext(input, input.codePointAt(0) as number);
            expect(fragment).toBeFalsy();
        });

        it(String.raw`should NOT return fragment with when input Mon diacritic symbol 'ဵ'`, () => {
            const input = 'ဵ';
            const fragment = extractor.extractNext(input, input.codePointAt(0) as number);
            expect(fragment).toBeFalsy();
        });
    });

    describe('single-letter-without-diacritics', () => {
        it(String.raw`should return fragment when input 'ဤ'`, () => {
            const input = 'ဤ';
            const actualFragment = extractor.extractNext(input, input.codePointAt(0) as number);
            const expactedFragment: TextFragment = {
                fragmentType: FragmentType.Letter,
                matchedStr: input,
                normalizedStr: input
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return fragment when input 'ဪ'`, () => {
            const input = 'ဪ';
            const actualFragment = extractor.extractNext(input, input.codePointAt(0) as number);
            const expactedFragment: TextFragment = {
                fragmentType: FragmentType.Letter,
                matchedStr: input,
                normalizedStr: input
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return fragment when input 'ဤက'`, () => {
            const input = 'ဤက';
            const actualFragment = extractor.extractNext(input, input.codePointAt(0) as number);
            const expactedFragment: TextFragment = {
                fragmentType: FragmentType.Letter,
                matchedStr: 'ဤ',
                normalizedStr: 'ဤ'
            };

            expect(actualFragment).toEqual(expactedFragment);
        });
    });

    describe('single-char-input', () => {
        it(String.raw`should return alphabet fragment when input 'က'`, () => {
            const input = 'က';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return alphabet fragment when input 'အ'`, () => {
            const input = 'အ';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return alphabet fragment when input 'ဣ'`, () => {
            const input = 'ဣ';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return alphabet fragment when input 'ဥ'`, () => {
            const input = 'ဥ';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return alphabet fragment when input 'ဧ'`, () => {
            const input = 'ဧ';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return alphabet fragment when input 'ဩ'`, () => {
            const input = 'ဩ';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return alphabet fragment when input 'ဿ'`, () => {
            const input = 'ဿ';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return alphabet fragment when input '၎'`, () => {
            const input = '၎';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        // With first char codepoint
        it(String.raw`should return alphabet fragment when input 'က' (with first char codepoint)`, () => {
            const input = 'က';
            const actualFragment = extractor.extractNext(input, 0x1000) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        // Not
        //
        it(String.raw`should NOT return fragment with when input '\u1050'`, () => {
            const input = '\u1050';
            const fragment = extractor.extractNext(input);

            expect(fragment).toBeFalsy();
        });
    });

    describe('punctuation', () => {
        it(String.raw`should return punctuation fragment when input '၌'`, () => {
            const input = '၌';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                punctuation: true,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return punctuation fragment when input '၍'`, () => {
            const input = '၍';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                punctuation: true,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return punctuation fragment when input '၏'`, () => {
            const input = '၏';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                punctuation: true,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return punctuation fragment when input '၊'`, () => {
            const input = '၊';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                punctuation: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return punctuation fragment when input '။'`, () => {
            const input = '။';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: input,
                normalizedStr: input,
                punctuation: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return punctuation fragment when input '၌က'`, () => {
            const input = '၌က';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: '၌',
                normalizedStr: '၌',
                punctuation: true,
                alphabet: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });

        it(String.raw`should return punctuation fragment when input '၊က'`, () => {
            const input = '၊က';
            const actualFragment = extractor.extractNext(input) as TextFragment;
            const expactedFragment: TextFragment = {
                matchedStr: '၊',
                normalizedStr: '၊',
                punctuation: true
            };

            expect(actualFragment).toEqual(expactedFragment);
        });
    });
});
