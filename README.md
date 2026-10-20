# Helenes Smørrebrød

Responsiv, statisk webbplats i samma struktur som Hedens Pizzeria: startsida med tydlig hero, informationskort, menykort och kontaktsektion samt en separat menysida. Sidorna kan publiceras direkt från repo-roten med GitHub Pages.

## Lokalt

Öppna `index.html` i en webbläsare. `menu.html` innehåller hela menybladet och går att länka till utan byggsteg.

## Innehåll och uppgifter

- Adress: Berzeliigatan 13, 412 53 Göteborg.
- Telefon: 031-20 20 80. E-post: info@helenes-smorrebrod.se.
- Öppettider enligt Helenes sajt: måndag–fredag 11–15, lördag 12–15, söndag och röda dagar stängt. Avvikelser meddelas på Facebook.
- Beställningar och bordsbokningar tas per telefon under öppettiderna. Dagens erbjudande gäller köp på plats och kan inte förbeställas.
- Meny och priser är avlästa från filen `Meny A5-2024.pdf` på originalwebbplatsen. Kontrollera priserna innan den nya sajten går live.
- Bilderna i `assets/` hämtades från originalwebbplatsens öppna bildfiler. Logotypen hämtades från den uppladdade SVG-filen. Källkopior av webbplatsens sidor och media finns lokalt i `../original-site/` och ska inte publiceras.
- Chiron GoRound TC WS laddas via den officiella webfont-paketets jsDelivr CSS. `--display` och `--body` i `styles.css` styr typsnittet. Rubriker använder vikt 700.
- Brödtextens minsta storlek är 16 px. H1 är 57 px, H2 32 px och H3/priser 20 px.

För att publicera på GitHub Pages: öppna **Settings → Pages**, välj **Deploy from a branch**, därefter `main` och `/ (root)`.

