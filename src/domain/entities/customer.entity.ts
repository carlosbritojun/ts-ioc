export class Customer {
     constructor(private id: string, private name: string) {}

     get getId(): string {
        return this.id;
     }

     get getName(): string {
         return this.name;
     }
}