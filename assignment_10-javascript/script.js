//variables:-variable is a container of storing data.
//1)var- using var keyword we can create variable.
console.log('-----------var-----------');
var myname='aniket';
console.log(myname);
//scope-the scope of var is functional
function myfunc(test){
    if(test){
        var name="aniket";
        var sname="phalke";
    }
    console.log("my name is"+name+" "+sname);
}
myfunc(true);
//change the variabe value we can set another value of same variable name. 
      var name='aniket';
      console.log(name);
      var name='aniket';
      var name='phalke';
      console.log(name);

//2)let-using let keyword we can create variable
console.log('-----------let-----------');      
let myfirstname='aniket';
console.log(myname);
//scope-the scope of let  is block scope
function myfunc(test){
    if(test){
        let name1="aniket";
        let sname1="phalke";
        console.log("my name is"+name1);
    }
   //this statement occurs error because not include within block-- console.log("my name is"+sname1);
}
myfunc(true);
//we can,t redeclaration of variable but change the variable value we can set another value of same variable name.but let keyword cant add only change value 
      let namef='aniket';
      console.log(namef);
      let fname='aniket';
      fname='phalke';
      console.log(fname);

      
      //3)const- using const keyword we can create variable
      // - we can,t redeclaration of variable and constant variable cant chang whenever set another value of same variable name
console.log('-----------const-----------');      
const constname='aniket';
console.log(constname);
//scope-the scope of let  is block scope
function myfunc(test){
    if(test){
        const name1="aniket";
        const sname1="phalke";
        console.log("my name is"+name1);
    }
   //this statement occurs error because not include within block--  console.log("my name is"+sname1);
}
myfunc(true);
//can't change the variabe value we can set another value of same variable name. 
      const ffname='aniket';
      console.log(ffname);
      const fn='aniket';
      //this statement occurs error because variable set const keyword constant value cant change   -- fn='phalke';
    console.log(fn);