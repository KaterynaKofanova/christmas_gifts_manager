(this.webpackJsonpchristmas_gifts_manager=this.webpackJsonpchristmas_gifts_manager||[]).push([[0],{26:function(t,e,c){},46:function(t,e,c){"use strict";c.r(e);var r=c(19),s=c.n(r),n=c(8),i=c.n(n),a=c(5),o=c(20),d=c(4),u=c(1),l=(c(26),c(3)),j=c.n(l),p=c(10),h=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},b=c(0),x=function(t){var e=t.cart,c=t.setCarts,r=t.carts,s=t.setDiscount,n=e.products.reduce((function(t,e){return t+e.price*e.approvedQuantity}),0);return Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsxs)("h3",{children:[h(e.name.firstname),"'s Christmas wishlist"]}),Object(b.jsxs)("table",{children:[Object(b.jsxs)("colgroup",{children:[Object(b.jsx)("col",{className:"col1"}),Object(b.jsx)("col",{className:"col2"}),Object(b.jsx)("col",{className:"col3"}),Object(b.jsx)("col",{className:"col4"})]}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Gift"}),Object(b.jsx)("th",{children:"Desired quantity"}),Object(b.jsx)("th",{children:"Price"}),Object(b.jsx)("th",{children:"Approved quantity"})]}),e.products.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.title}),Object(b.jsx)("td",{children:t.quantity}),Object(b.jsx)("td",{children:t.price}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"number",min:"0",max:t.quantity,value:t.approvedQuantity,onChange:function(n){return function(t,e,n){var i=r.find((function(e){return e.name===t}));if(i){var a={id:i.id,userId:i.userId,name:i.name,products:i.products.map((function(t){return t.id===e?Object(p.a)(Object(p.a)({},t),{},{approvedQuantity:n}):t}))},o=r.map((function(e){return e.name===t?a:e}));c(o);var d=function(t){var e=t.reduce((function(t,e){return e.products.forEach((function(e){t.find((function(t){return t.id===e.id}))||t.push({id:e.id,price:e.price})})),t}),[]),c=0;return e.forEach((function(e){var r=t.reduce((function(t,c){var r=c.products.find((function(t){return t.id===e.id}));return r&&r.approvedQuantity>0&&(t+=1),t}),0);r>1&&(c+=.1*r*e.price*r)})),c}(o);s(d)}}(e.name,t.id,+n.currentTarget.value)}})})]},t.id)}))]})]}),Object(b.jsxs)("div",{className:"cart-total",children:["Total price: ",n.toFixed(2)]})]})},f=function(t){var e=t.carts,c=t.setCarts,r=t.setDiscount,s=t.totalPrice,n=t.totalDiscount,i=t.view,o=t.setView,l=Object(u.useState)(!1),p=Object(d.a)(l,2),h=p[0],f=p[1];return"AllCarts"===i?e.length<1?Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)("span",{className:"loader"})," Loading data..."]}):Object(b.jsxs)("div",{className:"allCarts",children:[h?Object(b.jsxs)("div",{className:"instructions",children:[Object(b.jsx)("p",{children:"Welcome to Christmas Gifts Manager!"}),Object(b.jsx)("p",{children:"Here you can see all your children's wishlists for Christmas gifts."}),Object(b.jsx)("p",{children:"You can approve items in the 'Approved quantity' column."}),Object(b.jsxs)("p",{children:["If you approve the same product in different children's wishlists you can get a discount for it:",Object(b.jsx)("br",{})," 20% if it is approved in 2 lists, 30% if in 3 lists and so on."]}),Object(b.jsx)("p",{children:"You can see your current discount on the botton of the page."}),Object(b.jsx)("button",{onClick:function(){return f(!1)},children:"Close"})]}):Object(b.jsx)("button",{onClick:function(){return f(!0)},style:{marginTop:"1em"},children:"Read instructions"}),e.map((function(t){return Object(b.jsx)(x,{cart:t,setCarts:c,carts:e,setDiscount:r},t.userId)})),Object(b.jsxs)("div",{className:"totals",children:[Object(b.jsxs)("div",{children:["Total Price: ",s.toFixed(2)]}),Object(b.jsxs)("div",{children:["Total Discount: ",n.toFixed(2)]}),Object(b.jsxs)("div",{children:["Price with discount: ",(s-n).toFixed(2)]})]}),Object(b.jsx)("button",{onClick:function(){var t,c=Object(a.a)(e);try{for(c.s();!(t=c.n()).done;){var r=t.value,s={userId:r.userId,date:"date",products:r.products.map((function(t){return{productId:t.id,quantity:t.approvedQuantity}})).filter((function(t){return 0!==t.quantity}))},n={userId:r.userId,date:"date",products:r.products.map((function(t){return{productId:t.id,quantity:t.quantity-t.approvedQuantity}})).filter((function(t){return 0!==t.quantity}))};try{j.a.post("https://fakestoreapi.com/carts",s),j.a.post("https://fakestoreapi.com/carts",n)}catch(i){console.error(i.message)}}}catch(d){c.e(d)}finally{c.f()}o("Confirmation")},id:"btn-save",children:"Save"})]}):null},O=function(t){var e=t.carts,c=t.totalPrice,r=t.totalDiscount,s=t.view,n=t.setView;return"Confirmation"===s?Object(b.jsxs)("div",{className:"confirmation",children:[Object(b.jsx)("p",{children:"Changes were saved successfully! Here is a summary of approved and discarded gifts:"}),e.map((function(t){return Object(b.jsxs)("div",{className:"confirm-cart",children:[Object(b.jsxs)("h4",{children:[h(t.name.firstname),"'s"]}),Object(b.jsxs)("table",{children:[Object(b.jsxs)("colgroup",{children:[Object(b.jsx)("col",{className:"col1"}),Object(b.jsx)("col",{className:"col2"}),Object(b.jsx)("col",{className:"col3"}),Object(b.jsx)("col",{className:"col4"})]}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Gift"}),Object(b.jsx)("th",{children:"Discarded quantity"}),Object(b.jsx)("th",{children:"Approved quantity"}),Object(b.jsx)("th",{children:"Approved price"})]}),t.products.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.title}),Object(b.jsx)("td",{children:t.quantity-t.approvedQuantity}),Object(b.jsx)("td",{children:t.approvedQuantity}),Object(b.jsx)("td",{children:(t.price*t.approvedQuantity).toFixed(2)})]},t.id)})),Object(b.jsxs)("tr",{className:"confirm-cart-totals",children:[Object(b.jsx)("td",{children:"Total:"}),Object(b.jsx)("td",{children:t.products.reduce((function(t,e){return t+=e.quantity-e.approvedQuantity}),0)}),Object(b.jsx)("td",{children:t.products.reduce((function(t,e){return t+=e.approvedQuantity}),0)}),Object(b.jsx)("td",{children:t.products.reduce((function(t,e){return t+=e.approvedQuantity*e.price}),0).toFixed(2)})]})]})]})]},t.userId)})),Object(b.jsxs)("div",{className:"totals",children:[Object(b.jsxs)("div",{children:["Total Price: ",c.toFixed(2)]}),Object(b.jsxs)("div",{children:["Total Discount: ",r.toFixed(2)]}),Object(b.jsxs)("div",{children:["Price with discount: ",(c-r).toFixed(2)]})]}),Object(b.jsx)("button",{onClick:function(){return n("AllCarts")},children:"Go back"})]}):null},v=c(9),m=function(){var t=Object(u.useState)([]),e=Object(d.a)(t,2),c=e[0],r=e[1],s=Object(u.useState)(0),n=Object(d.a)(s,2),l=n[0],p=n[1],h=Object(u.useState)("AllCarts"),x=Object(d.a)(h,2),m=x[0],y=x[1],g=function(){var t=Object(o.a)(i.a.mark((function t(){var e,c,s,n,o,d,u,l,p,h,b,x,f,O;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://fakestoreapi.com/carts");case 3:e=t.sent,c=e.data.reduce((function(t,e){return t.find((function(t){var c=t.userId;return e.userId===c}))||t.push(e),t}),[]),s=[],n=Object(a.a)(c),t.prev=7,n.s();case 9:if((o=n.n()).done){t.next=39;break}return d=o.value,t.next=13,j.a.get("https://fakestoreapi.com/users/".concat(d.userId));case 13:u=t.sent,l=u.data.name,p=[],h=Object(a.a)(d.products),t.prev=17,h.s();case 19:if((b=h.n()).done){t.next=28;break}return x=b.value,t.next=23,j.a.get("https://fakestoreapi.com/products/".concat(x.productId));case 23:f=t.sent,O=f.data,p.push({id:O.id,title:O.title,price:O.price,category:O.category,description:O.description,image:O.image,quantity:x.quantity,approvedQuantity:0});case 26:t.next=19;break;case 28:t.next=33;break;case 30:t.prev=30,t.t0=t.catch(17),h.e(t.t0);case 33:return t.prev=33,h.f(),t.finish(33);case 36:s.push({id:d.id,userId:d.userId,name:l,products:p});case 37:t.next=9;break;case 39:t.next=44;break;case 41:t.prev=41,t.t1=t.catch(7),n.e(t.t1);case 44:return t.prev=44,n.f(),t.finish(44);case 47:r(s),t.next=53;break;case 50:t.prev=50,t.t2=t.catch(0),console.error(t.t2.message);case 53:case"end":return t.stop()}}),t,null,[[0,50],[7,41,44,47],[17,30,33,36]])})));return function(){return t.apply(this,arguments)}}();Object(u.useEffect)((function(){g()}),[]),Object(u.useEffect)((function(){window.scrollTo(0,0)}),[m]);var C=c.reduce((function(t,e){return t+e.products.reduce((function(t,e){return t+e.price*e.approvedQuantity}),0)}),0);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsxs)("h2",{className:"header-content",children:[Object(b.jsx)(v.a,{})," Christmas Gifts Manager ",Object(b.jsx)(v.b,{})]})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)(f,{carts:c,setCarts:r,setDiscount:p,totalPrice:C,totalDiscount:l,view:m,setView:y}),Object(b.jsx)(O,{carts:c,totalPrice:C,totalDiscount:l,view:m,setView:y})]})]})};s.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.939dfd60.chunk.js.map