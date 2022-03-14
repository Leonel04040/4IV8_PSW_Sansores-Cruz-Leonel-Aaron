function calc(){
 
    var	m1 = document.getElementById("hombres").value;
    var     m2 = document.getElementById("mujeres").value;
    var     m3= document.getElementById("total").value;
    
    var   m4=(m1*100)/m3;
    var   m5=(m2*100)/m3;
    
    
    
      document.getElementById("resultado1").innerHTML=
          'El porcentaje de hombres es igual a'+ m4;
   
          document.getElementById("resultado2").innerHTML=
          'El porcentaje de mujeres es igual a'+ m5;
   }
    