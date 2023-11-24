// QUESTÃO 2

// Temos uma variável book. Ela é uma string e contem apenas letras minúsculas sem acento e espaços.
// Sua tarefa é percorrer a variável book e contar a quantidade de ocorrências de cada letra E o número de palavras.
// EXEMPLO DE OUTPUT: 12333 palavras;  a: 1032, b:129, c: 1111 etc..

//Função chamada quando entrar na página
function init() {
    const book = 'este e o conteudo apenas com palavras minusculas e espacos';
    const idq = 'textoQuestao';
    contagem(book, idq);
}

//Função chamada quando o usuário digitar o texto
function textoUsuario() {
    const texto = document.getElementById('textoInput').value;
    const idu = 'textoUsuario';
    // Verifica se o campo de texto está vazio
    if (texto.trim() === '') {
        const noResultadoElemento = document.getElementById(idu);
        noResultadoElemento.textContent = 'Digite no mínimo uma palavra.';
        return;
    }
    contagem(texto, idu);
}

//Função de contagem
function contagem(texto, resultadoId) {
    // Inicializa as variáveis
    let contagemPalavras = 1, vara = 0, varb = 0, varc = 0, vard = 0, vare = 0, varf = 0, varg = 0, varh = 0, vari = 0,
        varj = 0, vark = 0, varl = 0, varm = 0, varn = 0, varo = 0, varp = 0, varq = 0, varr = 0, vars = 0, vart = 0,
        varu = 0, varv = 0, varw = 0, varx = 0, vary = 0, varz = 0;

    // Percorre o texto e atualiza as variáveis correspondentes
    for (let i = 0; i < texto.length; i++) {
        const letraAtual = texto[i];
        if (letraAtual === 'a') {
            vara++;
        } else if (letraAtual === 'b') {
            varb++;
        } else if (letraAtual === 'c') {
            varc++;
        } else if (letraAtual === 'd') {
            vard++;
        } else if (letraAtual === 'e') {
            vare++;
        } else if (letraAtual === 'f') {
            varf++;
        } else if (letraAtual === 'g') {
            varg++;
        } else if (letraAtual === 'h') {
            varh++;
        } else if (letraAtual === 'i') {
            vari++;
        } else if (letraAtual === 'j') {
            varj++;
        } else if (letraAtual === 'k') {
            vark++;
        } else if (letraAtual === 'l') {
            varl++;
        } else if (letraAtual === 'm') {
            varm++;
        } else if (letraAtual === 'n') {
            varn++;
        } else if (letraAtual === 'o') {
            varo++;
        } else if (letraAtual === 'p') {
            varp++;
        } else if (letraAtual === 'q') {
            varq++;
        } else if (letraAtual === 'r') {
            varr++;
        } else if (letraAtual === 's') {
            vars++;
        } else if (letraAtual === 't') {
            vart++;
        } else if (letraAtual === 'u') {
            varu++;
        } else if (letraAtual === 'v') {
            varv++;
        } else if (letraAtual === 'w') {
            varw++;
        } else if (letraAtual === 'x') {
            varx++;
        } else if (letraAtual === 'y') {
            vary++;
        } else if (letraAtual === 'z') {
            varz++;
        } else if (letraAtual === ' ') {
            // Se for um espaço, incrementa a contagem de palavras
            contagemPalavras++;
        }

    }

    // Exibe as variáveis na tela
    const resultadoElemento = document.getElementById(resultadoId);
    const variaveisContagem = [];
    variaveisContagem.push(`a: ` + vara);
    variaveisContagem.push(`b: ` + varb);
    variaveisContagem.push(`c: ` + varc);
    variaveisContagem.push(`d: ` + vard);
    variaveisContagem.push(`e: ` + vare);
    variaveisContagem.push(`f: ` + varf);
    variaveisContagem.push(`g: ` + varg);
    variaveisContagem.push(`h: ` + varh);
    variaveisContagem.push(`i: ` + vari);
    variaveisContagem.push(`j: ` + varj);
    variaveisContagem.push(`k: ` + vark);
    variaveisContagem.push(`l: ` + varl);
    variaveisContagem.push(`m: ` + varm);
    variaveisContagem.push(`n: ` + varn);
    variaveisContagem.push(`o: ` + varo);
    variaveisContagem.push(`p: ` + varp);
    variaveisContagem.push(`q: ` + varq);
    variaveisContagem.push(`r: ` + varr);
    variaveisContagem.push(`s: ` + vars);
    variaveisContagem.push(`t: ` + vart);
    variaveisContagem.push(`u: ` + varu);
    variaveisContagem.push(`v: ` + varv);
    variaveisContagem.push(`w: ` + varw);
    variaveisContagem.push(`x: ` + varx);
    variaveisContagem.push(`y: ` + vary);
    variaveisContagem.push(`z: ` + varz);

    resultadoElemento.textContent = contagemPalavras + ' palavras; ' + variaveisContagem.join(', ');
}