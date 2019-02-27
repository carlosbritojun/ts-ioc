import "reflect-metadata";
import { Container } from "inversify";
import { ICustomerRepository } from "../../domain/repositories/customer.repository";
import { CustomerRepository } from "../../infra/repositories/customer.repository";

const container = new Container();

container.bind<ICustomerRepository>("CustomerRepository").to(CustomerRepository);

export { container };