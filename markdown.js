/**
HERE I hope to have later a javascript file (under a free license)
that would implement standard shortcuts that help people to write markdown-formatted text more easily

For now, I only tried to look what keyboard shortcuts were already implemented in markdown or non-markdown editors

**[What keyboard shortcuts should go in markdown.js] (https://docs.google.com/spreadsheet/ccc?key=0AokjkJJJ_Ai2dDJqaTQwVGJQWjZHMWwybXlTcXlONXc&usp=sharing)**

**/


/** Entrée dans le suivi linuxfr : http://linuxfr.org/suivi/ctrl-k-et-autres-raccourcis-a-standardiser-dans-les-editeurs-markdown

Bonjour,

Disclaimer
-----------
je m'apprête à lancer un site visant à faire la pédagogie de markdown.
Pour l'instant, c'est ici https://github.com/internaciulo/markdown.mobi

Problèmes avec les éditeurs markdown (dont linuxfr)
-----------

Un truc que je me suis aperçu, c'est que la plupart des gens qui disent avoir un problème avec markdown ont en fait un problème avec les éditeurs basés sur markdown.

Ainsi un éminent contributeur de ce site m'a dit une fois que la syntaxe pour intégrer une image était absolument imbuvable. 

Euh... en pratique, moi dans [ByWord](http://bywordapp.com/), je me contente de faire un glisser-déposer de l'image dans le fichier texte, et je n'ai plus qu'à taper le text ALT="" pour les non-voyants.

De manière plus générale, il manque à markdown un jeu de raccourcis claviers standardisés.

Ebauche de solution
-----------

Je suis donc allé voir ce qui existe comme raccourcis claviers à la fois dans les éditeurs markdown (dont ByWord) et non-markdown (Microsoft Word et Google Docs)

Le résultat temporaire se trouve ici :

**[What keyboard shortcuts should go in markdown.js] (https://docs.google.com/spreadsheet/ccc?key=0AokjkJJJ_Ai2dDJqaTQwVGJQWjZHMWwybXlTcXlONXc&usp=sharing)**

L'idée, une fois que tout ceci est documenté, c'est de mettre tout ça dans un fichier `markdown.js` que la myriade de sites à venir utilisant markdown n'aura plus qu'à repomper.

Je ne suis hélas pas très doué en développement javascript, mais j'ai eu l'idée diabolique de proposer à linuxfr d'être le premier site à implémenter ce jeu de raccourcis claviers (les plus importants au moins), forçant ainsi nono à faire ce travail à ma place :-D

Donc voilà l'idée c'est que quand on taperait `Ctrl + B` (ou `Cmd + B` sur un mac), un petit bout de javascript rajoute les deux étoiles nécessaires autour de la sélection (s'il n'y a pas de sélection, insérer simplement 4 étoiles et mettre le curseur au milieu)


Cas particulier : Insérer un lien (Ctrl + K)
-----------

comme le concept d'[[URL]] est relativement important sur le web, le premier pas de ce `markdown.js` à venir serait de rendre vraiment trivial d'insérer un lien.

Voici ce que j'envisage :

1. `Ctrl + K` de base insère `[^]()` (^ indique où se trouve le curseur)
2. `Ctrl + K` quand il y a une sélection insère `[<la sélection>](^)`
3. `Ctrl + K` quand il y a une URL valide dans le presse-papiers insère `[^](<l'url valide>)`
4. `Ctrl + K` quand il y a une sélection *et* une URL valide insère `[<la sélection>](<l'url valide>) ^`


Bonus points
-------------

Alors là je sais pas si c'est possible, mais il serait vraiment cool de repomper [l'idée géniale de google docs qui vous suggère des URLs à insérer en fonction du texte que vous associez à l'URL](https://plus.google.com/u/0/+GoogleDrive/posts/D9VeMBxq4L4)



Dans le document Google ci-dessous par exemple, sans chercher à être rapide, j'ai mis `1m20s` à insérer `9 URLs` et surtout j'ai tout fait dans une seule fenêtre au lieu de me prendre la tête avec des onglets et des Ctrl + Tabulation

Essayez vous-même :

https://docs.google.com/document/d/1JqyEv31FKWvM100J5l7HPFsi9qK6FSZCJN_RVzG0Adg/edit?usp=sharing


**/
