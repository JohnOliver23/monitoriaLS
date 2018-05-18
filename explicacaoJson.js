let lc = {
  nome: "Luiz Carlos",
  disciplinas: {
    LM: {
      cargaHoraria: 10,
      lab: 'lab2'
    },
    LS: {
      cargaHoraria: 15,
      lab: 'lab3'
    }
  }
}

console.log(lc.disciplinas.LM)

let lc_oretorno = {
  nome: "Luiz Carlos",
  disciplinas: [
    {
      disc: 'LS',
      cargaHoraria: 10,
      lab: 'lab2'
    },
    {
      nome: 'LM',
      cargaHoraria: 15,
      lab: 'lab3'
    }
  ]
}

console.log(lc_oretorno.disciplinas[0])
