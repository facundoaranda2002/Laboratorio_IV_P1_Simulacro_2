import{A as e,D as f,x as n,z as u}from"./chunk-NAK6CJAR.js";import{V as a,_ as p,f as c}from"./chunk-O6UQK4GM.js";var l=(()=>{let t=class t{constructor(o){this.firestore=o,this.productos=[]}agregarProducto(o){let r=e(this.firestore,"productos2");return u(r,o)}getProductos(){return c(this,null,function*(){let o=yield f(e(this.firestore,"productos2"));return this.productos=[],o.forEach(r=>{let s=r.data();s.pais&&(s.pais=JSON.parse(s.pais)),this.productos.push(s)}),this.productos})}};t.\u0275fac=function(r){return new(r||t)(p(n))},t.\u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{l as a};
