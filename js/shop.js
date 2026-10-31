/* shop.js - Storefront: product cards, grid, cart counter */
function toast(m){const t=$("#ts");t.textContent=m;t.style.opacity=1;clearTimeout(tt);tt=setTimeout(()=>t.style.opacity=0,1800)}
const card=p=>{const n=C[p.id]||0,off=Math.round((1-p.price/p.mrp)*100);
return `<article class="card" data-v="${p.id}"><div class="im" style="--h:${+p.hue||120}">${img(p)}${hrt(p)}${off>0?`<b class="off">${off}% off</b>`:""}</div><h3>${E(p.name)}</h3><p class="ds">${E(p.desc)}</p><div><span class="star">${(+p.rating).toFixed(1)} ★</span> <small class="mu">${p.stock<1?"Out of stock":p.stock<10?"Only "+p.stock+" left":"In stock"}</small></div><div class="pr"><b>${R(p.price)}</b> <s>${R(p.mrp)}</s></div>${p.stock<1?'<button class="btn" disabled>Out of stock</button>':n?`<div class="qty"><button data-m="${p.id}" aria-label="Kam karo">−</button><span>${n}</span><button data-a="${p.id}" aria-label="Badhao">+</button></div>`:`<button class="btn ac" data-a="${p.id}">Add to Cart</button>`}</article>`};
function shop(){
const L=P.filter(p=>(cat=="All"||p.cat==cat)&&(p.name+p.cat+p.desc).toLowerCase().includes(q.toLowerCase()));
if(sort=="pa")L.sort((a,b)=>a.price-b.price);else if(sort=="pd")L.sort((a,b)=>b.price-a.price);else if(sort=="r")L.sort((a,b)=>b.rating-a.rating);
$("#chips").innerHTML=["All",...CATS].map(c=>`<button class="chip${c==cat?" on":""}" data-cat="${E(c)}">${E(c)}</button>`).join("");
$("#cnt").textContent=L.length+" products";
$("#grid").innerHTML=L.map(card).join("")||'<p class="mu">No products found. Try a different search.</p>'}
function add(id,d){const p=P.find(x=>x.id==id);if(!p)return;const n=Math.min(p.stock,Math.max(0,(C[id]||0)+d));n?C[id]=n:delete C[id];sv(K.c,C);upd()}
function upd(){$("#cc").textContent=Object.values(C).reduce((a,b)=>a+b,0);if(view=="shop"){shop();rec()}if(view=="det")det();if(view=="acct")acct();if(mode=="cart")pan()}
function lines(){return Object.keys(C).map(id=>{const p=P.find(x=>x.id==id);return p&&{id,p,n:C[id]}}).filter(Boolean)}
