// Write your solution here!
const cats= ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name){
    cats;
    console.log(cats.push('Ralph'));
}
function destructivelyPrependCat(name){
    cats;
    console.log(cats.unshift(name));
}
function destructivelyRemoveLastCat(name){
    cats;
    console.log(cats.pop(name));
}
function destructivelyRemoveFirstCat(name){
    cats;
    console.log(cats.shift(name));
}
function appendCat(name){
    cats;
    const addedCat = [...cats, name];
    return addedCat;
}
function prependCat(name){
    cats;
    const addedCat = [name, ...cats];
    return addedCat;
}
function removeLastCat(name){
    cats;
    const addedCat = cats.slice(0,2);
    return addedCat;
}
function removeFirstCat(name){
    cats;
    const addedCat = cats.slice(1);
    return addedCat;
}