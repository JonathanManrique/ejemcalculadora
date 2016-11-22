window.onload=elClick; 
								 

var valor1="";
var control=true;



function elClick() {
	
	var uno=document.getElementById("todo10");
	uno.addEventListener("click",function() {
								clicEn("1");
								});

	var dos=document.getElementById("todo11");
	dos.addEventListener("click",function() {
								clicEn("2");
								});
	
	var tres=document.getElementById("todo12");
	tres.addEventListener("click",function() {
								clicEn("3");
								});
	
	var cuatro=document.getElementById("todo5");
	cuatro.addEventListener("click",function() {
								clicEn("4");
								});
	
	var cinco=document.getElementById("todo6");
	cinco.addEventListener("click",function() {
								clicEn("5");
								});
	
	var seis=document.getElementById("todo7");
	seis.addEventListener("click",function() {
								clicEn("6");
								});
	
	var siete=document.getElementById("todo");
	siete.addEventListener("click",function() {
								clicEn("7");
								});
	
	var ocho=document.getElementById("todo1");
	ocho.addEventListener("click",function() {
								clicEn("8");
								});
	
	var nueve=document.getElementById("todo2");
	nueve.addEventListener("click",function() {
								clicEn("9");
								});

	var cero=document.getElementById("todo15");
	cero.addEventListener("click",function() {
								clicEn("0");
								});

	var mas=document.getElementById("todo9");
	mas.addEventListener("click",function() {
								clicEn("+");
								});


	var menos=document.getElementById("todo8");
	menos.addEventListener("click",function() {
								clicEn("-");
								});


	var multiplicar=document.getElementById("todo4");
	multiplicar.addEventListener("click",function() {
								clicEn("*");
								});


	var division=document.getElementById("todo3");
	division.addEventListener("click",function() {
								clicEn("/");
								});

	var igual=document.getElementById("todo16");
	igual.addEventListener("click",function() {
							calcular();
							});

    var borrar=document.getElementById("todo14");
	borrar.addEventListener("click",function() {
							operaciones();
							});

	var elimarUno=document.getElementById("todo13");
	elimarUno.addEventListener("click",QuitarUno);

}

	function clicEn(num){
	var mostrar=document.getElementById("inicio");
	valor1 +=num;
	mostrar.textContent=valor1;
	
}
	
  	function calcular(){
  		var fin=eval(valor1);
  		var resu=document.getElementById("inicio")
  		resu.textContent=fin;


	}

	function operaciones(){
  	valor1="";
  	var resu=document.getElementById("inicio");
 	resu.textContent=valor1;
}

	function QuitarUno() {
	var ante=document.getElementById("inicio");
	var	eli1=valor1.slice(0,-1);
	valor1=eli1;
	ante.textContent=valor1;
}


   