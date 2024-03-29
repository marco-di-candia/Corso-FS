export interface Todo {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    title: string;
}
