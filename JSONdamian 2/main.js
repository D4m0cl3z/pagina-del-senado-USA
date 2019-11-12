var tableS = tablaDinamic(dataS);

document.getElementById("senate-data").innerHTML = tableS;

function tablaDinamic(dataS) {
	return dataS.results[0].members.map(miembros => {

		return "<tr>"
			+ "<th><a href="  + miembros.url + ">" + miembros.first_name + ", " + (miembros.middle_name || "") + " " + miembros.last_name + "</a></th>" +
			"<td >" + miembros.party + "</td>" +
			"<td >" + miembros.state + "</td>" +
			"<td >" + miembros.seniority + "</td>" +
			"<td >" + miembros.votes_with_party_pct + "</td>" +
			"</tr>"
	}).join("");

}



