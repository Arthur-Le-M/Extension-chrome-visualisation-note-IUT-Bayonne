//Récupération des DOM
var devoirs = document.querySelectorAll(".evaluation");

rouge = 255
i=0
tabCouleur = ["#85ff85", "#ccffcc", "#edffed"]
while(devoirs != [] && i<=2){
    recupererNoteRecente(devoirs, tabCouleur[i])
    i++;
}
console.log(devoirs.length)

function recupererDate(elementDevoir){
    var intitule = elementDevoir.children[1].innerHTML;
    var dateArray = intitule.split("/");
    var day = dateArray[0];
    var month = dateArray[1];
    var year = dateArray[2].split(":")[0];
    var dateObject = new Date(year, month, day);
   return dateObject;

}

function recupererNoteRecente(tab, couleur){
    devoirLePlusRecent = tab[0];
    indexLePlusRecent = 0;
    for(var i = 1; i < tab.length; i++){
        if(recupererDate(tab[i]) >= recupererDate(devoirLePlusRecent)){
            devoirLePlusRecent = tab[i];
            indexLePlusRecent = i;
        }
        console.log(devoirLePlusRecent)
    }
    
    devoirLePlusRecent.style.backgroundColor = couleur;
    devoirs = removeFromArray(devoirs, indexLePlusRecent)
    devoirs = recupererMemeNote(devoirs, devoirLePlusRecent, couleur);
}

function recupererMemeNote(tab, element, couleur){
    tabIndex = []
    for(var i = 0; i < tab.length; i++){
        if(recupererDate(element).getDate() == recupererDate(tab[i]).getDate()){
            tab[i].style.backgroundColor = couleur;
            tabIndex.push(i);
        }
    }
    for(var i = 0; i < tabIndex.length; i++){
        tab = removeFromArray(tab, tabIndex[i]-i);
    }
    return tab
}

function removeFromArray(tab, index){
    newTab = []
    for (var i = 0; i<tab.length; i++){
        if(index != i){
            newTab.push(tab[i])
        }
    }
    return newTab
}