type TodoData = {
    id: number
    title: string
    completed: boolean
    price: number
    createdAt: Date
    dueOn: Date
    description: string
    asignee: string
    asignedTo: string
    status: string
}

type UserData = {
    id: number
    name: string
    email: string
    assignedTasks: TodoData[]
    createdTasks: TodoData[]
}

const todos = [
    {
        id: 1,
        title: 'Clean Dishes',
        completed: false,
        price: 10,
        createdAt: new Date(),
        dueOn: new Date(),
        description: 'Clean dishes for the week',
        asignee: 'Home',
        asignedTo: '',
        status: 'test'
    },
    {
        id: 2,
        title: 'Make Food',
        completed: false,
        price: 10,
        createdAt: new Date(),
        dueOn: new Date(),
        description: 'Make food for the week',
        asignee: 'Home',
        asignedTo: 'Yash',
        status: 'test'
    },
    {
        id: 3,
        title: 'Clean House',
        completed: false,
        price: 10,
        createdAt: new Date(),
        dueOn: new Date(),
        description: 'Clean house for the week',
        asignee: 'Home',
        asignedTo: 'Emily',
        status: 'test'
    },
    {
        id: 4,
        title:'Laundry',
        completed: false,
        price: 10,
        createdAt: new Date(),
        dueOn: new Date(),
        description: 'Laundry for the week',
        asignee: 'Home',
        asignedTo: 'Emily',
        status: 'test'
    }
]



export { TodoData, UserData, todos }

