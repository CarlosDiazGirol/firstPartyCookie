var urlCookie = document.location.href
if (urlCookie.includes("cjevent")) {
  var cutCookie = (urlCookie.split('&'))
  for (var i = 0; i < cutCookie.length; i++) {
    if (cutCookie[i].includes('cjevent')) {
      var cjEventCode = cutCookie[i].split('=')[1]
      sessionStorage.setItem("cjevent", cjEventCode)
    }
  }
}