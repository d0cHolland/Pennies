export class Category{
    public Id?: number;
    public Name: string;
    public Children?: Category[];
    public Parent?: Category;
}