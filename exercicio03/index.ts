interface User {
    name: string;
    age: number;
    occupation?: string 
}

interface Admin {
    role?: string
}

export type Person = User & Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string | undefined;
    if (person.role) {
        additionalInformation = `Role: ${person.role}`;
    } else {
        additionalInformation = `Ocupation: ${person.occupation}`;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);