/* LOOM House by Zena · script condiviso */
(function(){
  'use strict';
  var doc=document,root=doc.documentElement;
  root.classList.add('js');

  /* Indirizzo email composto qui per limitare lo spam */
  var MAIL={u:'z.elgendi',d:'gmail.com'};
  function mail(){return MAIL.u+'@'+MAIL.d}

  /* Copia di riserva degli annunci, usata solo se data/immobili.json non si può leggere (file aperto dal disco) */
  var FALLBACK=/*FALLBACK_START*/{"immobili": [{"codice": "LM01", "pubblicato": true, "evidenza": true, "contratto": "affitto", "stato": "disponibile", "titolo": "Appartamento con finestre ad arco", "titolo_en": "Flat with arched windows", "zona": "Brera", "prezzo": null, "superficie": 62, "locali": 2, "bagni": 1, "piano": 3, "classe": "C", "descrizione": "Annuncio di esempio. Soggiorno luminoso con grandi finestre ad arco, cucina su misura e zona pranzo con panca.", "descrizione_en": "Sample listing. Bright living room with large arched windows, fitted kitchen and dining area with bench seating.", "foto": ["images/immobili/lm01_1a1cb87d48a_1.jpg", "images/immobili/lm01_1a1cb87d48a_2.jpg", "images/immobili/lm01_1a1cb87d48a_3.jpg"], "planimetria": ""}, {"codice": "LM02", "pubblicato": true, "evidenza": true, "contratto": "vendita", "stato": "disponibile", "titolo": "Mansarda con travi a vista", "titolo_en": "Attic flat with exposed beams", "zona": "Magenta", "prezzo": 740000, "superficie": 108, "locali": 3, "bagni": 2, "piano": 5, "classe": "B", "descrizione": "Annuncio di esempio. Ultimo piano sotto il tetto, con travi a vista, cucina con isola e porta finestra sul balcone.", "descrizione_en": "Sample listing. Top floor under the roof, with exposed beams, kitchen island and French window onto the balcony.", "foto": ["images/immobili/lm02_1a1cb87d783_1.jpg", "images/immobili/lm02_1a1cb87d783_2.jpg", "images/immobili/lm02_1a1cb87d783_3.jpg", "images/immobili/lm02_1a1cb87d783_4.jpg", "images/immobili/lm02_1a1cb87d783_5.jpg", "images/immobili/lm02_1a1cb87d783_6.jpg"], "planimetria": ""}]}/*FALLBACK_END*/;

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
    if(fe){var list=DATA.filter(function(x){return x.evidenza&&!off(x)});DATA.forEach(function(x){if(list.length<2&&list.indexOf(x)<0&&!off(x))list.push(x)});list=list.slice(0,2);
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
