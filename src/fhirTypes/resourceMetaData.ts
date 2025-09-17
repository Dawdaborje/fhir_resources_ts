import { fhirId, fhirInstant, fhirUri } from "../dataTypes/index";


interface ResourceMetaData {
    versionId?: fhirId;
    lastUpdated?: fhirInstant;
    profile?: string[];
    source?: fhirUri;
}


export { ResourceMetaData };