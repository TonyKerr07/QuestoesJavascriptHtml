//QUESTÃO 1

// O parâmetro numbers é um Array<number>. Sua tarefa é percorrer esse array e:
// se for divisivel por 5, print "buzz"
// se for divisivel por 3 e 5, print "fizzBuzz"

function fizzBuzz(numbers) {
    //Contador caso nenhum seja "buzz" ou "fizzBuzz"
    let j = 0;

    //Limpa resultados anteriores
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    //Percorre todo o array e mostra no console 
    for (let i = 0; i < numbers.length; i++) {
        const numeroAtual = numbers[i];
        const elementos = document.createElement('p');
        if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0 && numbers[i] !== 0) {
            elementos.textContent = numeroAtual + ": fizzBuzz";
            j++
        } else if (numbers[i] % 5 === 0 && numbers[i] !== 0) {
            elementos.textContent = numeroAtual + ": buzz";
            j++
        }
        resultados.appendChild(elementos);
    }

    //Print caso não tenho encontrado nenhum
    if (j === 0) {
        const semElementos = document.createElement('p');
        semElementos.textContent = "Nenhum número é divisível por 5 ou por 3 e 5!";
        resultados.appendChild(semElementos);
    }

}

function runFizzBuzz() {
    //Convertendo para array
    const numerosDigitados = document.getElementById('entradaNumeros').value;

    //Verificando se não está vazio
    if (numerosDigitados.trim() === "") {
        resultados.innerHTML = '';
        const semElementos = document.createElement('p');
        semElementos.textContent = "Por favor, insira no mínimo um número!";
        resultados.appendChild(semElementos);
        return;
    }

    //Verifica se tem pelo menos um número
    if (numerosDigitados.split(',').every(value => isNaN(Number(value)))) {
        resultados.innerHTML = '';
        const semElementos = document.createElement('p');
        semElementos.textContent = "Por favor, insira no mínimo um número!";
        resultados.appendChild(semElementos);
        return;
    }

    //Transforma o que foi digitado em um array de numeros
    const arrayNumeros = numerosDigitados.split(',').map(Number);

    //Rodando a função com o número passado pelo usuário
    fizzBuzz(arrayNumeros);
}
