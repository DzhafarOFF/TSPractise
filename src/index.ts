import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedLIst';

const sort1 = new NumbersCollection([-1, 0, 3, 2]);
sort1.sort();
console.log(sort1.data);
const sort2 = new CharactersCollection('rbc');
sort2.sort();
console.log(sort2.data);
const sort3 = new LinkedList();
sort3.add(5);
sort3.add(1);
sort3.add(3);
sort3.sort();
sort3.print()