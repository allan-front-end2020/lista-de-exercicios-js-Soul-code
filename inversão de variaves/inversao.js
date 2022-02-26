var a = prompt('digite seu primeiro numero')
var b = prompt('digite seu primeiro numero')
var c = null


document.write('A: ' + a + '<br/>')
document.write('B: ' + b + '<br/>')



document.write('<hr/>')
document.write('<h6> Seu numeros foram invertidos<h6>')

c = a
a = b
b = c
c = null

document.write('A: ' + a + '<br/>')
document.write('B: ' + b + '<br/>')