(this["webpackJsonpfcc-random-quote-machine"]=this["webpackJsonpfcc-random-quote-machine"]||[]).push([[0],{11:function(e,t,n){e.exports=n(26)},16:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(1),c=n.n(a),u=(n(16),n(4)),i=n.n(u),l=n(9),s=n(7),m=n(2);n(24),n(25);function h(e){var t=e.data,n=e.setQuote,a=Object(o.useCallback)(Object(l.a)(i.a.mark((function e(){var t,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.quotable.io/random");case 3:return t=e.sent,e.next=6,t.json();case 6:o=e.sent,n({content:o.content,author:o.author}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),n({content:e.t0.message,author:"Critical error"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),[n]);return r.a.createElement("section",{id:"quote-box"},r.a.createElement("blockquote",{id:"quote"},r.a.createElement("p",{id:"text"},!!t&&t.content),r.a.createElement("cite",{id:"author"},!!t&&t.author),r.a.createElement(d,{quote:'"'.concat(t.content,'"%0D~ ').concat(t.author)}),r.a.createElement("button",{type:"button",id:"new-quote",onClick:a},"New quote")))}function d(e){return r.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=".concat(e.quote),target:"_blank",rel:"noopener noreferrer",id:"tweet-quote"},r.a.createElement("svg",{id:"twitter-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 20"},r.a.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})))}var f=function(){var e=Object(m.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{content:"Do more than dream: work.",author:"William Arthur Ward"},t=arguments.length>1?arguments[1]:void 0;return"SET"===t.type?t.quote:e})),t=Object(s.b)((function(e){return{data:e}}),(function(e){return{setQuote:function(t){e(function(e){return{type:"SET",quote:e}}(t))}}}))(h);return r.a.createElement(s.a,{store:e},r.a.createElement(t,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.78888724.chunk.js.map