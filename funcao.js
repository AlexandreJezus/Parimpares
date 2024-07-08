function eParOuImpar(n) {
  let array = n.split("");
  let soma = 0;

  array.forEach((elemento) => {
    soma += elemento;
  });

  if (soma % 2 == 0) {
    return "impar";
  }
  return "par";
}

module.exports = {
  eParOuImpar,
};
