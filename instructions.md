# Liste de courses

Ajouter une fonctionnalité de persistance des données dans le Local Storage

Au clic sur le bouton Sauvegarder la liste:

- La liste (le tableau) est converti en JSON
- Cette donnée au format JSON est installé dans le local storage

Au clic sur le bouton Supprimer la liste :

- Supprimer la ligne de la donnée lié au tableau

Au clic sur charger la liste :

- La donnée du local storage contenant le tableau est récupéré via sa "key"
- Cette donnée est converti pour retrouver son format d'origine
- cette donnée convertie remplace le tableau de la class

---
**Bonus** :

Créer une Class Item
