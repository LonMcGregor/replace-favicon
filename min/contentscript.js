
/* Rational Anarchist License */
function i(b){var l=document.createElement("link");l.id='replaceMissingFavicon';l.rel='icon';l.href=b;document.head.appendChild(l);};function p(){const n=window.location.protocol==="file:"?window.location.pathname:window.location.host;chrome.runtime.sendMessage({url:n},r=>{if(r.url===n){i(r.icon);}});}function m(){if(document.querySelectorAll("link[rel~='icon']").length>0){return;}if(window.location.protocol==="file:"){p();return;}fetch("favicon.ico").then(r=>{if(!r.ok){p();}});}m();
