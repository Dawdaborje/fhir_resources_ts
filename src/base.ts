import type { fhirCode, fhirUri } from "./fhirTypes/index";
import { ResourceMetaData } from "./fhirTypes/resourceMetaData";


interface BaseResourceDefinition {
    resourceType: string;
    id?: string;
    meta?: ResourceMetaData;
    implicitRules?: fhirUri;
    language?: fhirCode;
}

export { BaseResourceDefinition };