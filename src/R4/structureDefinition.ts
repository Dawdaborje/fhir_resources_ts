import { BaseResourceDefinition } from "../base";


interface structureDefinition extends BaseResourceDefinition {
    resourceType: "StructureDefinition";
    url: string;
    version?: string;
}