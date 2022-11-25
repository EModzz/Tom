var Note = prompt("Qu'elle note as-tu obtenue?");
if (Note > 100){
    document.write("Erreur, tu ne peux avoir eu plus de 100 à l'examen.");
} else if (Note < 0){
    document.write("Erreur, tu ne peux pas avoir moins de 0 à l'examen.")
} else if (Note >= 90){
    document.write("La plus grande distinction! Tu as " + Note + "/100.");
} else if (Note >= 80){
    document.write("Grande distinction! Tu as " + Note + "/100.");
} else if (Note >= 70){
    document.write("Distinction! Tu as " + Note + "/100.");
} else if (Note >= 70){
    document.write("Distinction! Tu as " + Note + "/100.");
} else if (Note >= 60){
    document.write("Satisfaction! Tu as " + Note + "/100.");
} else if (Note >= 50){
    document.write("Réussite! Tu as " + Note + "/100.");
} else if (50 > Note){
    document.write("Échec! Tu as " + Note + "/100.");
}