const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// clearing
console.log('Hello');
console.clear();

// Regular
console.log('Hello');

// Interpolated
console.log('Hello again This is %s string','😃');

// Styled
console.log('%c I am some greate text','font-size:20px; background: green; text-shadow: 10px 10px 0 white')

// warning!
console.warn('OH NOOO!');

// Error :|
console.error('THis IS AN ERROR');

// Info
console.info('This text just an info');

// Testing
console.assert(1===2,'That is wrong!');
console.assert(1===1,'That is wrong!');//if you give true statement for first parameter, it do not show anything on the console
//EXAMPLE FOR TESTİNG
// const p = document.querySelector('p');
// console.assert(p.classList.contains('ouch'),'That is wrong!');

// Viewing DOM Elements
//console.log(p);
//console.dir(p);

// Grouping together
 dogs.forEach(dog => {
     console.group(`${dog.name}`);
     //console.groupCollapsed(`${dog.name}`);
     console.log(`This is ${dog.name}`);
     console.log(`${dog.name} is ${dog.age} years old`);
     console.log(`${dog.name} is ${dog.age*7} dog years old`);
     console.groupEnd(`${dog.name}`);
 })

 // counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');

// timing
console.time('fetching data');
fetch('http://api.github.com/users/alperten')
.then(data => data.json())
.then(data =>{
    console.timeEnd('fetching data')
    console.log(data);
})

console.table(dogs);