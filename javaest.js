var data = null;
window.onload=function(){
	// Schreiben in data
	let url = 'https://api.sheety.co/77fc6f8f78a1e016774db9e41697fc4f/testSheety/tabellenblatt1';
    fetch(url)
    .then((response) => response.json())
    .then(json => {data = json;});
}
function test123() {
	document.getElementById("test").innerHTML=("yes");
	  let url1 = 'https://api.sheety.co/77fc6f8f78a1e016774db9e41697fc4f/testSheety/tabellenblatt1';
	  let body = {
			    tabellenblatt1: {
			    	      "gender": "Male1123",
			    	      "name": "Hans123123123123123123",
			    	      "email": "test123@gmail.com"
			    	    }
			    
			  }
		  console.log(body);
	  fetch(url1, {
		    method: 'POST',
		    headers:  {'Content-Type': 'application/json'},
		    body: JSON.stringify(body)
		  })
		  .then((response) => response.json())
		  .then(json => {
			  data = json;
		    console.log(json.tabellenblatt1);
		  });
}


const name = document.getElementById("nametf");
const mail = document.getElementById("emailtf");
const mailp = document.getElementById("mailp");
const rb1 = document.getElementById("malerb");
const rb2 = document.getElementById("femalerb");
const rb3 = document.getElementById("otherrb");
const form = document.getElementById("form");
const button = document.getElementById("submit");
const checkbox = document.getElementById("checkb");
var lauf = 0;
var fehler = false;



    

form.addEventListener('submit', (e) => {
	console.log(data);
	 var genderend = null;
	 var nameend = document.getElementById("nametf").value;
	 var mailend = document.getElementById("emailtf").value;
	 if(rb1.checked == true){
	 	  genderend = "male";
 	 }else if(rb2.checked == true){
 		   genderend = "female";
	  }else{
		   genderend = "other";
	  }
	  e.preventDefault();
	  rb1.disabled = true;
	  rb2.disabled = true;
	  rb3.disabled = true;
	  name.disabled = true;
	  mail.disabled = true;
	  checkbox.disabled = true;
	  button.disabled = true;
	  fehler = false;
	  document.getElementById("submit").innerHTML=("loading");
	  mailp.innerHTML=("");
	  var input = mail.value;
	  for(lauf in data.tabellenblatt1){
		  if(data.tabellenblatt1[lauf].email == input){
			  fehler = true;
			  console.log(lauf);
			  console.log(data.tabellenblatt1[lauf].email);
			  console.log(input);
			  console.log(data.tabellenblatt1[lauf].email == input);
			  mailp.innerHTML=("Diese Email ist schon registriert");
			  document.getElementById("submit").innerHTML=("Submit");
			  break;
		  }
	  }
	  if(fehler == false){
		  // submit
		  let url1 = 'https://api.sheety.co/77fc6f8f78a1e016774db9e41697fc4f/testSheety/tabellenblatt1';
		  let body = {
				    tabellenblatt1: {
				    	      "gender": genderend,
				    	      "name": nameend,
				    	      "email": mailend
				    	    }
				    
				  }
			  console.log(body);
		  fetch(url1, {
			    method: 'POST',
			    headers:  {'Content-Type': 'application/json'},
			    body: JSON.stringify(body)
			  })
			  .then((response) => response.json())
			  .then(json => {
			  });
		  // submited
		  alert("submited");
		  location.reload();
	  }else{
		  rb1.disabled = false;
		  rb2.disabled = false;
		  rb3.disabled = false;
		  name.disabled = false;
		  mail.disabled = false;
		  checkbox.disabled = false;
		  button.disabled = false;
	  }
	  
	
	});