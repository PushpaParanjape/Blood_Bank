function registerDonor() {
	var fullNameVal = document.getElementById('fullName').value;
	var bloodGroupVal = document.getElementById('bloodGroup').value;
	var ageVal = document.getElementById('age').value;
	var genderVal = document.getElementById('gender').value;
	
	var countryVal = document.getElementById('country').value;
	var stateVal = document.getElementById('state').value;
	var districtVal = document.getElementById('district').value;
	var cityVal = document.getElementById('city').value;
	var mobileVal = document.getElementById('mobile').value;
	var emailVal = document.getElementById('email').value;
	
	if( undefined == fullNameVal || 'select' == bloodGroupVal || 'select' == countryVal || 'select' == stateVal || 'select' == districtVal || 'select' == cityVal || undefined == mobileVal || undefined == emailVal || undefined == ageVal ) {
		alert('All fields are required!');
		return false;
	}
	
	var objDonorReg = {};
	objDonorReg.fullName = fullNameVal;
	objDonorReg.bloodGroup = bloodGroupVal;
	
	objDonorReg.age = ageVal;
	objDonorReg.gender = genderVal;
	
	objDonorReg.country = countryVal;
	objDonorReg.state = stateVal;
	objDonorReg.district = districtVal;
	objDonorReg.city = cityVal;
	objDonorReg.mobile = mobileVal;
	objDonorReg.email = emailVal;

	if( null != localStorage.getItem( "strDonors") ) {
	  var retrievedDonors = localStorage.getItem( "strDonors");
	  var arrRetrievedDonors = JSON.parse( retrievedDonors );
	  arrRetrievedDonors.push( objDonorReg );
	  localStorage.setItem( "strDonors", JSON.stringify( arrRetrievedDonors ));
	  console.log( localStorage.getItem( "strDonors") );
	  alert('Registration Successful!');
	} else {
		var arrobjDonor = [];
		arrobjDonor.push( objDonorReg );
		localStorage.setItem( "strDonors", JSON.stringify( arrobjDonor ));
		console.log( localStorage.getItem( "strDonors") );
		alert('Registration Successful!');
	}
}

function validateFname( objFname ) {
	if ( !/^[a-zA-Z\W]*$/g.test( objFname.value ) ) {
		alert("Please enter only charachters for full name!");		
		return false;
	}
}
function validateMobile( objM ) {
	if ( !/^[0-9]*$/g.test( objM.value ) ) {
		alert("Please enter only numbers");		
		return false;
	} 
}
function validateEmail( objE ) {
	var emailRegEx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
	
	if ( !emailRegEx.test( objE.value )) {	
		alert("Invalid email!");
		return false;
	} 
}

function goToOptions() {
	location.href = "options.html";
}

function getStates( objCountry ) {
	
	var arrIndiaStates = ['Maharashtra', 'Gujarat', 'Karnataka','Madhya Pradesh'];
	var arrUsStates = ['California', 'Utab', 'lowa','North Dakota'];	
	var arrUkStates = ['England', 'Northern Ireland', 'Scotland','Wales'];
	var objState = { "India": arrIndiaStates, "US": arrUsStates , "UK": arrUkStates }; 
	
	var strCountry = objCountry.value;
	var stateElement = "";
	
	if( "select" !== strCountry ) {
		var arrState = objState[strCountry];
	
		stateElement = "<option value='select'>Select</option>";
		
		if( undefined !== arrState ) {
			arrState.forEach( function( stateName ) {
				
				stateElement += '<option>'+ stateName + '</option>';
				
			});
		}
	}
	
	document.getElementById('state').innerHTML = stateElement;	
	document.getElementById('district').innerHTML = "";
	document.getElementById('city').innerHTML = "";
}

function getDistrict( objState ) {
	
	var arrMahaDist = ['Kolhapur', 'Sangli', 'Pune','Aurangabad','Nashik','Nagpur','Amravati','Aurangabad'];
	var arrGujaratDist = ['Rajkot', 'Patan', 'Porbandar','Tapi'];
	var arrKarntkDist = ['Karawali', 'Malenadu', 'Western Ghats','Bombay','Kolar'];
	
	var objDistrict = { "Maharashtra": arrMahaDist, "Gujarat": arrGujaratDist , "Karnataka": arrKarntkDist }; 
	
	var strState = objState.value;
	
	var districtElement = "";
	
	if( "select" !== strState ) {
		
		var arrDistrict = objDistrict[strState];
		districtElement = "<option value='select'>Select</option>";
		
		if( undefined !== arrDistrict ) {
			arrDistrict.forEach( function( districtName ) {
			
				districtElement += '<option>'+ districtName + '</option>';
			
			});
		}
		
	}
	
	document.getElementById('district').innerHTML = districtElement;	
	document.getElementById('city').innerHTML = "";
}

function getCity( objDistrict ) {
	
	var arrKopCities = ['Kolhapur', 'Ichalkaranji', 'Gargoti','Kadegaon','Kagal','Shirol'];
	var arrSangliCities = ['palus', 'walwa', 'Tasgaon','Aatpadi','Miraj'];
	var arrPuneCities = ['Hadapsar', 'Hinjawdi', 'Katraj','Kharadi','bavdhan','Swargate'];
	
	var objCity = { "Kolhapur": arrKopCities, "Sangli": arrSangliCities , "Pune": arrPuneCities }; 
	
	var strDistrict = objDistrict.value;
	
	var cityElement = "";
	
	if( "select" !== strDistrict ) {
		
		var arrCities = objCity[strDistrict];
		cityElement = "<option value='select'>Select</option>";
		
		if( undefined !== arrCities ) {
			arrCities.forEach( function( cityName ) {
			
				cityElement += '<option>'+ cityName + '</option>';
			
			});
		}
		
	}
	
	document.getElementById('city').innerHTML = cityElement;	
	
}