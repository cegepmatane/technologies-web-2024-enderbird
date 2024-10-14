function updaterRebours() {
    const decompte1 = document.querySelector("#decompte1");
    const decompte2 = document.querySelector("#decompte2");

    //la date actuelle.
    const dateActuelle = new Date().getTime();

    //mettre le nom du mois en anglais, 
    const dateEvenement1 = new Date("Dec 19 00:00:00 2024").getTime();

    // Pour se répéter tous les ans
    function getDateEvenement2() {
        const anneeActuelle = new Date().getFullYear();
        let dateEvenement2 = new Date(`Jan 1 00:00:00 ${anneeActuelle}`).getTime();

        // Regarder si l'évènement s'est déjà passé cette année
        if (dateActuelle > dateEvenement2) {
            dateEvenement2 = new Date(`Jan 1 00:00:00 ${anneeActuelle + 1}`).getTime();
        }
        return dateEvenement2;
    }
    const dateEvenement2 = getDateEvenement2();

    //de millisecondes en secondes
    const totalSecondes1 = (dateEvenement1 - dateActuelle) / 1000;
    const totalSecondes2 = (dateEvenement2 - dateActuelle) / 1000;
     
    // PREMIER ÉVÈNEMENT
    if (totalSecondes1 > 0) {
        const jours1 = Math.floor(totalSecondes1 / (60 * 60 * 24));
        const heures1 = Math.floor((totalSecondes1 - (jours1 * 60 * 60 * 24)) /  (60 * 60));
        const minutes1 = Math.floor((totalSecondes1 - ((jours1 * 60 * 60 * 24 + heures1 * 60 * 60))) / 60);
        const secondes1 = Math.floor(totalSecondes1 - ((jours1 * 60 * 60 * 24 + heures1 * 60 * 60 + minutes1 * 60)));

        decompte1.innerText = jours1 + "j " + heures1 + "h " + minutes1 + "m " + secondes1 + "s";
    }
    else {
        // Si compteur à zéro
        decompte1.innerText = "Finie !";
    }

    // DEUXIÈME ÉVÈNEMENT
    if (totalSecondes2 > 0) {
        const jours2 = Math.floor(totalSecondes2 / (60 * 60 * 24));
        const heures2 = Math.floor((totalSecondes2 - (jours2 * 60 * 60 * 24)) /  (60 * 60));
        const minutes2 = Math.floor((totalSecondes2 - ((jours2 * 60 * 60 * 24 + heures2 * 60 * 60))) / 60);
        const secondes2 = Math.floor(totalSecondes2 - ((jours2 * 60 * 60 * 24 + heures2 * 60 * 60 + minutes2 * 60)));

        decompte2.innerText = jours2 + "j " + heures2 + "h " + minutes2 + "m " + secondes2 + "s";
    }
    else if (totalSecondes2 <= 0) {
        // Si compteur à zéro
        decompte2.innerText = "Nouvel An !!!";
    }

    // Raffraichir le chrono (update seulement le 1er évènement) ((changé parce qu'il faut que la fonction n'arrête pas (se répète chaque année pour le 2ème évènement !!)))
    setTimeout(updaterRebours, 1000);
}
updaterRebours();