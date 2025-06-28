function converterMoeda() {
    const taxas = {
        BRL: { BRL: 1, USD: 0.18, EUR: 0.16, GBP: 0.14, JPY: 28.5 },
        USD: { BRL: 5.5, USD: 1, EUR: 0.89, GBP: 0.78, JPY: 157.5 },
        EUR: { BRL: 6.2, USD: 1.12, EUR: 1, GBP: 0.88, JPY: 176.5 },
        GBP: { BRL: 7.0, USD: 1.28, EUR: 1.14, GBP: 1, JPY: 200.0 },
        JPY: { BRL: 0.035, USD: 0.0064, EUR: 0.0057, GBP: 0.005, JPY: 1 }
    };

    const valor = parseFloat(document.getElementById('valor').value);
    const origem = document.getElementById('moeda-origem').value;
    const destino = document.getElementById('moeda-destino').value;
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(valor) || valor <= 0) {
        resultadoDiv.textContent = "Digite um valor válido!";
        return;
    }

    const taxa = taxas[origem][destino];
    const convertido = valor * taxa;

    resultadoDiv.textContent = `Resultado: ${convertido.toLocaleString('pt-BR', { style: 'currency', currency: destino })}`;
}

document.getElementById('moeda-origem').addEventListener('change', function() {
    const simbolos = { BRL: 'R$', USD: '$', EUR: '€', GBP: '£', JPY: '¥' };
    document.getElementById('simbolo-origem').textContent = simbolos[this.value];
});