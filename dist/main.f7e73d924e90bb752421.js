(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(t,e,n){"use strict";n.r(e);n("yjly"),n("Anew"),n("UOjr"),n("lmye"),n("WB5j");var i={homePage:document.querySelector("#home-page"),detailsPage:document.querySelector("#film-info"),myLibList:document.querySelector("#mylib-list"),ScrollButton:document.querySelector(".scroll__button"),logo:document.querySelector("#logo-button"),homeButton:document.querySelector("#home-button"),myLibButton:document.querySelector("#library-button")};i.ScrollButton.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}));var o='  \n<form action="#" class="home__search">\n  <input\n    id="search-input"\n    type=""\n    name="query"\n    placeholder="Write here movie name :)"\n    class="home__input"\n  />\n</form>\n<ul id="mylib-home" class="list home__list"></ul>\n<div class="home__button">\n<button type="button" id="button-prev" class="btn home__button-prew">Prev</button>\n<button type="button" id="button-page" class="btn home__button-page">1</button>\n<button type="button" id="button-next" class="btn home__button-next">Next</button>\n</div>',a=(n("JBxO"),n("FdtR"),{page:1,fetchPopularFilms:function(){return fetch("https://api.themoviedb.org/3/movie/popular?api_key=259c02d1f1f516a6001436d2cce8084d&page="+this.page).then((function(t){return t.json()})).catch(console.log)},incrementPage:function(){this.page++},decrementPage:function(){this.page--}}),s=(n("8cZI"),n("D/wG"),"259c02d1f1f516a6001436d2cce8084d"),l="https://api.themoviedb.org/3/movie";var r=function(t){var e=t.target;return fetch(l+"/"+e.closest(".forJS").dataset.index+"?api_key="+s).then((function(t){return t.json()})).catch(console.log)},c=(n("lYjL"),n("IvQZ"),n("4NM0"),n("dIfx"));n("IlkV");c.a.defaults.minWidth="280px",c.a.defaults.width="80%",c.a.defaults.mWidth="420px";var u=function(t){void 0===window.stackBottomRight&&(window.stackBottomRight={dir1:"up",dir2:"left",firstpos1:25,firstpos2:25});var e={title:"Hey! :)",text:'you have added "'+t+'" to the queue list!',type:"success",stack:window.stackBottomRight,modules:{Desktop:{desktop:!0},Animate:{animate:!0,inClass:"zoomInLeft",outClass:"zoomOutRight"}}};c.a.defaults.styling="material",c.a.defaults.icons="material",c.a.success(e)};c.a.defaults.minWidth="280px",c.a.defaults.width="80%",c.a.defaults.mWidth="420px";var d=function(t){void 0===window.stackBottomRight&&(window.stackBottomRight={dir1:"up",dir2:"left",firstpos1:25,firstpos2:25});var e={title:"Congrats! :)",text:'You have added "'+t+'" to the watched list!',type:"success",stack:window.stackBottomRight,modules:{Desktop:{desktop:!0},Animate:{animate:!0,inClass:"zoomInLeft",outClass:"zoomOutRight"}}};c.a.defaults.styling="material",c.a.defaults.icons="material",c.a.success(e)};c.a.defaults.minWidth="280px",c.a.defaults.width="80%",c.a.defaults.mWidth="420px";var m=function(t){void 0===window.stackBottomRight&&(window.stackBottomRight={dir1:"up",dir2:"left",firstpos1:25,firstpos2:25});var e={title:"Hey :)",text:'You just removed "'+t+'" from your queue list!',type:"info",stack:window.stackBottomRight,modules:{Desktop:{desktop:!0},Animate:{animate:!0,inClass:"zoomInLeft",outClass:"zoomOutRight"}}};c.a.defaults.styling="material",c.a.defaults.icons="material",c.a.info(e)};c.a.defaults.minWidth="280px",c.a.defaults.width="80%",c.a.defaults.mWidth="420px";var h=function(t){void 0===window.stackBottomRight&&(window.stackBottomRight={dir1:"up",dir2:"left",firstpos1:25,firstpos2:25});var e={title:"Okey :)",text:'So "'+t+'" is not anymore in your wathed list!',type:"info",stack:window.stackBottomRight,modules:{Desktop:{desktop:!0},Animate:{animate:!0,inClass:"zoomInLeft",outClass:"zoomOutRight"}}};c.a.defaults.styling="material",c.a.defaults.icons="material",c.a.info(e)};function f(t){var e={};r(t).then((function(t){e.id=t.id,e.poster="http://image.tmdb.org/t/p/w500"+t.poster_path,e.title=t.title,e.votes=t.vote_average,e.year=t.release_date.slice(0,4);var n=JSON.parse(localStorage.getItem("watched"))||[];if(n.map((function(t){return t.id})).includes(t.id)){var i=n.filter((function(e){return e.id!==t.id}));return localStorage.setItem("watched",JSON.stringify(i)),h(t.title)}n.push(e),localStorage.setItem("watched",JSON.stringify(n)),d(t.title)}))}function v(t){var e={};r(t).then((function(t){e.id=t.id,e.poster="http://image.tmdb.org/t/p/w500"+t.poster_path,e.title=t.title,e.votes=t.vote_average,e.year=t.release_date.slice(0,4);var n=JSON.parse(localStorage.getItem("queue"))||[];if(n.map((function(t){return t.id})).includes(t.id)){var i=n.filter((function(e){return e.id!==t.id}));return localStorage.setItem("queue",JSON.stringify(i)),m(t.title)}n.push(e),localStorage.setItem("queue",JSON.stringify(n)),u(t.title)}))}var p=function(){a.page;T(),M.listType(),M.counterType()};function b(t){var e=t.target;if(e.classList.contains("film-details--hover-star"))f(event);else{if(!e.classList.contains("film-details--hover-heart"))return;v(event)}}var _=function(t){var e=t.target;e.classList.contains("home__list--cover")&&!e.classList.contains("home__list--hover-button")&&(i.myLibHome.innerHTML="",i.myLibList.innerHTML="",i.homePage.innerHTML="",r(event).then((function(t){i.detailsPage.insertAdjacentHTML("afterbegin",'<img\n      class="film-details-image"\n      src="http://image.tmdb.org/t/p/w500'+t.poster_path+'"\n      alt="'+t.title+'"\n    />\n    <h2 class="film-details-title">'+t.title+" ("+t.release_date.slice(0,4)+')</h2>\n    <ul class="film-info">\n      <li class="film-info-item green-item">\n        <div class="film-info-item__note first-note">vote / votes</div>\n        <div class="film-info-item__note next-note">'+t.vote_average+"  / "+t.vote_count+'</div>\n      </li>\n      <li class="film-info-item white-item">\n        <div class="film-info-item__note first-note">popularity</div>\n        <div class="film-info-item__note next-note">'+t.popularity+'</div>\n      </li>\n      <li class="film-info-item green-item">\n        <div class="film-info-item__note first-note">original title</div>\n        <div class="film-info-item__note next-note">'+t.original_title+'</div>\n      </li>\n      <li class="film-info-item white-item">\n        <div class="film-info-item__note first-note">genre</div>\n        <div class="film-info-item__note next-note">\n          '+t.genres.map((function(t){return t.name})).join(", ")+'\n        </div>\n      </li>\n    </ul>\n    <h3 class="film-details-semititle forJS" >About</h3>\n    <p class="film-details-text">\n      '+t.overview+'\n    </p>\n    <div class="forJS film-details--hover" data-index="'+t.id+'">\n    <button type="button" class="film-details--hover-star for_details-button">Watched</button>\n    <button type="button" class="film-details--hover-heart for_details-button">Queue</button>\n    </div>\n    <button type="button" id="button-back" class="btn film-details__button-back">Back</button>'),i.backButton=document.querySelector("#button-back"),i.backButton.addEventListener("click",p),i.detailsPage.addEventListener("click",b)})),i.myLibHome.removeEventListener("click",r))},g={query:"",page:1,fetchSearchMovies:function(){return fetch("https://api.themoviedb.org/3/search/movie?api_key=259c02d1f1f516a6001436d2cce8084d&page="+this.page+"&query="+this.query).then((function(t){return t.json()})).catch(console.log)},incrementPage:function(){this.page++},decrementPage:function(){this.page--}},y=(n("0iy3"),n("K5zR"),function(){var t=a.page;return i.pageButton.textContent=t}),L=function(t){i.myLibHome.innerHTML="",a.incrementPage(),console.log(t),x(),y()},k=function(){a.page<=1||(i.myLibHome.innerHTML="",a.decrementPage(),x(),y())},w=function(){var t=g.page;return i.pageButton.textContent=t},H=function(){i.myLibHome.innerHTML="",g.incrementPage(),j(),w()},S=function(){g.page<=1||(i.myLibHome.innerHTML="",g.decrementPage(),j(),w())},B=n("jffb");function T(){i.homePage.innerHTML="",i.detailsPage.innerHTML="",i.myLibList.innerHTML="",i.homePage.insertAdjacentHTML("beforeend",o),i.myLibHome=document.querySelector("#mylib-home"),i.paginationSection=document.querySelector(".home__button"),i.prevButton=document.querySelector("#button-prev"),i.pageButton=document.querySelector("#button-page"),i.nextButton=document.querySelector("#button-next"),i.myLibHome.addEventListener("click",_),i.searchInput=document.querySelector("#search-input"),i.searchInput.addEventListener("input",B(E,600))}T();var x=function(){a.fetchPopularFilms().then((function(t){t.results.map((function(t){return i.myLibHome.insertAdjacentHTML("beforeend",'  <li class="home__list-item forJS" data-index="'+t.id+'">\n        <div class="home__list--cover">\n          <div class="home__list-rate">\n            <p>'+t.vote_average+'</p>\n          </div>\n          <h2 class="home__list-header">'+t.title+" ("+t.release_date.slice(0,4)+')</h2>\n        </div>\n        <img class="home__list-item__img" src="http://image.tmdb.org/t/p/w500'+t.poster_path+'" alt="poster of '+t.title+'" />\n        <div class="home__list--hover">\n        <button type="button" class="home__list--hover-star for_button">Watched</button>\n        <button type="button" class="home__list--hover-heart for_button">Queue</button>\n        </div>\n      </li>\n    ')}))})).then((function(){i.nextButton.removeEventListener("click",H),i.prevButton.removeEventListener("click",S),i.nextButton.addEventListener("click",L),i.prevButton.addEventListener("click",k),i.myLibHome.addEventListener("click",q)}))};function q(t){var e=t.target;if(e.classList.contains("home__list--hover-star"))f(event);else{if(!e.classList.contains("home__list--hover-heart"))return;v(event)}}x();var M={listType:x,counterType:y};function E(){g.page=1,j(),M.listType=j,M.counterType=w}function j(){var t=i.searchInput.value||g.query;""!==t&&(g.query=t,i.myLibHome.innerHTML="",w(),g.fetchSearchMovies().then((function(t){var e=t.results;if(0===e.length)return i.paginationSection.classList.add("hidden"),i.myLibHome.insertAdjacentHTML("beforeend",'<div class="no-list">\n          <h2 class="no-list__item">Sorry, no movies found :(</h2>\n            <h3 class="no-list__item">Try another name :)</h3>\n            </div>');i.paginationSection.classList.remove("hidden"),e.map((function(t){return i.myLibHome.insertAdjacentHTML("beforeend",'  <li class="home__list-item forJS" data-index="'+t.id+'">\n\n        <div class="home__list--cover">\n          <div class="home__list-rate">\n            <p>'+t.vote_average+'</p>\n          </div>\n          <h2 class="home__list-header">'+t.title+" ("+t.release_date.slice(0,4)+')</h2>\n        </div>\n        <img class="home__list-item__img" src="http://image.tmdb.org/t/p/w500'+t.poster_path+'" alt="poster of '+t.title+'" />\n        <div class="home__list--hover">\n        <button type="button" class="home__list--hover-star for_button">Watched</button>\n        <button type="button" class="home__list--hover-heart for_button">Queue</button>\n        </div>\n      </li>\n    ')}))})).then((function(){i.nextButton.removeEventListener("click",L),i.prevButton.removeEventListener("click",k),i.nextButton.addEventListener("click",H),i.prevButton.addEventListener("click",S),i.myLibHome.addEventListener("click",q)})))}var P='\n<nav class="libnav">\n<ul class="list libnav__list">\n  <li class="libnav__item-item">\n    <button type="button" id="watched-button" class="link libnav__button">\n      Watched\n    </button>\n  </li>\n  <li class="nav__item-item">\n    <button type="button" id="queue-button" class="link libnav__button">\n      Queue\n    </button>\n  </li>\n</ul>\n</nav>\n<ul id="mylib-home" class="list home__list"></ul>',I=n("d2YL"),A=n.n(I);function R(){i.myLibHome.innerHTML="",i.queueButton.classList.remove("active-nav-button"),i.watchedButton.classList.add("active-nav-button");var t=JSON.parse(localStorage.getItem("watched"));if(null===t||0===t.length)return i.myLibHome.insertAdjacentHTML("beforeend",'<div class="no-list">\n      <h2 class="no-list__item">You do not have watched movies :(</h2>\n        <h3 class="no-list__item">Add them :)</h3>\n        </div>');var e=t.map((function(t){return A()(t)})).join("");i.myLibHome.insertAdjacentHTML("beforeend",e)}var J=function t(){i.homePage.innerHTML="",i.detailsPage.innerHTML="",i.myLibList.innerHTML="",i.myLibList.insertAdjacentHTML("beforeend",P),i.watchedButton=document.querySelector("#watched-button"),i.queueButton=document.querySelector("#queue-button"),i.myLibHome=document.querySelector("#mylib-home"),R(),M.listType=t,i.watchedButton.addEventListener("click",(function(){R(),M.listType=t})),i.queueButton.addEventListener("click",(function(){!function(){i.myLibHome.innerHTML="",i.watchedButton.classList.remove("active-nav-button"),i.queueButton.classList.add("active-nav-button");var t=JSON.parse(localStorage.getItem("queue"));if(console.log(t),null===t||0===t.length)return i.myLibHome.insertAdjacentHTML("beforeend",'<div class="no-list">\n      <h2 class="no-list__item">There are no movies in queue list :(</h2>\n        <h3 class="no-list__item">Add them :)</h3>\n        </div>');var e=t.map((function(t){return A()(t)})).join("");i.myLibHome.insertAdjacentHTML("beforeend",e)}(),M.listType=t})),i.myLibHome.addEventListener("click",_),i.myLibHome.addEventListener("click",q)};i.logo.addEventListener("click",T),i.logo.addEventListener("click",x),i.homeButton.addEventListener("click",T),i.homeButton.addEventListener("click",x),i.myLibButton.addEventListener("click",J)},d2YL:function(t,e,n){var i=n("mp5j");t.exports=(i.default||i).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,i,o){var a,s=null!=e?e:t.nullContext||{},l=t.hooks.helperMissing,r="function",c=t.escapeExpression;return'<li class="home__list-item forJS" data-index="'+c(typeof(a=null!=(a=n.id||(null!=e?e.id:e))?a:l)===r?a.call(s,{name:"id",hash:{},data:o,loc:{start:{line:1,column:46},end:{line:1,column:52}}}):a)+'">\r\n    <div class="home__list--cover">\r\n        <div class="home__list-rate">\r\n            <p>'+c(typeof(a=null!=(a=n.votes||(null!=e?e.votes:e))?a:l)===r?a.call(s,{name:"votes",hash:{},data:o,loc:{start:{line:4,column:15},end:{line:4,column:24}}}):a)+'</p>\r\n        </div>\r\n        <h2 class="home__list-header">'+c(typeof(a=null!=(a=n.title||(null!=e?e.title:e))?a:l)===r?a.call(s,{name:"title",hash:{},data:o,loc:{start:{line:6,column:38},end:{line:8,column:12}}}):a)+" ("+c(typeof(a=null!=(a=n.year||(null!=e?e.year:e))?a:l)===r?a.call(s,{name:"year",hash:{},data:o,loc:{start:{line:8,column:14},end:{line:8,column:22}}}):a)+')</h2>\r\n    </div>\r\n    <img class="home__list-item__img" src="'+c(typeof(a=null!=(a=n.poster||(null!=e?e.poster:e))?a:l)===r?a.call(s,{name:"poster",hash:{},data:o,loc:{start:{line:10,column:43},end:{line:12,column:10}}}):a)+'" alt="poster of '+c(typeof(a=null!=(a=n.title||(null!=e?e.title:e))?a:l)===r?a.call(s,{name:"title",hash:{},data:o,loc:{start:{line:12,column:27},end:{line:12,column:36}}}):a)+'" />\r\n    <div class="home__list--hover">\r\n        <button type="button" class="home__list--hover-star for_button">Watched</button>\r\n        <button type="button" class="home__list--hover-heart for_button">Queue</button>\r\n    </div>\r\n</li>'},useData:!0})},yjly:function(t,e,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.f7e73d924e90bb752421.js.map