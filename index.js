const valorBanca = document.getElementById('valor-banca');
const porcentagemBanca = document.getElementById('porcentagem-banca');
const unidadesBanca = document.getElementById('unidades-banca');
const result = document.getElementById("resultado");
const botao = document.getElementById('calcular');

botao.addEventListener("click", evt =>{
    var resultado = valorBanca.value * (porcentagemBanca.value/100) * unidadesBanca.value;
    result.innerHTML = resultado.toLocaleString('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    })
});