export class ToDo {
    public id: number;
    public text: string;
    public completed: boolean;

    constructor(text: string, completed: boolean = false){
        this.id = Math.random();
        this.text = text;
        this.completed = completed;
    }
}