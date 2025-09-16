import type { BaseFhirResource } from "./index"

interface Patient extends BaseFhirResource {
    resourceType: "Patient";
    name?: { use?: string; text?: string; family?: string; given?: string[] }[];
    gender?: "male" | "female" | "other" | "unknown";
    birthDate?: string;
    deceased?: boolean | { age?: number; date?: string };
}


export { Patient };