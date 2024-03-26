const programmist1 = {
    name: 'Stepa',
    age: 20,
    title: 'Web developer'
};


function addnewobject(obj){
    const newobj = {};
    for(const key in obj){
        newobj[key]=obj[key];
    }
    return newobj;
}


function coolcopy(obj){
    const newobj = JSON.parse(JSON.stringify(programmist1));
    return newobj;
}

const newobj1 = coolcopy(programmist1);

console.log(newobj1);

const newobj = addnewobject(programmist1);
console.log(newobj);





/*
const programmist2 = Object.assign({}, programmist1); //Легко работает с примитивными объектами

const programmist3 = {...programmist1}

const programmist4 = JSON.parse(JSON.stringify(programmist1)); //Глубокое копирование

console.log(programmist2)
console.log(programmist3)
console.log(programmist4) 

console.log(JSON.stringify(programmist1))
*/