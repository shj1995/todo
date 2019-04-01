import { Entity } from './entity';

export class Task extends Entity {
    public static typeName: string = "task";

    title: string;
    date: Date;
    follow: boolean;
    done: boolean;
    later: boolean;
    doneDate: Date;
    category: string;
    constructor(title: string) {
        super();
        this.title = title;
    }
}
