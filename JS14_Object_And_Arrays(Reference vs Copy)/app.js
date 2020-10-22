    // start with strings, numbers and booleans
let name='Alp';
let name2='name';
console.log(name,name2);
name='AlpEr';
console.log(name,name2);

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const players2 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    // and we want to make a copy of it.
const team=players;
console.log(players,team);

    // You might think we can just do something like this:
team[3]='Lux';//team is not the array, team is reference to the original array(players)

    // however what happens when we update that array?


    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
const team2=players2.slice();
    // one way

    // or create a new array and concat the old one in
const team3 = [].concat(players2);
    // or use the new ES6 Spread
const team4 =[...players2];
team4[3]='Changed';
console.log(team4);

const team5 = Array.from(players2);
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
        const person = {
        name: 'Wes Bos',
            age: 80
        };

    // and think we make a copy:

    // how do we take a copy instead?
const cap2=Object.assign({},person,{number:99,age:12});
console.log(cap2);
    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const man={
        name:'Alp',
        age:25,
        social:{
            twitter:'@alperten',
            facebook:'alp.erten'
        }
    };

    console.clear();
    console.log(man);

    const dev = Object.assign({},man);//only one level clone
    const dev2 =JSON.parse(JSON.stringify(man));//deep clone 