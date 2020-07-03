(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{276:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("Before "),s("code",[e._v("v4.3.0")]),e._v(", this project was built based on "),s("code",[e._v("node-sass")]),e._v(", but "),s("code",[e._v("node-sass")]),e._v(" low-level dependencies "),s("a",{attrs:{href:"https://github.com/sass/libsass",target:"_blank",rel:"noopener noreferrer"}},[e._v("libsass"),s("OutboundLink")],1),e._v(", resulting in many users installing Especially difficult for Windows users, it forces users to install "),s("code",[e._v("python2")]),e._v(" and "),s("code",[e._v("Visual Studio")]),e._v(" in the "),s("code",[e._v("windows")]),e._v(" environment to compile successfully.")]),e._v(" "),s("p",[e._v("So in order to solve this problem, this project was modified to build "),s("code",[e._v("dart-sass")]),e._v(" in "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/pull/3040",target:"_blank",rel:"noopener noreferrer"}},[e._v("v4.3.0"),s("OutboundLink")],1),e._v(", it can guarantee performance Under the premise of greatly simplifying the user's installation costs. Through this "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),s("OutboundLink")],1),e._v(" the relevant comments below can be known, install` Node-sass is such a troublesome thing.")]),e._v(" "),s("p",[e._v("There is a more important reason for choosing to use dart-sass here. Officially, "),s("code",[e._v("sass")]),e._v(" has taken dart-sass as the main development direction in the future. Any new features will be supported first, and it It has been running steadily in the community for a long time, and there are basically no pits. The main reason why dart-sass is easy to install is because it will be compiled into pure js, so that it can be used directly in the node environment. Although its running speed will be slower than that based on "),s("a",{attrs:{href:"https://github.com/sass/libsass",target:"_blank",rel:"noopener noreferrer"}},[e._v("libsass"),s("OutboundLink")],1),e._v(", the difference in these speeds is almost negligible. The entire community is now embracing "),s("code",[e._v("dart-sass")]),e._v(", and we have no reason to refuse! And it does greatly simplify the user's installation costs.")]),e._v(" "),s("p",[e._v("Currently, "),s("code",[e._v("vue-cli")]),e._v(" will also prefer to use "),s("code",[e._v("dart-scss")]),e._v(" by default when selecting "),s("code",[e._v("sass")]),e._v(" preprocessing, related: "),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/pull/3321",target:"_blank",rel:"noopener noreferrer"}},[e._v("pr"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Related instructions can be found in this article: "),s("a",{attrs:{href:"https://sass-lang.com/blog/announcing-dart-sass",target:"_blank",rel:"noopener noreferrer"}},[e._v("Announcing Dart Sass"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Specific "),s("code",[e._v("dart-sass")]),e._v(" performance evaluation can be seen: "),s("a",{attrs:{href:"https://github.com/sass/dart-sass/blob/master/perf.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Perf Report"),s("OutboundLink")],1)]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("The upgrade is also very simple, requiring only two steps")]),e._v(" "),e._m(2),s("p",[e._v("The upgrade can also be seen in detail: "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/pull/3040",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull Request"),s("OutboundLink")],1),e._v(" is simple and only requires two steps")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("One thing to note after replacing "),s("code",[e._v("node-sass")]),e._v(" is that it no longer supports the "),s("code",[e._v("/deep/")]),e._v(" writing style of "),s("code",[e._v("sass")]),e._v(" before, and it needs to be changed to the writing style of "),s("code",[e._v("::v-deep")]),e._v(". Related: "),s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/3399",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Concrete demo:")]),e._v(" "),e._m(4),s("p",[e._v("Regardless of whether you use "),s("code",[e._v("dart-sass")]),e._v(" or not, I suggest you use "),s("code",[e._v("::v-deep")]),e._v(" notation, which is not only compatible with the css "),s("code",[e._v(">>>")]),e._v(" notation, but also compatible with sass "),s("code",[e._v("/deep/")]),e._v(" . And it's the way of writing specified in "),s("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/scoped-styles-changes/active-rfcs/0023-scoped-styles-changes.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 3.0 RFC"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("More: "),s("a",{attrs:{href:"https://vue-loader.vuejs.org/guide/scoped-css.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("scope css writing"),s("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"node-sass-to-dart-sass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-sass-to-dart-sass","aria-hidden":"true"}},[this._v("#")]),this._v(" Node Sass to Dart Sass")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"upgrade-plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-plan","aria-hidden":"true"}},[this._v("#")]),this._v(" Upgrade plan")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" uninstall node-sass\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" sass -S -D\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"not-compatible"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#not-compatible","aria-hidden":"true"}},[this._v("#")]),this._v(" Not compatible")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".a")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v("/deep/")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".b")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* change into */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".a")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v("::v-deep")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".b")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("And the original writing of "),t("code",[this._v("/deep/")]),this._v(" itself was abandoned by Chrome. You can often find a warning in the console that Chrome reminds you not to use "),t("code",[this._v("/deep/")]),this._v(".")])}],!1,null,null,null);t.default=a.exports}}]);