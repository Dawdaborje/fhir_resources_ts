import { fhirUri } from "../dataTypes/index";
import { Period } from "../dataTypes/period";
import { codeableConcept } from "./codeableConcept";

interface Identifier {
    use?: "usual" | "official" | "temp" | "secondary" | "old";
    type?: codeableConcept;
    system?: fhirUri;
    value?: string;
    period?: Period;
}

export { Identifier };