
/* v2.js - Product images, accounts, reviews, payments, support and Hindi */
/* ---- v2: images, accounts, reviews, payments, support, Hindi ---- */

let US=ld("cp_us",[]),RV=ld("cp_rv",[]),L=ld("cp_l","en"),U=US.find(u=>u.email==ld("cp_u","")),pend=null,pimg=null,am="in",nx=null,at="Orders",AI=0,rv={pid:"",stars:0,tags:[],text:""};

const svU=()=>{sv("cp_us",US);sv("cp_u",U?U.email:"")},TAGS=["Aroma","Strong taste","Colour","Freshness","Packaging","Value for money"];

function art(p){
const h=+p.hue||120,c1=`hsl(${h} 45% 40%)`,c2=`hsl(${h} 55% 22%)`,id="g"+(++AI),n=p.name,w=(n.match(/\d+ ?(kg|g|L)\b/)||[""])[0],s=n.replace(/\d+ ?(kg|g|L)\b/,"").trim().split(" ").slice(0,2).join(" ").toUpperCase(),fs=Math.max(8,Math.min(15,Math.floor(100/s.length)));let b;

if(/kulhad/i.test(n))b=`<path d="M58 62h84l-14 96a12 12 0 0 1-12 10H84a12 12 0 0 1-12-10z" fill="#b8652a"/><ellipse cx="100" cy="62" rx="42" ry="9" fill="#8f4a1c"/><path d="M68 100h64" stroke="#e9b27a" stroke-width="3"/><path d="M88 44c-6-8 6-12 0-22M112 44c-6-8 6-12 0-22" stroke="#bbb" fill="none" stroke-width="3"/>`;

else if(/kettle/i.test(n))b=`<path d="M60 90h80l8 72H52z" fill="url(#${id})"/><rect x="70" y="76" width="60" height="14" rx="7" fill="#c9d1cd"/><circle cx="100" cy="70" r="6" fill="#8b9792"/><path d="M148 104c26-2 28 26 2 36" fill="none" stroke="#9aa5a0" stroke-width="7"/><path d="M58 104l-28-16" stroke="#9aa5a0" stroke-width="8" stroke-linecap="round"/>`;

else if(/strainer/i.test(n))b=`<circle cx="92" cy="84" r="40" fill="#e8ecea" stroke="#9aa5a0" stroke-width="6"/><path d="M60 84h64M92 52v64M68 62l48 44M116 62L68 106" stroke="#b9c2be"/><path d="M124 114l48 56" stroke="#9aa5a0" stroke-width="9" stroke-linecap="round"/>`;

else if(p.cat=="Gift Packs")b=`<rect x="42" y="88" width="116" height="76" rx="6" fill="url(#${id})"/><rect x="38" y="72" width="124" height="22" rx="5" fill="${c1}"/><path d="M100 72v92" stroke="#f5c542" stroke-width="12"/><path d="M100 72c-24-28-46-8-24 0zM100 72c24-28 46-8 24 0z" fill="#f5c542"/>`;

else b=`<path d="M54 24h92l10 142a8 8 0 0 1-8 10H52a8 8 0 0 1-8-10z" fill="url(#${id})"/><path d="M54 24h92l-1 12H55z" fill="rgba(255,255,255,.3)"/><rect x="58" y="58" width="84" height="94" rx="8" fill="#fff6e0"/><text x="100" y="76" text-anchor="middle" font-size="8.5" font-weight="700" fill="${c2}">BABA GRADUATE</text><text x="100" y="102" text-anchor="middle" font-size="${fs}" font-weight="800" fill="${c2}">${E(s)}</text><text x="100" y="120" text-anchor="middle" font-size="10" fill="${c2}">${E(w)}</text><path d="M100 146c-7-5-7-13 0-18 7 5 7 13 0 18z" fill="#3b8f3f"/>`;

return `<svg viewBox="0 0 200 200" role="img" aria-label="${E(n)}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><ellipse cx="100" cy="184" rx="58" ry="6" fill="rgba(0,0,0,.2)"/>${b}</svg>`
}

const img=p=>p.img?`<img src="${E(p.img)}" alt="${E(p.name)}" loading="lazy">`:art(p),
hrt=p=>`<button class="hrt" data-go="wish" data-id="${p.id}" aria-label="Wishlist">${U&&(U.w||[]).includes(p.id)?"♥":"♡"}</button>`;

function rsz(f,cb){
if(!f)return;
const r=new FileReader();
r.onload=()=>{
const im=new Image();
im.onload=()=>{
const k=Math.min(1,700/Math.max(im.width,im.height)),c=document.createElement("canvas");
c.width=im.width*k;
c.height=im.height*k;
c.getContext("2d").drawImage(im,0,0,c.width,c.height);
cb(c.toDataURL("image/jpeg",.8))
};
im.src=r.result
};
r.readAsDataURL(f)
}

document.addEventListener("change",e=>{
if(e.target.id=="af")rsz(e.target.files[0],d=>{pimg=d;toast("Photo ready ✔")})
});

/* PROMOTIONAL BANNERS - FOUR REAL IMAGES */

function promo(){
if(!P.length){
$("#promo").innerHTML="";
return;
}

const lo=Math.min(...P.map(p=>p.price));
const cp=P.filter(p=>p.cat==="Chaipatti");
const mx=Math.max(...(cp.length?cp:P).map(p=>Math.round((1-p.price/p.mrp)*100)));

const B=[
["o","Starting "+R(lo),"Everyday chai","cheap","01_everyday_chai.png"],
["g","Up to "+mx+"% off","Premium chaipatti","Chaipatti","02_premium_chaipatti.png"],
["m","Masala Chai","Elaichi · Adrak · Kahwa","Masala Chai","03_masala_chai.png"],
["y","Gift boxes","Perfect for gifting","Gift Packs","04_gift_boxes.png"]
];

const imageFolder="Baba_Graduate_4_Website_Images (1)";

$("#promo").innerHTML=B.map(b=>`
<button class="pc pc-${b[0]}" data-go="promo" data-id="${E(b[3])}">
<i class="sp">✦</i>
<b>${b[1]}</b>
<span>${b[2]}</span>
<small>Free delivery above ${R(S.free)} | Cash on Delivery</small>
<em class="pi">
<img src="${imageFolder}/${b[4]}" alt="${E(b[2])}" loading="eager">
</em>
</button>
`).join("");
}

function rec(){
const w=U?U.w||[]:[];
const cs=new Set([...ld("cp_seen",[]),...w].map(id=>(P.find(p=>p.id==id)||{}).cat).filter(Boolean));
const l=P.filter(p=>p.stock>0&&!C[p.id]).sort((a,b)=>(cs.has(b.cat)-cs.has(a.cat))||b.rating-a.rating).slice(0,6);
$("#rec").hidden=!l.length;
$("#rec").innerHTML=`<h2>Recommended for you</h2><div class="strip">${l.map(card).join("")}</div>`
}

function sug(){
const k=q.trim().toLowerCase(),l=k?P.filter(p=>(p.name+p.cat).toLowerCase().includes(k)).slice(0,5):[],b=$("#sg");
b.innerHTML=l.map(p=>`<div class="sgi" data-v="${p.id}"><span class="em im" style="--h:${+p.hue||120}">${img(p)}</span><span>${E(p.name)}<br><small class="mu">${R(p.price)}</small></span></div>`).join("");
b.hidden=!l.length
}

function revs(p){
const Q=RV.filter(r=>r.pid==p.id),n=Q.length,avg=n?Q.reduce((a,r)=>a+r.stars,0)/n:0,cn={};
Q.forEach(r=>r.tags.forEach(g=>cn[g]=(cn[g]||0)+1));
const ver=r=>O.some(o=>o.uid==r.email&&o.st!="Cancelled"&&o.items.some(i=>i.id==p.id));

return `<div class="box"><h2 style="margin-top:0">Ratings and reviews</h2>${n?`<p><b class="big">${avg.toFixed(1)}</b> <span class="star">★</span> <span class="vg">${avg>=4.5?"Excellent":avg>=4?"Very Good":avg>=3?"Good":"Average"}</span></p><p class="mu">based on ${n} rating${n>1?"s":""}</p>`:'<p class="mu">No reviews yet. Be the first to share your experience!</p>'}${Object.keys(cn).length?`<p class="mu">Features customers loved</p><div class="chips" style="flex-wrap:wrap">${Object.keys(cn).sort((a,b)=>cn[b]-cn[a]).map(g=>`<span class="chip">${g} (${cn[g]})</span>`).join("")}</div>`:""}<button class="btn ac" style="width:auto;margin:6px 0 10px" data-go="wr" data-id="${p.id}">Write a review</button>${Q.map(r=>`<div class="row" style="display:block"><b>${E(r.name)}</b> <span class="star">${r.stars} ★</span> ${ver(r)?'<small class="vg">✓ Verified Buyer</small>':""}<p style="margin:4px 0">${E(r.text)}</p><small class="mu">${E(r.date)}</small></div>`).join("")}</div>`
}

const revH=()=>`<h2>Write a review</h2><p class="mu">${E((P.find(x=>x.id==rv.pid)||{}).name)}</p><div>${[1,2,3,4,5].map(n=>`<button class="stb${n<=rv.stars?" on":""}" data-go="star" data-id="${n}" aria-label="${n} stars">★</button>`).join("")}</div><label>What did you like?</label><div class="chips" style="flex-wrap:wrap">${TAGS.map(g=>`<button class="chip${rv.tags.includes(g)?" on":""}" data-go="tag" data-id="${g}">${g}</button>`).join("")}</div><label>Your review</label><textarea id="rt" rows="3" placeholder="Is it a good product? Tell other customers.">${E(rv.text)}</textarea><p class="er" id="er"></p><button class="btn ac" data-go="rsub">Submit review</button>`;

const authH=()=>{
const f=(i,l,t="text")=>`<label>${l}</label><input id="${i}" type="${t}">`,
er='<p class="er" id="er"></p>',
lk=(m,t)=>`<button class="lnk" data-go="am" data-id="${m}">${t}</button>`;

return `<h2>${am=="up"?"Create your account":am=="fp"?"Reset password":am=="g"?"Continue with Google":"Login"}</h2>`+(am=="up"?f("sN","Full name")+f("sM","Mobile number")+f("sE","Email","email")+f("sP","Create password","password")+er+`<button class="btn ac" data-go="signup">Sign up</button><p class="mu">Already have an account? ${lk("in","Login")}</p>`
:am=="fp"?f("fE","Registered email","email")+f("fP","New password","password")+er+'<button class="btn ac" data-go="reset">Reset password</button><p class="mu">Demo: the password changes instantly. Email reset links need a server.</p>'
:am=="g"?f("gE","Your Google email","email")+er+'<button class="btn ac" data-go="google">Continue</button><p class="mu">Demo only: real Google sign-in needs a Google Client ID and a server.</p>'
:f("lE","Email","email")+f("lP","Password","password")+er+`<button class="btn ac" data-go="signin">Login</button><p>${lk("fp","Forgot password?")}</p><button class="btn gg" data-go="am" data-id="g">Continue with Google</button><p class="mu">New here? ${lk("up","Sign up")}</p>`)
};

const payH=()=>{
const o=pend;
return `<h2>Secure payment</h2><p>Paying <b>${R(o.total)}</b> by <b>${E(o.pay)}</b></p><div class="note">Demo gateway: no real money is charged. A live gateway such as Razorpay can be connected here.</div>${o.pay=="UPI"?'<label>UPI ID</label><input placeholder="name@bank">':o.pay.startsWith("Credit")?'<label>Card number</label><input inputmode="numeric" placeholder="XXXX XXXX XXXX XXXX"><div class="two"><div><label>Expiry</label><input placeholder="MM/YY"></div><div><label>CVV</label><input type="password" maxlength="3"></div></div>':'<label>Choose your bank</label><select><option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option><option>Axis Bank</option></select>'}<button class="btn ac" data-go="pay">Pay ${R(o.total)}</button><button class="sm" data-go="co" style="margin-top:8px">← Back</button>`
};

const helpH=()=>{
let w=S.wa.replace(/\D/g,"");
if(w.length==10)w="91"+w;
return `<h2>24×7 Customer Care</h2><p class="mu">We are here to help, any time of day.</p>${w?`<a class="btn ac" href="tel:+${w}">Call us</a><a class="btn" style="margin-top:8px" target="_blank" rel="noopener" href="https://wa.me/${w}">Chat on WhatsApp</a>`:'<p class="mu">Contact details appear here once the seller adds a WhatsApp number in Settings.</p>'}<h3>Quick answers</h3>${[["Where is my order?","Open My Profile, then Orders, to see the latest status."],["Which payments are accepted?","UPI, cards, net banking and Cash on Delivery."],["Can I return an item?","No. Food items cannot be returned or exchanged. If your parcel arrives damaged, contact Customer Care right away."],["What are the delivery charges?",`Free above ${R(S.free)}; otherwise ${R(S.fee)}.`]].map(a=>`<details><summary>${a[0]}</summary><p class="mu">${a[1]}</p></details>`).join("")}`
};

function acct(){
if(!U){view="shop";return draw()}
const my=O.filter(o=>o.uid==U.email),tabs=["My Profile","Orders","Wishlist","Rewards"],
body=at=="My Profile"?`<div class="box"><h3>My Profile</h3><label>Full name</label><input id="uN" value="${E(U.name)}"><label>Email</label><input value="${E(U.email)}" disabled><label>Mobile number</label><input id="uM" value="${E(U.phone)}"><label>Delivery address</label><textarea id="uA" rows="2">${E(U.addr)}</textarea><button class="btn" data-go="psave">Save profile</button></div>`
:at=="Orders"?(my.length?my.map(o=>`<div class="box"><b>${o.id}</b> <small class="mu">${E(o.date)}</small> <span class="chip on">${o.st}</span><br>${o.items.map(i=>E(i.n)+" × "+i.q).join("<br>")}<p><b>${R(o.total)}</b> · ${E(o.pay)}${o.paid?" · Paid":""}</p></div>`).join(""):'<p class="mu">You have not placed any orders yet.</p>')
:at=="Wishlist"?((U.w||[]).length?`<div class="grid">${U.w.map(id=>P.find(x=>x.id==id)).filter(Boolean).map(card).join("")}</div>`:'<p class="mu">Your wishlist is empty. Tap ♡ on a product to save it.</p>')
:`<div class="box"><h3>Rewards</h3><p><b class="big">${U.pts||0}</b> points</p><p class="mu">Earn 1 point for every ₹10 you spend. Use points at checkout: 1 point = ₹1, up to 20% of the order.</p></div>`;

$("#acct").innerHTML=`<div class="am"><div class="box">${tabs.map(t=>`<button class="mi${t==at?" on":""}" data-go="at" data-id="${t}">${t}</button>`).join("")}<button class="mi" data-go="logout">Logout</button></div><div>${body}</div></div>`
}

function go2(g,t){
const id=t.dataset.id,
ok=u=>{U=u;svU();mode=nx;nx=null;pan();draw()},
bad=m=>{$("#er").textContent=m;return 1},
mail=/^\S+@\S+\.\S+$/;

switch(g){

case"lang":L=L=="en"?"hi":"en";sv("cp_l",L);lang();return 1;

case"user":if(U){view="acct";draw();scrollTo(0,0)}else{am="in";mode="auth";pan()}return 1;

case"help":mode="help";pan();return 1;

case"am":am=id;pan();return 1;

case"wish":
if(!U){am="in";mode="auth";pan();return 1}
U.w=U.w||[];
{
const i=U.w.indexOf(id);
i<0?U.w.push(id):U.w.splice(i,1);
svU();upd();toast(i<0?"Added to wishlist":"Removed from wishlist")
}
return 1;

case"signin":{
const u=US.find(x=>x.email==$("#lE").value.trim().toLowerCase());
if(!u||!u.pass||u.pass!=$("#lP").value)return bad("Wrong email or password.");
ok(u);
return 1
}

case"signup":{
const v=i=>$("#"+i).value.trim(),e=v("sE").toLowerCase();
if(v("sN").length<2||!/^[6-9]\d{9}$/.test(v("sM"))||!mail.test(e)||$("#sP").value.length<6)return bad("Enter your name, a 10-digit mobile, a valid email and a password of 6+ characters.");
if(US.find(x=>x.email==e))return bad("This email is already registered. Please login.");
const u={email:e,name:v("sN"),phone:v("sM"),pass:$("#sP").value,addr:"",pts:50,w:[]};
US.push(u);ok(u);toast("Welcome! 50 reward points added");
return 1
}

case"reset":{
const u=US.find(x=>x.email==$("#fE").value.trim().toLowerCase());
if(!u||$("#fP").value.length<6)return bad("Use a registered email and a password of 6+ characters.");
u.pass=$("#fP").value;svU();am="in";pan();toast("Password updated. Please login.");
return 1
}

case"google":{
const e=$("#gE").value.trim().toLowerCase();
if(!mail.test(e))return bad("Enter a valid email.");
let u=US.find(x=>x.email==e);
if(!u){u={email:e,name:e.split("@")[0],phone:"",pass:"",addr:"",pts:50,w:[]};US.push(u)}
ok(u);
return 1
}

case"logout":U=null;svU();view="shop";draw();return 1;

case"at":at=id;acct();return 1;

case"psave":
U.name=$("#uN").value.trim()||U.name;
U.phone=$("#uM").value.trim();
U.addr=$("#uA").value.trim();
svU();draw();toast("Profile saved ✔");
return 1;

case"wr":
if(!U){am="in";mode="auth";pan();return 1}
rv={pid:id,stars:0,tags:[],text:""};
mode="rev";pan();
return 1;

case"star":rv.text=$("#rt").value;rv.stars=+id;pan();return 1;

case"tag":
rv.text=$("#rt").value;
{
const i=rv.tags.indexOf(id);
i<0?rv.tags.push(id):rv.tags.splice(i,1)
}
pan();
return 1;

case"rsub":
rv.text=$("#rt").value.trim();
if(!rv.stars||rv.text.length<5)return bad("Choose a star rating and write a few words.");
RV.unshift({id:"r"+Date.now(),pid:rv.pid,name:U.name,email:U.email,stars:rv.stars,tags:rv.tags,text:rv.text,date:new Date().toLocaleDateString("en-IN")});
sv("cp_rv",RV);mode=null;pan();upd();toast("Thanks for your review ✔");
return 1;

case"pay":pend.paid=true;fin(pend);pend=null;return 1;

case"promo":
cat=id=="cheap"?"All":id;
sort=id=="cheap"?"pa":"rel";
$("#so").value=sort;
if(view!="shop"){view="shop";draw()}else shop();
$("#grid").scrollIntoView({behavior:"smooth"});
return 1
}

return 0
}

const HI={
"🛒 Cart":"🛒 कार्ट",
"Sign in":"साइन इन",
"Seller login":"विक्रेता लॉगिन",
"Search chaipatti, masala chai, kulhad…":"चायपत्ती, मसाला चाय, कुल्हड़ खोजें…",
"Authentic chai, delivered to your door":"असली चाय, सीधे आपके दरवाज़े तक",
"Premium chaipatti, masala chai and everything you need for the perfect cup · Free delivery above ₹":"बेहतरीन चायपत्ती, मसाला चाय और परफ़ेक्ट कप के लिए सब कुछ · मुफ़्त डिलीवरी ₹",
"· Cash on Delivery":"· कैश ऑन डिलीवरी",
"All":"सभी",
"Chaipatti":"चायपत्ती",
"Masala Chai":"मसाला चाय",
"Green & Herbal":"ग्रीन और हर्बल",
"Chai Accessories":"चाय का सामान",
"Gift Packs":"गिफ्ट पैक",
"Sort: Popular":"क्रम: लोकप्रिय",
"Price: low to high":"कीमत: कम से ज़्यादा",
"Price: high to low":"कीमत: ज़्यादा से कम",
"Rating":"रेटिंग",
"Everyday chai":"रोज़ की चाय",
"Premium chaipatti":"प्रीमियम चायपत्ती",
"Elaichi · Adrak · Kahwa":"इलायची · अदरक · क़हवा",
"Gift boxes":"गिफ्ट बॉक्स",
"Perfect for gifting":"तोहफ़े के लिए बढ़िया",
"Add to Cart":"कार्ट में डालें",
"Add to cart":"कार्ट में डालें",
"Buy now":"अभी खरीदें",
"Out of stock":"स्टॉक खत्म",
"In stock":"उपलब्ध",
"Your cart":"आपका कार्ट",
"Your cart is empty. Explore our chaipatti range!":"आपका कार्ट खाली है। हमारी चायपत्ती देखें!",
"Subtotal":"उप-योग",
"Delivery":"डिलीवरी",
"Free":"मुफ़्त",
"Total":"कुल",
"Proceed to checkout":"चेकआउट करें",
"Delivery details":"डिलीवरी की जानकारी",
"Full name":"पूरा नाम",
"Mobile number":"मोबाइल नंबर",
"Full address":"पूरा पता",
"PIN code":"पिन कोड",
"Payment method":"भुगतान का तरीका",
"Cash on Delivery":"कैश ऑन डिलीवरी",
"Credit / Debit Card":"क्रेडिट / डेबिट कार्ड",
"Net Banking":"नेट बैंकिंग",
"Place order":"ऑर्डर करें",
"← Back to cart":"← कार्ट पर वापस",
"No returns or exchanges on food items.":"खाने की चीज़ों पर रिटर्न या एक्सचेंज नहीं होता।",
"Order placed!":"ऑर्डर हो गया!",
"Continue shopping":"खरीदारी जारी रखें",
"Send order on WhatsApp":"WhatsApp पर ऑर्डर भेजें",
"← Back to products":"← उत्पादों पर वापस",
"Inclusive of all taxes":"सभी करों सहित",
"Similar products":"मिलते-जुलते उत्पाद",
"Recommended for you":"आपके लिए सुझाव",
"Ratings and reviews":"रेटिंग और समीक्षाएँ",
"Write a review":"समीक्षा लिखें",
"Submit review":"समीक्षा भेजें",
"Features customers loved":"ग्राहकों को क्या पसंद आया",
"✓ Verified Buyer":"✓ सत्यापित खरीदार",
"No reviews yet. Be the first to share your experience!":"अभी कोई समीक्षा नहीं। अपना अनुभव सबसे पहले साझा करें!",
"What did you like?":"आपको क्या पसंद आया?",
"Your review":"आपकी समीक्षा",
"Login":"लॉगिन",
"Sign up":"साइन अप",
"Create your account":"अपना खाता बनाएँ",
"Email":"ईमेल",
"Password":"पासवर्ड",
"Create password":"पासवर्ड बनाएँ",
"Forgot password?":"पासवर्ड भूल गए?",
"Continue with Google":"Google से जारी रखें",
"Reset password":"पासवर्ड रीसेट करें",
"New here?":"नए हैं?",
"Already have an account?":"पहले से खाता है?",
"My Profile":"मेरी प्रोफ़ाइल",
"Orders":"ऑर्डर",
"Wishlist":"विशलिस्ट",
"Rewards":"रिवॉर्ड्स",
"Logout":"लॉगआउट",
"Save profile":"प्रोफ़ाइल सेव करें",
"Delivery address":"डिलीवरी का पता",
"Secure payment":"सुरक्षित भुगतान",
"24×7 Customer Care":"24×7 ग्राहक सहायता",
"We are here to help, any time of day.":"हम हर समय आपकी मदद के लिए हैं।",
"Call us":"कॉल करें",
"Chat on WhatsApp":"WhatsApp पर चैट करें",
"Quick answers":"जल्दी जवाब",
"☎ Help 24×7":"☎ मदद 24×7",
"Where is my order?":"मेरा ऑर्डर कहाँ है?",
"Which payments are accepted?":"कौन से भुगतान चलते हैं?",
"Can I return an item?":"क्या मैं सामान लौटा सकता हूँ?",
"What are the delivery charges?":"डिलीवरी चार्ज कितना है?",
"Open My Profile, then Orders, to see the latest status.":"ताज़ा स्थिति देखने के लिए मेरी प्रोफ़ाइल में ऑर्डर खोलें।",
"UPI, cards, net banking and Cash on Delivery.":"UPI, कार्ड, नेट बैंकिंग और कैश ऑन डिलीवरी।",
"No. Food items cannot be returned or exchanged. If your parcel arrives damaged, contact Customer Care right away.":"नहीं। खाने की चीज़ें वापस या एक्सचेंज नहीं होतीं। पार्सल खराब आए तो तुरंत ग्राहक सहायता से संपर्क करें।",
"24×7 Customer Care · Cash on Delivery and online payments · No returns or exchanges on food items":"24×7 ग्राहक सहायता · कैश ऑन डिलीवरी और ऑनलाइन भुगतान · खाने की चीज़ों पर रिटर्न या एक्सचेंज नहीं"
};

function hi(s){
const t=s.trim();
if(HI[t])return s.replace(t,HI[t]);
let m;
if(m=t.match(/^Only (\d+) left$/))return s.replace(t,"सिर्फ़ "+m[1]+" बचे");
if(m=t.match(/^(\d+)% off$/))return s.replace(t,m[1]+"% छूट");
if(m=t.match(/^Up to (\d+)% off$/))return s.replace(t,"अधिकतम "+m[1]+"% छूट");
if(m=t.match(/^(\d+) products$/))return s.replace(t,m[1]+" उत्पाद");
if(m=t.match(/^Starting (₹[\d,]+)$/))return s.replace(t,m[1]+" से शुरू");
if(m=t.match(/^Hi, (.+)$/))return s.replace(t,"नमस्ते, "+m[1]);
if(m=t.match(/^Free delivery above (₹[\d,]+) \| Cash on Delivery$/))return s.replace(t,"मुफ़्त डिलीवरी "+m[1]+" से ऊपर | कैश ऑन डिलीवरी");
return s
}

function tx(n){
const pn=n.parentNode;
if(pn&&(/^(SCRIPT|STYLE)$/.test(pn.tagName)||(pn.tagName=="OPTION"&&!pn.hasAttribute("value"))))return;
if(n._o==null)n._o=n.nodeValue;
const v=L=="hi"?hi(n._o):n._o;
if(n.nodeValue!=v)n.nodeValue=v
}

function tr(r){
if(r.nodeType==3)return tx(r);
const w=document.createTreeWalker(r,NodeFilter.SHOW_TEXT);
let n;
while(n=w.nextNode())tx(n);
if(r.querySelectorAll)r.querySelectorAll("[placeholder]").forEach(e=>{
if(e._p==null)e._p=e.placeholder;
e.placeholder=L=="hi"?(HI[e._p]||e._p):e._p
})
}

new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(tr))).observe(document.body,{childList:true,subtree:true});

function lang(){
document.documentElement.lang=L;
$("#lb").textContent=L=="hi"?"English":"हिन्दी";
tr(document.body)
}
