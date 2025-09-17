import { fhirDateTime } from "./index";


interface Period {
    start?: fhirDateTime;
    end?: fhirDateTime;
}

export { Period };