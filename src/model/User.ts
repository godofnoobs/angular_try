import Homework from './Homework';

export default class User {
    private static counter: number = 0;
    id: number;
    name: string;
    lastname: string;
    taskList: Homework[];

    constructor(name: string,
            lastname: string,
            taskList: Homework[]) {
        this.name = name;
        this.lastname = lastname;
        this.id = User.getNextId();
        this.taskList = taskList;
    }

    private static getNextId(): number {
        User.counter += 1;
        return User.counter;
    }

    addTask(task: Homework = new Homework()): void {
        this.taskList.push(task);
    }
}
