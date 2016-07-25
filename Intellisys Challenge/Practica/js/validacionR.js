/*$(document).ready(function(){
    
    $("#register-submit").click(function(){
        var val1 = $("#UsernameR").val();
        var val2 = $("#EmailR").val();
        var val3 = $("#PasswordR").val();
        var val4 = $("#Confirm-passwordR").val();
        
        
        if(val1 === "Cris"){
            alert("El nombre de usuario existe");
            return false;
        } else if ((val3.length < 6) && (val4.length < 6)) {
            alert("Las contrasenas tiene menos de 6 caracteres");
            return false;
          } else if(val3 != val4){
              alert("Las contrasenas no son iguales");
              return false;
           }else if(val2 === "cristiangomeze@hotmail.com"){
             alert("El Email ya existe");
             return false;   
            } else{ alert("Registrado correctamente"); }
        
        
        
    }); 
    
     $("#Login-submit").click(function(){
        var user = $("#Username").val();
        var pass = $("#Password").val();
        
        if(user != "Cris" && pass != "123456"){
            alert("El nombre de usuario o contrasena es incorrecto");
            return false;
        } else {alert("inicio correctamente"); }                 
    });
    
    
}); */

$(function(){
     $("#register-submit").on("click",function(){
         var UsernameR = $("#UsernameR").val();
         var EmailR = $("#EmailR").val();
         var PasswordR = $("#PasswordR").val();
         var ConfirmPassR = $("#Confirm-passwordR").val();
         var url = "index.html";
         var total = UsernameR.length * EmailR.length * PasswordR.length * ConfirmPassR.length;
         alert(total);
         
         if(total>0){
             $.ajax9({
                type: "POST",
                 url: url,
                 data: "UsernameR="+UsernameR+"&EmailR="+EmailR+"&PasswordR="+PasswordR+"&ConfirPassR"+ConfirmPassR
             });
         }
     });
});

