import { Customer } from "../entities/customer.entity";

export interface ICustomerRepository {
    get(): Promise<Customer[]>;
    get(id: string): Promise<Customer>;
}