/**
 *Documentation
 *https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript 
 **/

 let url = "web/php/post.php";
 let myForm = "formValues"; 
  
 window.addEventListener( "load", function(){
 
     function sendData(){
 
           const XHR = new XMLHttpRequest();
 
           // Bind the FormData object and the form element
           // Associar o objeto FormData e o elemento do formulário
           const FD = new FormData(FORM); 
 
           // Define what happens on successful data submission
           // Defina o que acontece no envio de dados bem-sucedido
           XHR.addEventListener( "load", function(event) {
             printOut(event.target.responseText);
           } );
       
           // Define what happens in case of error
           // Defina o que acontece em caso de erro
           XHR.addEventListener("error", function(event) {
             alert( 'Oops! Something went wrong.' );
           } );
       
           // Set up our request
           // Configurar nossa solicitação
           XHR.open( "POST",url);
           
           // The data sent is what the user provided in the form
           // Os dados enviados são os que o usuário forneceu no formulário
           XHR.send(FD);
     }
   
     // Access the form element...
     // Acesse o elemento do formulário ...
     const FORM = document.getElementById(myForm);
   
     // ...and take over its submit event.
     // ... e assumir o seu evento de envio
     FORM.addEventListener("submit", function(event) {
       event.preventDefault();
       sendData();
     });
 })
 
 // show the result on the index page
 // mostre o resultado na página de índice
 function printOut(info)
 {
   document.getElementById('output').innerHTML = info; 
 }