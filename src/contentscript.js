
/*
 * Rational Anarchist License
 *  Make all the laws you want;
 *  I'll follow the ones I like
 *  and break the ones I don't.
 */

function infectFavicon(baseUri) {
  // create favicon link to gravatar
  var linkElement = document.createElement("link");
  linkElement.id =  'replaceMissingFavicon';
  linkElement.rel = 'icon';
  linkElement.href = baseUri;

  document.head.appendChild(linkElement);
};

function provideFavicon(){
  const name = window.location.protocol==="file:" ? window.location.pathname : window.location.host;

  chrome.runtime.sendMessage({url: name}, response => {
    if(response.url === name){
      infectFavicon(response.icon);
    }
  });
}

function main(){
  if (document.querySelectorAll("link[rel~='icon']").length > 0) {
    return;
  }
  if(window.location.protocol==="file:"){
    provideFavicon();
    return;
  }
  fetch("favicon.ico").then(response => {
    if(!response.ok){
      provideFavicon();
    }
  });
}

main();
