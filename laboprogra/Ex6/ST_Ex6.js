var mdp = prompt("Qu'elle est votre mot de passe? Indice, c'est 12345678");
var secret = "12345678"
if (mdp == secret){
    alert("Réussite");
}else{
    alert("échec");
}