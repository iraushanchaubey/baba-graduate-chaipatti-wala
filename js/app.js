/* app.js - Page routing, click handlers and start-up */
function draw(){$("#lg").textContent="🍃 "+S.name;$("#fr").textContent=S.free;$("#shop").hidden=view!="shop";$("#adm").hidden=view!="admin";$("#det").hidden=view!="det";$("#acct").hidden=view!="acct";$("#ub").textContent=U?"Hi, "+U.name.split(" ")[0]:"Sign in";$("#sb").textContent=admin?(view=="admin"?"🏪 View store":"⚙️ Seller panel"):"Seller login";if(view=="admin")adm();upd()}
function go(g,t){if(go2(g,t))return;switch(g){
case"cart":mode="cart";pan();break;case"co":if(!U){am="in";nx="co";mode="auth"}else mode="co";pan();break;case"pl":place();break;case"in":login();break;
case"sel":if(admin){view=view=="admin"?"shop":"admin";draw()}else{mode="login";pan()}break;
case"back":view="shop";draw();break;case"sp":sp();break;case"ce":edit=null;adm();break;case"ss":ss();break;
case"out":admin=false;view="shop";draw();break;
case"rs":if(t.dataset.c){P=SEED.map(p=>({...p}));O=[];C={};sv(K.p,P);sv(K.o,O);sv(K.c,C);edit=null;adm();upd();toast("Demo data reset")}else{t.dataset.c=1;t.textContent="Sure? Click again"}}}
document.addEventListener("click",e=>{$("#sg").hidden=true;
if(e.target.id=="ov"){mode=null;return pan()}
const t=e.target.closest("[data-a],[data-m],[data-cat],[data-tab],[data-ed],[data-del],[data-go],[data-x],[data-v],[data-buy]");if(!t)return;const d=t.dataset;
if(d.x){mode=null;pan()}
else if(d.a)add(d.a,1);else if(d.m)add(d.m,-1);
else if(d.cat){cat=d.cat;shop()}
else if(d.tab){tab=d.tab;edit=null;adm()}
else if(d.ed){edit=d.ed;adm();scrollTo(0,0)}
else if(d.del){if(t.dataset.c){P=P.filter(p=>p.id!=d.del);delete C[d.del];sv(K.p,P);sv(K.c,C);adm();upd()}else{t.dataset.c=1;t.textContent="Sure?"}}
else if(d.v){cur=d.v;view="det";sv("cp_seen",[d.v,...ld("cp_seen",[]).filter(x=>x!=d.v)].slice(0,6));draw();scrollTo(0,0)}
else if(d.buy){if(!C[d.buy])add(d.buy,1);if(!U){am="in";nx="co"}mode=U?"co":"auth";pan()}
else if(d.go)go(d.go,t)});
document.addEventListener("keydown",e=>{if(e.key=="Enter"&&e.target.id=="lp")login()});
document.addEventListener("change",e=>{const id=e.target.dataset.st;if(!id)return;const o=O.find(x=>x.id==id);if(!o)return;const ns=e.target.value;
if(ns=="Cancelled"&&o.st!="Cancelled")o.items.forEach(i=>{const p=P.find(x=>x.id==i.id);if(p)p.stock+=i.q});
o.st=ns;sv(K.o,O);sv(K.p,P);adm();toast("Order status updated ✔")});
$("#q").addEventListener("input",e=>{q=e.target.value;sug();if(view!="shop"){view="shop";draw()}else shop()});
$("#so").addEventListener("change",e=>{sort=e.target.value;shop()});
promo();lang();draw();
