(function(h){function k(a,d,b){var c=new XMLHttpRequest;c.open("GET",a);c.onreadystatechange=function(){if(4===c.readyState){if(204===c.status)return g(d+" not found");if(200!==c.status)return g("api request failed");b(JSON.parse(c.response))}};c.send()}function l(a,d,b,c){if(a){var f=document.getElementById(a);if(!f)return setTimeout(l.bind(null,a,d,b,c),10);var e=a="";b&&(a=' width="'+b+'"');c&&(e=' height="'+c+'"');f.innerHTML='<iframe src="'+d+'"'+a+e+" allowfullscreen></iframe>"}}function m(a,
d){if(a.length){for(var b=document.getElementsByTagName("iframe"),c=0;c<b.length;c++){var f=b[c],e=f.src.match(/https?:\/\/(.+?)\/.+/);e&&-1!==a.indexOf(e[1])&&(f.src=d,console.log(),f.hasAttribute("allowfullscreen")&&(f.allowFullscreen=!0),g(e[1]+" replaced"))}setTimeout(m.bind(null,a,d),100)}}var g=console.log.bind(console,"[collaps]");k(h+"settings/domain/","settings",function(a){if(!a.dom_id&&!a.replaces.length)return g("set dom_id or replaces");var d=document.title||document.getElementsByTagName("title")[0].innerHTML;
d=d.replace(/ /g," ");var b,c;for(c in a.templates){var f=a.templates[c];if(b=d.match(new RegExp(f.regexp,"i"))){var e=f.order;break}}if(!b)return g("templates isn't match");d=b[e[0]].toLowerCase();if(!d)return g("no title");k(h+"info/link?separator="+a.separator+"&title="+d+(b[e[1]]?"&year="+b[e[1]]:"")+(b[e[2]]?"&season="+b[e[2]]:"")+(b[e[3]]?"&episode="+b[e[3]]:""),d,function(b){l(a.dom_id,b.url,a.width,a.height);m(a.replaces||[],b.url)})})})("https://apii2.delivembed.cc/autochange/");
