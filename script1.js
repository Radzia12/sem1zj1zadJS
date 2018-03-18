//zadanie 1
function klik(){
	var name = document.getElementById("name");
	var div = document.getElementById("out");
		
	div.innerHTML = "witaj urzytkowniku :" + name.value;
				
	}

//zadanie 2
function licz(){
	var pole1 = document.getElementById("pole1");
	var pole2 = document.getElementById("pole2");
	var div = document.getElementById("div");
			
	var pole_val1=pole1.value;
	var pole_val2=pole2.value;
		
	var _pole1=parseInt(pole_val1,10);
	var _pole2=parseInt(pole_val2,10);
				
	//warunek if (warunek)? true : false
	// potrzebne to jest aby nie dzielic przez 0
	(_pole2===0)? div.innerHTML ="nie dziel przez 0":
	div.innerHTML = "suma: "+ (_pole1 + _pole2) +
	"<br>mnozenie: "+ (_pole1 * _pole2)+  
	"<br>dzielenie: "+ (_pole1 / _pole2) + 
	"<br>odejmowanie: "+ (_pole1 - _pole2)+ 
	"<br>modulo: "+ (_pole1 % _pole2);		
	}
	
//zadanie 2.1
function licz1(){
	var pole1 = document.getElementById("pole1");
	var pole2 = document.getElementById("pole2");
	var div1 = document.getElementById("div1");
			
	var los1 = Math.floor(Math.random()*20);
	var los2 = Math.floor(Math.random()*20);
		
	(los1===0 || los2===0)? div1.innerHTML =
	"nacisnij jescze raz bo po za zakresem" : div1.innerHTML =
	"<br>liczba 1: " +los1 +	"<br>liczba 2: " +los2+		
	"<br>suma: "+ (los1 + los2) +
	"<br>mnozenie: "+ (los1 * los2)+  
	"<br>dzielenie: "+ (los1 / los2) + 
	"<br>odejmowanie: "+ (los1 - los2)+ 
	"<br>modulo: "+ (los1 % los2);			
	}

//zadanie 3
function licz2(){
	var div2 = document.getElementById("div2");
	var los1 = Math.floor(Math.random()*6);
		
	div2.innerHTML = los1 +1;
	}

//zadanie 3.1 
//warunki pododawac od nieprawidlowych znakow w zakresach
function licz3(){
	var pocz = document.getElementById("pocz");
	var kon = document.getElementById("kon");
	var div1 = document.getElementById("div3");
	
	var pocz_val = pocz.value;
	var kon_val = kon.value;
	
	var _pocz = parseInt(pocz_val);
	var _kon = parseInt(kon_val);
	
	var los1 = Math.floor(Math.random()*_kon)+1
	
	if(los1 >= _pocz)
		div3.innerHTML = los1;
	else
		licz();		
	}

//zadanie 4
function liczCent(){
	var cale2 = document.getElementById("cale1");
	var cale_val = cale2.value;
	var _cale = parseFloat(cale_val);
	var centymetry = _cale*2.56;
						
	document.getElementById('centy1').value = centymetry;
	
	}
function liczCale(){
	var centy2 = document.getElementById("centy1");
	var centy_val = centy2.value;
	var _centy = parseFloat(centy_val);
	var cale = _centy/2.56;

	document.getElementById('cale1').value = cale;
	}

//zadanie 4.1
function liczCel(){
	var cel = document.getElementById('cel');		
	var cel_val = cel.value;
	var _cel = parseFloat(cel_val);
	var farenheity = (_cel*1.8)+32;
	document.getElementById('far').value = farenheity;
	//	°F = (°C × 1.8) + 32
	}
					
function liczFar(){
	var far = document.getElementById('far');
	var far_val = far.value;
	var _far = parseFloat(far_val);
	var celsjusze = (_far-32)/1.8;
	document.getElementById('cel').value = celsjusze;
	//°C = (°F − 32) /1.8
	}

//zadanie 5
function dodaj() 
	{
	
		var pole = document.getElementById('pole').value;
		var konto = document.getElementById('konto').value;
		var alarm = document.getElementById('alarm')
	
		var _pole = parseInt(pole);
		var _konto = parseInt(konto);
	
		var suma = (_konto + _pole);

		if(_pole<0)
		{
			alarm.innerHTML='blad liczba ujemna';
		return;
		}
		else if (isNaN(_pole))
		{
			alarm.innerHTML='blad to nie jest liczba';
		return;
		}
		else
		document.getElementById('konto').value = suma;
	
	}
	
	
function odejmij() 
	{
	
	var pole = document.getElementById('pole').value;
	var konto = document.getElementById('konto').value;
	
	var _pole = parseInt(pole);
	var _konto = parseInt(konto);
	
	var odejmij = (_konto - _pole);
	
	if(_pole<0)
		{
			alarm.innerHTML='blad liczba ujemna';
		return;
		}
		else if (isNaN(_pole))
		{
			alarm.innerHTML='blad to nie jest liczba';
		return;
		}
		else if (_konto<=0)
			return;
		else
		document.getElementById('konto').value = odejmij;
	
	}
