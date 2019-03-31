export class Task {
    title: string;
    date: Date;
    follow: boolean;
    done: boolean;
    later: boolean;
    doneDate: Date;
    category: string;
    constructor(title: string) {
        this.title = title;
    }
}
