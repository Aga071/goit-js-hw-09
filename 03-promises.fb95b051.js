const e=document.querySelector("#delay"),t=document.querySelector("#step"),o=document.querySelector("#amount");function u(t,o){const u=Math.random()>.3;new Promise(((n,l)=>{setTimeout((()=>u?n(`Fulfilled promise ${t} in ${Number(e.value)+t*o}ms`):l(`Rejected promise ${t} in ${Number(e.value)+t*o}ms`)),o)})).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}document.querySelector("button[data-action]").addEventListener("click",(n=>{n.preventDefault(),setTimeout((()=>{for(let e=1;e<=o.value;e++)u(e,t.value)}),e.value)}));
//# sourceMappingURL=03-promises.fb95b051.js.map
