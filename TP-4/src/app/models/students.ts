export interface Student {
  id: number;
  name: string;
  classe?: string;
  age?: number;
  email?: string;
}

export const Students: Student[] = [
  { id: 1, name: 'Asma', classe: 'A1', age: 20, email: 'asma@example.com' },
  { id: 2, name: 'Oumaima', classe: 'A1', age: 21, email: 'oumaima@example.com' },
  { id: 3, name: 'Raouf', classe: 'B2', age: 22, email: 'raouf@example.com' },
  { id: 4, name: 'Ibrahim', classe: 'B2', age: 23, email: 'ibrahim@example.com' },
  { id: 5, name: 'Nour', classe: 'C1', age: 20, email: 'nour@example.com' },
  { id: 6, name: 'Rihem', classe: 'C1', age: 19, email: 'rihem@example.com' },
  { id: 7, name: 'Dyama', classe: 'D1', age: 24, email: 'dyama@example.com' },
  { id: 8, name: 'Dr IQ', classe: 'D2', age: 99, email: 'driq@example.com' },
  { id: 9, name: 'Howa', classe: 'E1', age: 20, email: 'howa@example.com' },
  { id: 10, name: 'Hiya', classe: 'E2', age: 22, email: 'hiya@example.com' },
  { id: 11, name: 'Amenallah', classe: 'E2', age: 22, email: 'amenallah@example.com' }
];
