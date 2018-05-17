
function minMaxIndice(tabela, mesInicial, mesFinal) {
  let mesinicio = mesInicial.split('/')[0]
  let mesfim = mesFinal.split('/')[0]
  let anoini = mesInicial.split('/')[1]
  let anofim = mesFinal.split('/')[1]
  let minValue = 99999;
  let maxValue = 0;
  let diferencaAno = anofim - anoini
  let diferencames = mesfim - mesinicio
  let taxas = Object.values(tabela).map(x=> x)
  let array = []
  //pegando a menor taxa
  for(let ano = 0; ano <= diferencaAno; ano++){
  	for(let mes = 0 ; mes<=diferencames; mes++){
  		if(minValue > taxas[ano][mes])
  			minValue = taxas[ano][mes]
  	}
  }

  //pegando a maior taxa

   for(let ano = 0; ano <= diferencaAno; ano++){
  	for(let mes = 0 ; mes<=diferencames; mes++){
  		if(maxValue < taxas[ano][mes])
  			maxValue = taxas[ano][mes]
  	}
  }
  array.push(minValue)
  array.push(maxValue)
  return array
}



export { minMaxIndice }
