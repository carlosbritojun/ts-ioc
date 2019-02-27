import { injectable } from "inversify";
import { ICustomerRepository } from "../../domain/repositories/customer.repository";
import { Customer } from "../../domain/entities/customer.entity";

@injectable()
export class CustomerRepository implements ICustomerRepository {
    
    private readonly customers: Customer[];
    
    constructor() {
        this.customers = [
            new Customer("1", "customer 1"),
            new Customer("2", "customer 2"),
            new Customer("3", "customer 3"),
            new Customer("4", "customer 4"),
            new Customer("5", "customer 5")
        ];
    }

    get(): Promise<Customer[]>;

    get(id: string): Promise<Customer>;

    get(id?: any): any {
        if (!id) {
            return Promise.resolve(this.customers);
        }
        return Promise.resolve(this.customers.find(n => n.getId === id));
    }
}