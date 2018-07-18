import { Author } from './../authors/author';

export class Book {
    id: number;
    title: string;
    description: string;
    units: number;
    isbn: string;
    cover: string;
    authors: Author[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}