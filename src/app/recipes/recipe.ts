import { Ingredient } from "../shared/ingredient";
export class Recipe {
	constructor(public name, public descraption, public imagePath, public ingredients: Ingredient[]) {}
}
