export interface TextFragment {
    matchedStr: string;
    normalizedStr: string;

    spaceIncluded?: boolean;
    invisibleSpaceIncluded?: boolean;

    ancient?: boolean;

    numberFragment?: boolean;
    digitStr?: string;
    measureWords?: string[];
    numberOrderList?: boolean;

    uncombinableLetter?: boolean;
    punctuationLetter?: boolean;
    syllableIncluded?: boolean;

    error?: {
        invalidUnicodeForm?: boolean;
        invalidDiacriticsStart?: boolean;
        invalidSpaceIncluded?: boolean;
        invalidU101DInsteadOfU1040?: boolean;
        invalidU104EInsteadOfU1044?: boolean;
    };
}
