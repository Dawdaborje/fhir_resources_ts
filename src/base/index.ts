
interface BaseFhirResource {
    resourceType: string;
    id?: string;
    meta?: {
        versionId?: string;
        lastUpdated?: string;
        profile?: string[];
        security?: { system: string; code: string; display?: string }[];
        tag?: { system: string; code: string; display?: string }[];
    };
    implicitRules?: string;
    language?: string;
}

export { BaseFhirResource };
