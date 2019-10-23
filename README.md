
# Workshop
-[Angular](https://angular.io/) 8
-[Angular CLI](https://github.com/angular/angular-cli) version 8.3.12
-[Node.js](https://nodejs.org/en/) version 12.13.0 LTS
-[Angular Material](https://material.angular.io/) version 8.2.3

## Setup
1.	Installeer [Node.js](https://nodejs.org/en/) LTS version voor jouw systeem & een web editor (bijv. [Visual Studio Code](https://code.visualstudio.com/))
2.	Installeer Angular CLI  **npm install -g @angular/cli**
3.	Creëer een app  **ng new {naam van app}**
a.	Add Angular Routing? **Y**
b.	Styling: kies in dit geval **SCSS**
4.	Run de app met  **ng serve**

Je hebt nu je applicatie al draaiend! Zolang je ng serve aan laat staan zullen wijzigingen die je saved direct worden gerefreshed op je scherm, how convenient.

## Uitdaging
koppel de [RandomContact API](https://randomuser.me/) met [Angular Material](https://material.angular.io/) in je app. De *Root* route (localhost:4200/) moet een lijst tonen met minimaal 10 contacten uit de API. Wanneer er een contact uit de lijst wordt geselecteerd: navigeer naar een detailpagina waar de data van desbetreffend contact te zien is (het liefst in een mooie Angular Material *card* natuurlijk 😉)

*Hint: Gebruik van Angular Router, RxJs observables en Angular’s HttpClientModule is hierbij nodig!*

## Hulp nodig? (volg dit stappenplan)
 - Verwijder complete inhoud van app.component.html en plaats hier
````<router-outlet></router-outlet>````

*Dit zorgt ervoor dat er op die plek het resultaat van de Angular router wordt ingevoegd.*
 - Voer in je commandline uit (in de map van je app): **ng g component list**
 - Voer in je commandline uit: **ng g component detail**

*Creëert de componenten in je project en voegt ze toe aan de declarations van je app.module.ts*

- Angular heeft uit zichzelf app-routing.module.ts toegevoegd.
	- Wijzig deze door in de routes array het volgende te zetten
![Routes](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet1.PNG)
``const  routes: Routes = [
{
	path:  '',
	component:  ListComponent,
},
{
path:  'detail',
component:  DetailComponent
}
];``

- DetailComponent en List component moeten vervolgens aan je imports worden toegevoegd, bovenaan je file.
