(function(){function k(){window.COLLAPS_CONF?m(window.COLLAPS_CONF):n(g+"/autochange/settings/domain/","settings",m)}function m(a){if(!a.dom_id&&!a.replaces.length)return h("set dom_id or replaces");(new Image).src="https://stats.embedcdn.cc/player?hit=script&sub=replace&host="+location.hostname;var c=a.kinopoisk_var;if(c=a.kinopoisk_id||c&&window[c])l(g+"/autochange/info/kinopoisk?id="+c,"kp "+c,a);else if(a.title){var b=g+"/autochange/info/link?title="+a.title.toLowerCase();b+=u(a,"year","charset",
"separator","season","episode");l(b,a.title,a)}else{c=document.title||document.getElementsByTagName("title")[0].innerHTML;c=c.replace(/ /g," ");var d;for(d in a.templates){var e=a.templates[d];if(b=c.match(new RegExp(e.regexp,"i"))){var f=e.order;break}}b?(d=b[f[0]].toLowerCase())?(b=g+"/autochange/info/link?separator="+a.separator+"&title="+d+(b[f[1]]?"&year="+b[f[1]]:"")+(b[f[2]]?"&season="+b[f[2]]:"")+(b[f[3]]?"&episode="+b[f[3]]:""),l(b+"&charset="+a.charset,d,a)):h("no title"):h("templates isn't match")}}
function n(a,c,b,d){var e=new XMLHttpRequest;e.open("GET",a);e.onreadystatechange=function(){if(4===e.readyState)if(204===e.status)h(c+" not found"),d&&"function"==typeof d&&d();else{if(200!==e.status)return h("api request failed");b(JSON.parse(e.response))}};e.send()}function u(a){for(var c="",b,d=1;d<arguments.length;d++)b=arguments[d],a[b]&&(c+="&"+b+"="+a[b]);return c}function l(a,c,b){n(a,c,function(a){a=a.url;var c=b.frame_params;if(c){c=c.join("&");var d=~a.indexOf("?")?"&":"?";a=c?a+d+c:a}p(b.dom_id,
a,b.width,b.height);q(b.replaces||[],a)},b.not_found_cb)}function p(a,c,b,d){if(a){var e=document.getElementById(a);if(!e)return setTimeout(p.bind(null,a,c,b,d),50);var f=a="";b&&"0"!==b&&(a=' width="'+b+'"');d&&"0"!==d&&(f=' height="'+d+'"');"https://api.multikland.net"==g?e.innerHTML='<iframe src="'+c+'"'+a+f+' allowfullscreen allow="autoplay *; fullscreen" frameborder="0"></iframe>':(e.innerHTML="<iframe "+a+f+' allowfullscreen allow="autoplay *; fullscreen" frameborder="0"></iframe>',r(c,function(a){var b=
e.getElementsByTagName("iframe")[0];b.contentDocument.write(a);b.contentDocument.close()}))}}function q(a,c){if(a.length){for(var b=document.getElementsByTagName("iframe"),d=0;d<b.length;d++){var e=b[d],f=e.src.match(/https?:\/\/(.+?)\/.+/);f&&-1!==a.indexOf(f[1])&&(e.src=c,t(e),"https://api.multikland.net"!=g&&r(c,function(a,b){return function(c){for(var d=document.createElement("iframe"),e=a.attributes,f=0;f<e.length;f++)"src"!==e[f].name&&d.setAttribute(e[f].name,e[f].value);a.parentElement.replaceChild(d,
a);t(d);d.contentDocument.write(c);d.contentDocument.close();h(b+" replaced")}}(e,f[1])))}setTimeout(q.bind(null,a,c),100)}}function r(a,c){var b=new XMLHttpRequest;b.open("GET",a);b.onreadystatechange=function(){4===b.readyState&&(200===b.status||404===b.status&&b.response&&~b.response.indexOf("\u0412\u0438\u0434\u0435\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043e"))&&c(b.response)};b.send()}function t(a){a.hasAttribute("allowfullscreen")&&(a.allowFullscreen=
!0);a.setAttribute("allow","autoplay *; fullsreen");a.allow="autoplay *; fullsreen"}var g="https://api"+Date.now()+".kinogram.best",h=console.log.bind(console,"[collaps]");~navigator.userAgent.indexOf("iPhone")&&window.fetch&&"https:"===location.protocol?fetch("https://api.multikland.net/ping/",{method:"head"}).then(function(){g="https://api.multikland.net";k()})["catch"](k):k()})();