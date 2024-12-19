"use strict";(self["webpackChunkshop_macaron"]=self["webpackChunkshop_macaron"]||[]).push([[270],{1270:function(e,r,c){c.r(r),c.d(r,{default:function(){return E}});var i=c(6768),t=c(4232);const a={class:"product-details"},s={class:"container"},n={class:"product-wrapper"},o=["src","alt"],p={class:"product-info"},d={class:"product-price"},l={class:"product-description"},u={class:"product-reviews"},m={class:"reviews"},g={class:"review-author"},k={class:"review-rating"},v={class:"review-text"},f={class:"recommended-desserts"},L={class:"dessert-list"},h=["src","alt"],y={class:"price"},C=["onClick"];function S(e,r,c,S,x,b){return(0,i.uX)(),(0,i.CE)("section",a,[(0,i.Lk)("div",s,[(0,i.Lk)("button",{class:"back-button",onClick:r[0]||(r[0]=(...e)=>b.goBack&&b.goBack(...e))},"← Назад"),(0,i.Lk)("div",n,[(0,i.Lk)("img",{src:x.product.imgSrc,alt:x.product.name,class:"product-img"},null,8,o),(0,i.Lk)("div",p,[(0,i.Lk)("h1",null,(0,t.v_)(x.product.name),1),(0,i.Lk)("p",d,(0,t.v_)(x.product.price),1),(0,i.Lk)("p",l,(0,t.v_)(x.product.description),1),(0,i.Lk)("button",{class:"add-to-cart",onClick:r[1]||(r[1]=(...e)=>b.addToCart&&b.addToCart(...e))},"Добавить в корзину")])]),(0,i.Lk)("div",u,[r[2]||(r[2]=(0,i.Lk)("h2",null,"Отзывы о продукте",-1)),(0,i.Lk)("div",m,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(x.product.reviews,(e=>((0,i.uX)(),(0,i.CE)("div",{class:"review",key:e.id},[(0,i.Lk)("p",g,(0,t.v_)(e.author),1),(0,i.Lk)("div",k,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.rating,(e=>((0,i.uX)(),(0,i.CE)("span",{key:e,class:"star"},"★")))),128)),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(5-e.rating,(e=>((0,i.uX)(),(0,i.CE)("span",{key:e,class:"star empty"},"★")))),128))]),(0,i.Lk)("p",v,(0,t.v_)(e.text),1)])))),128))])]),(0,i.Lk)("div",f,[r[3]||(r[3]=(0,i.Lk)("h2",null,"Рекомендуемые десерты",-1)),(0,i.Lk)("div",L,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(x.recommendedDesserts,(e=>((0,i.uX)(),(0,i.CE)("div",{class:"dessert-item",key:e.id},[(0,i.Lk)("img",{src:e.imgSrc,alt:e.name},null,8,h),(0,i.Lk)("p",null,(0,t.v_)(e.name),1),(0,i.Lk)("p",y,(0,t.v_)(e.price),1),(0,i.Lk)("button",{onClick:r=>b.addToCart(e)},"Добавить в корзину",8,C)])))),128))])]),r[4]||(r[4]=(0,i.Lk)("div",{class:"delivery-info"},[(0,i.Lk)("h2",null,"Доставка и возврат"),(0,i.Lk)("p",null,"Мы доставим ваш заказ в течение 3-5 рабочих дней. В случае, если товар вам не подошел, вы можете вернуть его в течение 14 дней.")],-1))])])}c(4114),c(8992),c(2577);const x=[{id:1,category:"macaron",imgSrc:c(7409),name:"Шоколад, банан",price:"Р 100.00",description:"Состав: миндальная мука, банановая начинка, шоколадный ганаш."},{id:2,category:"macaron",imgSrc:c(3165),name:"Черный трюфель",price:"Р 250.00",description:"Состав: миндальная мука, крем с чёрным трюфелем, шоколад."},{id:3,category:"macaron",imgSrc:c(9627),name:"Пармезан",price:"Р 150.00",description:"Состав: миндальная мука, сливочный крем с пармезаном."},{id:4,category:"eclair",imgSrc:c(6289),name:"Ванильный эклер",price:"Р 150.00",description:"Состав: заварное тесто, ванильный крем, сахарная глазурь."},{id:5,category:"eclair",imgSrc:c(6412),name:"Шоколадный эклер",price:"Р 150.00",description:"Состав: заварное тесто, шоколадный крем, шоколадная глазурь."},{id:6,category:"eclair",imgSrc:c(6533),name:"Клубничный эклер",price:"Р 150.00",description:"Состав: заварное тесто, клубничный крем, ягодная глазурь."},{id:7,category:"icecream",imgSrc:c(8057),name:"Ванильный рожок",price:"Р 150.00",description:"Состав: ванильное мороженое, вафельный рожок."},{id:8,category:"icecream",imgSrc:c(2291),name:"Шоколадный рожок",price:"Р 150.00",description:"Состав: шоколадное мороженое, хрустящий рожок."},{id:9,category:"icecream",imgSrc:c(6445),name:"Клубничный рожок",price:"Р 150.00",description:"Состав: клубничное мороженое, вафельный рожок."}];var b={data(){return{product:{},recommendedDesserts:[{id:1,name:"Шоколадный торт",imgSrc:c(227),price:"450.00 ₽",description:"Нежный шоколадный торт с кремом и ягодами, идеален для любого торжества."},{id:2,name:"Торт Наполеон",imgSrc:c(6967),price:"550.00 ₽",description:"Классический торт Наполеон с тонкими слоеными коржами и кремом."},{id:3,name:"Пирожное Эклер",imgSrc:c(6946),price:"80.00 ₽",description:"Традиционное пирожное Эклер с мягким заварным кремом и глазурью."}]}},created(){const e=parseInt(this.$route.params.id);this.product=x.find((r=>r.id===e)),this.product.reviews=[{id:1,author:"Ирина",rating:5,text:"Очень вкусный торт! Тонкая текстура и приятный вкус шоколада. Рекомендую всем!"},{id:2,author:"Алексей",rating:4,text:"Торт неплохой, но мне бы хотелось больше крема. В остальном все отлично."},{id:3,author:"Мария",rating:5,text:"Это просто шедевр! Торт очень вкусный, украшения тоже красивые, понравился всей семье."}]},methods:{addToCart(e=this.product){let r=JSON.parse(localStorage.getItem("cart"))||[];const c=r.find((r=>r.id===e.id));c?c.quantity+=1:r.push({...e,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),alert(`Товар "${e.name}" добавлен в корзину!`)},goBack(){this.$router.go(-1)}}},_=c(1241);const w=(0,_.A)(b,[["render",S],["__scopeId","data-v-6bf376ae"]]);var E=w},6412:function(e,r,c){e.exports=c.p+"img/chokolateekler.38ea4d9b.svg"},6533:function(e,r,c){e.exports=c.p+"img/strawberyekler.90192978.svg"},6289:function(e,r,c){e.exports=c.p+"img/vanillaekler.75fc8c42.svg"},2291:function(e,r,c){e.exports=c.p+"img/chololateicecream.15425509.svg"},6445:function(e,r,c){e.exports=c.p+"img/strawberyicecream.12e2929a.svg"},8057:function(e,r,c){e.exports=c.p+"img/vanillaicecream.3a7bab16.svg"},7409:function(e,r,c){e.exports=c.p+"img/makaron_banan.29b93b4c.svg"},9627:function(e,r,c){e.exports=c.p+"img/makaron_parmezan.f4939903.svg"},3165:function(e,r,c){e.exports=c.p+"img/makaron_trufel.d24fc0c2.svg"},227:function(e,r,c){e.exports=c.p+"img/chocolate_cake.4c51c51c.svg"},6946:function(e,r,c){e.exports=c.p+"img/eclair.cfafa744.svg"},6967:function(e,r,c){e.exports=c.p+"img/napoleon_cake.a4f9c5d9.svg"}}]);
//# sourceMappingURL=270.a115eadd.js.map