function divisors(integer) {
    var divisor = [];
  for(i = 2; i < integer; i++) {
    if(integer % i == 0) {
        divisor.push(i);
    }
  }

  return divisor.length ? divisor : integer + ' is prime'; // Essa parte a solução no codewars me ajudou, estava tendo dificuldade em retornar o meu array da forma que eu gostaria.

};

console.log(divisors(30));