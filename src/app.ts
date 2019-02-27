import { container } from "./crosscutting/ioc/ioc-container";
import { ICustomerRepository } from "./domain/repositories/customer.repository";

const repository = container.get<ICustomerRepository>("CustomerRepository");

repository.get().then(r => r.forEach(customer => console.log(customer)));
repository.get("2").then(r => console.log(r));