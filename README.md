[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hi08v2nl)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11259382&assignment_repo_type=AssignmentRepo)

# Bokningssystem

## Sidor

Startsidan, bokningssida och en kontaktsida

## Beskrivning

Utgå ifrån att restaurangen har 15 bord för sex personer vid varje bord. Restaurangen har två sittningar varje kväll, en klockan 18:00 och en klockan 21:00. Detta innebär att samtliga bord bör gå att boka två gånger per kväll.

Skapa utifrån detta en applikation där det går att söka fram information för ett givet datum eller vecka. Användaren skall kunna välja en tid för den valda dagen. Samla in personuppgifter, upplys om gdpr och se till att bokningen genomförs.

I ett adminläge bör bokningar kunna administreras (modifieras, tas bort, lägga till) för personalen på restaurangen.

## Teknisk beskrivning

Som frontend skall ni skapa ett react-projekt med hälp av create-react-app och mallen typescript.

Som backend behöver ni skapa er egen databas och ett api, på samma sätt som ni tidigare har gjort med hjälp av node.js, express och mongo.

Att söka bord bör göras via ett formulär där användaren får ange antal personer (1-6) och önskat datum. En sökning görs via ett API-anrop och ett resultat presenteras för användaren. Om det fanns bord kvar så visas vilken/vilka tider som är tillgängliga. Om det inte finns bord kvar kommer en varningstext upp och användaren får söka igen.

När användaren har valt tid kommer ytterligare ett formulär upp där användaren får skriva namn, e-post och telefonnummer. Spara eller Avbryt där Spara skriver ner bokningen i db via ett API-anrop.

För adminläget är det ett enklare CRUD mot databasen och ett enklare gränssnitt som är nödvändigt.

Projektet skall finnas i ett git-repo och samtliga studenters commits skall finnas med.

Trello skall användas som verktyg för projektet. Det skall framgå vem som arbetat med vilken punkt.

## För G

- En fungerande applikation med samtliga sidor uppsatta med react router.
- Söksidan innehåller en textruta (eller valfri presentation) och en knapp för sökning (om det behövs).
- Sökningen skall göras genom ett anrop till ett API.
- Resultatet skall presenteras, förslagsvis genom en radioknappslista eller en rullgardinsmeny.
- Ett API-anrop skall göras för att spara bokningen i databasen.
- Administrationsgränssnittet finns med.
- Visa bokningar
- Ta bort bokningar
- Ändra bokningar – valfri (minst en av två)
- Skapa bokningar – valfri (minst en av två)
- Filtrera fram bokningar
- Koden skall vara genomtänkt och ha en tydlig struktur.
- Filstrukturen i projektet skall vara god.
- Formulären innehåller validering och felmeddelanden.
- Kunna hantera bokningar som är fler än 6 personer.
- Använd css/scss för att skapa animationer vid t.ex. laddning och bokningar.
- Hantera avbokningar som kund – valfri (minst en av två)
- Skicka bekräftelse- och avbokningsmail till användaren – valfri (minst en av två)
