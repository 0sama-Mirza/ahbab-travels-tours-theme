window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,o){o=o||window;for(let r=0;r<this.length;r++)e.call(o,this[r],r,this)}),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/sw.js")})),document.querySelectorAll("ul.shuffle").forEach((e=>{if(e.children.length)for(let o=e.children.length;o>=0;o--)e.appendChild(e.children[Math.random()*o|0])}));
