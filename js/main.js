/* LOOM House by Zena · script condiviso */
(function(){
  'use strict';
  var doc=document,root=doc.documentElement;
  root.classList.add('js');

  /* Indirizzo email composto qui per limitare lo spam */
  var MAIL={u:'z.elgendi',d:'gmail.com'};
  function mail(){return MAIL.u+'@'+MAIL.d}

  /* Copia di riserva degli annunci, usata solo se data/immobili.json non si può leggere (file aperto dal disco) */
  var FALLBACK=/*FALLBACK_START*/{"immobili": [{"codice": "LM01", "pubblicato": true, "evidenza": true, "contratto": "affitto", "stato": "disponibile", "titolo": "Bilocale luminoso", "titolo_en": "Bright one bedroom flat", "zona": "Brera", "prezzo": 1850, "superficie": 62, "locali": 2, "bagni": 1, "piano": 3, "classe": "C", "descrizione": "Annuncio di esempio. Bilocale arredato in un palazzo d'epoca con portineria. Soggiorno con cucina a vista, camera matrimoniale e bagno finestrato.\n\nDisponibile da subito.", "descrizione_en": "Sample listing. Furnished flat in a period building with concierge. Living room with open kitchen, double bedroom and bathroom with window.\n\nAvailable now.", "foto": ["https://static.wixstatic.com/media/30e230_8df7596e45c04d5e86a331d5d79d1562~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_8df7596e45c04d5e86a331d5d79d1562~mv2.jpg", "https://static.wixstatic.com/media/30e230_d81dbc9888e14f4789d861a8ab981b3c~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_d81dbc9888e14f4789d861a8ab981b3c~mv2.jpg", "https://static.wixstatic.com/media/30e230_bb70fa106fda4749be141b8c3aa98e54~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_bb70fa106fda4749be141b8c3aa98e54~mv2.jpg", "https://static.wixstatic.com/media/30e230_bac63542fc1d4b9982e86e575f3a2c27f000.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_bac63542fc1d4b9982e86e575f3a2c27f000.jpg"], "planimetria": ""}, {"codice": "LM02", "pubblicato": true, "evidenza": true, "contratto": "vendita", "stato": "disponibile", "titolo": "Trilocale con terrazzo", "titolo_en": "Two bedroom flat with terrace", "zona": "Magenta", "prezzo": 740000, "superficie": 108, "locali": 3, "bagni": 2, "piano": 5, "classe": "B", "descrizione": "Annuncio di esempio. Ultimo piano con terrazzo abitabile, doppia esposizione e cantina.", "descrizione_en": "Sample listing. Top floor with a large terrace, dual aspect and cellar.", "foto": ["https://static.wixstatic.com/media/30e230_d81dbc9888e14f4789d861a8ab981b3c~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_d81dbc9888e14f4789d861a8ab981b3c~mv2.jpg", "https://static.wixstatic.com/media/30e230_fea201a15d9441f29ddffd89e6f9d1a1~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_fea201a15d9441f29ddffd89e6f9d1a1~mv2.jpg", "https://static.wixstatic.com/media/30e230_8df7596e45c04d5e86a331d5d79d1562~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_8df7596e45c04d5e86a331d5d79d1562~mv2.jpg", "https://static.wixstatic.com/media/30e230_bb70fa106fda4749be141b8c3aa98e54~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_bb70fa106fda4749be141b8c3aa98e54~mv2.jpg", "https://static.wixstatic.com/media/30e230_bac63542fc1d4b9982e86e575f3a2c27f000.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_bac63542fc1d4b9982e86e575f3a2c27f000.jpg"], "planimetria": ""}, {"codice": "LM03", "pubblicato": true, "evidenza": true, "contratto": "breve", "stato": "disponibile", "titolo": "Monolocale di design", "titolo_en": "Design studio flat", "zona": "Porta Romana", "prezzo": 140, "superficie": 38, "locali": 1, "bagni": 1, "piano": 2, "classe": "D", "descrizione": "Annuncio di esempio. Monolocale ristrutturato, ideale per soggiorni brevi in città.", "descrizione_en": "Sample listing. Renovated studio, ideal for short stays in the city.", "foto": ["https://static.wixstatic.com/media/30e230_fea201a15d9441f29ddffd89e6f9d1a1~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_fea201a15d9441f29ddffd89e6f9d1a1~mv2.jpg", "https://static.wixstatic.com/media/30e230_8df7596e45c04d5e86a331d5d79d1562~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_8df7596e45c04d5e86a331d5d79d1562~mv2.jpg"], "planimetria": ""}, {"codice": "LM04", "pubblicato": true, "evidenza": false, "contratto": "affitto", "stato": "affittato", "titolo": "Quadrilocale in corte", "titolo_en": "Three bedroom courtyard flat", "zona": "Sant'Ambrogio", "prezzo": 2900, "superficie": 140, "locali": 4, "bagni": 2, "piano": 1, "classe": "E", "descrizione": "Annuncio di esempio. Ampio appartamento affacciato su una corte interna silenziosa.", "descrizione_en": "Sample listing. Spacious flat overlooking a quiet inner courtyard.", "foto": ["https://static.wixstatic.com/media/30e230_bb70fa106fda4749be141b8c3aa98e54~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_bb70fa106fda4749be141b8c3aa98e54~mv2.jpg", "https://static.wixstatic.com/media/30e230_d81dbc9888e14f4789d861a8ab981b3c~mv2.jpg/v1/fill/w_1600,h_1200,al_c,q_80/30e230_d81dbc9888e14f4789d861a8ab981b3c~mv2.jpg"], "planimetria": ""}]}/*FALLBACK_END*/;

  var T={
    it:{status:{disponibile:'Disponibile',trattativa:'In trattativa',venduto:'Venduto',affittato:'Affittato'},
        contract:{vendita:'In vendita',affitto:'In affitto',breve:'Affitto breve'},
        month:'al mese',night:'a notte',onreq:'Prezzo su richiesta',
        room:'locale',rooms:'locali',bath:'bagno',baths:'bagni',
        floor:function(n){return n===0?'Piano terra':n+'° piano'},
        cls:function(c){return c==='nd'?'Classe in attesa':'Classe '+c},
        count:function(n){return n===1?'1 immobile':n+' immobili'},
        empty:'Al momento non ci sono immobili in questa categoria.',emptyCta:'Scrivici cosa cerchi',
        none:'Gli immobili saranno pubblicati a breve.',
        f:{area:'Superficie',rooms:'Locali',baths:'Bagni',floor:'Piano',cls:'Classe energetica',contract:'Contratto',code:'Codice'},
        plan:'Planimetria',photo:'Foto',of:'di',showAll:'Vedi tutte le foto',close:'Chiudi',prev:'Foto precedente',next:'Foto successiva',
        visit:'Richiesta visita'},
    en:{status:{disponibile:'Available',trattativa:'Under offer',venduto:'Sold',affittato:'Let'},
        contract:{vendita:'For sale',affitto:'For rent',breve:'Short let'},
        month:'per month',night:'per night',onreq:'Price on request',
        room:'room',rooms:'rooms',bath:'bathroom',baths:'bathrooms',
        floor:function(n){if(n===0)return 'Ground floor';var s=['th','st','nd','rd'],v=n%100;return n+(s[(v-20)%10]||s[v]||s[0])+' floor'},
        cls:function(c){return c==='nd'?'Class pending':'Energy class '+c},
        count:function(n){return n===1?'1 property':n+' properties'},
        empty:'There are no properties in this category right now.',emptyCta:'Tell us what you are looking for',
        none:'Properties will be published soon.',
        f:{area:'Floor area',rooms:'Rooms',baths:'Bathrooms',floor:'Floor',cls:'Energy class',contract:'Contract',code:'Reference'},
        plan:'Floor plan',photo:'Photo',of:'of',showAll:'See all photos',close:'Close',prev:'Previous photo',next:'Next photo',
        visit:'Viewing request'}
  };

  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function qs(s,c){return (c||doc).querySelector(s)}
  function qsa(s,c){return Array.prototype.slice.call((c||doc).querySelectorAll(s))}

  var lang=get('loom_lang')==='en'?'en':'it';

  /* Lingua */
  function applyLang(){
    root.lang=lang;
    qsa('[data-en]').forEach(function(el){
      if(el.getAttribute('data-it')===null)el.setAttribute('data-it',el.innerHTML);
      el.innerHTML=el.getAttribute(lang==='en'?'data-en':'data-it');
    });
    qsa('[data-en-ph]').forEach(function(el){
      if(el.getAttribute('data-it-ph')===null)el.setAttribute('data-it-ph',el.getAttribute('placeholder')||'');
      el.setAttribute('placeholder',el.getAttribute(lang==='en'?'data-en-ph':'data-it-ph'));
    });
    qsa('[data-en-aria]').forEach(function(el){
      if(el.getAttribute('data-it-aria')===null)el.setAttribute('data-it-aria',el.getAttribute('aria-label')||'');
      el.setAttribute('aria-label',el.getAttribute(lang==='en'?'data-en-aria':'data-it-aria'));
    });
    qsa('[data-lang-block]').forEach(function(el){el.hidden=el.getAttribute('data-lang-block')!==lang});
    qsa('.lang button').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-set')===lang))});
    qsa('input[name="Lingua"]').forEach(function(i){i.value=lang==='en'?'English':'Italiano'});
    var t=doc.body.getAttribute('data-title-'+lang);if(t)doc.title=t;
    render();
  }

  /* Intestazione e menu */
  var hdr=qs('.hdr'),over=hdr&&hdr.classList.contains('hdr--home');
  function onScroll(){
    if(!hdr)return;
    var y=window.scrollY||0;
    hdr.classList.toggle('is-scrolled',y>10);
    if(over)hdr.classList.toggle('is-over',y<40);
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  function closeMenu(){doc.body.classList.remove('nav-open');var b=qs('.burger');if(b)b.setAttribute('aria-expanded','false')}

  doc.addEventListener('click',function(e){
    var t=e.target;
    var lb=t.closest('.lang button');if(lb){lang=lb.getAttribute('data-set');set('loom_lang',lang);applyLang();return}
    var bg=t.closest('.burger');if(bg){var o=doc.body.classList.toggle('nav-open');bg.setAttribute('aria-expanded',String(o));return}
    if(t.closest('.panel a'))closeMenu();
    var ck=t.closest('[data-ck]');if(ck){set('loom_cookie','ok');var bn=qs('.ck');if(bn)bn.hidden=true;return}
    var fb=t.closest('.filters button');if(fb){filter=fb.getAttribute('data-f');renderAll();return}
    var g=t.closest('[data-open]');if(g){openLb(+g.getAttribute('data-open'));return}
  });
  doc.addEventListener('keydown',function(e){
    if(e.key==='Escape'){closeMenu();closeLb()}
    if(lbEl&&lbEl.classList.contains('open')){if(e.key==='ArrowRight')stepLb(1);if(e.key==='ArrowLeft')stepLb(-1)}
  });

  /* Email e moduli FormSubmit */
  qsa('[data-mail]').forEach(function(a){a.href='mailto:'+mail();a.textContent=mail()});
  qsa('form[data-fs]').forEach(function(f){
    f.action='https://formsubmit.co/'+mail();
    var nx=qs('input[name="_next"]',f);
    if(nx){if(/^https?:/.test(location.href))nx.value=new URL('grazie.html',location.href).href;else nx.parentNode.removeChild(nx)}
  });
  var tipo=new URLSearchParams(location.search).get('tipo');
  if(tipo){var sel=qs('select[name="Motivo"]');if(sel){qsa('option',sel).forEach(function(o){if(o.getAttribute('data-key')===tipo)sel.value=o.value})}}

  /* Avviso cookie */
  var ckEl=qs('.ck');if(ckEl&&!get('loom_cookie'))ckEl.hidden=false;
  qsa('[data-year]').forEach(function(s){s.textContent=new Date().getFullYear()});

  /* Comparsa delle foto */
  var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15}):null;
  function watch(){qsa('.rv:not(.in)').forEach(function(c){io?io.observe(c):c.classList.add('in')})}

  /* Annunci */
  var DATA=null,filter='all';
  var fParam=new URLSearchParams(location.search).get('tipo');
  if(qs('[data-all]')&&['vendita','affitto','breve'].indexOf(fParam)>-1)filter=fParam;

  function load(){
    var ok=function(j){DATA=((j&&j.immobili)||[]).filter(function(x){return x&&x.codice&&x.pubblicato!==false});
      var rank={venduto:1,affittato:1};DATA=DATA.map(function(x,i){return[x,i]}).sort(function(a,b){return((rank[a[0].stato]||0)-(rank[b[0].stato]||0))||a[1]-b[1]}).map(function(p){return p[0]});
      renderAll()};
    if(!qs('[data-featured],[data-all],[data-detail]'))return;
    if(!window.fetch||location.protocol==='file:'){ok(FALLBACK);return}
    fetch('data/immobili.json',{cache:'no-cache'}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(ok).catch(function(){ok(FALLBACK)});
  }
  function tx(l,k){return lang==='en'&&l[k+'_en']?l[k+'_en']:(l[k]||'')}
  function money(n){return lang==='en'?'€'+Number(n).toLocaleString('en-GB'):Number(n).toLocaleString('it-IT')+' €'}
  function price(l){
    var t=T[lang];if(l.prezzo===undefined||l.prezzo===null||l.prezzo==='')return t.onreq;
    var s=money(l.prezzo);if(l.contratto==='affitto')s+=' '+t.month;if(l.contratto==='breve')s+=' '+t.night;return s;
  }
  function specs(l){
    var t=T[lang],a=[];
    if(l.superficie)a.push(l.superficie+' m²');
    if(l.locali)a.push(l.locali+' '+(l.locali==1?t.room:t.rooms));
    if(l.bagni)a.push(l.bagni+' '+(l.bagni==1?t.bath:t.baths));
    if(l.piano!==undefined&&l.piano!==null&&l.piano!=='')a.push(t.floor(+l.piano));
    if(l.classe)a.push(t.cls(l.classe));
    return a;
  }
  function href(l){return 'immobile.html?id='+encodeURIComponent(l.codice)}
  function mark(){return '<span class="ph-empty"><svg class="logo" viewBox="0 0 768 206" aria-hidden="true"><use href="#mark"/></svg></span>'}
  function card(l,i){
    var t=T[lang],ti=tx(l,'titolo'),off=l.stato==='venduto'||l.stato==='affittato';
    var img=(l.foto&&l.foto[0])?'<img src="'+esc(l.foto[0])+'" alt="'+esc(ti+', '+l.zona)+'" loading="lazy">':mark();
    return '<article class="card rv" style="--d:'+((i%4)*0.1)+'s"><a class="ph" href="'+href(l)+'" tabindex="-1" aria-hidden="true">'+img+
      '<span class="tag'+(off?' tag--off':'')+'">'+esc(t.status[l.stato]||t.status.disponibile)+'</span></a>'+
      '<div class="info"><p class="zone"><span>'+esc(l.zona)+'</span><span>'+esc(t.contract[l.contratto]||'')+'</span></p>'+
      '<h3><a href="'+href(l)+'">'+esc(ti)+'</a></h3><p class="price">'+esc(price(l))+'</p>'+
      '<ul class="specs">'+specs(l).map(function(s){return '<li>'+esc(s)+'</li>'}).join('')+'</ul></div></article>';
  }
  function renderAll(){
    if(!DATA)return;
    var t=T[lang];
    var fe=qs('[data-featured]');
    if(fe){var list=DATA.filter(function(x){return x.evidenza});if(!list.length)list=DATA.slice(0,3);list=list.slice(0,6);
      fe.setAttribute('data-n',list.length);fe.innerHTML=list.length?list.map(card).join(''):'<div class="empty"><p class="lead">'+esc(t.none)+'</p></div>'}
    var al=qs('[data-all]');
    if(al){
      qsa('.filters button').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-f')===filter))});
      var ls=DATA.filter(function(x){return filter==='all'||x.contratto===filter});
      al.setAttribute('data-n',ls.length);al.innerHTML=ls.length?ls.map(card).join(''):'<div class="empty"><p class="lead">'+esc(t.empty)+'</p><a class="btn btn--ink" href="contatti.html?tipo=finder#form">'+esc(t.emptyCta)+'</a></div>';
      var c=qs('[data-count]');if(c)c.textContent=t.count(ls.length);
    }
    var de=qs('[data-detail]');if(de)detail(de);
    watch();
  }
  function render(){if(DATA)renderAll()}

  /* Scheda immobile */
  var photos=[],cur=0,lbEl=null;
  function detail(wrap){
    var t=T[lang],id=new URLSearchParams(location.search).get('id'),l=null;
    DATA.forEach(function(x){if(String(x.codice)===id)l=x});
    var miss=qs('[data-missing]'),body=qs('[data-body]');
    if(!l){if(miss)miss.hidden=false;if(body)body.hidden=true;wrap.innerHTML='';return}
    if(miss)miss.hidden=true;if(body)body.hidden=false;
    var ti=tx(l,'titolo');photos=(l.foto||[]).slice();
    doc.title=ti+' · LOOM';
    var g='';
    if(photos.length){
      var side=photos.slice(1,4);
      g='<div class="gal'+(side.length?'':' gal--single')+'"><button class="gal-main" type="button" data-open="0" aria-label="'+esc(t.showAll)+'"><img src="'+esc(photos[0])+'" alt="'+esc(ti)+'"></button>';
      if(side.length){g+='<div class="gal-side" style="--n:'+side.length+'">'+side.map(function(p,i){var last=i===side.length-1&&photos.length>4;
        return '<button type="button" data-open="'+(i+1)+'" aria-label="'+esc(t.photo+' '+(i+2))+'"><img src="'+esc(p)+'" alt="" loading="lazy">'+(last?'<span class="gal-more">+'+(photos.length-4)+'</span>':'')+'</button>'}).join('')+'</div>'}
      g+='</div>';
    }
    qs('[data-gallery]').innerHTML=g;
    var f=t.f,rows=[];
    rows.push([f.contract,t.contract[l.contratto]||'']);
    if(l.superficie)rows.push([f.area,l.superficie+' m²']);
    if(l.locali)rows.push([f.rooms,l.locali]);
    if(l.bagni)rows.push([f.baths,l.bagni]);
    if(l.piano!==undefined&&l.piano!==null&&l.piano!=='')rows.push([f.floor,t.floor(+l.piano)]);
    if(l.classe)rows.push([f.cls,l.classe==='nd'?(lang==='en'?'Pending':'In attesa'):l.classe]);
    rows.push([f.code,l.codice]);
    var d=tx(l,'descrizione').split(/\n\s*\n/).filter(Boolean).map(function(p){return '<p>'+esc(p).replace(/\n/g,'<br>')+'</p>'}).join('');
    wrap.innerHTML='<p class="zone"><span>'+esc(l.zona)+'</span><span>'+esc(t.status[l.stato]||t.status.disponibile)+'</span></p>'+
      '<h1 class="h2">'+esc(ti)+'</h1><p class="det-price">'+esc(price(l))+'</p>'+
      '<dl class="facts">'+rows.map(function(r){return '<div><dt>'+esc(r[0])+'</dt><dd>'+esc(r[1])+'</dd></div>'}).join('')+'</dl>'+
      (d?'<div class="desc">'+d+'</div>':'')+
      (l.planimetria?'<div><h2 class="h3" style="margin-bottom:14px">'+esc(t.plan)+'</h2><img class="plan" src="'+esc(l.planimetria)+'" alt="'+esc(t.plan)+'" loading="lazy"></div>':'');
    var ref=qs('input[name="Immobile"]');if(ref)ref.value=l.codice+', '+l.titolo+', '+l.zona;
    var sub=qs('input[name="_subject"][data-visit]');if(sub)sub.value='Richiesta visita '+l.codice+' dal sito LOOM';
  }
  function openLb(i){
    if(!photos.length)return;
    if(!lbEl){lbEl=doc.createElement('div');lbEl.className='lb';lbEl.setAttribute('role','dialog');lbEl.setAttribute('aria-modal','true');
      lbEl.innerHTML='<button class="lb-prev" type="button">‹</button><img alt=""><button class="lb-next" type="button">›</button><button class="lb-close" type="button"></button><p class="lb-count"></p>';
      doc.body.appendChild(lbEl);
      qs('.lb-prev',lbEl).onclick=function(){stepLb(-1)};qs('.lb-next',lbEl).onclick=function(){stepLb(1)};qs('.lb-close',lbEl).onclick=closeLb;
      lbEl.addEventListener('click',function(e){if(e.target===lbEl)closeLb()});}
    var t=T[lang];qs('.lb-close',lbEl).textContent=t.close;qs('.lb-prev',lbEl).setAttribute('aria-label',t.prev);qs('.lb-next',lbEl).setAttribute('aria-label',t.next);
    cur=i;showLb();lbEl.classList.add('open');doc.body.style.overflow='hidden';qs('.lb-close',lbEl).focus();
  }
  function showLb(){var t=T[lang];qs('img',lbEl).src=photos[cur];qs('.lb-count',lbEl).textContent=(cur+1)+' '+t.of+' '+photos.length}
  function stepLb(s){cur=(cur+s+photos.length)%photos.length;showLb()}
  function closeLb(){if(lbEl&&lbEl.classList.contains('open')){lbEl.classList.remove('open');doc.body.style.overflow=''}}

  /* Avvio */
  applyLang();onScroll();load();
  requestAnimationFrame(function(){requestAnimationFrame(function(){root.classList.add('ready')})});
})();
