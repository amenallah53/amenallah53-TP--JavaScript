type Category = 'Roman' | 'Science' | 'Histoire' | 'Informatique' | 'Art' | 'Autres';
export class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public publisherEmail: string,
        public publisherPhone: string,
        public releaseDate: string,
        public category: Category,
        public isAvailable: boolean,
        public stock?: number
    ) {}
}