# Angular-start
## Leo Donati, Université Côte d'Azur (UniCA)
Repository de démarrage pour votre TD de Angular

C'est dans ce repository que vous allez créer votre projet Angular qui va évoluer tout au long de la semaine.

Vous devez donc modifier ce README en ajoutant votre nom et l'avancement de votre projet, ainsi que d'éventuelles difficultés que vous avez eu ou des bon,us que vous avez ajouté par rapport à ce qui vous est demandé.

* Si vous utilisez le github Codespace, alors dans votre machine virtuelle `npm`, `node` et `angular/CLI` sont déjà installés.
* Pour cloner en local ce repository, il faut :
   1. avoir installé `git` (ou `gitbash`) sur votre machine
   1. créer un répertoire de travail et s'y déplacer
   1. cloner le repository distant
```bash
git clone nom-du-repository
```



### Pour vérifier que l'installation est complète

```bash 
npm --version
node --version
ng version
```

### Chaque fois que vous modifiez votre code 

```bash
git pull            #pour synchroniser votre repo local avec le repo de github 
git add -A          #pour informer git de suivre tous les fichiers présents dans le répertoire
git commit -m "message descriptif"      #pour intégrer dans git les dernières modifications faites     
git push            #pour synchroniser le repo github avec le repo local
```

### Pour ajouter un tag (une étiquette) à l'état courant du repository sur github

```bash
git tag NomEtiquette
git push --tags
```








