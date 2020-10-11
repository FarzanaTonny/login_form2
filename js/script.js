document.querySelector('#f_name').addEventListener('keyup',function(){

	var getName = document.querySelector('#f_name');
	var name = getName.value;
	var nameReg = /^[a-zA-Z\-]+$/;

	if(nameReg.test(name)){
		getName.style.color = 'green';
	}else{
		document.querySelector('#wrong_name').innerHTML = 'Please enter only character';
		getName.style.color = 'red';
	}

});

document.querySelector('#l_name').addEventListener('keyup',function(){

	//document.querySelector('#wrong_name').style.display = 'block';

	var getName1 = document.querySelector('#l_name');
	var name1 = getName1.value;
	var nameReg1 = /^[a-zA-Z\-]+$/;

	if(nameReg1.test(name1)){
		getName1.style.color = 'green';
	}else{
		document.querySelector('#wrong_name').innerHTML = 'Please enter only character';
		getName1.style.color = 'red';
	}

});


document.querySelector('#gmail').addEventListener('keyup',function(){

	var getGmail = document.querySelector('#gmail');
	var gmail = getGmail.value;
	var gmailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if(gmailReg.test(gmail)){

	var a = gmail.indexOf('@');
	//console.log('index is'+a);
	var b = gmail.length;
	//console.log('length is'+b);
	var s = gmail.slice(a+1,b);
	//console.log(s);
	if(s == 'gmail.com'){
		getGmail.style.color = 'green';
		document.querySelector('#wrong_gmail').innerHTML = 'Correct Gmail address';
	}else{
		document.querySelector('#wrong_gmail').innerHTML = 'Wrong Gmail address';
	}

	}else{
		getGmail.style.color = 'red';
	}
	

});

document.querySelector('#countries').addEventListener('change',function(){
	if( this. value == 1){
		document.querySelector('.add_country').innerHTML ='<select id=" "><option value=" 0 ">Select Division</option><option value=" 1 "> Dhaka </option><option value=" 2 "> Rajshahi </option><option value=" 3 "> Cumilla </option><option value=" 4 "> Pabna </option><option value=" 5 "> Rongpur </option></select>';
	
	}else if(this . value ==2){

		document.querySelector('.add_country').innerHTML ='<select id=" "><option value=" 0 ">Select Division</option><option value=" 1 "> Toronto </option><option value=" 2 "> Montreal </option><option value=" 3 "> Calgary </option><option value=" 4 "> Ottawa </option><option value=" 5 "> Enmonton </option></select>';

	}else if(this.value == 3){

		document.querySelector('.add_country').innerHTML ='<select id=" "><option value=" 0 ">Select Division</option><option value=" 1 "> Mumbai </option><option value=" 2 "> Delhi </option><option value=" 3 "> Kolkata </option><option value=" 4 "> Chennai </option><option value=" 5 "> Pune </option></select>';

	}else if(this.value == 4){

		document.querySelector('.add_country').innerHTML ='<select id=" "><option value=" 0 ">Select Division</option><option value=" 1 "> Karachi </option><option value=" 2 "> Lahore </option><option value=" 3 "> Faisalabad </option><option value=" 4 "> Rawalpindi </option><option value=" 5 "> Multan </option></select>';

	}else if(this.value == 5){

		document.querySelector('.add_country').innerHTML ='<select id=" "><option value=" 0 ">Select Division</option><option value=" 1 "> Stockholm </option><option value=" 2 "> Gothenburg </option><option value=" 3 "> Malmo </option><option value=" 4 "> Uppsala </option><option value=" 5 "> Orebro </option></select>';

	}
});

document.querySelector('#password').addEventListener('keyup', function(){

var pwd_c = document.querySelector('#password').value;

var get_pwd1 = pwd_c.length;
	
	if(get_pwd1 < 8){

		document.querySelector('#worng h4').innerHTML = 'Password must be at least 8 character';

	}else{
		document.querySelector('#worng h4').innerHTML = 'You can go ahead';
	}

	});

	document.querySelector('#c_password').addEventListener('keyup', function(){

		var pwd1 = document.querySelector('#password').value;
		var pwd2 = document.querySelector('#c_password').value;
		if(pwd1 !== pwd2){
			document.querySelector('.get_pwd h4').innerHTML = '<font color = "red">Password not match <font>';
		}else{
			document.querySelector('.get_pwd h4').innerHTML = '<font color = "green">Password match <font>';
		}

	});


document.querySelector('.loginForm').addEventListener('submit',function(){
	
		window.open('http://www.YouTube.com','Print Window', 'height:500px,width:512px');

});

