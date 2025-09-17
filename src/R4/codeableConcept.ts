import { Coding } from "../fhirTypes/coding";

interface codeableConcept {
    coding?: Coding[];
    text?: string;
}

export { codeableConcept };