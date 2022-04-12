## First Party Cookie

**El código está optimizado para GTM en una etiqueta HTML ECMA5**

Lo utilizaremos en GTM en una etiqueta HTML y un activador con el DOM cargado

Este snipet se ha creado para poder recoger un dato desde una URL que genera un campo aleatorio y guardarlo como una "cookie temporal".

```javascript
var urlCookie = document.location.href // capturamos la URL
if (urlCookie.includes("cjevent")) { //Verificamos si la URL contiene ese parámetro para inicializar el resto del código.
  var cutCookie = (urlCookie.split('&')) // Cortamos la URL por el símbolo &
  for (var i = 0; i < cutCookie.length; i++) { // Recorremos el Array 
    if (cutCookie[i].includes('cjevent')) { // Si el índice es true
    var cjEventCode = cutCookie[i].split('=')[1] // Cogemos su valor
    sessionStorage.setItem("cjevent", cjEventCode) // Lo subimos al sesion Storage para poder utilizarlo cuando sea necesario durante toda la sesión
    }
  }
}
```