function check_info(){
	
	var FirstName = document.getElementById('FirstName').value;
	var LastName = document.getElementById('FirstNAme').value;
	
	if(FirstName=="" || LastName==""){
		alert('Please fill in the first and last name');
		return false;
	}
	else{
		return true;
	}
}

