function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html("");
}

function validate(){
	var txtDob = $("#txtDate").val();
	var dob = new Date(txtDob);
	if(dob >= new Date()){
		alert("Date of Birth is not valid. Date has to be before today.");
		return false;
	}
	var uphone = $("#unumber").val();
	if(isNaN(uphone) || uphone.length != 10){
		alert("Phone number is not valid. Phone number must be 10 digits.");
		return false;
	}
}