import { Express, Request, Response } from 'express';

// Type for the data array items
interface Person {
    name: string;
    age: number;
}

// Export the types so they can be used in index.ts
export type {
    Express,
    Request,
    Response,
    Person
};