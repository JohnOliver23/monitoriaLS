
function redimentoCompostoFixo(valorInicial, aporte, juroMensal, meses) {
 	let juros = juroMensal / 100
 	let resp1 = Math.pow((1 + juros), meses)
 	let resp2 = valorInicial * resp1
 	let resp3 = aporte * (resp1 - 1) 
 	let resp4 = resp3 / juros
 	let resp5 = resp2 + resp4
 	return resp5
}

export { redimentoCompostoFixo }