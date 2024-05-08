import { Product } from "./Product";

export class Promotion {
    constructor(
        public id: number | null= null,
        public  product: Product | null = new Product(),
        public  title: string | null= null,
        public  description: string | null= null,
        public  discount: number | null= null,
        public  startDate: Date | null= null,
        public  endDate: Date | null= null
    ) {}
}