//Here the startDataUpload function is defined
function startDataUpload() {
	alert ("start data upload"); //alerts user that their values are being uploaded

	//gets the questions value from HTML file and stores in the following varibles:
	var question = document.getElementById("question").value; //Admins question
	var opta = document.getElementById("opta").value; //option A answer
	var optb = document.getElementById("optb").value; //option B answer
	var optc = document.getElementById("optc").value; //option C answer
	var optd = document.getElementById("optd").value; //option D answer

	//Store the above variables in  a postString
	var postString = "question="+question +"&opta="+opta+"&optb="+optb+"&optc="+optc+"&optd="+optd; //adding the question, options, and correct one to postString
	
	
	// now get the geometry values
	var latitude = document.getElementById("latitude").value; //Get lat value that the admin inserted
	var longitude = document.getElementById("longitude").value; //Get long value that the admin inserted
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude; //adding the lat and lon to postString


// now get the radio button values
//This is the correct answer; done as a radio button in order to facilitate the process for the admin
	if (document.getElementById("opt1").checked) { //if the first option is checked
 		 postString=postString+"&answer=opt1"; //store in answer column opt1
	}
	if (document.getElementById("opt2").checked) { //if the second option is checked
 		 postString=postString+"&answer=opt2"; //store in answer column opt2
	}
	if (document.getElementById("opt3").checked) { //if the third option is checked 
 		 postString=postString+"&answer=opt3"; //store in answer column opt3
	}
	if (document.getElementById("opt4").checked) { // if the forth option is checked
 		 postString=postString+"&answer=opt4"; //store  in answer column opt4
	}


	
	processData(postString); //A function processData to send the postString variable to the database table

}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30303/uploadData',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;  
   client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getElementById("dataUploadResult").innerHTML = client.responseText;
    }
}