(()=>{"use strict";var t=0,e=JSON.parse(data),n=e.length;document.getElementById("bi-clo").style.backgroundImage="url(data:image/png;base64,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)",document.getElementsByClassName("btn-prev")[0].addEventListener("click",(function(){s(t=(t+n-1)%n)})),document.getElementsByClassName("btn-next")[0].addEventListener("click",(function(){s(t=(t+1)%n)}));var r=-1,a=-1;function m(e){var m=Math.floor((e.x-r)/25)%n+n;s(t=(a+m)%n)}function d(){document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",m)}var o=document.getElementById("image-viewer");function s(t){var n=document.getElementById("image-viewer"),r="resource/"+e[t];n.src=r}o.addEventListener("dragstart",(function(t){t.preventDefault()})),o.addEventListener("mousedown",(function(e){r=e.x,a=t,document.addEventListener("mousemove",m),document.addEventListener("mouseup",d)})),s(0)})();