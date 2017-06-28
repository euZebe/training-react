* smart components (stateful) are containers over dumb components (stateless)
* dumb components know how to display a given data, but do not know where the data comes from


* syntaxe des fonctions en lambda pour garder le scope, plutôt que faire du binding manuel ?
	=> on sort d'une fonction prototypale ; on alourdit donc le code: chaque instance du composant va avoir une propriété qui est une nouvelle fonction



## Go further
- event delegation: onClick à mettre sur l'élément de plus haut niveau, et tester dans l'événement source (évite de propager le click sur toute la grappe d'objets)
	* c'est le container qui sait quelle action doit être déclenchée sur le clic de quel élément
    * EventPhase: en React, on récupère l'événement en phase de remontée
    * moyen de résoudre le problème des boutons cliquables sur les collapse card (le parent - header - écoute les 
    événements, et déclenche le fold/unfold de la card ou l'action du bouton selon la target cliquée)

- Object.freeze: empêche l'objet d'être modifié, dans sa structure ou dans ses valeurs => immutabilité (à vérifier pour un sous-objet)

- debounce pour retarder l'appel à une API tant que l'utilisateur est en train de taper (et/ou tant qu'il n'a pas 
sélectionné au moins x caractères)

- déstructuration de tableau:
```
const table = [1, 2, 3];
[,a,] = x; // a = 2
```

- kangax compatibility tables: to know new features of javascript per version
- devdocs.io : moteur de recherche de documentation multi-technos
    - possibilité de le mettre en offline
    
    
# Code hoisting
    - lecture du code en 2 passes:
        - lecture des var et functions et rattachement au scope global
        - exécution des instructions
```
foo();
var begin = 'hello';
function foo() {
    console.log(begin, end);
    var end = 'world';
}

// is converted to 

var begin; // ligne déclarative de variable: remontée
function foo() { // ligne déclarative de function: remontée en haut de script
    var end;
    console.log(begin, end);
    end = 'world';
}
foo();
begin = 'hello';
```