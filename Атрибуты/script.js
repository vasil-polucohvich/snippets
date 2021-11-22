// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://google.com')
a.setAttribute('title', 'Go to google')
a.textContent = 'Google'

console.log(a.attributes)