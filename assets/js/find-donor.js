function findDonor() {

 if( null != localStorage.getItem( "strDonors") ) {
	 
	var bloodGroupVal = document.getElementById('bloodGroup').value;
	var countryVal = document.getElementById('country').value;
	var stateVal = document.getElementById('state').value;
	var districtVal = document.getElementById('district').value;
	var cityVal = document.getElementById('city').value; 
  
	var allDonors = localStorage.getItem( "strDonors");
	var arrObjDonors = JSON.parse( allDonors );
	var donorData = "";
	var boolIsData = false;
	if( undefined !== arrObjDonors ) {
		
		var table = document.createElement('table');
		var th1 = document.createElement('th');
		var th2 = document.createElement('th');
		var th3 = document.createElement('th');
		var trTh = document.createElement('tr');
		
		var thFullName = document.createTextNode( "Full Name" );
		var thMobile = document.createTextNode( "Mobile Number" );
		var thEmail = document.createTextNode( "Email" );
		//var age = document.createTextNode("Age");

		th1.appendChild(thFullName);
		th2.appendChild(thMobile);
		th3.appendChild(thEmail);
		//td2.appendChild(text2);
				
		trTh.appendChild(th1);
		trTh.appendChild(th2);
		trTh.appendChild(th3);
		//trTh.appendChild(th2);

		table.appendChild(trTh);		
		
		arrObjDonors.forEach( function( objDonor, index ) {
			
			if( bloodGroupVal == objDonor.bloodGroup && countryVal == objDonor.country && stateVal == objDonor.state && districtVal == objDonor.district && cityVal == objDonor.city ) {
									 			
				boolIsData = true; 
				var tr = document.createElement('tr');   
				
				var td1 = document.createElement('td');
				var td2 = document.createElement('td');
				var td3 = document.createElement('td');
				//var td4 = document.createElement('td');

				var fullName = document.createTextNode(objDonor.fullName);
				var mobile = document.createTextNode(objDonor.mobile);
				var email = document.createTextNode(objDonor.email);
				//var age = document.createTextNode(objDonor.age);

				td1.appendChild(fullName);
				td2.appendChild(mobile);
				td3.appendChild(email);
				//td2.appendChild(text2);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				//tr.appendChild(td2);
				tr.addEventListener("click", function() {
					requestBlood( index );
				});

				table.appendChild(tr);
			}
			
		});
		if( true === boolIsData ) {
			document.getElementById('data').appendChild(table);		
			document.getElementById('data').style.display = 'block';
			document.getElementById('click-record-msg').style.display = 'block';
			document.getElementById('no-record-msg').style.display = 'none';
		} else {
				
			   document.getElementById('no-record-msg').style.display = 'block';
			   document.getElementById('data').innerHTML = '';
			   document.getElementById('data').style.display = 'none';
				document.getElementById('click-record-msg').style.display = 'none';
		  }  
	}	
  } 
}

function requestBlood( intId ) {
	location.href = 'request_blood.html?did='+intId;
}

function goToOptions() {
	location.href = "options.html";
}

function getStates( objCountry ) {
	
	var arrIndiaStates = ['Maharashtra', 'Gujarat', 'Karnataka','Madhya pradesh'];
	var arrUsStates = ['XXX', 'YYY', 'ZZZ'];	
	var arrUkStates = ['AAA', 'BBB', 'CCC'];
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
	
	var arrMahaDist = ['Kolhapur', 'Sangli', 'Pune','Aurangabad','Amravati'];
	var arrGujaratDist = ['aaa', 'bbb', 'ccc'];
	var arrKarntkDist = ['qqq', 'wwww', 'rrrr'];
	
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
	var arrPuneCities = ['Hadapsar', 'Hinjawdi', 'Katraj','Kharadi','bavdhan','swargate'];
	
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
