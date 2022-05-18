import { TodoItem } from "./todoitem";

export class Model {
    name : String;
    items: TodoItem[];

    constructor() {
        this.name = "Hasan Furkan",
        this.items = [
    {description : "Kahvalti", action: true},
    {description : "Spor", action: false},
    {description : "Yemek", action: true},
    {description : "Alisveris", action: false},

        ]

    }
}

const model = new Model()