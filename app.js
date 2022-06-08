let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function excuse() {
    let randomIndex1 = Math.floor(Math.random() * who.length);
  
    let randomIndex3 = Math.floor(Math.random() * what.length);
  
    let randomIndex4 = Math.floor(Math.random() * when.length);
  
    let randomExcuse =
      who[randomIndex1] +
      " " +
      what[randomIndex3] +
      " " +
      when[randomIndex4];
  
    return randomExcuse;
  }

console.log(excuse());