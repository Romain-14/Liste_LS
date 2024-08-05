class Program {
	constructor() {
        // this.item vaudra [] si getItemFromLocalStorage() retourne null
		this.items     = this.getItemFromLocalStorage() || [];
		this.itemToAdd = "";

		this.itemInput  = document.getElementById("itemInput");
		this.addItemBtn = document.getElementById("addItem");
		this.itemList   = document.getElementById("itemList");

		this.setList    = document.getElementById("setList");
		this.deleteList = document.getElementById("deleteList");

		this.itemInput.addEventListener("input", (e) => this.setItemToAdd(e));
		this.addItemBtn.addEventListener("click", (e) => this.addItemToList(e));
		this.setList.addEventListener("click", () =>
			this.setItemToLocalStorage()
		);
		this.deleteList.addEventListener("click", () =>
			this.removeItemFromLocalStorage()
		);

		this.render();
	}

	setItemToAdd(e) {
		this.itemToAdd = e.target.value.trim();
	}

	addItemToList(e) {
		e.preventDefault();
		if (this.itemToAdd) {
			this.items.push(this.itemToAdd);
		}
        this.render();
	}

	setItemToLocalStorage() {
        // on vérifie si this.items est vide
        // si c'est le cas on affiche un message dans la liste
        // et on sort de la fonction ( pas besoin de sauvegarder dans le local storage un tableau vide !!!)
		if (!this.items.length) {
			this.itemList.innerHTML = "<li>Rien à sauvegarder !</li>";
			return;
		}

        // on sauvegarde le tableau this.items dans le local storage
        // 1ère étape la transformation du tableau en JSON (JSON.stringify)
		const items = JSON.stringify(this.items);
        // envoi de cette donnée dans le local storage
		localStorage.setItem("items", items);
	}

	getItemFromLocalStorage() {
        // récupération de la donnée du local storage
		const items = localStorage.getItem("items");
        // on retourne null si le local storage est vide 
        // sinon on retourne le tableau JSON transformé en tableau JS
		return JSON.parse(items);
	}

	removeItemFromLocalStorage() {
        // suppression de la donnée du local storage la NOTRE
        // on évite de supprimer TOUT le localstorage donc pas de méthode clear()
		localStorage.removeItem("items");
        // on vide le tableau this.items
		this.items = [];
        //on rafraîchit le DOM
		this.render();
	}

	render() {
		this.itemInput.focus();

		this.itemToAdd = "";
		this.itemInput.value = "";
		this.itemList.innerHTML = "";

		if (!this.items.length) {
			this.itemList.innerHTML = "<li>Liste vide ! 😭😭😭</li>";
			return;
		}

		for (const item of this.items) {
			const li = document.createElement("li");
			li.textContent = item;
			this.itemList.appendChild(li);
		}
	}
}
