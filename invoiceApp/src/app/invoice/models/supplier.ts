import { Customer } from "./customer";
import { Invoice } from "./invoice";


export class Supplier  extends Customer {
        nrKonta: string;
        faktura: Invoice[];
    
        constructor(nrKonta: string) {
            super();
            this.nrKonta = nrKonta; // Inicjalizacja właściwości nrKonta
            this.faktura = [];      // Inicjalizacja faktur jako pustej tablicy
        }
    }

