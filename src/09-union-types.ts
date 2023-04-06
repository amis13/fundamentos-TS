(() => {
  let userId: string | number;

  userId = 10;
  userId = "10";

  function helloUser(id: string | number){
      console.log(`Hola usuario con el número de id ${id}`);
  }

  helloUser('amis');
  helloUser(13);
})();
