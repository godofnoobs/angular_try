export default class Homework {
    taskName: string;
    todo: string;
    isDone: boolean;

    constructor(taskName: string = 'anonimousTask',
        todo: string = 'smthTodo',
        isDone: boolean = false
        ) {
        this.taskName = taskName;
        this.todo = todo;
        this.isDone = isDone;
    }

    setTaskState(state: boolean = false): void {
        this.isDone = state;
    }

    getTaskState(): boolean {
        return this.isDone;
    }
}
