var Note = prompt("Qu'elle note as-tu obtenue?");
if (Note >= 90){
    document.write("La plus grande distinction!");
} else if (90 > Note && Note >= 80){
    document.write("Grande distinction!");
} else if (80 > Note && Note >= 70){
    document.write("Distinction!");
} else if (80 > Note && Note >= 70){
    document.write("Distinction!");
} else if (70 > Note && Note >= 60){
    document.write("Satisfaction!");
} else if (60 > Note && Note >= 50){
    document.write("Réussite!");
} else if (50 > Note){
    document.write("Échec!");
}