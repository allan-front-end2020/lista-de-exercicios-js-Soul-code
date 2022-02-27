var numeroa = parseInt(prompt("Qual o valor a are a do triangulo"))
var numerob = parseInt(prompt("Qual o valor a are b do triangulo"))
var numeroc = parseInt(prompt("Qual o valor a are c do triangulo"))


if (numeroa == numerob && numeroa == numeroc) {

    alert('Seu triangule e equilatero')

}
if (numeroa != numerob && numerob != numeroc) {

    alert('Seu triangulo e  escaleno')
}



if (numeroa === numerob && numeroa != numeroc) {

    alert(' Seu triangulo e isósceles')
}
if (numeroa === numeroc && numeroa !== numerob) {

    alert(' Seu triangulo e isósceles')
}
if (numerob === numeroc && numerob !== numeroa) {

    alert(' Seu triangulo e isósceles')
}
if (numerob === numeroa && numerob !== numeroc) {

    alert(' Seu triangulo e isósceles')
}
if (numeroc === numeroa && numeroc !== numeroa) {

    alert(' Seu triangulo e isósceles')
}
if (numeroc === numerob && numeroc !== numerob) {

    alert(' Seu triangulo e isósceles')
}