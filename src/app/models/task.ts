import { Entity } from './entity';

export class Task extends Entity {
    public static typeName = 'task';

    title: string;
    date: Date;
    follow = false;
    done = false;
    later: boolean;
    doneDate: Date;
    category: string;
    description: string;
    constructor(title: string) {
        super();
        this.title = title;
    }
}
