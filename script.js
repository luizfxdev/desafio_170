/**
 * Função que gera a sequência numérica para ativar a máquina do tempo
 * conforme as regras do desafio:
 * - Começa com 1
 * - Cada próximo número é o dobro do anterior mais um
 * - A sequência contém apenas números menores que 500
 * @returns {Array} Array contendo a sequência gerada
 */
function gerarSequencia() {
  // Inicializa um array vazio para armazenar a sequência
  let sequencia = []

  // Começa com o primeiro número da sequência (1)
  let numero = 1

  // Enquanto o número atual for menor que 500...
  while (numero < 500) {
    // Adiciona o número atual ao final da sequência
    sequencia.push(numero)

    // Calcula o próximo número da sequência:
    // dobra o número atual e soma 1
    numero = numero * 2 + 1
  }

  // Retorna a sequência completa
  return sequencia
}

// --- Execução do código ---
// Gera a sequência secreta chamando a função
const sequenciaSecreta = gerarSequencia()

// Exibe um título no console para identificar a saída
console.log('Sequência secreta para a máquina do tempo:')

// Mostra a sequência gerada no console
console.log(sequenciaSecreta)

// Exemplo de saída esperada:
// [1, 3, 7, 15, 31, 63, 127, 255]
