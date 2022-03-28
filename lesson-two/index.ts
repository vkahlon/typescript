
let appName: string
let lucky: any = 23;

appName = 'hi exercise two';
lucky = '10';

const url = new URL('...')

type Style = 'bold' | 'italic'

let font: Style;

const person = {
  first: 'Vick',
  last: "Kahlon"
}

interface Person {
    first: string;
    last: string;
}

type MyList = [number, string, boolean?]


class Observable<T> {
    constructor(public value: T) {}
}

let x: Observable<number>;
