(function(h){function k(a,d,c){var b=new XMLHttpRequest;b.open("GET",a);b.onreadystatechange=function(){if(4===b.readyState){if(204===b.status)return g(d+" not found");if(200!==b.status)return g("api request failed");c(JSON.parse(b.response))}};b.send()}function l(a,d,c,b){if(a){var f=document.getElementById(a);if(!f)return setTimeout(l.bind(null,a,d,c,b),10);var e=a="";c&&(a=' width="'+c+'"');b&&(e=' height="'+b+'"');f.innerHTML='<iframe src="'+d+'"'+a+e+" allowfullscreen></iframe>";m()}}function n(a,
d){if(a.length){for(var c=document.getElementsByTagName("iframe"),b=0;b<c.length;b++){var f=c[b],e=f.src.match(/https?:\/\/(.+?)\/.+/);if(e&&-1!==a.indexOf(e[1])){f.src=d;var q="events?eventStringV="+h+"&project="+location.hostname+"&eventCategory=embed&eventAction=request&hitType=init";(new Image).src="https://analytics.getaim.info/"+q;f.hasAttribute("allowfullscreen")&&(f.allowFullscreen=!0);g(e[1]+" replaced");m()}}setTimeout(n.bind(null,a,d),100)}}function m(){if(!p){var a=document.createElement("style");
a.innerHTML=".collaps-fake-fullscreen{position:fixed;width:100% !important;height:100% !important;left:0;top:0;z-index:999}";document.head.appendChild(a);addEventListener("message",function(a){if(a.origin===h&&"fakeFullScreen"===a.data.event)for(var c=document.getElementsByTagName("iframe"),b,d=0;d<c.length;d++)if(b=c[d],b.src===a.data.src){b.classList.toggle("collaps-fake-fullscreen");break}});p=!0}}var g=console.log.bind(console,"[collaps]");k(h+"/autochange/settings/domain/","settings",function(a){if(!a.dom_id&&
!a.replaces.length)return g("set dom_id or replaces");var d=document.title||document.getElementsByTagName("title")[0].innerHTML;d=d.replace(/ /g," ");var c,b;for(b in a.templates){var f=a.templates[b];if(c=d.match(new RegExp(f.regexp,"i"))){var e=f.order;break}}if(!c)return g("templates isn't match");d=c[e[0]].toLowerCase();if(!d)return g("no title");k(h+"/autochange/info/link?separator="+a.separator+"&title="+d+(c[e[1]]?"&year="+c[e[1]]:"")+(c[e[2]]?"&season="+c[e[2]]:"")+(c[e[3]]?"&episode="+c[e[3]]:
"")+"&charset="+a.charset,d,function(b){l(a.dom_id,b.url,a.width,a.height);n(a.replaces||[],b.url)})});var p=!1})('https://appi2345678.delivembed.cc');
