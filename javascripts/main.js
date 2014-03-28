function cmConverter(){
cm = document.getElementById("cm").value;

if(isNaN(cm)){
	document.writeln(cm + "thats not a number!!");
} else {
	document.converter.inch.value = document.converter.cm.value / 2.54
	}
}
function inchConverter(){
document.converter.cm.value = document.converter.inch.value * 2.54

}


function CelsiusConverter(){
celsius = document.getElementyById("celsius").value;
document.converter.fahrenheit.value = (document.converter.celsius.value * 9 / 5) + 32
document.converter.kelvin.value = document.converter.celsius.value * 1 + 273.15
}
function FahrenheitConverter(){
fahrenheit = document.getElementById("fahrenheit").value;
document.converter.celsius.value = (document.converter.fahrenheit.value - 32) * 5 / 9
document.converter.kelvin.value=((document.converter.fahrenheit.value - 32)*5/9)+273.15
}
