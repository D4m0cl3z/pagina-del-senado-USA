var tableH = tablaDinamic(dataH);

// Meto la tabla dentro del DOM

document.getElementById("house-data").innerHTML = tableH;

// Creo la tabla a traves de acceder  al JSON

function tablaDinamic(dataH) {
	return dataH.results[0].members.map(miembros => {

		return "<tr>"
			+ "<th><a href="  + miembros.url + ">" + miembros.first_name + ", " + (miembros.middle_name || "") +" "+ miembros.last_name + "</a> </td>" +
			"<td>" + miembros.party + "</td>" +
			"<td>" + miembros.state + "</td>" +
			"<td>" + miembros.seniority + "</td>" +
			"<td>" + miembros.votes_with_party_pct + "</td>" +

		"</tr>"
	}).join("");

}



