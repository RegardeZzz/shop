"use strict";(self["webpackChunkshop_macaron"]=self["webpackChunkshop_macaron"]||[]).push([[494],{6494:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var c=e(6768),i=e(4232);const r={class:"cart"},n={class:"container"},s={key:0,class:"empty-cart"},l={key:1},o=["src","alt"],u={class:"item-info"},d={class:"item-price"},k={class:"quantity-control"},m=["onClick"],v=["onClick"],p=["onClick"],h={class:"cart-summary"};function C(t,a,e,C,L,y){const f=(0,c.g2)("router-link");return(0,c.uX)(),(0,c.CE)("section",r,[(0,c.Lk)("div",n,[a[3]||(a[3]=(0,c.Lk)("h1",null,"Корзина",-1)),0===L.cart.length?((0,c.uX)(),(0,c.CE)("div",s,[a[1]||(a[1]=(0,c.Lk)("p",null,"Ваша корзина пуста.",-1)),(0,c.bF)(f,{to:"/catalog"},{default:(0,c.k6)((()=>a[0]||(a[0]=[(0,c.eW)("Вернуться к покупкам")]))),_:1})])):((0,c.uX)(),(0,c.CE)("div",l,[((0,c.uX)(!0),(0,c.CE)(c.FK,null,(0,c.pI)(L.cart,(t=>((0,c.uX)(),(0,c.CE)("div",{class:"cart-item",key:t.id},[(0,c.Lk)("img",{src:t.imgSrc,alt:t.name,class:"item-img"},null,8,o),(0,c.Lk)("div",u,[(0,c.Lk)("h3",null,(0,i.v_)(t.name),1),(0,c.Lk)("p",d,(0,i.v_)(t.price),1),(0,c.Lk)("div",k,[(0,c.Lk)("button",{onClick:a=>y.updateQuantity(t.id,-1)},"-",8,m),(0,c.Lk)("span",null,(0,i.v_)(t.quantity),1),(0,c.Lk)("button",{onClick:a=>y.updateQuantity(t.id,1)},"+",8,v)])]),(0,c.Lk)("button",{class:"remove-item",onClick:a=>y.removeItem(t.id)},"Удалить",8,p)])))),128)),(0,c.Lk)("div",h,[(0,c.Lk)("p",null,"Итого: "+(0,i.v_)(y.totalPrice)+" ₽",1),a[2]||(a[2]=(0,c.Lk)("button",{class:"checkout-button"},"Оформить заказ",-1))])]))])])}e(8992),e(4520),e(2577),e(8872);var L={data(){return{cart:[]}},computed:{totalPrice(){return this.cart.reduce(((t,a)=>t+a.quantity*parseFloat(a.price)),0).toFixed(2)}},methods:{loadCart(){const t=localStorage.getItem("cart");this.cart=t?JSON.parse(t):[]},updateQuantity(t,a){const e=this.cart.find((a=>a.id===t));e&&(e.quantity+=a,e.quantity<=0&&this.removeItem(t)),this.saveCart()},removeItem(t){this.cart=this.cart.filter((a=>a.id!==t)),this.saveCart()},saveCart(){localStorage.setItem("cart",JSON.stringify(this.cart))}},mounted(){this.loadCart()}},y=e(1241);const f=(0,y.A)(L,[["render",C],["__scopeId","data-v-67e19ee0"]]);var g=f}}]);
//# sourceMappingURL=494.15f8469c.js.map