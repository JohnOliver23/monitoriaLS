function financiamentoPrice(financiamento, juroMensal, meses) {
 let juros = juroMensal / 100;
 let resp1 = financiamento * juros;
 let resp2 = Math.pow((1 + juros), meses)
 let resp3 = 1 - 1/resp2
 let resp4 = resp1 / resp3
 return resp4 * meses
}

export { financiamentoPrice }