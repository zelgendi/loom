/* LOOM House by Zena · script condiviso */
(function(){
  'use strict';
  var doc=document,root=doc.documentElement;
  root.classList.add('js');

  /* Indirizzo email composto qui per limitare lo spam */
  var MAIL={u:'z.elgendi',d:'gmail.com'};
  function mail(){return MAIL.u+'@'+MAIL.d}

  /* Copia di riserva degli annunci, usata solo se data/immobili.json non si può leggere (file aperto dal disco) */
  var FALLBACK=/*FALLBACK_START*/{"immobili": [{"codice": "LM05", "pubblicato": true, "evidenza": false, "contratto": "breve", "stato": "disponibile", "titolo": "Villa Poggio ai due Pini", "titolo_en": "Villa Poggio ai due Pini", "zona": "Bibbona", "prezzo": null, "superficie": null, "locali": null, "bagni": 4, "piano": null, "classe": "", "descrizione": "Sulle colline toscane, Poggio Ai Due Pini è un raffinato retreat di charme dove natura, privacy e bellezza si incontrano.\nLa piscina a sfioro, la vista sui cipressi e gli interni dal carattere autentico creano un’esperienza esclusiva, sospesa tra quiete, luce e paesaggio.", "descrizione_en": "Nestled among the rolling hills of Tuscany, Poggio Ai Due Pini is an enchanting hideaway where timeless elegance meets the untouched beauty of nature.\n\nSurrounded by graceful cypress trees and breathtaking landscapes, this intimate retreat invites you to embrace the art of slow living. An infinity pool seemingly melting into the horizon, interiors rich in authentic Tuscan charm, and an atmosphere of absolute privacy create a sanctuary of understated luxury.\n\nHere, golden light, endless views, and the gentle rhythm of the countryside turn every moment into an unforgettable escape.", "foto": ["images/immobili/lm05_mwjmttkb_1.jpg", "images/immobili/lm05_mwjmttkb_2.jpg", "images/immobili/lm05_mwjmttkb_3.jpg", "images/immobili/lm05_mwjmttkb_4.jpg", "images/immobili/lm05_mwjmttkb_5.jpg", "images/immobili/lm05_mwjmttkb_6.jpg", "images/immobili/lm05_mwjmttkb_7.jpg", "images/immobili/lm05_mwjmttkb_8.jpg", "images/immobili/lm05_mwjmttkb_9.jpg", "images/immobili/lm05_mwjmttkb_10.jpg", "images/immobili/lm05_mwjmttkb_11.jpg", "images/immobili/lm05_mwjmttkb_12.jpg", "images/immobili/lm05_mwjmttkb_13.jpg", "images/immobili/lm05_mwjmttkb_14.jpg", "images/immobili/lm05_mwjmttkb_15.jpg", "images/immobili/lm05_mwjmttkb_16.jpg", "images/immobili/lm05_mwjmttkb_17.jpg", "images/immobili/lm05_mwjmttkb_18.jpg", "images/immobili/lm05_mwjmttkb_19.jpg", "images/immobili/lm05_mwjmttkb_20.jpg", "images/immobili/lm05_mwjmttkb_21.jpg", "images/immobili/lm05_mwjmttkb_22.jpg", "images/immobili/lm05_mwjmttkb_23.jpg", "images/immobili/lm05_mwjmttkb_24.jpg", "images/immobili/lm05_mwjmttkb_25.jpg", "images/immobili/lm05_mwjmttkb_26.jpg", "images/immobili/lm05_mwjmttkb_27.jpg", "images/immobili/lm05_mwjmttkb_28.jpg", "images/immobili/lm05_mwjmttkb_29.jpg", "images/immobili/lm05_mwjmttkb_30.jpg", "images/immobili/lm05_mwjmttkb_31.jpg", "images/immobili/lm05_mwjmttkb_32.jpg", "images/immobili/lm05_mwjmttkb_33.jpg", "images/immobili/lm05_mwjmttkb_34.jpg", "images/immobili/lm05_mwjmttkb_35.jpg", "images/immobili/lm05_mwjmttkb_36.jpg", "images/immobili/lm05_mwjmttkb_37.jpg", "images/immobili/lm05_mwjmttkb_38.jpg", "images/immobili/lm05_mwjmttkb_39.jpg", "images/immobili/lm05_mwjmttkb_40.jpg", "images/immobili/lm05_mwjmttkb_41.jpg", "images/immobili/lm05_mwjmttkb_42.jpg", "images/immobili/lm05_mwjmttkb_43.jpg", "images/immobili/lm05_mwjmttkb_44.jpg"], "planimetria": "", "punti_forza": [], "punti_forza_en": []}, {"codice": "LM04", "pubblicato": true, "evidenza": false, "contratto": "affitto", "stato": "disponibile", "titolo": "Bilocale di charme con camino", "titolo_en": "", "zona": "Piero della Francesca", "prezzo": 1350, "superficie": 60, "locali": 2, "bagni": 1, "piano": 0, "classe": "", "descrizione": "Appartamento di charme con camino In caratteristico stabile Vecchia Milano, proponiamo in locazione appartamento al piano rialzato, molto silenzioso grazie all’affaccio interno. L’abitazione, caratterizzata da ottime finiture, dispone di un accogliente soggiorno con camino e zona pranzo, cucina, ampio bagno, ampio ripostiglio lavanderia e zona notte su soppalco, raccolta e funzionale, con altezza contenuta. Posizione strategica, a pochi passi da Arco della Pace, Parco Sempione e CityLife, con la fermata della metropolitana M5 Gerusalemme a soli 2 minuti a piedi", "descrizione_en": "", "foto": ["images/immobili/lm04_mwjlzgyq_1.jpg", "images/immobili/lm04_mwjlzgyq_2.jpg", "images/immobili/lm04_mwjlzgyq_3.jpg", "images/immobili/lm04_mwjlzgyq_4.jpg", "images/immobili/lm04_mwjlzgyq_5.jpg", "images/immobili/lm04_mwjlzgyq_6.jpg", "images/immobili/lm04_mwjlzgyq_7.jpg", "images/immobili/lm04_mwjlzgyq_8.jpg", "images/immobili/lm04_mwjlzgyq_9.jpg", "images/immobili/lm04_mwjlzgyq_10.jpg", "images/immobili/lm04_mwjlzgyq_11.jpg", "images/immobili/lm04_mwjlzgyq_12.jpg", "images/immobili/lm04_mwjlzgyq_13.jpg", "images/immobili/lm04_mwjlzgyq_14.jpg", "images/immobili/lm04_mwjlzgyq_15.jpg", "images/immobili/lm04_mwjlzgyq_16.jpg", "images/immobili/lm04_mwjlzgyq_17.jpg", "images/immobili/lm04_mwjlzgyq_18.jpg"], "planimetria": "", "punti_forza": [], "punti_forza_en": []}, {"codice": "LM03", "pubblicato": true, "evidenza": true, "contratto": "vendita", "stato": "disponibile", "titolo": "Dimora d'autore", "titolo_en": "", "zona": "Campo di Marte", "prezzo": 1100000, "superficie": 180, "locali": 4, "bagni": 3, "piano": 1, "classe": "", "descrizione": "FIRENZE, VIA DELLA ROBBIA – ELEGANTE RESIDENZA D’EPOCA\nIn una delle zone residenziali più eleganti e ricercate di Firenze, in Via della Robbia, proponiamo in vendita un raffinato appartamento di 180 mq, situato al primo piano di un prestigioso palazzo d’epoca. La proprietà si distingue per il fascino degli ambienti, le finiture di alto livello e la particolare cura dei dettagli, in un armonioso equilibrio tra elementi architettonici originali e comfort contemporaneo. Gli interni, ampi e luminosi, sono caratterizzati da splendidi soffitti alti e decorati, pavimenti originali e materiali di pregio che conferiscono agli spazi un’atmosfera elegante, raffinata e ricca di personalità. La zona giorno comprende un ampio e luminoso salone di rappresentanza, impreziosito da soffitti decorati e grandi finestre, un'elegante sala da pranzo e una cucina dal design contemporaneo, perfettamente integrata nel contesto storico della proprietà. La zona notte si compone di tre camere da letto e tre bagni, con ambienti curati e ben distribuiti. La suite padronale, particolarmente suggestiva, è caratterizzata da un elegante letto a baldacchino, dispone di bagno privato en suite e gode di accesso diretto a un delizioso terrazzo riservato, immerso nel verde, ideale per piacevoli momenti di relax e tranquillità. Gli affacci, la luminosità naturale e gli elementi architettonici originali contribuiscono a rendere questa proprietà una residenza di grande charme, capace di coniugare il fascino delle dimore storiche fiorentine con le esigenze dell'abitare contemporaneo. L'appartamento è situato al primo piano di un palazzo d'epoca privo di ascensore. Una proprietà di rappresentanza, ideale per chi ricerca una residenza esclusiva nel cuore di una delle zone più apprezzate di Firenze, dove eleganza, riservatezza e fascino storico si incontrano.", "descrizione_en": "", "foto": ["images/immobili/lm03_mwjlafnw_1.jpg", "images/immobili/lm03_mwjlafnw_2.jpg", "images/immobili/lm03_mwjlafnw_3.jpg", "images/immobili/lm03_mwjlafnw_4.jpg", "images/immobili/lm03_mwjlafnw_5.jpg", "images/immobili/lm03_mwjlafnw_6.jpg", "images/immobili/lm03_mwjlafnw_7.jpg", "images/immobili/lm03_mwjlafnw_8.jpg", "images/immobili/lm03_mwjlafnw_9.jpg", "images/immobili/lm03_mwjlafnw_10.jpg", "images/immobili/lm03_mwjlafnw_11.jpg", "images/immobili/lm03_mwjlafnw_12.jpg", "images/immobili/lm03_mwjlafnw_13.jpg", "images/immobili/lm03_mwjlafnw_14.jpg", "images/immobili/lm03_mwjlafnw_15.jpg", "images/immobili/lm03_mwjlafnw_16.jpg", "images/immobili/lm03_mwjlafnw_17.jpg", "images/immobili/lm03_mwjlafnw_18.jpg", "images/immobili/lm03_mwjlafnw_19.jpg", "images/immobili/lm03_mwjlafnw_20.jpg", "images/immobili/lm03_mwjlafnw_21.jpg", "images/immobili/lm03_mwjlafnw_22.jpg", "images/immobili/lm03_mwjlafnw_23.jpg", "images/immobili/lm03_mwjlafnw_24.jpg", "images/immobili/lm03_mwjlafnw_25.jpg", "images/immobili/lm03_mwjlafnw_26.jpg", "images/immobili/lm03_mwjlafnw_27.jpg", "images/immobili/lm03_mwjlafnw_28.jpg", "images/immobili/lm03_mwjlafnw_29.jpg"], "planimetria": "", "punti_forza": [], "punti_forza_en": []}, {"codice": "LM01", "pubblicato": true, "evidenza": true, "contratto": "affitto", "stato": "affittato", "titolo": "Elegante appartamento", "titolo_en": "Prestigious Residence", "zona": "Ariosto", "prezzo": null, "superficie": 360, "locali": 6, "bagni": 4, "piano": 2, "classe": "", "descrizione": "In stabile d'epoca di alto profilo, appartamento di oltre cinque locali pluristervizi.", "descrizione_en": "Set in a prestigious period building, this spacious apartment features over five rooms and multiple bathrooms.", "foto": ["images/immobili/lm01_mwjivmel_1.jpg", "images/immobili/lm01_mwjivmel_2.jpg", "images/immobili/lm01_mwjivmel_3.jpg", "images/immobili/lm01_mwjivmel_4.jpg", "images/immobili/lm01_mwjivmel_5.jpg", "images/immobili/lm01_mwjivmel_6.jpg", "images/immobili/lm01_mwjivmel_7.jpg"], "planimetria": "", "punti_forza": [], "punti_forza_en": []}, {"codice": "LM02", "pubblicato": true, "evidenza": false, "contratto": "vendita", "stato": "disponibile", "titolo": "Appartamento con terrazzino nel cuore di Milano", "titolo_en": "", "zona": "Monti", "prezzo": 1260000, "superficie": 110, "locali": 3, "bagni": 2, "piano": 2, "classe": "", "descrizione": "ELEGANTE APPARTAMENTO VIA VINCENZO MONTI MILANO\nIn una delle zone più prestigiose e ricercate di Milano, in Via Vincenzo Monti, proponiamo in vendita un elegante appartamento situato al primo piano di un signorile palazzo d’epoca con portineria tutto il giorno. L’abitazione, caratterizzata da ottime finiture e da ambienti ben distribuiti, si compone di soggiorno, sala da pranzo, cucina abitabile, due camere da letto e due bagni. La cucina viene proposta completamente arredata. Un piacevole terrazzino affacciato sull’interno offre uno spazio esterno riservato e tranquillo, particolarmente prezioso nel cuore della città. La posizione, l’eleganza del contesto e la qualità degli interni rendono questa proprietà una soluzione ideale per chi desidera vivere in una delle zone residenziali più esclusive di Milano, a pochi passi dai principali servizi e collegamenti del centro.", "descrizione_en": "", "foto": ["images/immobili/lm02_mwjj9vyw_1.jpg", "images/immobili/lm02_mwjj9vyw_2.jpg", "images/immobili/lm02_mwjj9vyw_3.jpg", "images/immobili/lm02_mwjj9vyw_4.jpg", "images/immobili/lm02_mwjj9vyw_5.jpg", "images/immobili/lm02_mwjj9vyw_6.jpg", "images/immobili/lm02_mwjj9vyw_7.jpg", "images/immobili/lm02_mwjj9vyw_8.jpg", "images/immobili/lm02_mwjj9vyw_9.jpg", "images/immobili/lm02_mwjj9vyw_10.jpg", "images/immobili/lm02_mwjj9vyw_11.jpg", "images/immobili/lm02_mwjj9vyw_12.jpg", "images/immobili/lm02_mwjj9vyw_13.jpg", "images/immobili/lm02_mwjj9vyw_14.jpg", "images/immobili/lm02_mwjj9vyw_15.jpg", "images/immobili/lm02_mwjj9vyw_16.jpg", "images/immobili/lm02_mwjj9vyw_17.jpg", "images/immobili/lm02_mwjj9vyw_18.jpg", "images/immobili/lm02_mwjj9vyw_19.jpg", "images/immobili/lm02_mwjj9vyw_20.jpg", "images/immobili/lm02_mwjj9vyw_21.jpg", "images/immobili/lm02_mwjj9vyw_22.jpg", "images/immobili/lm02_mwjj9vyw_23.jpg"], "planimetria": "", "punti_forza": [], "punti_forza_en": []}]}/*FALLBACK_END*/;

  var CHEV='<svg viewBox="0 0 7 11" aria-hidden="true"><path d="M1 1l4.5 4.5L1 10" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
  var CHEVL='<svg viewBox="0 0 7 11" aria-hidden="true"><path d="M6 1L1.5 5.5 6 10" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
  var DOWN='<svg viewBox="0 0 11 7" aria-hidden="true"><path d="M1 1l4.5 4.5L10 1" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
  var FULL='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 5V1h4M11 1h4v4M15 11v4h-4M5 15H1v-4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';

  var T={
    it:{status:{disponibile:'Disponibile',trattativa:'In trattativa',venduto:'Venduto',affittato:'Affittato'},
        contract:{vendita:'In vendita',affitto:'In affitto',breve:'Affitto breve'},
        month:'al mese',night:'a notte',onreq:'Prezzo su richiesta',
        room:'locale',rooms:'locali',bath:'bagno',baths:'bagni',
        floor:function(n){return n===0?'Piano terra':n+'° piano'},
        cls:function(c){return c==='nd'?'In attesa':c},
        count:function(n){return n===1?'1 immobile':n+' immobili'},
        empty:'Al momento non ci sono immobili in questa categoria.',emptyCta:'Scrivici cosa cerchi',
        none:'Gli immobili saranno pubblicati a breve.',
        f:{status:'Stato',contract:'Contratto',area:'Zona',price:'Prezzo',size:'Superficie',rooms:'Locali',baths:'Bagni',floor:'Piano',cls:'Classe energetica',code:'Codice'},
        facts:'Dati',shortcuts:'Scorciatoie',map:'Mappa della zona',enq:'Richiedi una visita',hl:'Punti di forza',
        more:'Leggi tutto',less:'Riduci',plan:'Planimetria',photo:'Foto',of:'di',full:'Vedi le foto a schermo intero',close:'Chiudi',prev:'Foto precedente',next:'Foto successiva'},
    en:{status:{disponibile:'Available',trattativa:'Under offer',venduto:'Sold',affittato:'Let'},
        contract:{vendita:'For sale',affitto:'For rent',breve:'Short let'},
        month:'per month',night:'per night',onreq:'Price on request',
        room:'room',rooms:'rooms',bath:'bathroom',baths:'bathrooms',
        floor:function(n){if(n===0)return 'Ground floor';var s=['th','st','nd','rd'],v=n%100;return n+(s[(v-20)%10]||s[v]||s[0])+' floor'},
        cls:function(c){return c==='nd'?'Pending':c},
        count:function(n){return n===1?'1 property':n+' properties'},
        empty:'There are no properties in this category right now.',emptyCta:'Tell us what you are looking for',
        none:'Properties will be published soon.',
        f:{status:'Status',contract:'Contract',area:'Area',price:'Price',size:'Size',rooms:'Rooms',baths:'Bathrooms',floor:'Floor',cls:'Energy class',code:'Reference'},
        facts:'Facts',shortcuts:'Shortcuts',map:'Map of the area',enq:'Book a viewing',hl:'Highlights',
        more:'Read more',less:'Read less',plan:'Floor plan',photo:'Photo',of:'of',full:'See photos full screen',close:'Close',prev:'Previous photo',next:'Next photo'}
  };

  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function qs(s,c){return (c||doc).querySelector(s)}
  function qsa(s,c){return Array.prototype.slice.call((c||doc).querySelectorAll(s))}

  var lang=get('loom_lang')==='en'?'en':'it';

  /* ---------- Lingua ---------- */
  function applyLang(){
    root.lang=lang;
    qsa('[data-en]').forEach(function(el){
      if(el.getAttribute('data-it')===null)el.setAttribute('data-it',el.innerHTML);
      el.innerHTML=el.getAttribute(lang==='en'?'data-en':'data-it');
    });
    qsa('[data-en-aria]').forEach(function(el){
      if(el.getAttribute('data-it-aria')===null)el.setAttribute('data-it-aria',el.getAttribute('aria-label')||'');
      el.setAttribute('aria-label',el.getAttribute(lang==='en'?'data-en-aria':'data-it-aria'));
    });
    qsa('[data-lang-block]').forEach(function(el){el.hidden=el.getAttribute('data-lang-block')!==lang});
    qsa('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-set')===lang))});
    qsa('input[name="Lingua"]').forEach(function(i){i.value=lang==='en'?'English':'Italiano'});
    var t=doc.body.getAttribute('data-title-'+lang);if(t)doc.title=t;
    if(DATA)renderAll();
  }

  /* ---------- Intestazione e logo animato ---------- */
  var hdr=qs('.hdr'),brand=qs('.hdr .brand'),hero=qs('.hero'),AR=768/296,docked=!hero,ticking=false;
  function gutPx(){return Math.min(Math.max(16,innerWidth*0.022),40)}
  function morph(){
    var y=window.scrollY||0;
    if(hero&&brand){
      var vw=innerWidth,hh=hdr.offsetHeight,H=hero.offsetHeight,w0=brand.offsetWidth||1,g=gutPx();
      var wb=Math.min(vw-2*g,H*0.34*AR),hb=wb/AR,D=Math.max(1,H*0.5);
      var p=Math.min(1,Math.max(0,y/D)),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
      var dockCy=hh/2,bigCy=H-y-g-hb/2,cy=bigCy+(dockCy-bigCy)*e,s=wb/w0+(1-wb/w0)*e;
      brand.style.transform='translate(-50%,-50%) translate(0,'+(cy-dockCy).toFixed(1)+'px) scale('+s.toFixed(4)+')';
      var a=[253,251,247],b=[30,30,25];
      brand.style.color='rgb('+a.map(function(v,i){return Math.round(v+(b[i]-v)*e)}).join(',')+')';
      docked=p>=1;
      hdr.classList.toggle('is-over',!docked);
    }
    hdr.classList.toggle('is-scrolled',y>4);
    ticking=false;
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(morph)}}
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  function closeMenu(){doc.body.classList.remove('nav-open');var b=qs('.burger');if(b)b.setAttribute('aria-expanded','false')}

  /* ---------- Pannello richiesta visita ---------- */
  function openDrawer(){var d=qs('.drawer');if(!d)return;d.classList.add('open');qs('.dscrim').classList.add('open');doc.body.classList.add('drawer-open');var f=qs('input:not([type=hidden]):not(.hp)',d);if(f)setTimeout(function(){f.focus()},350)}
  function closeDrawer(){var d=qs('.drawer');if(!d)return;d.classList.remove('open');qs('.dscrim').classList.remove('open');doc.body.classList.remove('drawer-open')}

  doc.addEventListener('click',function(e){
    var t=e.target;
    var lb_=t.closest('.lang button');if(lb_){lang=lb_.getAttribute('data-set');set('loom_lang',lang);applyLang();return}
    var bg=t.closest('.burger');if(bg){var o=doc.body.classList.toggle('nav-open');bg.setAttribute('aria-expanded',String(o));return}
    if(t.closest('.panel a')||t.closest('.scrim'))closeMenu();
    var ck=t.closest('[data-ck]');if(ck){set('loom_cookie','ok');var bn=qs('.ck');if(bn)bn.hidden=true;return}
    var fb=t.closest('.filters button');if(fb){filter=fb.getAttribute('data-f');renderAll();return}
    var g=t.closest('[data-open]');if(g){openLb(+g.getAttribute('data-open'),g.hasAttribute('data-plan')?'plan':'photos');return}
    if(t.closest('[data-enq]')){e.preventDefault();openDrawer();return}
    if(t.closest('.drawer-x')||t.closest('.dscrim')){closeDrawer();return}
    var mr=t.closest('[data-more]');if(mr){var d=qs('.d-desc');var open=d.classList.toggle('clip')===false;mr.innerHTML=(open?T[lang].less:T[lang].more)+' '+DOWN;mr.querySelector('svg').style.transform=open?'rotate(180deg)':'';return}
    var sn=t.closest('.strip-nav');if(sn){var st=qs('.strip');st.scrollBy({left:(sn.classList.contains('next')?1:-1)*st.clientWidth*0.8,behavior:'smooth'});return}
  });
  doc.addEventListener('keydown',function(e){
    if(e.key==='Escape'){closeMenu();closeLb();closeDrawer()}
    if(lbEl&&lbEl.classList.contains('open')){if(e.key==='ArrowRight')stepLb(1);if(e.key==='ArrowLeft')stepLb(-1)}
  });

  /* ---------- Email e moduli FormSubmit ---------- */
  function wireMail(){qsa('[data-mail]').forEach(function(a){a.href='mailto:'+mail();a.textContent=mail()})}
  wireMail();
  qsa('form[data-fs]').forEach(function(f){
    f.action='https://formsubmit.co/'+mail();
    var nx=qs('input[name="_next"]',f);
    if(nx){if(/^https?:/.test(location.href))nx.value=new URL('grazie.html',location.href).href;else nx.parentNode.removeChild(nx)}
  });
  var tipo=new URLSearchParams(location.search).get('tipo');
  if(tipo==='lunghi'||tipo==='brevi')tipo='affitti';
  if(tipo){var sel=qs('select[name="Motivo"]');if(sel){qsa('option',sel).forEach(function(o){if(o.getAttribute('data-key')===tipo)sel.value=o.value})}}

  /* ---------- Avviso cookie ---------- */
  var ckEl=qs('.ck');if(ckEl&&!get('loom_cookie'))ckEl.hidden=false;
  qsa('[data-year]').forEach(function(s){s.textContent=new Date().getFullYear()});

  /* ---------- Comparsa delle foto ---------- */
  var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12}):null;
  function watch(){qsa('.rv:not(.in)').forEach(function(c){io?io.observe(c):c.classList.add('in')})}

  /* ---------- Annunci ---------- */
  var DATA=null,filter='all';
  var fParam=new URLSearchParams(location.search).get('tipo');
  if(qs('[data-all]')&&['vendita','affitto','breve'].indexOf(fParam)>-1)filter=fParam;
  function load(){
    var ok=function(j){DATA=((j&&j.immobili)||[]).filter(function(x){return x&&x.codice&&x.pubblicato!==false});
      var rank={venduto:1,affittato:1};DATA=DATA.map(function(x,i){return[x,i]}).sort(function(a,b){return((rank[a[0].stato]||0)-(rank[b[0].stato]||0))||a[1]-b[1]}).map(function(p){return p[0]});
      renderAll()};
    if(!qs('[data-featured],[data-all],[data-body]'))return;
    if(!window.fetch||location.protocol==='file:'){ok(FALLBACK);return}
    fetch('data/immobili.json',{cache:'no-cache'}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(ok).catch(function(){ok(FALLBACK)});
  }
  function tx(l,k){return lang==='en'&&l[k+'_en']?l[k+'_en']:(l[k]||'')}
  function money(n){return lang==='en'?'€'+Number(n).toLocaleString('en-GB'):'€ '+Number(n).toLocaleString('it-IT')}
  function off(l){return l.stato==='venduto'||l.stato==='affittato'}
  function price(l){
    var t=T[lang];if(off(l))return t.status[l.stato];
    if(l.prezzo===undefined||l.prezzo===null||l.prezzo==='')return t.onreq;
    var s=money(l.prezzo);if(l.contratto==='affitto')s+=' '+t.month;if(l.contratto==='breve')s+=' '+t.night;return s;
  }
  function specs(l){var t=T[lang],a=[];
    if(l.locali)a.push(l.locali+' '+(l.locali==1?t.room:t.rooms));
    if(l.bagni)a.push(l.bagni+' '+(l.bagni==1?t.bath:t.baths));
    if(l.superficie)a.push(l.superficie+' m²');
    a.push(price(l));return a}
  function href(l){return 'immobile.html?id='+encodeURIComponent(l.codice)}
  function mark(){return '<span class="ph-empty"><svg class="logo" viewBox="0 0 768 296" aria-hidden="true"><use href="#full"/></svg></span>'}
  function card(l,i){
    var t=T[lang],ti=tx(l,'titolo');
    var img=(l.foto&&l.foto[0])?'<img src="'+esc(l.foto[0])+'" alt="'+esc(ti+', '+l.zona)+'" loading="lazy">':mark();
    return '<article class="card rv" style="--d:'+((i%2)*0.12)+'s"><a class="ph" href="'+href(l)+'" tabindex="-1" aria-hidden="true">'+img+'</a>'+
      '<div class="cap"><p class="ct">'+(l.stato==='trattativa'?'<span class="pre">'+esc(t.status.trattativa)+'</span>':'')+'<a href="'+href(l)+'">'+esc(ti)+', '+esc(l.zona)+'</a></p>'+
      '<ul class="cs">'+specs(l).map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ul></div></article>';
  }
  function renderAll(){
    if(!DATA)return;
    var t=T[lang];
    var fe=qs('[data-featured]');
    if(fe){var list=DATA.filter(function(x){return x.evidenza});DATA.forEach(function(x){if(list.length<2&&list.indexOf(x)<0&&!off(x))list.push(x)});list=list.slice(0,2);
      fe.setAttribute('data-n',list.length);
      fe.innerHTML=list.length?list.map(card).join(''):'<div class="empty"><p class="lead">'+esc(t.none)+'</p></div>'}
    var al=qs('[data-all]');
    if(al){
      qsa('.filters button').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-f')===filter))});
      var ls=DATA.filter(function(x){return filter==='all'||x.contratto===filter});
      al.setAttribute('data-n',ls.length);
      al.innerHTML=ls.length?ls.map(card).join(''):'<div class="empty"><p class="lead">'+esc(t.empty)+'</p><a class="btn" href="contatti.html?tipo=finder#form">'+esc(t.emptyCta)+' '+CHEV+'</a></div>';
      var c=qs('[data-count]');if(c)c.textContent=t.count(ls.length);
    }
    if(qs('[data-body]'))detail();
    watch();
  }

  /* ---------- Scheda immobile ---------- */
  var photos=[],plan=[],cur=0,set_=photos,lbEl=null;
  function detail(){
    var t=T[lang],id=new URLSearchParams(location.search).get('id'),l=null;
    DATA.forEach(function(x){if(String(x.codice)===id)l=x});
    var miss=qs('[data-missing]'),body=qs('[data-body]');
    if(!l){miss.hidden=false;body.hidden=true;return}
    miss.hidden=true;body.hidden=false;
    var ti=tx(l,'titolo');photos=(l.foto||[]).slice();plan=l.planimetria?[l.planimetria]:[];
    doc.title=ti+', '+l.zona+' · LOOM';
    var f=t.f,sp=specs(l);
    qs('[data-hero]').innerHTML=photos[0]?'<img src="'+esc(photos[0])+'" alt="'+esc(ti)+'"><button class="d-full" type="button" data-open="0" aria-label="'+esc(t.full)+'">'+FULL+'</button>':mark();
    qs('[data-title]').innerHTML='<h1>'+esc(ti)+', <em>'+esc(l.zona)+'</em></h1><div class="r"><div class="d-specs">'+sp.map(function(s){return esc(s)}).join('<br>')+'</div><button class="btn" type="button" data-enq>'+esc(t.enq)+' '+CHEV+'</button></div>';
    var pic=photos[1]||photos[0];
    qs('[data-side]').innerHTML=(pic?'<div class="pic" data-open="'+(photos[1]?1:0)+'" role="button" tabindex="0" aria-label="'+esc(t.full)+'"><img src="'+esc(pic)+'" alt="" loading="lazy"></div>':'')+
      '<p class="who">LOOM House by Zena<br><a href="tel:+393453138165">+39 345 313 8165</a></p><button class="btn" type="button" data-enq>'+esc(t.enq)+' '+CHEV+'</button>';
    var desc=tx(l,'descrizione'),paras=desc.split(/\n\s*\n/).filter(Boolean).map(function(p){return '<p>'+esc(p).replace(/\n/g,'<br>')+'</p>'}).join('');
    var long=desc.length>900;
    qs('[data-text]').innerHTML=paras?'<div class="d-desc'+(long?' clip':'')+'">'+paras+'</div>'+(long?'<button class="more" type="button" data-more>'+esc(t.more)+' '+DOWN+'</button>':''):'';
    var hl=(lang==='en'&&l.punti_forza_en&&l.punti_forza_en.length?l.punti_forza_en:l.punti_forza)||[];
    var hlEl=qs('[data-hl]');hlEl.hidden=!hl.length;
    hlEl.innerHTML=hl.length?'<p class="label">'+esc(t.hl)+'</p><ul>'+hl.map(function(h){return '<li>'+esc(h)+'</li>'}).join('')+'</ul>':'';
    var rest=photos.slice(1),rows='',k=0,pat=[1,2];
    while(k<rest.length){var n=Math.min(pat[(rows.match(/class="row/g)||[]).length%2],rest.length-k);rows+='<div class="row row--'+n+'">';for(var j=0;j<n;j++){rows+='<button type="button" data-open="'+(k+1+j)+'" aria-label="'+esc(t.photo+' '+(k+2+j))+'"><img src="'+esc(rest[k+j])+'" alt="" loading="lazy"></button>'}rows+='</div>';k+=n}
    qs('[data-gal]').innerHTML=rows;
    var stEl=qs('[data-strip]');stEl.hidden=photos.length<3;
    stEl.innerHTML=photos.length<3?'':'<div class="strip">'+photos.map(function(p,i){return '<button type="button" data-open="'+i+'" aria-label="'+esc(t.photo+' '+(i+1))+'"><img src="'+esc(p)+'" alt="" loading="lazy"></button>'}).join('')+'</div><button class="strip-nav prev" type="button" aria-label="'+esc(t.prev)+'">'+CHEVL+'</button><button class="strip-nav next" type="button" aria-label="'+esc(t.next)+'">'+CHEV+'</button>';
    qs('[data-plan]').innerHTML=plan.length?'<p class="label">'+esc(t.plan)+'</p><button type="button" data-open="0" data-plan aria-label="'+esc(t.plan)+'"><img src="'+esc(plan[0])+'" alt="'+esc(t.plan)+'" loading="lazy"></button>':'';
    var R=[[f.status,t.status[l.stato]||t.status.disponibile],[f.contract,t.contract[l.contratto]||''],[f.area,l.zona],[f.price,price(l)]];
    if(l.superficie)R.push([f.size,l.superficie+' m²']);if(l.locali)R.push([f.rooms,l.locali]);if(l.bagni)R.push([f.baths,l.bagni]);
    if(l.piano!==undefined&&l.piano!==null&&l.piano!=='')R.push([f.floor,t.floor(+l.piano)]);
    if(l.classe)R.push([f.cls,t.cls(l.classe)]);R.push([f.code,l.codice]);
    var map='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(l.zona+', Milano');
    qs('[data-facts]').innerHTML='<div class="tbl"><span class="h">'+esc(t.facts)+'</span><dl class="rows">'+R.map(function(r){return '<dt>'+esc(r[0])+'</dt><dd>'+esc(r[1])+'</dd>'}).join('')+'</dl></div>'+
      '<div class="tbl"><span class="h">'+esc(t.shortcuts)+'</span><div class="rows"><a href="'+map+'" target="_blank" rel="noopener">'+esc(t.map)+'</a><span>'+CHEV+'</span><a href="#" data-enq>'+esc(t.enq)+'</a><span>'+CHEV+'</span></div></div>';
    var ref=qs('input[name="Immobile"]');if(ref)ref.value=l.codice+', '+l.titolo+', '+l.zona;
    var sub=qs('input[name="_subject"][data-visit]');if(sub)sub.value='Richiesta visita '+l.codice+' dal sito LOOM';
    var rt=qs('[data-ref]');if(rt)rt.textContent=ti+', '+l.zona;
    wireMail();
  }
  function openLb(i,which){
    set_=which==='plan'?plan:photos;if(!set_.length)return;
    if(!lbEl){lbEl=doc.createElement('div');lbEl.className='lb';lbEl.setAttribute('role','dialog');lbEl.setAttribute('aria-modal','true');
      lbEl.innerHTML='<button class="lb-prev" type="button">‹</button><img alt=""><button class="lb-next" type="button">›</button><button class="lb-close" type="button"></button><p class="lb-count"></p>';
      doc.body.appendChild(lbEl);
      qs('.lb-prev',lbEl).onclick=function(){stepLb(-1)};qs('.lb-next',lbEl).onclick=function(){stepLb(1)};qs('.lb-close',lbEl).onclick=closeLb;
      lbEl.addEventListener('click',function(e){if(e.target===lbEl)closeLb()});}
    var t=T[lang];qs('.lb-close',lbEl).textContent=t.close;qs('.lb-prev',lbEl).setAttribute('aria-label',t.prev);qs('.lb-next',lbEl).setAttribute('aria-label',t.next);
    var multi=set_.length>1;qs('.lb-prev',lbEl).style.visibility=multi?'':'hidden';qs('.lb-next',lbEl).style.visibility=multi?'':'hidden';
    cur=i;showLb();lbEl.classList.add('open');doc.body.style.overflow='hidden';qs('.lb-close',lbEl).focus();
  }
  function showLb(){var t=T[lang];qs('img',lbEl).src=set_[cur];qs('.lb-count',lbEl).textContent=(cur+1)+' '+t.of+' '+set_.length}
  function stepLb(s){cur=(cur+s+set_.length)%set_.length;showLb()}
  function closeLb(){if(lbEl&&lbEl.classList.contains('open')){lbEl.classList.remove('open');doc.body.style.overflow=''}}
  doc.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('.pic[data-open]')){e.preventDefault();openLb(+e.target.getAttribute('data-open'),'photos')}});

  /* ---------- Avvio ---------- */
  applyLang();morph();load();
  requestAnimationFrame(function(){requestAnimationFrame(function(){root.classList.add('ready')})});
})();
