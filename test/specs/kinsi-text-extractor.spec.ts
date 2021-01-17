import { extracKinsiFragment } from '../../src/kinsi-text-extractor';
import { KinsiTextFragment } from '../../src/kinsi-text-fragment';

describe('extracKinsiFragment', () => {
    it(String.raw`should return 'KinsiTextFragment' when input 'င်္'`, () => {
        const input = 'င်္';

        const actualFragment = extracKinsiFragment({
            totalTrimedInputLength: input.trim().length,
            curStr: input,
            firstCp: input.codePointAt(0) as number,
            trimedCurStrLength: input.trim().length,
            lastKnownWritingStyle: null,
            lastKnownWritingStyleProbability: 0,
            fragments: [],
            leftStr: ''
        });

        const expactedFragment: KinsiTextFragment = {
            category: 'kinsi',
            matchedStr: input,
            kinsiSymbolOnly: true,
            leftLetterRequired: true,
            rightLetterRequired: true,
            uniProbability: 1,
            zgProbability: 0
        };

        void expect(actualFragment).toEqual(expactedFragment);
    });

    it(String.raw`should return 'KinsiTextFragment' when input 'င်္ '`, () => {
        const input = 'င်္ ';

        const actualFragment = extracKinsiFragment({
            totalTrimedInputLength: input.trim().length,
            curStr: input,
            firstCp: input.codePointAt(0) as number,
            trimedCurStrLength: input.trim().length,
            lastKnownWritingStyle: null,
            lastKnownWritingStyleProbability: 0,
            fragments: [],
            leftStr: ''
        });

        const expactedFragment: KinsiTextFragment = {
            category: 'kinsi',
            matchedStr: 'င်္',
            kinsiSymbolOnly: true,
            leftLetterRequired: true,
            rightLetterRequired: true,
            uniProbability: 1,
            zgProbability: 0
        };

        void expect(actualFragment).toEqual(expactedFragment);
    });

    it(String.raw`should return 'KinsiTextFragment' when input 'င်္', leftStr: 'က'`, () => {
        const input = 'င်္';

        const actualFragment = extracKinsiFragment({
            totalTrimedInputLength: input.trim().length,
            curStr: input,
            firstCp: input.codePointAt(0) as number,
            trimedCurStrLength: input.trim().length,
            lastKnownWritingStyle: 'uni',
            lastKnownWritingStyleProbability: 0.55,
            fragments: [
                {
                    category: 'single-letter',
                    matchedStr: 'က',
                    uniProbability: 0.5,
                    zgProbability: 0.5
                }
            ],
            leftStr: 'က'
        });

        const expactedFragment: KinsiTextFragment = {
            category: 'kinsi',
            matchedStr: 'င်္',
            leftLetterRequired: false,
            rightLetterRequired: true,
            uniProbability: 0.6,
            zgProbability: 0.3
        };

        void expect(actualFragment).toEqual(expactedFragment);
    });

    it(String.raw`should return 'KinsiTextFragment' when input 'င်္ချိုင်း'`, () => {
        const input = 'င်္ချိုင်း';

        const actualFragment = extracKinsiFragment({
            totalTrimedInputLength: input.trim().length,
            curStr: input,
            firstCp: input.codePointAt(0) as number,
            trimedCurStrLength: input.trim().length,
            lastKnownWritingStyle: 'uni',
            lastKnownWritingStyleProbability: 0.5,
            fragments: [
                {
                    matchedStr: 'သ',
                    category: 'single-letter',
                    uniProbability: 0.5,
                    zgProbability: 0.5
                }
            ],
            leftStr: 'သ'
        });

        const expactedFragment: KinsiTextFragment = {
            category: 'kinsi',
            matchedStr: input,
            uniProbability: 1,
            zgProbability: 0
        };

        void expect(actualFragment).toEqual(expactedFragment);
    });
});
