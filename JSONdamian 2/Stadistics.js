var objeto = [{
  "NumberOfDemocrates" : 0,
  "NumberOfRepublicans" : 0,
  "NumberOfIndependentis": 0,
  "porentajeVoteRepublican" : 0,
  "porentajeVoteDemocrat" : 0,
  "porentajeVoteIndependent" : 0,
  "losQueMenosVotaron":[] ,
},
{
  "NumberOfDemocrates" : 0,
  "NumberOfRepublicans" : 0,
  "NumberOfIndependentis": 0,
  "porentajeVoteRepublican" : 0,
  "porentajeVoteDemocrat" : 0,
  "porentajeVoteIndependent" : 0,
}]


var miembrosH = dataH.results[0].members;
var miembrosS = dataS.results[0].members;

// agrego h para aclarar que utilizo el objeto house 
var ContadorRepublicanosH = 0;
var ContadorDemocratasH = 0;
var ContadorIndependientesH = 0;

// agrego la cantidad de los party dentro de contadores 
miembrosH.map(obj => {
  if (obj.party == 'R') {
    ContadorRepublicanosH++
  }
  if (obj.party == 'D') {
    ContadorDemocratasH++
  }
  if (obj.party == 'I') {
    ContadorIndependientesH++
  }
})

// sumo cada party
var totalH = ContadorRepublicanosH + ContadorDemocratasH + ContadorIndependientesH;

// guardo mis variables dentro del objeto para saber la cantidad de cada partido
objeto[0].NumberOfDemocrates = ContadorRepublicanosH;
objeto[0].NumberOfDemocrates = ContadorDemocratasH;
objeto[0].NumberOfDemocrates = ContadorIndependientesH; 


console.log(`cantidad de republicanos: ${ContadorRepublicanosH}`)
console.log(`cantidad de democratas: ${ContadorDemocratasH}`)
console.log(`cantidad de independientes: ${ContadorIndependientesH}`)
console.log(`cantidad total: ${totalH}`)

// agrego S para aclarar que utilizo el objeto house 

var ContadoRepublicanosS = 0;
var ContadorDemocratasS = 0;
var ContadorIndependientesS = 0;

// agrego la cantidad de los party dentro de contadores, verifiquendo de que objeto 
miembrosS.map(obj => {
  if (obj.party == 'R') {
    ContadoRepublicanosS++
  }
  if (obj.party == 'D') {
    ContadorDemocratasS++
  }
  if (obj.party == 'I') {
    ContadorIndependientesS++
  }
}
)

// sumo cada party
var totalS = ContadoRepublicanosS + ContadorDemocratasS + ContadorIndependientesS;

// guardo mis variables dentro del objeto 
objeto.NumberOfDemocrates = ContadoRepublicanosS;
objeto.NumberOfDemocrates = ContadorDemocratasS;
objeto.NumberOfDemocrates = ContadorIndependientesS; 

console.log(`cantidad de republicanos: ${ContadoRepublicanosS}`)
console.log(`cantidad de democratas: ${ContadorDemocratasS}`)
console.log(`cantidad de independientes: ${ContadorIndependientesS}`)
console.log(`cantidad total: ${totalS}`)

// agrego h para aclarar que utilizo el objeto house 

// guardo en variables todos los filtros de los party 
var partidoRh = miembrosH.filter(members => members.party === "R");
var partidoDh = miembrosH.filter(members => members.party === "D");
var partidoIh = miembrosH.filter(members => members.party === "i")

var resultadoVotoRh = 0;
var resultadoVotoDh = 0;
var resultadoVotoIh = 0;

function promedio1(resultadoVoto, partido) {
  var totalPartido = partido.length
  var resultado = resultadoVoto / totalPartido
  if (totalPartido == 0 & resultadoVoto == 0) {
    resultado = 0
  }
  return resultado
}

partidoRh.forEach(members => {
  resultadoVotoRh += members.votes_with_party_pct;
});
partidoDh.forEach(members => {
  resultadoVotoDh += members.votes_with_party_pct;
});
partidoIh.forEach(members => {
  resultadoVotoIh += members.votes_with_party_pct;
});

// guardo mis variables del resultado del promedio dentro del objeto 

objeto[0].porentajeVoteDemocrat = Math.round(promedio1(resultadoVotoRh, partidoRh))
objeto[0].porentajeVoteRepublican = Math.round(promedio1(resultadoVotoDh, partidoDh))
objeto[0].porentajeVoteIndependent = Math.round(promedio1(resultadoVotoIh, partidoIh))


console.log(`promedio votos republicanos: ${Math.round(promedio1(resultadoVotoRh, partidoRh))}`)
console.log(`promedio votos democratas: ${Math.round(promedio1(resultadoVotoDh, partidoDh))}`)
console.log(`promedio votos independientes: ${Math.round(promedio1(resultadoVotoIh, partidoIh))}`)



// agrego S para aclarar que utilizo el objeto house 

// guardo en variables todos los filtros de los party 
var partidoRs = miembrosS.filter(members => members.party === "R");
var partidoDs = miembrosS.filter(members => members.party === "D");
var partidoIs = miembrosS.filter(members => members.party === "i")

var resultadoVotoRs = 0;
var resultadoVotoDs = 0;
var resultadoVotoIs = 0;

partidoRs.forEach(members => {
  resultadoVotoRs += members.votes_with_party_pct;
});
partidoDs.forEach(members => {
  resultadoVotoDs += members.votes_with_party_pct;
});
partidoIs.forEach(members => {
  resultadoVotoIs += members.votes_with_party_pct;
});

function promedio2(resultadoVoto, partido) {
  var totalPartido = partido.length
 var resultado = resultadoVoto / totalPartido
  if (totalPartido == 0 && resultadoVoto == 0) {
    resultado = 0
  } 
  return resultado
}

// guardo mis variables del resultado del promedio dentro del objeto 

objeto[1].porentajeVoteDemocrat = Math.round(promedio1(resultadoVotoRs, partidoRs))
objeto[1].porentajeVoteRepublican = Math.round(promedio1(resultadoVotoDs, partidoDs))
objeto[1].porentajeVoteIndependent = Math.round(promedio1(resultadoVotoIs, partidoIs))


console.log(`promedio votos republicanos: ${Math.round(promedio2(resultadoVotoRs, partidoRs))}`)
console.log(`promedio votos democratas: ${Math.round(promedio2(resultadoVotoDs, partidoDs))}`)
console.log(`promedio votos independientes: ${Math.round(promedio2(resultadoVotoIs, partidoIs))}`)

// funcion para calcular a los miembros que menos votan par su partido 

var miembrosH = dataH.results[0].members;

function porcentaje10 (miembros) {
 var miembros = miembros * 0.1 
 return miembros
}

var diez = Math.round(miembrosS.length * 0.10 )
console.log(`10 porciento de miembros: ${diez}`)


function menorPorcentaje (array, porcentaje) {
var votes = [];
array.sort(function(a, b) {
  return a.votes_with_party_pct - b.votes_with_party_pct;
});
votes = array.slice(0, porcentaje)
return votes
}


console.log(`los que menos votaron: ${menorPorcentaje(miembrosS, diez)}`)
