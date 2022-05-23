import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(id: number, n: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.id = id;
        this.name = n;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}