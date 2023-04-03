(() => {
  let prices = [1,,2,3,2,1,3,4324,5, 'hola', true];
  prices.push(5);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(113);
  mixed.push(113, 'hi');
  mixed.push(113, {});
  mixed.push(113, []);

  let prices2 = [1,,2,3,2,1,3,4324,5];
})();
