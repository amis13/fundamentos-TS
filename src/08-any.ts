(() => {
  let myDynamicVar: any;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  //Caso 1
myDynamicVar = "HOLA";
const otherString = (myDynamicVar as string).toLowerCase();

//Caso 2
myDynamicVar = 1212;
const otherNumber = (<number>myDynamicVar).toFixed();

})();
