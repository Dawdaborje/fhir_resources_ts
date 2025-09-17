import { z } from "zod";


const ZodFhirUri = z.string().regex(/^\S*$/, "Invalid FHIR uri");
type fhirUri = z.infer<typeof ZodFhirUri>;


const zodFhirCode = z.string().regex(`[^\s]+(\s[^\s]+)*`, "Invalid FHIR code");
type fhirCode = z.infer<typeof zodFhirCode>;

const zodFhirId = z.string().regex(`[A-Za-z0-9\-\.]{1,64}`, "Invalid FHIR id");
type fhirId = z.infer<typeof zodFhirId>;

const zodFhirInstant = z.string().regex(`([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))`, 'Invalid FHIR instant');
type fhirInstant = z.infer<typeof zodFhirInstant>;

const zodDateTime = z.string().regex(`([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?`, 'Invalid FHIR dateTime');
type fhirDateTime = z.infer<typeof zodDateTime>;

const zodFhirBase64Binary = z.string().regex(`(\s*([0-9a-zA-Z\+\=]){4}\s*)+`, "Invalid FHIR base64Binary");
type fhirBase64Binary = z.infer<typeof zodFhirBase64Binary>;

const zodFhirDate = z.string().regex(`([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])`, 'Invalid FHIR date');
type fhirDate = z.infer<typeof zodFhirDate>;

const zodFhirTime = z.string().regex(`([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?`, 'Invalid FHIR time');
type fhirTime = z.infer<typeof zodFhirTime>;

const zodFhirOid = z.string().regex(`urn:oid:[0-2](\.(0|[1-9][0-9]*))+`, "Invalid FHIR oid");
type fhirOid = z.infer<typeof zodFhirOid>;

const zodFhirUuid = z.string().regex(`urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}`, "Invalid FHIR uuid");
type fhirUuid = z.infer<typeof zodFhirUuid>;

const zodFhirPositiveInt = z.number().int().positive();
type fhirPositiveInt = z.infer<typeof zodFhirPositiveInt>;

const zodFhirUnsignedInt = z.number().int().nonnegative();
type fhirUnsignedInt = z.infer<typeof zodFhirUnsignedInt>;

const zodFhirMarkdown = z.string();
type fhirMarkdown = z.infer<typeof zodFhirMarkdown>;

const zodFhirInteger = z.number().int();
type fhirInteger = z.infer<typeof zodFhirInteger>;

const zodFhirDecimal = z.number();
type fhirDecimal = z.infer<typeof zodFhirDecimal>;

export { fhirUri, fhirCode, fhirId, fhirInstant, fhirDateTime, fhirBase64Binary, fhirDate, fhirTime, fhirOid, fhirUuid, fhirPositiveInt, fhirUnsignedInt, fhirMarkdown, fhirInteger, fhirDecimal };