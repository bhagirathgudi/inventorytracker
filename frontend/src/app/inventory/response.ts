import { Inventory } from "./inventory";

export interface Response {
    companyName: string;
    inventories:Inventory[]
}