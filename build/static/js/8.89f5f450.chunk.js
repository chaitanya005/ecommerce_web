(this.webpackJsonpdemo_redux=this.webpackJsonpdemo_redux||[]).push([[8],{319:function(n,e,t){"use strict";t.r(e);var o=t(1),i=t.n(o),l=t(24),a=t(0),r=function(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("header",{className:"header-colorfull header-horizontal header-over header-view-side",children:Object(a.jsx)("div",{className:"container"})}),Object(a.jsx)("section",{className:"white-curve-after after-head slick-top-fix section-white-text",style:{minHeight:"3rem"},children:Object(a.jsx)("div",{className:"slick-view-banner slick-numeric-navigation slick-carousel","data-slider":"top-side-numbers",children:Object(a.jsx)("div",{className:"slick-slides slick-initialized slick-slider slick-dotted",style:{marginBottom:"10px"},children:Object(a.jsx)("div",{className:"slick-slide",children:Object(a.jsx)("div",{className:"section-white-text entity-banner content-offs section-solid justify-content-center bg-light-green",children:Object(a.jsx)("div",{className:"container text-center text-lg-left flex-0 entity-content",children:Object(a.jsxs)("div",{className:"my-auto position-relative align-items-lg-center flex-0 row",children:[Object(a.jsx)("div",{className:"full-block",children:Object(a.jsx)("div",{className:"section-back-text",children:"Food"})}),Object(a.jsx)("div",{className:"m-lg-auto d-flex z-index-2 position-relative col"}),Object(a.jsxs)("div",{className:"mr-lg-5 mt-5 my-lg-auto order-lg-first z-index-4 position-relative",children:[Object(a.jsxs)("h2",{className:"h1 entity-title",children:["Find Awesome Deals in"," ",Object(a.jsx)("span",{className:"text-bittersweet",children:"Chirala"})]}),Object(a.jsx)("div",{className:"h4 mt-0 entity-subtitle"}),Object(a.jsx)("p",{className:"mb-4 pb-2 entity-text",children:"Lists of top restaurants, hotels and ice-cream parlours in Chirala, based on trends"}),Object(a.jsx)("div",{className:"entity-action-btns",children:Object(a.jsx)("a",{className:"btn-wide btn btn-theme-white-bordered",href:"/veggies/shop",children:"Order now"})})]})]})})})})})})})]})},s=function(){return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)("section",{style:{margin:"3% 0"},children:Object(a.jsx)("div",{class:"container",children:Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"col-md-3 col-6",children:Object(a.jsx)("div",{class:"products-box",children:Object(a.jsx)("img",{alt:"",src:"img/pro1.jpg",class:"img-fluid rounded"})})}),Object(a.jsx)("div",{class:"col-md-3 col-6",children:Object(a.jsx)("div",{class:"products-box",children:Object(a.jsx)("img",{alt:"",src:"img/pro2.jpg",class:"img-fluid rounded"})})}),Object(a.jsx)("div",{class:"col-md-3 col-6",children:Object(a.jsx)("div",{class:"products-box",children:Object(a.jsx)("img",{alt:"",src:"img/pro3.jpg",class:"img-fluid rounded"})})}),Object(a.jsx)("div",{class:"col-md-3 col-6",children:Object(a.jsx)("div",{class:"products-box",children:Object(a.jsx)("img",{alt:"",src:"img/pro4.jpg",class:"img-fluid rounded"})})})]})})})})},c=t(8),m=t(49),d=t(15),b=t(79),x=t.n(b),f=t(83),p=t(25),h=t(18),g=t(142),u=function(){var n=Object(f.a)(p.c.collection("restaurants")),e=Object(d.a)(n,3),t=e[0],i=(e[1],e[2],Object(h.b)()),l=Object(h.c)(g.b);console.log(l.restaurants);var r=[];return Object(o.useEffect)((function(){t&&t.docs.map((function(n){var e=n.id,t=n.data();r=[].concat(Object(m.a)(r),[Object(c.a)({restoId:e},t)])})),i(Object(g.c)({allRestos:r}))}),[t]),Object(a.jsxs)("section",{className:"bg-light-green white-curve-before curve-before-0 white-curve-after curve-after-40 section-solid",children:[Object(a.jsx)("div",{className:"overflow-back bg-vegetables-pattern opacity-10"}),Object(a.jsx)("div",{className:"full-block"}),Object(a.jsxs)("div",{className:"section-head container left",children:[Object(a.jsx)("div",{className:"section-icon",children:Object(a.jsx)("span",{className:"svg-fill-dark-lime-green svg-content","data-svg":"assets/images/svg/title-kiwi.svg"})}),Object(a.jsxs)("div",{className:"section-head-content",children:[Object(a.jsx)("h2",{className:"section-title",children:"Popular Restaurants"}),Object(a.jsx)("p",{className:"section-text",children:"All the best items for You"})]})]}),Object(a.jsx)("div",{className:"container",style:{marginTop:"3%"},children:Object(a.jsx)("div",{className:x.a.mainrow,children:Object(a.jsx)("div",{className:"",children:Object(a.jsx)("div",{className:x.a.row,children:l.restaurants&&l.restaurants.map((function(n){return Object(a.jsx)("div",{className:"col-md-4 col-sm-6 mb-4 pb-2",children:Object(a.jsx)("a",{href:"/resto-order?restoId=".concat(n.restoId),children:Object(a.jsxs)("div",{className:"\r list-card\r bg-white\r rounded\r overflow-hidden\r position-relative\r shadow-sm\r ",children:[Object(a.jsxs)("div",{className:"list-card-image",children:[Object(a.jsx)("div",{className:"star position-absolute",style:{right:"8px",bottom:"8px"},children:Object(a.jsxs)("span",{className:"badge badge-success",children:[Object(a.jsx)("i",{className:"icofont-star"})," 3.1 (300+)"]})}),Object(a.jsx)("div",{className:"favourite-heart text-danger position-absolute",children:Object(a.jsx)("a",{href:"/resto-order?restoId=".concat(n.restoId)})}),Object(a.jsx)("a",{href:"/resto-order?restoId=".concat(n.restoId),children:Object(a.jsx)("img",{src:"/img/list/1.png",className:"img-fluid item-img",alt:""})})]}),Object(a.jsxs)("div",{className:"p-3 position-relative",style:{background:"#292830"},children:[Object(a.jsxs)("div",{className:"list-card-body",children:[Object(a.jsx)("h6",{className:"mb-1",children:Object(a.jsx)("a",{href:"/resto-order?restoId=".concat(n.restoId),className:x.a.title,children:n.name})}),Object(a.jsx)("p",{className:"text-gray mb-3",style:{color:"#747d88"},children:n.specialities}),Object(a.jsxs)("p",{className:"text-gray mb-3 time",children:[Object(a.jsxs)("span",{className:"\r bg-light\r text-dark\r rounded-sm\r pl-2\r pb-1\r pt-1\r pr-2\r ",style:{backgroundColor:"#f8f9fa"},children:[Object(a.jsx)("i",{className:"icofont-wall-clock"})," 20\u201325 min"]}),Object(a.jsxs)("span",{className:"float-right ",style:{color:"#fff"},children:["Rs. ",n.average]})]})]}),Object(a.jsxs)("div",{className:"list-card-badge",children:[Object(a.jsx)("span",{className:"badge badge-success"}),Object(a.jsx)("small",{style:{color:"#fff"}})]})]})]})})},n.name)}))})})})}),Object(a.jsx)("div",{className:"section-footer",children:Object(a.jsx)("a",{className:"btn-theme-white-bordered btn",href:"/food/restaurants",children:"View all"})})]})};e.default=function(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)(l.a,{children:[Object(a.jsx)("style",{children:'\n          :root {\n            --blue: #007bff;\n            --indigo: #6610f2;\n            --purple: #6f42c1;\n            --pink: #e83e8c;\n            --red: #dc3545;\n            --orange: #fd7e14;\n            --yellow: #ffc107;\n            --green: #28a745;\n            --teal: #20c997;\n            --cyan: #17a2b8;\n            --white: #fff;\n            --gray: #6c757d;\n            --gray-dark: #343a40;\n            --primary: #007bff;\n            --secondary: #6c757d;\n            --success: #28a745;\n            --info: #17a2b8;\n            --warning: #ffc107;\n            --danger: #dc3545;\n            --light: #f8f9fa;\n            --dark: #343a40;\n            --breakpoint-xs: 0;\n            --breakpoint-sm: 576px;\n            --breakpoint-md: 768px;\n            --breakpoint-lg: 992px;\n            --breakpoint-xl: 1200px;\n            --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n            --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n        }\n        \n        *, ::after, ::before {\n            box-sizing: border-box;\n        }\n        \n        html {\n            font-family: sans-serif;\n            line-height: 1.15;\n            -webkit-text-size-adjust: 100%;\n            -webkit-tap-highlight-color: transparent;\n        }\n        \n        article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n            display: block;\n        }\n        \n        body {\n            margin: 0;\n            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n            font-size: 1rem;\n            font-weight: 400;\n            line-height: 1.5;\n            color: #212529;\n            text-align: left;\n            background-color: #fff;\n        }\n\n        \nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\ndl, ol, ul {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nsmall {\n  font-size: 80%;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\n\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nbutton {\n  border-radius: 0;\n}\n\n\nbutton, input, optgroup, select, textarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton, input {\n  overflow: visible;\n}\n\nbutton, select {\n  text-transform: none;\n}\n\n[type="button"], [type="reset"], [type="submit"], button {\n  -webkit-appearance: button;\n}\n\n[type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled), button:not(:disabled) {\n  cursor: pointer;\n}\n\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\n.h1, h1 {\n  font-size: 2.5rem;\n}\n\n.h2, h2 {\n  font-size: 2rem;\n}\n\n.h4, h4 {\n  font-size: 1.5rem;\n}\n\n.h5, h5 {\n  font-size: 1.25rem;\n}\n\n.h6, h6 {\n  font-size: 1rem;\n}\n\n.small, small {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container {\n      max-width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n      max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n      max-width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n      max-width: 1140px;\n  }\n}\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.col-6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n@media (min-width: 576px) {\n  .col-sm-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n\n.col-md-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n}\n\n.col-md-6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-md-12 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n\n.order-md-last {\n  -ms-flex-order: 13;\n  order: 13;\n}\n}\n\n@media (min-width: 992px) {\n  .col-lg-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n}\n\n.col-lg-6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.order-lg-first {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.order-lg-last {\n  -ms-flex-order: 13;\n  order: 13;\n}\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n\n.nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\n\n.bg-white {\n  background-color: #fff !important;\n}\n\n.rounded-sm {\n  border-radius: 0.2rem !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.justify-content-center {\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n}\n\n@media (min-width: 992px) {\n  .align-items-lg-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n }\n}\n \n .float-right {\n  float: right !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.mt-0, .my-0 {\n  margin-top: 0 !important;\n}\n\n.mb-1, .my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-3, .my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.mb-4, .my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.mt-5, .my-5 {\n  margin-top: 3rem !important;\n}\n\n.pt-1, .py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pb-1, .py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pr-2, .px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2, .py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2, .px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.mt-auto, .my-auto {\n  margin-top: auto !important;\n}\n\n.mb-auto, .my-auto {\n  margin-bottom: auto !important;\n}\n\n@media (min-width: 992px) {\n  .mr-lg-5, .mx-lg-5 {\n    margin-right: 3rem !important;\n }\n  \n .m-lg-auto {\n  margin: auto !important;\n}\n\n.mt-lg-auto, .my-lg-auto {\n  margin-top: auto !important;\n}\n\n.mb-lg-auto, .my-lg-auto {\n  margin-bottom: auto !important;\n}\n\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n}\n}\n\n.text-danger {\n  color: #dc3545 !important;\n}\n\n\n.text-dark {\n  color: #343a40 !important;\n}\n'}),Object(a.jsx)("style",{children:'\n        body {\n          font-family: "sans-serif";\n          color: #747d88;\n          background-color: #1d1c22;\n          font-size: 1rem;\n          line-height: 1.7;\n          position: relative;\n      }\n      \n      .container, .container-fluid {\n          padding-left: 1rem;\n          padding-right: 1rem;\n      }\n      \n      .flex-0 {\n          -webkit-box-flex: 1;\n          -moz-box-flex: 1;\n          -o-box-flex: 1;\n          box-flex: 1;\n          -webkit-flex: 0 0 auto !important;\n          -ms-flex: 0 0 auto !important;\n          flex: 0 0 auto !important;\n      }\n      \n      .row {\n          margin-left: -1rem;\n          margin-right: -1rem;\n      }\n      \n      .col, .col-auto, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-sm, .col-sm-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md, .col-md-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg, .col-lg-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-xl, .col-xl-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12 {\n          padding-left: 1rem;\n          padding-right: 1rem;\n      }\n      .grid {\n        margin-top: -2rem;\n    }\n    \n    .grid > .col, .grid > [class*="col-"] {\n        margin-top: 2rem;\n    }\n    \n    p, ul {\n      margin-bottom: 0;\n  }\n\n  \nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, .display-1, .display-2, .display-3, .display-4, .display-res-1, .display-res-2, .display-res-3, .display-res-4 {\n  font-weight: 700;\n  line-height: 1.125;\n  margin-bottom: 0;\n}\n\nh1, .h1 {\n  font-size: 3rem;\n}\n\nh2, .h2 {\n  font-size: 2.25rem;\n  line-height: 1.25;\n}\n\nh4, .h4 {\n  font-size: 1.5rem;\n  line-height: 1.4;\n}\n\nh5, .h5 {\n  font-size: 1.125rem;\n  line-height: 1.4;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n  line-height: 1.4;\n}\n\n\na {\n  color: #ffb524;\n  -webkit-transition: all 0.2s linear 0s;\n  -moz-transition: all 0.2s linear 0s;\n  -o-transition: all 0.2s linear 0s;\n  -ms-transition: all 0.2s linear 0s;\n  transition: all 0.2s linear 0s;\n  outline: 0 none;\n}\n\na:hover {\n  text-decoration: none;\n  opacity: 0.7;\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";\n  filter: alpha(opacity=70);\n  color: #ffb524;\n}\n\n.text-bittersweet {\n  color: #ff736a !important;\n}\n\n\n.bg-light-green {\n  background-color: #98c869 !important;\n}\n\n\n.bg-vegetables-pattern {\n  background-image: url("/assets/images/parts/vegetables-pattern.png");\n  background-position: 0 0;\n  background-repeat: repeat;\n}\n\n.bg-vegetables-pattern-white {\n  background-image: url("/assets/images/parts/vegetables-pattern-white.png");\n  background-position: 0 0;\n  background-repeat: repeat;\n}\n\n.opacity-3 {\n  opacity: 0.03 !important;\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=3)" !important;\n  filter: alpha(opacity=3) !important;\n}\n\n.opacity-10 {\n  opacity: 0.1 !important;\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)" !important;\n  filter: alpha(opacity=10) !important;\n}\n\n.z-index-2 {\n  z-index: 2;\n}\n\n.z-index-4 {\n  z-index: 4;\n}\n\n.white-curve-before, .white-curve-after {\n  position: relative;\n}\n\n.white-curve-before:before, .white-curve-after:after {\n  content: "";\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 55px;\n  background-image: url("/assets/images/parts/black-curve.png");\n  background-repeat: repeat-x;\n}\n\n.white-curve-after:after {\n  bottom: 0;\n  background-position: 70% 0;\n}\n\n.white-curve-before:before {\n  top: 0;\n  background-position: 70% 100%;\n}\n\n.curve-before-0:before {\n  background-position: 0% 100%;\n}\n\n.curve-after-40:after {\n  background-position: 40% 0;\n}\n\n.curve-before-80:before {\n  background-position: 80% 100%;\n}\n\n\n.logo-icon {\n  font-size: 0.65em;\n  padding-bottom: 0.05em;\n  display: block;\n}\n\n.logo-text {\n  font-size: 0.275em;\n  display: block;\n}\n\n.logo-element-line {\n  position: relative;\n  font-weight: 500;\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1;\n  height: 1em;\n  font-size: 1em;\n  color: inherit;\n  text-align: center;\n  z-index: 1;\n}\n\n.logo-element-line .logo-icon, .logo-element-line .logo-text {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\n.logo-element-line .logo-icon {\n  font-size: 1em;\n  padding-bottom: 0;\n}\n\n.logo-element-line .logo-text {\n  font-size: 0.525em;\n  line-height: 0.7;\n  padding-left: 0.5em;\n}\n\n.svg-content {\n  display: inline-block;\n  line-height: 1;\n  vertical-align: top;\n}\n\n.section-solid {\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n}\n\n\n\n.section-solid, .section-solid-sm {\n  position: relative;\n  z-index: 1;\n}\n\n.section-head:not(.container), .section-footer:not(.container) {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 540px;\n  padding: 0 1rem;\n}\n\n.section-head, .section-footer {\n  text-align: center;\n}\n\n.section-head, .section-subhead {\n  margin-bottom: 4rem;\n}\n\n\n.section-head .section-icon {\n  font-size: 2.75rem;\n}\n\n\n\n@media (min-width: 768px) {\n  .section-head:not(.container), .section-footer:not(.container) {\n      max-width: 640px;\n  }\n}\n\n.section-footer {\n  margin-top: 4rem;\n}\n\n.section-footer .btn:last-child:first-child {\n  min-width: 9rem;\n}\n\n\n.section-title {\n  color: #fff;\n  // font-family: "Rubik";\n}\n\n.section-text {\n  color: #fff;\n  margin-top: 0;\n  font-size: 1.125rem;\n  font-weight: 500;\n}\n\n\n.section-back-text {\n  font-size: 20vw;\n  max-width: 100vw;\n  overflow: hidden;\n  position: absolute;\n  right: 50%;\n  bottom: 50%;\n  color: #fff;\n  -webkit-transform: translate(50%, 50%);\n  -moz-transform: translate(50%, 50%);\n  -o-transform: translate(50%, 50%);\n  -ms-transform: translate(50%, 50%);\n  transform: translate(50%, 50%);\n  opacity: 0.1;\n  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";\n  filter: alpha(opacity=10);\n  font-weight: 500;\n  // font-family: "Rubik";\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n\n.section-white-text {\n  color: #fff !important;\n}\n\n.section-white-text .section-title, .section-white-text .section-text, .section-white-text .navbar-brand, .section-white-text .entity .entity-title, .section-white-text .entity .entity-subtitle, .section-white-text .entity-simple .entity-title, .section-white-text .entity-simple .entity-subtitle, .section-white-text.entity-banner .entity-title, .section-white-text.entity-banner .entity-subtitle {\n  color: #fff;\n}\n\n.section-head {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-lines: multiple;\n  -moz-box-lines: multiple;\n  -o-box-lines: multiple;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -o-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.section-head .section-icon {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  margin: 0 auto 1rem;\n  line-height: 1;\n}\n\n.section-head .section-head-content {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 0 1 auto;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  margin: auto 0;\n}\n\n\n@media (min-width: 768px) {\n  .section-head.left {\n      -webkit-box-orient: horizontal;\n      -moz-box-orient: horizontal;\n      -o-box-orient: horizontal;\n      -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n      flex-direction: row;\n      -webkit-box-pack: start;\n      -moz-box-pack: start;\n      -o-box-pack: start;\n      -ms-flex-pack: start;\n      -webkit-justify-content: flex-start;\n      justify-content: flex-start;\n      text-align: left;\n  }\n\n  .section-head.left .section-icon {\n      margin: auto 1.5rem auto 0;\n  } \n}\n\n\n.overflow-back, .back-block, .full-block {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.overflow-back, .back-block {\n  z-index: -1;\n  pointer-events: none;\n  cursor: default;\n}\n\n.overflow-back {\n  overflow: hidden;\n}\n\n\n.btn {\n  font-size: 0.875rem;\n  height: 2.875rem;\n  line-height: 1.875rem;\n  padding: 0.5rem 1.5rem;\n  // font-family: "Poppins";\n  font-weight: 600;\n  border-radius: 1.4375rem;\n  text-shadow: none;\n  -webkit-transition: all 0.2s linear 0s;\n  -moz-transition: all 0.2s linear 0s;\n  -o-transition: all 0.2s linear 0s;\n  -ms-transition: all 0.2s linear 0s;\n  transition: all 0.2s linear 0s;\n  border: 0 none !important;\n  opacity: 1 !important;\n  -ms-filter: none !important;\n  filter: none !important;\n}\n\n\n.btn-theme-white-bordered {\n  background-color: transparent;\n  color: #fff;\n  position: relative;\n  -webkit-box-shadow: 0 0 0 0 #fff;\n  box-shadow: 0 0 0 0 #fff;\n}\n\n.btn-theme-white-bordered:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 2px solid #fff;\n  border-radius: 1.4375rem;\n}\n\n.btn-wide {\n  min-width: 9rem;\n}\n\n\nheader {\n  z-index: 30;\n  position: relative;\n  // font-family: "Rubik";\n}\n\n.after-head {\n  position: relative;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n}\n\n.navbar-brand {\n  opacity: 1 !important;\n  -ms-filter: none !important;\n  filter: none !important;\n  color: #ffb524;\n}\n\n.header-horizontal {\n  width: 100%;\n  color: #fff;\n}\n\n.header-horizontal + .after-head .content-offs {\n  padding-top: 5rem;\n}\n\n\n.header-over {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  background-color: transparent;\n}\n\n\n.header-view-side + .after-head .content-offs {\n  padding-top: 8.6rem;\n}\n\n\n@media (min-width: 992px) {\n  .header-view-side + .after-head .content-offs {\n    padding-top: 13rem;\n  }\n}\n\n\n.page-footer {\n  background-color: #333;\n}\n\n.footer-navbar .nav {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.footer-navbar .nav-link {\n  padding: 0;\n}\n\n.footer-navbar .footer-title {\n  font-weight: 600;\n  // font-family: "Rubik";\n}\n\n.footer-navbar .navbar-brand {\n  line-height: 1;\n  display: block;\n  opacity: 1 !important;\n  -ms-filter: none !important;\n  filter: none !important;\n}\n\n.footer-view-links {\n  padding: 8rem 0 0;\n  position: relative;\n  text-align: center;\n  z-index: 1;\n}\n\n.footer-view-links .footer-copy {\n  padding: 4rem 0 2rem;\n  text-align: center;\n}\n\n.footer-view-links .navbar-brand, .footer-view-links .footer-title {\n  margin-bottom: 1rem;\n}\n\n.footer-view-links .navbar-brand {\n  padding: 0 0 0.125em;\n  margin-top: -1.25rem;\n  font-size: 2.5rem;\n}\n\n@media (min-width: 768px) {\n  .footer-view-links {\n      text-align: left;\n  }\n}\n\n.slick-slide {\n  outline: 0 none;\n}\n\n.slick-top-fix, .slick-top-full, .slick-top-thumb {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.slick-top-fix {\n  min-height: 45rem;\n}\n\n.slick-view-banner {\n  width: 100%;\n  position: relative;\n}\n\n.slick-view-banner, .slick-view-banner .slick-slides, .slick-view-banner .slick-list {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1 0 auto;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  max-width: 100%;\n}\n\n.slick-view-banner .slick-slides {\n  position: relative;\n  z-index: 1;\n}\n\n.slick-view-banner .slick-slide {\n  height: auto;\n  float: none;\n}\n\n.entity-title, .entity-subtitle, .entity-value {\n  margin-bottom: 1rem;\n  // font-family: "Rubik";\n}\n\n.entity-subtext, .entity-text {\n  margin-bottom: 1.5rem;\n}\n\n.entity-title {\n  color: #fff;\n}\n\n.entity-subtitle {\n  color: #ffb524;\n}\n\n.entity-content {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.entity-content *:last-child {\n  margin-bottom: 0;\n}\n\n\n.entity-banner {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -o-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.entity-banner .entity-content {\n  padding: 0;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1 0 auto;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n\n.entity-banner .entity-content.container {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.entity-banner .entity-title, .entity-banner .entity-subtitle {\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  // font-family: "Rubik";\n}\n\n.entity-banner .entity-title + .entity-subtitle {\n  margin-top: -1rem;\n} '})]}),Object(a.jsx)(r,{}),Object(a.jsx)(s,{}),Object(a.jsx)(u,{})]})}}}]);
//# sourceMappingURL=8.89f5f450.chunk.js.map