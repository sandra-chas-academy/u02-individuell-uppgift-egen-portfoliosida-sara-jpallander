[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Y0f03qEq)

## Sara Jowhar Pallander

<strong>Länk: </strong> https://almostsara.netlify.app

### Sammanfattning av projektet
Portfoliosida utifrån egen designskiss. Började utifrån mobile-first och utökade till desktop under utvecklingssprocessen. Tog inspiration från u01:an för CV-layouten och light-/dark-mode anpassning. 

#### Interaktiv Javascript på sidan består av: 
- Drop-down meny i form av en knapp. Knappen ändrar riktning beroende på om menyn är öppen eller stängd. 

- Trycker man på @ ikonen längst upp till vänster på sidan visas min email i 5 sekunder. Gjorde från början att den syndes när man hover över den med musen men insåg att det inte skulle funka i mobilversionen - ändrade då till knapptryck i samband med setTimeout. 

- "Hire me" knappen visar en modal som man sedan stänger ner med hjälp av krysset i hörnet. 

- Projekt-kortet kan expanderas och minimeras. Visar titeln på mina repo som kan tryckas för att länka vidare till repo-sidan på GitHub. Tar även in repo-beskrivningen som syns under varje titel. Bilden på kortet är min GitHub profilbild och innan allt laddas in ser man en gif på ett laddningshjul. 

En utmaning har varit att behålla 99% loggans placering i headern. I mobila versionerna behövde jag kämpa med att se till att den inte krockar med meny-listan men det löste jag genom att ha flera brytpunkter. Det har även varit svårt att få till placeringen på grund av att förhandsvisningen i developer tools var annorlunda från live server.

Det var även utmanande att ta in data från egen JSON-fil samt GitHub API:et eftersom det var nytt för mig men när man väl fick till det var det väldigt smidigt att få in repeterande information som tex. CV listan. Jag behövde simplifiera intaget från GitHub API:et i ett enda kort på sidan istället för flera stycken för att hålla mig inom den svårighetsgrad jag klarar av just nu utan större fel. Däremot vill jag gärna utöka min kompetens i detta område för att uppnå mer professionella och interaktiva resultat. 

Jag ville jättegärna få in animation i när man öppnar menyn och projekt-kortet men trots mina försök genom att följa kodexempel så funkade det inte. Återigen något jag vill öva vidare med och bli bra på. 

Trots projektets simplicitet på grund av begränsningarna i min nuvarande kompetens tycker jag den uppnår en godtagbar nivå av professionalitet. Simpliciteten gör den mer lättläst och den sammanhängande designen och färgvalen ger ett finslipat och välplanerat resultat. 
#### Figma-skissen (https://www.figma.com/design/t2XV5hArrODAQVZopTm6xd/Portfolio-2?node-id=0-1&node-type=canvas&t=HBjXTxHhni8DSZtr-0).


### Vad kan man utveckla m.h.a av Javascript inom frontend?
Med Javascript kan man programmera interaktivitet och animation i webbsidors grafiska gränssnitt. Det är saker som att knappar ska utföra något när man trycker på dom, pop-up modaler, bildspel och olika scroll-effekter tillexempel. Det används även för att programmera logiska händelser som ska köras på applikationen, exempelvis göra matematiska uträkningar (ex. miniräknare), eller för att bestämma ett spels regler och mekanismer. Det är även ett nödvändigt verktyg för att läsa in och visa upp samlad information, exempelvis från ett API.


### Vad är JSON och hur används det inom frontend?
JSON är ett typ av filformat för att samla och organisera data i form av arrayer och objekt för att kunna kommunicera denna information mellan olika system - exempelvis browser och server. Filformatet och relevanta metoder skapades utifrån javascript och har alltså god integration med programmeringsspråket. Många moderna API:er är i JSON format och relaterar till frontendutveckling genom att det används för att förmedla relevant data till webbsidor och appar. Det har blivit ett alltmer populärt filformat sedan tidigt 2000-tal, till stösta del på grund av dess lättlästa strukturering och snabbare dataöverföring tack vare mindre filstorlek trots stora mängder information.


### Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?
HTTP står för Hyper Text Transfer Protocol. Den bestämmer hur kommunikationen mellan klient och server ska utföras. En simplifierad beskrivning på processen: Klienten skickar en förfrågan och servern står för att hitta ett svar på förfrågan och skickar sedan ut det till klienten. Exempel som tas upp på W3Schools är att när man som användare skriver in en länk till en webbsida i webbläsren skickas en förfrågan på HTML, CSS, Javascript och bildfiler som webbläsren sedan ska läsa in och presentera till användaren. Som frontendutvecklare jobbar man med att utveckla dessa olika delar. Därför är det lika viktigt att förstå de olika stegen av protokollet för att kunna optimera kommunikationsprocessen.

#
#
#

# Instruktioner

Denna uppgift går ut på att du bygga vidare uppgift u01 - Portfoliosida utifrån designskiss med Javascript. Du är nu fri att ändra till egen design / layout, samt eget innehåll. Det är dock viktigt att du behåller en sektion för CV ("About me") och en sektion med projekt ("Projects") eftersom du ska vidareutveckla sidan med Javascript på dessa sektioner. 

## Vad du ska göra

Du ska bygga vidare på  u01 - Portfoliosida utifrån designskiss med Javascript. och se till att du följer följande kravställningar: 

### CV i en fil:
Dina egna utbildningar och tidigare arbetsplatser ska nu ersätta "About me"-sidan. Ta med så mycket som möjligt att ditt "riktiga CV", men iallafall minst tre poster av varje.
Vilka utbildningar du läst och vilka tidigare arbeten du haft ska ligga i en separat fil i JSON-format. Denna JSON-fil ska läsas och och generera ditt CV på den tidigare motsvarigheten av "About me" sidan.


### Interaktiva scripts:
Din CV-sida ska innehålla minst två interaktiva JavaScript. Exempel kan vara en modal, slideshow, scroll-effekt, dölja/visa element, o.s.v

### Portfolio:
 Du publicerar minst två uppgifter / projekt från tidigare eller nuvarande studier / arbete inom HTML /CSS

### 👉  VG-krav

Din portfolio ska utökas så att den hämtar in publika projekt som finns i din egen Github via API. Den ska visa dessa projekt i din portfolio med namn och beskrivning.

Du får gärna ha både dessa projekt och andra som genereras utifrån JSON-data om du känner för det, eller så ersätter du projekten så det bara är dina Github-projekt. Eventuellt kan du behöva komplettera datan från Github API med t.ex bilder ifrån JSON-datan.

När hämtningen av projekten sker ska det finnas information om att projekten håller på att ladda in så att besökaren inte undrar varför sidan först är tom.



### Tekniska krav:
* Validerad med 0 fel på https://validator.w3.org
* Inga errors i Console

### Sammantfattning av projekt + teoretiska frågor

1. Du sammanfattar ditt projekt i README.md och reflekterar kring styrkor och ev brister. Max 500 ord.
2. Du svarar på dessa frågor (max 800 ord):

Vad kan man utveckla m.h.a av Javascript inom frontend?
Vad är JSON och hur används det inom frontend?
Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?


## Kriterier för bedömning


Icke Godkänd (IG), Godkänd (G) eller Väl Godkänd (VG)

### Godkänd (G)
Din portfolio-sida uppfyller alla krav enligt kravspecifikationen.
Du visar att du kan utan allvarliga brister eller missar utveckla denna portfoliosida enligt kraven
Du sammanfattar ditt projekt samt ger ett översiktligt och korrekt svar på frågorna


### Väl Godkänd (VG)

Din portfolio-sida uppfyller alla krav enligt kravspecifikationen samt VG-kraven
Du uppvisar en mer avancerad förståelse för Git genom att jobba med en developer-branch som du sedan mergar i main
Du visar att du kan utan brister, eller bara i sådan omfattning att de knappt märks eller påverkar slutresultatet


### Börja uppgift / Din inlämning
* Du börjar och lämnar in din uppgift genom Github Classroom på denna länk.
* Återkoppling ges i Canvas











# 
