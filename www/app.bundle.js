webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(1);var o=n(4),a=n(8),u=r(a),i=n(38),l=r(i),c=n(185),f=r(c);n(191),n(198);var s=document.getElementById("app");l["default"].render(u["default"].createElement(o.AppContainer,null,u["default"].createElement(f["default"],null)),s),function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(s,"rootElement","/home/amin295/helloworld/src/main.jsx")}()},1:function(e,t,n){e.exports=n(2)},2:function(e,t,n){"use strict";e.exports=n(3)},3:function(e,t){"use strict"},4:function(e,t,n){e.exports=n(5)},5:function(e,t,n){"use strict";var r=n(6);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=r},6:function(e,t,n){"use strict";e.exports=n(7)},7:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8),l=i.Component,c=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return this.props.component?i.createElement(this.props.component,this.props.prop):i.Children.only(this.props.children)}}]),t}(l);e.exports=c},185:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),c=r(l),f=n(38),s=(r(f),n(186)),p=n(189),d=r(p),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"renderPage",value:function(e,t){var n=e.props||{};return n.navigator=t,c["default"].createElement(e.component,n)}},{key:"render",value:function(){return c["default"].createElement(s.Navigator,{initialRoute:{component:d["default"]},renderPage:this.renderPage})}}]),t}(c["default"].Component),_=h;t["default"]=_,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"App","/home/amin295/helloworld/src/App.jsx"),__REACT_HOT_LOADER__.register(_,"default","/home/amin295/helloworld/src/App.jsx"))}()},189:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),c=r(l),f=n(38),s=(r(f),n(186)),p=n(190),d=r(p),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"pushPage",value:function(){this.props.navigator.pushPage({component:d["default"]})}},{key:"renderToolbar",value:function(){return c["default"].createElement(s.Toolbar,null,c["default"].createElement("div",{className:"center"},"Navigator"))}},{key:"render",value:function(){return c["default"].createElement(s.Page,{renderToolbar:this.renderToolbar},c["default"].createElement("p",{style:{textAlign:"center"}},c["default"].createElement(s.Button,{onClick:this.pushPage.bind(this)},"Push page")))}}]),t}(c["default"].Component),_=h;t["default"]=_,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(h,"MainPage","/home/amin295/helloworld/src/MainPage.jsx"),__REACT_HOT_LOADER__.register(_,"default","/home/amin295/helloworld/src/MainPage.jsx"))}()},190:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),c=r(l),f=n(38),s=(r(f),n(186)),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"pushPage",value:function(){this.props.navigator.pushPage({component:t})}},{key:"popPage",value:function(){this.props.navigator.popPage()}},{key:"renderToolbar",value:function(){return c["default"].createElement(s.Toolbar,null,c["default"].createElement("div",{className:"left"},c["default"].createElement(s.BackButton,null,"Back")),c["default"].createElement("div",{className:"center"},"Another page"))}},{key:"render",value:function(){return c["default"].createElement(s.Page,{renderToolbar:this.renderToolbar},c["default"].createElement("p",{style:{textAlign:"center"}},c["default"].createElement(s.Button,{onClick:this.pushPage.bind(this)},"Push page"),c["default"].createElement(s.Button,{onClick:this.popPage.bind(this)},"Pop page")))}}]),t}(c["default"].Component),d=p;t["default"]=d,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"SecondPage","/home/amin295/helloworld/src/SecondPage.jsx"),__REACT_HOT_LOADER__.register(d,"default","/home/amin295/helloworld/src/SecondPage.jsx"))}()},191:function(e,t){},198:191});