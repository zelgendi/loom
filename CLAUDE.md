# LOOM House by Zena · istruzioni per Claude Code

## Progetto
Sito di LOOM House by Zena (Zena El Gendi), studio immobiliare a Milano.
HTML, CSS e JavaScript puri, senza framework e senza passaggi di build.
Cloudflare Pages pubblica il branch `main` di questo repository: ogni modifica che arriva su `main` va online in un paio di minuti.

## Struttura
1. Pagine: `index.html`, `immobili.html`, `immobile.html`, `servizi.html`, `chi-siamo.html` (fuori dal menu), `contatti.html`, `grazie.html`, `privacy.html`, `cookie.html`
2. `css/style.css` e `js/main.js`: stile e script condivisi
3. `data/immobili.json`: annunci, gestiti dalla cliente dal pannello
4. `admin/`: pannello annunci (`index.html` autonomo, `config.yml` indica solo il repository)
5. `images/`: logo, favicon, anteprima social; `images/immobili/` riceve le foto caricate dal pannello
6. `fonts/`: Hanken Grotesk (testi), Newsreader (titoli), Jost (solo scritta del logo)
7. `functions/api/auth/`: login GitHub del pannello su Cloudflare Pages

## Regole sui file
1. Ogni pagina HTML contiene una copia incorporata di `css/style.css` tra i commenti `LOOM:STYLE` e di `js/main.js` tra i commenti `LOOM:SCRIPT`. Quando modifichi uno dei due file condivisi, aggiorna la copia incorporata in tutte le pagine. Nelle pagine i percorsi dei font sono `fonts/` invece di `../fonts/`.
2. Intestazione e piè di pagina sono tra `LOOM:HEADER` e `LOOM:FOOTER` e sono uguali in tutte le pagine: ogni modifica va replicata ovunque.
3. `js/main.js` contiene una copia di riserva degli annunci tra `FALLBACK_START` e `FALLBACK_END`, usata solo quando le pagine sono aperte dal disco.
4. Non modificare mai `data/immobili.json`, le foto in `images/immobili/` e `admin/config.yml`.
5. `admin/index.html` ha stile e script propri e salva tramite l'API di GitHub; il login GitHub passa da `functions/api/auth/` (Cloudflare Pages Functions, variabili GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET). Toccalo solo se la richiesta riguarda il pannello.

## Regole sui testi
1. Mai trattini nei testi visibili, né lineette né trattini tra parole.
2. Corpi di testo di massimo due o tre righe. Titoli che stiano in due righe anche su telefono.
3. Ogni testo visibile ha la versione inglese nell'attributo `data-en`.
4. Non inventare fatti sulla cliente o sui suoi servizi: se serve un testo provvisorio, segnalalo.

## Stile
Ispirato a Fantastic Frank. Sfondo `#FDFBF7`, barra e piè di pagina `#F1F1EA`, testo `#1E1E19`, verde `#2C4238`.
Proporzioni fluide con `clamp`: il sito deve funzionare allo stesso modo su schermo da 11 pollici, ultrawide e telefono, senza vuoti né compressioni.
Movimento di livello medio: logo che si rimpicciolisce nella barra scorrendo, foto che si svelano. Rispettare `prefers-reduced-motion`.

## Requisiti fissi
Moduli FormSubmit con indirizzo email composto nello script (oggetto `MAIL` in `js/main.js`), avviso cookie sobrio, privacy e cookie policy, ragione sociale e P. IVA nel piè di pagina.

## Come lavorare
1. Le correzioni arrivano in blocco: applica solo quelle richieste, senza rigenerare parti che vanno già bene.
2. Raggruppa ogni blocco di correzioni in un unico invio, così ogni blocco diventa una sola pubblicazione.
3. Prima di inviare, verifica che le pagine si aprano senza errori nella console e che nei testi non ci siano trattini.
4. Se una cosa non si può fare o rischia di rompersi, dillo invece di inventare. Per soluzioni tecniche usa solo quanto confermato dalla documentazione ufficiale.
