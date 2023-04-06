(() => {
  let userId: string | number;

  userId = 10;
  userId = "10";

  function helloUser(id: string | number){
      console.log(`Hola usuario con el id ${id}`);
  }

  helloUser('amis');
  helloUser(13);
})();
