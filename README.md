# Workshop
- [Angular](https://angular.io/) 8
- [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12
- [Node.js](https://nodejs.org/en/) version 12.13.0 LTS
- [Angular Material](https://material.angular.io/) version 8.2.3

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

- DetailComponent en List component moeten vervolgens aan je imports worden toegevoegd, bovenaan je file.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet2.PNG)
- Je hebt nu routing. Door naar localhost:4200 te gaan krijg je het ListComponent te zien, door naar localhost:4200/detail te gaan krijg je het detail component te zien.
- Om de contacten op te kunnen halen moeten we een http request doen naar de API, hiervoor maken we een service aan. Voer uit in je command line **ng g service contact**
	- En voeg de gecreëerde service vervolgens toe aan je app.module.ts providers zodat hij beschikbaar wordt binnen de applicatie. ![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet3.PNG)
- De ContactService gaan we uitbreiden door de HttpClient te injecten. Hierdoor is het mogelijk Http calls te maken.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet4.PNG)
	- hiervoor moeten we wel HttpClientModule toevoegen aan de app.module.ts imports
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet5.PNG)
	- En toevoegen aan de bovenkant van je file imports.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet6.PNG)
	- Vervolgens maken we een loadContacts functie die een RxJs (asynchrone) observable kan returnen.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet7.PNG)

Zoals je ziet returnen we een array met contacten. Hiervoor moeten we eerst een interface maken die het Contact beschrijft. Je kunt zelf kijken wat er terugkomt als je [https://randomuser.me/api/?results=10](https://randomuser.me/api/?results=10) bekijkt in je console. Om het wat makkelijker te maken is de interface toegevoegd aan deze repo [contact.model.ts](https://github.com/davidvdijk/brightcubes-workshop/blob/master/contact.model.ts).
- Importeer contact.model.ts in je contactService. ![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet8.PNG)
- breidt de loadContacts functie van de contactService uit en probeer te begrijpen wat hier gebeurt. (deepdive [RxJs](https://rxjs-dev.firebaseapp.com/guide/operators))
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet9.PNG)
- Alles is opgezet om de lijst in te laden.
	- Breid ListComponent uit door de contact service te injecteren.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet10.PNG)
	- Implementeer de Angular lifecycle hook OnInit, in het ListComponent.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet11.PNG)
- In de ngOnInit hook gaan we nu de call uitvoeren die het lijstje vervolgens ophaalt.![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet12.PNG)

Hier wordt de geïnjecteerde contactService’s functie loadContacts aangeroepen. Omdat het om een http request gaat moeten we hierop subscriben (observables & async gedrag). Vervolgens zeggen we, van de contacten array die eruit komt schrijf ze als observable ( of(…) ) naar component variabele contacts. Hiervoor moeten we natuurlijk wel een contacts variabele hebben. Die maken we nog even aan.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet13.PNG)

 - voeg de html toe aan list.component.html
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet14.PNG)

Hier zie je dat de contacten asynchroon worden uitgelezen, en als hij gevuld is, dan wordt er overheen ge-loopt.
- Bovenstaande template gaat nog niet werken aangezien we gebruik maken van angular material. Deze package wordt niet standaard meegeleverd en moet los worden geïnstalleerd.
	- Voer in je command line uit: **ng add @angular/material**
		- Angular material wordt toegevoegd aan je *package.json* file, hier staan alle packages in die geïnstalleerd zijn voor je applicatie.
	- Voeg hierna **MatListModule** toe aan *app.module.ts* imports, om aan te geven dat deze specifieke module bruikbaar is voor je app. </br>
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet15.PNG)
	- Voeg bovenaan de app.module.ts file de volgende regel toe
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet16.PNG)
	 - Als je nu naar localhost:4200 gaat is de lijst wél te zien.
	 - Voeg ook nog even onderstaande regel toe bovenaan aan je *styles.scss* file. Dit is een standaard angular material styling theme.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet17.PNG)
- We willen naar de detail pagina als er een item wordt geselecteerd. Zoals je hierboven ziet hebben we in de html al een event binding. (click), die vervolgens een functie aanroept. Die functie voegen we nog even toe.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet18.PNG)
- Het geselecteerde contact wordt via de template doorgegeven aan de onClick functie. Subject selectedContact$ krijgt asynchroon een nieuwe waarde. Om this.router te kunnen gebruiken moeten we nog wel even in de constructor Router injecten, zodat we de functies van Router kunnen gebruiken.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet19.PNG)
- Ga naar localhost:4200, je ziet nu een lijst met 10 verschillende namen.
	- Zodra je op een list item klikt wordt je naar /detail genavigeerd. Hier willen we uiteindelijk meer details van desbetreffend contact + een afbeelding om wie het gaat.
- Om het selectedContact$ te kunnen ophalen moet de ContactService worden geïnjecteerd in het DetailComponent.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet20.PNG)

*</br>Let op!: je ziet waarschijnlijk dat deze t.o.v. van andere injections die we deden wél public is. Door hem public te maken kunnen we hem i.p.v. alleen vanuit de controller, ook vanuit de template benaderen.*
- Voeg onderstaande styling toe aan *detail.component.scss</br>*
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet21.PNG)
- Vervang de inhoud van detail.component.html voor onderstaande ![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet22.PNG)
	- In deze snippet zie je dat contactService direct wordt aangesproken, en door de async pipe ( | ) asynchroon wordt ingeladen zodra selectedContact$ een waarde heeft. Door ‘as contact’ wijs je die waarde toe aan een variabele naam die je door in je template kunt gebruiken.
- De card is nog niet zichtbaar omdat het een module uit @angular/material is, deze moeten we net zoals de list toevoegen aan de imports van app.module.ts en bovenaan toevoegen zodat de module weet waar hij de module kan vinden.</br>
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet23.PNG)
- Zorg dat de titel, voornaam en achternaam in de titel van de card wordt gebruikt.
- Zorg dat het emailadres in de subtitel zichtbaar wordt, de thumbnail in de mat-card-avatar, en een grote afbeelding in mat-card-image.
- Als laatste, vul mat-card-content paragraph(< p></ p>) met een samengestelde tekst van waardes uit Contact model.
&nbsp;&nbsp;&nbsp;&nbsp;
--------------------------------------
- Gelukt? Onderstaande implementatie is een voorbeeld hoe het ook mogelijk was.
![imports](https://github.com/davidvdijk/brightcubes-workshop/blob/master/images/snippet24.PNG)

Zoals je ziet kun je {{ }} op verschillende plekken gebruiken voor databinding.
- Je hebt nu een applicatie met een lijst van contacten, en een detail view van een geselecteerd contact. How cool!
	- Mocht je dit nou al snel voor elkaar hebben gekregen?
	- Als er geen data opgehaald kan worden, wat wil je tonen?
	- Als je de detailpagina refreshed ben je je geselecteerde contact kwijt omdat het component opnieuw wordt aangemaakt, zorg ervoor dat je bij een lege waarde naar de root ([http://localhost:4200](http://localhost:4200)) navigeert.
	- Kun je het selecteren van een Contact ook oplossen zonder routing? (denk aan *ngIf, @Input())