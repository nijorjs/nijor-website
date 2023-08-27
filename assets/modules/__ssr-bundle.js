(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // assets/modules/.nijor-ea49d40b.js
  var nijor_ea49d40b_exports = {};
  __export(nijor_ea49d40b_exports, {
    default: () => s
  });
  function i(n9, i6) {
    n9.querySelectorAll(".nav-link-docs").forEach((n10) => {
      n10.style.color = "white", n10.getAttribute("href") === i6 && (n10.style.color = "#07b0ff");
    });
  }
  var e, o2, c, s;
  var init_nijor_ea49d40b = __esm({
    "assets/modules/.nijor-ea49d40b.js"() {
      init_app();
      window.nijorfunc._l6ChangeRoute = i, window.nijorfunc._l6ChangeRoute = i;
      e = new window.nijor.component(async function() {
        return '<ul n-scope="e6LPewuiHRkl5" onnavigate="window.nijorfunc._l6ChangeRoute(this)" onroute="window.nijorfunc._l6ChangeRoute(this,$data)">\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs">Introduction</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/installation">Installation</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/nijor-cli">Nijor-CLI</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/structure">Project Structure</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/components">Components</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/routing">Routing</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/custom-events">Custom Events</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/functional-attributes">Functional Attributes</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/reactivity">Reactivity</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/code-splitting">Code Splitting</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/dark-mode">Dark Mode</a></li>\n        <li n-scope="e6LPewuiHRkl5"><a class="nav-link-docs" n-scope="e6LPewuiHRkl5" onclick="return window.nijor.redirect(this.href)" href="/docs/examples">Examples</a></li>\n    </ul>\n';
      }, async function() {
      });
      o2 = new window.nijor.component(async function() {
        return '<div class="main" id="docs-sidenav" n-scope="yZCrVjtOqhD">\n        <links6v n-scope="yZCrVjtOqhD"></links6v>\n    </div>\n';
      }, async function() {
        e.init("links6v"), await e.run();
      });
      c = new window.nijor.component(async function() {
        return `<div class="main" id="docs-sidenav-mobile" n-scope="sXfZkbTJrZ6ZUy">
        <a class="branding" n-scope="sXfZkbTJrZ6ZUy" onclick="return window.nijor.redirect(this.href)" href="/"><img src="${o}" n-scope="sXfZkbTJrZ6ZUy"> Nijor</a>
        <linksxou n-scope="sXfZkbTJrZ6ZUy"></linksxou>
    </div>
`;
      }, async function() {
        e.init("linksxou"), await e.run();
      });
      s = new window.nijor.component(async function() {
        return '<div class="container" n-scope="eurk2RdjkI">\n        <sidenavc6cwn n-scope="eurk2RdjkI"></sidenavc6cwn>\n        <mobilenavc6cwn n-scope="eurk2RdjkI"></mobilenavc6cwn>\n        <div class="docs-div" id="routes-slot-/docs" n-scope="eurk2RdjkI"></div>\n    </div>\n';
      }, async function() {
        o2.init("sidenavc6cwn"), await o2.run(), c.init("mobilenavc6cwn"), await c.run();
      });
    }
  });

  // assets/modules/.nijor-d86d842a.js
  var nijor_d86d842a_exports = {};
  __export(nijor_d86d842a_exports, {
    default: () => e2
  });
  function n(n9, o6) {
    n9.querySelectorAll(".nav-link-faq").forEach((n10) => {
      n10.style.color = "white", n10.getAttribute("href") === o6 && (n10.style.color = "#07b0ff");
    });
  }
  var o3, i2, e2;
  var init_nijor_d86d842a = __esm({
    "assets/modules/.nijor-d86d842a.js"() {
      window.nijorfunc._0jq67ChangeRoute = n, window.nijorfunc._0jq67ChangeRoute = n;
      o3 = new window.nijor.component(async function() {
        return '<ul n-scope="TUbajGCx9wJxR8F9IL" onnavigate="window.nijorfunc._0jq67ChangeRoute(this)" onroute="window.nijorfunc._0jq67ChangeRoute(this,$data)">\n        <li n-scope="TUbajGCx9wJxR8F9IL"><a class="nav-link-faq" n-scope="TUbajGCx9wJxR8F9IL" onclick="return window.nijor.redirect(this.href)" href="/faq">A Note from the Creator</a></li>\n        <li n-scope="TUbajGCx9wJxR8F9IL"><a class="nav-link-faq" n-scope="TUbajGCx9wJxR8F9IL" onclick="return window.nijor.redirect(this.href)" href="/faq/How-Nijor-Works">How Nijor Works ?</a></li>\n        <li n-scope="TUbajGCx9wJxR8F9IL"><a class="nav-link-faq" n-scope="TUbajGCx9wJxR8F9IL" onclick="return window.nijor.redirect(this.href)" href="/faq/virtual-dom">Does Nijor have a Virtial DOM ?</a></li>\n        <li n-scope="TUbajGCx9wJxR8F9IL"><a class="nav-link-faq" n-scope="TUbajGCx9wJxR8F9IL" onclick="return window.nijor.redirect(this.href)" href="/faq/How-Scoped-CSS-Works">How Scoped CSS Work ?</a></li>        \n    </ul>\n';
      }, async function() {
      });
      i2 = new window.nijor.component(async function() {
        return '<div class="main" id="blog-sidenav" n-scope="h98JYZc">\n        <linkskgzzm n-scope="h98JYZc"></linkskgzzm>\n    </div>\n';
      }, async function() {
        o3.init("linkskgzzm"), await o3.run();
      });
      e2 = new window.nijor.component(async function() {
        return '<div class="container" n-scope="JeMk1x22joF">\n        <sidenavxqq n-scope="JeMk1x22joF"></sidenavxqq>\n        <div class="blog-div" id="routes-slot-/faq" n-scope="JeMk1x22joF"></div>\n    </div>\n';
      }, async function() {
        i2.init("sidenavxqq"), await i2.run();
      });
    }
  });

  // assets/modules/404-eac5c69a.js
  var eac5c69a_exports = {};
  __export(eac5c69a_exports, {
    default: () => e3
  });
  var e3;
  var init_eac5c69a = __esm({
    "assets/modules/404-eac5c69a.js"() {
      e3 = new window.nijor.component(async function() {
        return '<div n-scope="iWTBPzIy1ue740IexwE">\n        <h1 n-scope="iWTBPzIy1ue740IexwE">404 Not found!</h1>\n        <p n-scope="iWTBPzIy1ue740IexwE">It seems as if the page you are looking for is under construction or not found. <br n-scope="iWTBPzIy1ue740IexwE">\n        Please go to the <a n-scope="iWTBPzIy1ue740IexwE" onclick="return window.nijor.redirect(this.href)" href="/">Home</a> page.\n        </p>\n    </div>\n';
      }, async function() {
      });
    }
  });

  // assets/modules/highlight-108c1935.js
  var n2, t;
  var init_highlight_108c1935 = __esm({
    "assets/modules/highlight-108c1935.js"() {
      n2 = new window.nijor.component(async function({ title: n9, _text_: t6 }) {
        return `<div class="section" n-scope="GQhej4Ftk6Rfkgr">
        <h1 n-scope="GQhej4Ftk6Rfkgr">${n9}</h1>
        <p n-scope="GQhej4Ftk6Rfkgr">${t6 || ""}</p>
        <div class="border" n-scope="GQhej4Ftk6Rfkgr"></div>
    </div>
`;
      }, async function({ title: n9, _text_: t6 }) {
      });
      window.nijorfunc._et5ssRoute = function(n9) {
        if ("nolink" != n9) {
          if (n9.startsWith("https://"))
            return void window.open(n9);
          window.nijor.redirect(n9), window.nijor.emitEvent("navigate");
        }
      };
      t = new window.nijor.component(async function({ _text_: n9, link: t6 }) {
        return `<span class="highlight-text" n-scope="QkfMryMQyH" onclick="window.nijorfunc._et5ssRoute('${t6 || "nolink"}')">${n9}</span>
`;
      }, async function({ _text_: n9, link: t6 }) {
      });
    }
  });

  // assets/modules/codeblock-86d6213a.js
  var codeblock_86d6213a_exports = {};
  __export(codeblock_86d6213a_exports, {
    default: () => n3
  });
  var n3;
  var init_codeblock_86d6213a = __esm({
    "assets/modules/codeblock-86d6213a.js"() {
      n3 = new window.nijor.component(async function({ _text_: n9, lang: e7, file: l }) {
        return `<pre n-scope="FSjoMwkzYMSy6FMKUA">        <code class="language-${e7 || "html"}" n-scope="FSjoMwkzYMSy6FMKUA">${function(n10) {
          return null == n10 ? "" : `File : ${n10} 
`;
        }(l)}${n9}</code>
    </pre>
`;
      }, async function({ _text_: n9, lang: e7, file: l }) {
        hljs.highlightAll();
      });
    }
  });

  // assets/modules/code-splitting-e305c76f.js
  var code_splitting_e305c76f_exports = {};
  __export(code_splitting_e305c76f_exports, {
    default: () => e4
  });
  var e4;
  var init_code_splitting_e305c76f = __esm({
    "assets/modules/code-splitting-e305c76f.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      e4 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="iomqzRZuEbN8JlV4"><code4ttow n-scope="iomqzRZuEbN8JlV4"></code4ttow></div>
    <section4ttow title="Code Splitting" n-scope="iomqzRZuEbN8JlV4">
        The Nijor compiler automatically compiles and packages all <highlight4ttow n-scope="iomqzRZuEbN8JlV4">*.nijor page</highlight4ttow> files into multiple Javascript files. But compiles the <highlight4ttow n-scope="iomqzRZuEbN8JlV4">*.nijor component</highlight4ttow> files with the <highlight4ttow n-scope="iomqzRZuEbN8JlV4">*.nijor page</highlight4ttow> itself.
        Although this is not an issue for most projects, it can cause problems with increased loading time, resulting in a bad user experience.
        To overcome this problem, Nijor includes a built-in feature called code-splitting.
        By code-splitting your application, you can selectively <highlight4ttow n-scope="iomqzRZuEbN8JlV4">lazy-load</highlight4ttow> only the components that are currently required by the user, which can greatly enhance your app's performance.
        This approach does not reduce the overall amount of code in your app, but it does prevent loading of unnecessary code and reduces the amount of code needed during the initial load. All the pages in your app are lazy-loaded and there's no way to change it !
    </section4ttow>
    <section4ttow title="Lazy-loading a component" n-scope="iomqzRZuEbN8JlV4">
        To lazy-load a component, just add the <highlight4ttow n-scope="iomqzRZuEbN8JlV4">lazy</highlight4ttow> attribute after it.
        <code4ttow n-scope="iomqzRZuEbN8JlV4">
            &lt;card1 n:imported="components/card.nijor"/&gt; &lt;!--Without Lazy Loading--&gt;
            &lt;card2 n:imported="components/card.nijor" lazy/&gt; &lt;!--With Lazy Loading--&gt;
        </code4ttow>
    </section4ttow>
`;
      }, async function() {
        n2.init("section4ttow"), await n2.run(), t.init("highlight4ttow"), await t.run(), n3.init("code4ttow"), await n3.run();
      });
    }
  });

  // assets/modules/components-adc165dd.js
  var components_adc165dd_exports = {};
  __export(components_adc165dd_exports, {
    default: () => o4
  });
  var o4;
  var init_components_adc165dd = __esm({
    "assets/modules/components-adc165dd.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      o4 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="hEbrgVMYAFBTrHF"><codec1xuz n-scope="hEbrgVMYAFBTrHF"></codec1xuz></div>
    <sectionc1xuz title="Components" n-scope="hEbrgVMYAFBTrHF">
        In Nijor projects, we don't write code in HTML files ; we write code in <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">*.nijor</highlightc1xuz> files instead. Each <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">*.nijor</highlightc1xuz> file is a component in a Nijor Project. <br n-scope="hEbrgVMYAFBTrHF">
        A Nijor Component is a capsule of HTML, CSS and Javascript code in a single file in which the HTML, CSS and JS are scoped which allows developers to name their CSS classes and Javascript functions anyway we like without worrying about messing up with the scopes of other components. <br n-scope="hEbrgVMYAFBTrHF">
        A Nijor Component can be used as a custom HTML tag (with custom attributes) by other Nijor Component. It can also be used as a Page for routing.
    </sectionc1xuz>
    <sectionc1xuz title="Structure of a Nijor Component" n-scope="hEbrgVMYAFBTrHF">
        <codec1xuz n-scope="hEbrgVMYAFBTrHF">
            &lt;template&gt;
                &lt;!-- Your HTML goes here --&gt;
            &lt;/template&gt;
            &lt;style&gt;
                /* Your CSS goes Here */
            &lt;/style&gt;
            &lt;script&gt;
                // Your JS goes here
            &lt;/script&gt;
        </codec1xuz>
        There are 3 types of script tag in a Nijor component. It is not neccessary to use all of them in a single project.
        <codec1xuz n-scope="hEbrgVMYAFBTrHF">
            &lt;template specs={name}&gt;
                &lt;p&gt;Hello {name} !&lt;/p&gt;
            &lt;/template&gt;
            &lt;script&gt;
                // Code will get executed before the component Renders. It's code is in the global scope
                // console.log(name); // Will result in error as this code gets executed before the component even renders.
                // Variables defined here can be read inside the template tag using {variable} syntax
                // Used for defining functions which get executed on events like on:click, on:customevent, onclick, etc
            &lt;/script&gt;
            &lt;script mid&gt;
                /* Very similar to the script tag above but with a slight difference; this script is scoped within the component itself.
                console.log(name); // Won't result in error as this code gets executed after the component renders.
                // Variables defined here can be read inside the template tag using {variable} syntax
            &lt;/script&gt;
            &lt;script defer&gt;
                // Code will get executed after the component Renders.
                console.log(name); // Won't result in error as this code gets executed after the component renders.
                // Variables defined here can't be read inside the template tag using {variable} syntax
            &lt;/script&gt;
        </codec1xuz>
    </sectionc1xuz>
    <sectionc1xuz title="Specs Attribute" n-scope="hEbrgVMYAFBTrHF">
        <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">specs</highlightc1xuz> is a special attribute available in the <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">template</highlightc1xuz> tag . The specs attribute contains an object of all the custom attributes passed to the component from another component. <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">_text_</highlightc1xuz> is a property in the specs object which returns the <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">innerHTML</highlightc1xuz> of the component when imported by another component.
        <codec1xuz n-scope="hEbrgVMYAFBTrHF">
            &lt;template specs={attr1,attr2}&gt;
                Attribute1 : {attr1}&lt;br&gt;
                Attribute2 : {attr2}&lt;br&gt;
            &lt;/template&gt;
            &lt;script&gt;
                console.log(attr1,attr2);
            &lt;/script&gt;
        </codec1xuz>
        or
        <codec1xuz n-scope="hEbrgVMYAFBTrHF">
            &lt;template specs=attrs&gt;
                Attribute1 : {attrs.attr1}&lt;br&gt;
                Attribute2 : {attrs.attr2}&lt;br&gt;
            &lt;/template&gt;
            &lt;script&gt;
                console.log(attrs.attr1,attrs.attr2);
            &lt;/script&gt;
        </codec1xuz>
    </sectionc1xuz>
    <sectionc1xuz title="Template string" n-scope="hEbrgVMYAFBTrHF">
        Inside the template tag, you can use the value of a JS variable of the same component inside any HTML tag by enclosing the name of the variable by curly brackets.
        <codec1xuz n-scope="hEbrgVMYAFBTrHF">
            &lt;template&gt;
                Hi! my name is {name}. &lt;br&gt;
                If you just want to just enclose some text within curly brackets, use \\(escape-sequence).
                Example :
                    \\{name} will just print {name} not Arun
            &lt;/template&gt;
            &lt;script&gt;
                let name = "Arun";
            &lt;/script&gt;
        </codec1xuz>
    </sectionc1xuz>
    <sectionc1xuz title="Calling events" n-scope="hEbrgVMYAFBTrHF">
        In Nijor, instead of calling events like <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">onclick</highlightc1xuz>, <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">onload</highlightc1xuz>, etc we use events like <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">on:click</highlightc1xuz>, <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">on:load</highlightc1xuz>, etc.
        <codec1xuz n-scope="hEbrgVMYAFBTrHF">
            &lt;template&gt;
                &lt;input type="number" id="num"&gt;
                &lt;button on:click="calc()"&gt;Click Me !&lt;/button&gt;
                &lt;p id="res"&gt;&lt;/p&gt;
            &lt;/template&gt;
            &lt;script&gt;
                function Factorial(n){
                    if(n===1 || n===0) return 1;
                    return n * Factorial(n-1);
                }
                function calc(){
                    let num = document.getElementById("num").value;
                    document.getElementById("res").innerHTML = \`\${num}! = \${Facrorial(num)}\`;
                }
            &lt;/script&gt;
        </codec1xuz>
    </sectionc1xuz>
    <sectionc1xuz title="Importing a component" n-scope="hEbrgVMYAFBTrHF">
        Let's assume that there is a component blogpost.nijor in the <highlightc1xuz n-scope="hEbrgVMYAFBTrHF">components/</highlightc1xuz> directory. We can import it any Nijor file by the following syntax.
        <codec1xuz file="pages/blog" n-scope="hEbrgVMYAFBTrHF">
            &lt;template&gt;
                &lt;blogpost title="Nijor : A first look"&gt;Nijor is a modern framework for building modern apps .....&lt;/blogpost&gt;
            &lt;/template&gt;
            &lt;script&gt;
                import $BlogPost from 'components/blogpost.nijor'; // Import the component
            &lt;/script&gt;
            &lt;script defer&gt;
                $BlogPost.init('blogpost'); // We have to initialize the component by the name which we're using to call it from inside the template tag.
                $BlogPost.run(); // Calling this function will render the component.
                /* 
                In our case, we are calling our component as &lt;blogpost&gt;....&lt;/blogpost&gt;. So we wrote $BlogPost.init('blogpost');
                Had we call it as &lt;post&gt;....&lt;/post&gt;, we'd have writen $BlogPost.init('post'); instead of $BlogPost.init('blogpost');
                */
            &lt;/script&gt;
        </codec1xuz>
        Importing a component seems to be a very tedious task, but luckly for developers, Nijor has a much more beautiful syntax in which you don't need to initilaize and run the component manually.
        <codec1xuz file="pages/blog" n-scope="hEbrgVMYAFBTrHF">
            &lt;blogpost n:imported="components/blogpost"/&gt; &lt;!-- This syntax handles the init and run methods automatically --&gt;
            &lt;template&gt;
                &lt;blogpost title="Nijor : A first look"&gt;Nijor is a modern framework for building modern apps .....&lt;/blogpost&gt;
            &lt;/template&gt;
        </codec1xuz>
    </sectionc1xuz>
    <sectionc1xuz title="Example :" n-scope="hEbrgVMYAFBTrHF">
        <codec1xuz lang="html" file="src/components/greet.nijor" n-scope="hEbrgVMYAFBTrHF">
            &lt;template specs={name,_text_}&gt;
                &lt;div&gt;
                    &lt;h1&gt;Hello {name}&lt;/h1&gt;
                    &lt;p&gt;{_text_}&lt;/p&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;style&gt;
                div{
                    padding : 0.5rem;
                    background-color : white;
                }
                h1{
                    color : #0099ff;
                }
            &lt;/style&gt;
        </codec1xuz>
        <div style="display:none;" n-scope="hEbrgVMYAFBTrHF"><codec1xuz n-scope="hEbrgVMYAFBTrHF"></codec1xuz></div>

        <codec1xuz lang="html" file="src/App.nijor" n-scope="hEbrgVMYAFBTrHF">
            &lt;greet n:imported="components/greet.nijor"/&gt;
            &lt;!--&lt;greet n:imported="components/greet"/&gt; will also work as the file extension .nijor isn't mandatory while importing components. --&gt;
            &lt;template&gt;
                &lt;greet name="Tarun"&gt;How are you bro !&lt;/greet&gt;
                &lt;greet name="Varun"&gt;Long time no see !&lt;/greet&gt;
            &lt;/template&gt;
        </codec1xuz>
    </sectionc1xuz>
`;
      }, async function() {
        n2.init("sectionc1xuz"), await n2.run(), t.init("highlightc1xuz"), await t.run(), n3.init("codec1xuz"), await n3.run();
      });
    }
  });

  // assets/modules/custom-events-3eb026fc.js
  var custom_events_3eb026fc_exports = {};
  __export(custom_events_3eb026fc_exports, {
    default: () => s2
  });
  var s2;
  var init_custom_events_3eb026fc = __esm({
    "assets/modules/custom-events-3eb026fc.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      s2 = new window.nijor.component(async function() {
        return `<sectionejmne title="Custom Events" n-scope="k7qhdIXHQd">
        We can create custom events in Nijor. What it means is that, just like events like <highlightejmne n-scope="k7qhdIXHQd">on:click</highlightejmne> exist in Nijor, we can create our own event like <highlightejmne n-scope="k7qhdIXHQd">on:myevent</highlightejmne>.
        It's pretty easy to do so. <br n-scope="k7qhdIXHQd">
        Let's consider a component <highlightejmne n-scope="k7qhdIXHQd">msg.nijor</highlightejmne> which uses a custom event <highlightejmne n-scope="k7qhdIXHQd">on:msg</highlightejmne>. Whenever a message is send from the <highlightejmne n-scope="k7qhdIXHQd">send.nijor</highlightejmne>, the sender's name and message gets printed in the paragraph tag. <br n-scope="k7qhdIXHQd"><br n-scope="k7qhdIXHQd">
        
        <codeejmne file="src/page/msg.nijor" n-scope="k7qhdIXHQd">
            &lt;template&gt;
                &lt;div&gt;
                    &lt;p id="msg" on:msg="PrintMsg($data)"&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;script&gt;
            function PrintMsg(msgdata){
                document.getElementById('msg').innerHTML += \`\${msgdata.name} : \${msgdata.text} &lt;br&gt;\`;
            }
            &lt;/script&gt;
            &lt;script defer&gt;
                // element.addEventListener doesn't work for custom events.
                // document.getElementById('msg').addEventListener('msg',($data)=&gt;PrintMsg($data)); doesn't work for custom events.
            &lt;/script&gt;
        </codeejmne>

        <div style="display:none;" n-scope="k7qhdIXHQd"><codeejmne n-scope="k7qhdIXHQd"></codeejmne></div>

        <codeejmne file="src/page/send.nijor" n-scope="k7qhdIXHQd">
            &lt;template&gt;
                &lt;div&gt;
                    &lt;input id="name"&gt;
                    &lt;input id="message"&gt;
                    &lt;input type="button" on:click="SendMsg()" value="Send"&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;script&gt;
            function SendMsg(msgdata){
                let name = document.getElementById('name');
                let message = document.getElementById('message');
                let data = {name:name,text:message};

                // This fires the 'on:msg' event across all the components that are currently in use.
                // All the elements with on:msg events' function's $data get replaced by {name:name,text:message}
                window.nijor.emitEvent('msg',data);
            }
            &lt;/script&gt;
        </codeejmne>
    </sectionejmne>
`;
      }, async function() {
        n2.init("sectionejmne"), await n2.run(), t.init("highlightejmne"), await t.run(), n3.init("codeejmne"), await n3.run();
      });
    }
  });

  // assets/modules/dark-mode-f5f60162.js
  var dark_mode_f5f60162_exports = {};
  __export(dark_mode_f5f60162_exports, {
    default: () => r
  });
  var r;
  var init_dark_mode_f5f60162 = __esm({
    "assets/modules/dark-mode-f5f60162.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      r = new window.nijor.component(async function() {
        return `<sectionjf9m title="Implementation of Dark-Mode" n-scope="rPUILOIr">
        Dark-Mode is very popular these days. You can implement dark mode using <highlightjf9m n-scope="rPUILOIr">CSS media queries</highlightjf9m>. But, it has a little problem : dark mode will only get activated if your browser theme is set to dark. <br n-scope="rPUILOIr">
        So, what if you want to use dark-mode without your browser's dark-mode activated ? or What if you want the user to have the freedom to toggle between dark, light and automatic(based on browser's theme) modes without them changing the theme of the browser ? <br n-scope="rPUILOIr">
        You need to use Javascript for these use cases, and Nijor has got it covered !
    </sectionjf9m>
    <sectionjf9m title="How to implement Dark Mode ?" n-scope="rPUILOIr">
        To implement dark-mode in your Nijor website :
        <codejf9m lang="js" file="App.js" n-scope="rPUILOIr">
            import "nijor";
            import "nijor/theme"; // Add this line of code to your App.js file
        </codejf9m>

        You can write separate CSS code for dark mode inside a Nijor Component by writing the CSS code for dark mode inside another <highlightjf9m n-scope="rPUILOIr">style</highlightjf9m> tag with the <highlightjf9m n-scope="rPUILOIr">dark</highlightjf9m> attribute.
        <codejf9m n-scope="rPUILOIr">
            &lt;template&gt;
                &lt;div&gt;
                    &lt;p&gt;Hello !&lt;/p&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;style&gt;
                div{
                    background-color : white;
                    padding : 0.5rem;
                    color : black;
                }
            &lt;/style&gt;
            &lt;style dark&gt;
                div{
                    background-color : rgb(31, 31, 31);
                    color : rgb(0, 153, 255);
                }
            &lt;/style&gt;
        </codejf9m>
    </sectionjf9m>
    <sectionjf9m title="Methods provided by nijor/theme" n-scope="rPUILOIr">
        <highlightjf9m n-scope="rPUILOIr">window.nijor.getTheme()</highlightjf9m> : This method returns the value of current theme (light, dark, auto) of website. <br n-scope="rPUILOIr">
        <highlightjf9m n-scope="rPUILOIr">window.nijor.getColorScheme()</highlightjf9m> : This method returns the value of current theme (light, dark, auto) of browser. <br n-scope="rPUILOIr">
        <highlightjf9m n-scope="rPUILOIr">window.nijor.setTheme(theme)</highlightjf9m> : This method changes the theme of the website according to the value of parameter theme. Accepted values are "dark", "light", "auto"(browser's theme).
    </sectionjf9m>
`;
      }, async function() {
        n2.init("sectionjf9m"), await n2.run(), t.init("highlightjf9m"), await t.run(), n3.init("codejf9m"), await n3.run();
      });
    }
  });

  // assets/modules/examples-b69564d2.js
  var examples_b69564d2_exports = {};
  __export(examples_b69564d2_exports, {
    default: () => n4
  });
  var n4;
  var init_examples_b69564d2 = __esm({
    "assets/modules/examples-b69564d2.js"() {
      init_highlight_108c1935();
      n4 = new window.nijor.component(async function() {
        return '<sectiont8z title="Example Nijor Apps :" n-scope="m7Zi6E9DwGVu">\n        you can refer to the following examples to learn Nijor in a better way. <br n-scope="m7Zi6E9DwGVu"><br n-scope="m7Zi6E9DwGVu">\n        <highlightt8z link="https://github.com/nijorjs/notesapp-example" n-scope="m7Zi6E9DwGVu">Notes App</highlightt8z>\n    </sectiont8z>\n';
      }, async function() {
        n2.init("sectiont8z"), await n2.run(), t.init("highlightt8z"), await t.run();
      });
    }
  });

  // assets/modules/functional-attributes-fc6294c7.js
  var functional_attributes_fc6294c7_exports = {};
  __export(functional_attributes_fc6294c7_exports, {
    default: () => i3
  });
  var i3;
  var init_functional_attributes_fc6294c7 = __esm({
    "assets/modules/functional-attributes-fc6294c7.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      i3 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="jjSkdWDM"><codeycwhr n-scope="jjSkdWDM"></codeycwhr></div>
    <sectionycwhr title="Functional Attributes" n-scope="jjSkdWDM">
        Functional Attributes are special attributes available in Nijor for normal html tags. They help us to do specific tasks with less code.
    </sectionycwhr>
    <sectionycwhr title="n:route" n-scope="jjSkdWDM">
        In order to navigate between Nijor routes we use the <highlightycwhr n-scope="jjSkdWDM">n:route</highlightycwhr> functional attribute on the anchor tag only. If we use the <highlightycwhr n-scope="jjSkdWDM">href</highlightycwhr> attribute instead of <highlightycwhr n-scope="jjSkdWDM">n:route</highlightycwhr>, we'll still be able to navigate. But the page will reload and the navigation won't be that smooth. Use <highlightycwhr n-scope="jjSkdWDM">href</highlightycwhr> attribute for linking to external website.
        <codeycwhr n-scope="jjSkdWDM">
            &lt;a n:route="/"&gt;Index Page&lt;/a&gt; &lt;!--Routing will be smooth, the page won't refresh--&gt;
            &lt;a href="/"&gt;Index Page&lt;/a&gt; &lt;!--Routing won't be smooth, the page will refresh--&gt;
        </codeycwhr>
    </sectionycwhr>
    <sectionycwhr title="n:for" n-scope="jjSkdWDM">
        This functional attribute is used to perform loops inside a html tag.
        <codeycwhr n-scope="jjSkdWDM">
            &lt;template&gt;
                &lt;p&gt;Following are the Functional Attributes in Nijor :&lt;p&gt;
                &lt;ul n:for="let x of AllAttributes"&gt;
                    &lt;li&gt;{x}&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/template&gt;
            &lt;script&gt;
                let AllAttributes = ['n:route','n:for','n:reload','n:asynLoad'];
            &lt;/script&gt;
        </codeycwhr>
    </sectionycwhr>
    <sectionycwhr title="n:reload" n-scope="jjSkdWDM">
        This functional attribute is used with <highlightycwhr n-scope="jjSkdWDM">n:for</highlightycwhr> or <highlightycwhr n-scope="jjSkdWDM">n:asyncLoad</highlightycwhr> functional attributes. <br n-scope="jjSkdWDM">
        To use this functional attribute, add this attribute to your desired HTML element and assign a <highlightycwhr n-scope="jjSkdWDM">label</highlightycwhr> to it, then use the <highlightycwhr n-scope="jjSkdWDM">window.nijor.reload(label)</highlightycwhr> function.
        <codeycwhr n-scope="jjSkdWDM">
            &lt;template&gt;
                &lt;input type="text" id="newTodo"&gt;
                &lt;input type="button" on:click="AddItem()"&gt;
                &lt;ul n:for="let task of Todos" n:reload="todolist"&gt;
                    &lt;li&gt;{Todos}&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/template&gt;
            &lt;script&gt;
                let Todos = ['Read a book', 'Learn Nijor'];
                function AddItem(){
                    let item = document.getElementById('newTodo').value;
                    Todos.push(item);
                    window.nijor.reload('todolist');
                }

                /*
                    Whenever a new item is added to 'todo', 
                    the element(s) whith attribute n:reload="todolist" get reloaded 
                    and hence the data within them also gets updated. 
                */
                
            &lt;/script&gt;
        </codeycwhr>
    </sectionycwhr>
    <div style="display:none;" n-scope="jjSkdWDM"><codeycwhr n-scope="jjSkdWDM"></codeycwhr></div>
    <sectionycwhr title="n:asyncLoad" n-scope="jjSkdWDM">
        This functional attribute is used to fetch data from server asynchronously to child elemenents inside a parent element. 
        <codeycwhr n-scope="jjSkdWDM">
            &lt;template&gt;
                &lt;div n:asyncLoad="let data = await getData()"&gt;
                    &lt;span&gt;Name : {data.name}&lt;span&gt;
                    &lt;span&gt;Email : {data.email}&lt;span&gt;
                    &lt;span&gt;Phone no : {data.phoneno}&lt;span&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;script&gt;
                async function getData(){
                    // This function fetches data from server.
                    let response = await fetch('url', {
                        method: 'GET',
                        credentials: 'include'
                    });
                    return (response.json());
                }
            &lt;/script&gt;
        </codeycwhr>
    </sectionycwhr>
    <sectionycwhr title="n:bind" n-scope="jjSkdWDM">
        This functional attribute is used to bind the value of an input tag to a <highlightycwhr link="/docs#reactivity" n-scope="jjSkdWDM">reactive variable</highlightycwhr>.
        <codeycwhr n-scope="jjSkdWDM">
            &lt;template&gt;
                &lt;h1&gt;Hello {{name}}&lt;/h1&gt;
                &lt;input type="text" n:bind="name"&gt;

                &lt;!--Whenever the value of the input tag with the attribute n:bind changes, the value of {{name}} changes automatically.--&gt;
            &lt;/template&gt;
        </codeycwhr>
    </sectionycwhr>
`;
      }, async function() {
        n2.init("sectionycwhr"), await n2.run(), t.init("highlightycwhr"), await t.run(), n3.init("codeycwhr"), await n3.run();
      });
    }
  });

  // assets/modules/index-1e5b1e53.js
  var index_1e5b1e53_exports = {};
  __export(index_1e5b1e53_exports, {
    default: () => s3
  });
  var s3;
  var init_index_1e5b1e53 = __esm({
    "assets/modules/index-1e5b1e53.js"() {
      init_highlight_108c1935();
      s3 = new window.nijor.component(async function() {
        return `<sectionk2szd title="What is Nijor ?" n-scope="Cis1GqVI0QV9sK5J">
        Nijor is a component-based framework that allows developers to build websites with ease by breaking down the code into many small components which can be reused throughout the codebase. Thus, Nijor makes developement faster in comparison to plain HTML, CSS and JS. <br n-scope="Cis1GqVI0QV9sK5J">
        Nijor compiles down to browser readable code with the help of the <highlightk2szd n-scope="Cis1GqVI0QV9sK5J">nijor compiler</highlightk2szd>.
    </sectionk2szd>
    <sectionk2szd title="Feature Nijor Provides :" n-scope="Cis1GqVI0QV9sK5J">
        <ul style="list-style: none;" n-scope="Cis1GqVI0QV9sK5J">
            <li n-scope="Cis1GqVI0QV9sK5J">Component Based</li>
            <li n-scope="Cis1GqVI0QV9sK5J">Frontend Routing</li>
            <li n-scope="Cis1GqVI0QV9sK5J">Custom Events</li>
            <li n-scope="Cis1GqVI0QV9sK5J">Easy to implement Dark-Mode</li>
        </ul>
    </sectionk2szd>
    <sectionk2szd title="Prerequisites" n-scope="Cis1GqVI0QV9sK5J">
        You need to have some basic knowledge about HTML, CSS and Javascript. You need to have Node.js installed on your computer before using Nijor although you don't need to know anything about NodeJS.
    </sectionk2szd>
`;
      }, async function() {
        n2.init("sectionk2szd"), await n2.run(), t.init("highlightk2szd"), await t.run();
      });
    }
  });

  // assets/modules/installation-521bea79.js
  var installation_521bea79_exports = {};
  __export(installation_521bea79_exports, {
    default: () => r2
  });
  var r2;
  var init_installation_521bea79 = __esm({
    "assets/modules/installation-521bea79.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      r2 = new window.nijor.component(async function() {
        return '<sectionr8hn title="Installation" n-scope="ttWmrXdLDlFK1oqdE">\n        In order to use Nijor, we need to install the <highlightr8hn n-scope="ttWmrXdLDlFK1oqdE">nijor-cli</highlightr8hn> from NPM. <br n-scope="ttWmrXdLDlFK1oqdE">\n        Type the following command to install it. <br n-scope="ttWmrXdLDlFK1oqdE"><br n-scope="ttWmrXdLDlFK1oqdE"><br n-scope="ttWmrXdLDlFK1oqdE">\n        <h3 n-scope="ttWmrXdLDlFK1oqdE">For Linux/Mac</h3>\n        <coder8hn lang="bash" n-scope="ttWmrXdLDlFK1oqdE">sudo npm install @nijor/cli -g</coder8hn>\n        <h3 n-scope="ttWmrXdLDlFK1oqdE">For Windows</h3>\n        <coder8hn lang="bash" n-scope="ttWmrXdLDlFK1oqdE">npm install @nijor/cli -g</coder8hn>\n    </sectionr8hn>\n';
      }, async function() {
        n2.init("sectionr8hn"), await n2.run(), t.init("highlightr8hn"), await t.run(), n3.init("coder8hn"), await n3.run();
      });
    }
  });

  // assets/modules/nijor-cli-345b2011.js
  var nijor_cli_345b2011_exports = {};
  __export(nijor_cli_345b2011_exports, {
    default: () => s4
  });
  var s4;
  var init_nijor_cli_345b2011 = __esm({
    "assets/modules/nijor-cli-345b2011.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      s4 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="1nXeNsMZo"><codetsym n-scope="1nXeNsMZo"></codetsym></div>
    <sectiontsym title="Nijor-CLI" n-scope="1nXeNsMZo"></sectiontsym>
    <sectiontsym title="Intorduction" n-scope="1nXeNsMZo">
        The <highlighttsym n-scope="1nXeNsMZo">nijor-cli</highlighttsym> is a CLI tool which allows to work in Nijor. <br n-scope="1nXeNsMZo">
    </sectiontsym>
    <sectiontsym title="nijor create" n-scope="1nXeNsMZo">
        The <highlighttsym n-scope="1nXeNsMZo">nijor create</highlighttsym> command creates a new folder and generates some boilerplate code.
        To create a new Nijor project, type the following commands. (Write your project's name instead of {Appname} )
        <codetsym lang="bash" n-scope="1nXeNsMZo">nijor create {AppName}</codetsym>
        <codetsym lang="bash" n-scope="1nXeNsMZo">cd {AppName}</codetsym>
    </sectiontsym>
    <sectiontsym title="nijor serve" n-scope="1nXeNsMZo">
        The <highlighttsym n-scope="1nXeNsMZo">nijor serve</highlighttsym> command runs a development server for the Nijor Project.
        <codetsym lang="bash" n-scope="1nXeNsMZo">nijor serve</codetsym>
    </sectiontsym>
    <sectiontsym title="nijor compile" n-scope="1nXeNsMZo">
        The <highlighttsym n-scope="1nXeNsMZo">nijor compile</highlighttsym> command compiles the all the <highlighttsym n-scope="1nXeNsMZo">*.nijor</highlighttsym> files to browser readable JS and CSS code.
        <codetsym lang="bash" n-scope="1nXeNsMZo">nijor compile</codetsym>
        To watch for changes, type
        <codetsym lang="bash" n-scope="1nXeNsMZo">nijor compile -w</codetsym>
    </sectiontsym>
    <sectiontsym title="nijor build" n-scope="1nXeNsMZo">
        The <highlighttsym n-scope="1nXeNsMZo">nijor build</highlighttsym> command is very similar to the<highlighttsym n-scope="1nXeNsMZo">nijor compile</highlighttsym> command. The only differnce between the 2 is that <highlighttsym n-scope="1nXeNsMZo">nijor build</highlighttsym> minifies the JS code.
        <codetsym lang="bash" n-scope="1nXeNsMZo">nijor build</codetsym>
    </sectiontsym>
`;
      }, async function() {
        n2.init("sectiontsym"), await n2.run(), t.init("highlighttsym"), await t.run(), n3.init("codetsym"), await n3.run();
      });
    }
  });

  // assets/modules/reactivity-bbdcfbb9.js
  var reactivity_bbdcfbb9_exports = {};
  __export(reactivity_bbdcfbb9_exports, {
    default: () => n5
  });
  var n5;
  var init_reactivity_bbdcfbb9 = __esm({
    "assets/modules/reactivity-bbdcfbb9.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      n5 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="E4PLuAJOXxe6"><coder3but n-scope="E4PLuAJOXxe6"></coder3but></div>
    <sectionr3but title="Reactivity" n-scope="E4PLuAJOXxe6">
        In Nijor, we can define <highlightr3but n-scope="E4PLuAJOXxe6">reactive variables</highlightr3but>.
        Reactive variables are defined as properties of the window.nijor.reactiveVars object. You can use the syntax, <highlightr3but n-scope="E4PLuAJOXxe6">window.nijor.reactiveVars['varname']</highlightr3but> to create a reactive variable. To access the value of a reactive variable inside the template tag, use the <highlightr3but n-scope="E4PLuAJOXxe6">{{varname}}</highlightr3but> syntax.
        <coder3but n-scope="E4PLuAJOXxe6">
            &lt;template&gt;
                &lt;!--To fetch the value of a reactive variable within the Nijor template, use {{variable}} --&gt;
                &lt;!--Whenever the value of window.nijor.reactiveVars['count'] changes, the value of {{count}} will automatically change--&gt;
                &lt;button on:click="UpdateCount()"&gt;{{count}}&lt;/button&gt;
            &lt;/template&gt;
            &lt;script&gt;
                window.nijor.reactiveVars['count'] = 1; 
                // window.nijor.reactiveVars is a special object which contains a key-value pair of reactive variables and their values.
                // Changes in values of reactive variables get reflected on the DOM only.
                function UpdateCount(){
                    window.nijor.reactiveVars['count']+=1;
                }
            &lt;/script&gt;
        </coder3but>
    </sectionr3but>
`;
      }, async function() {
        n2.init("sectionr3but"), await n2.run(), t.init("highlightr3but"), await t.run(), n3.init("coder3but"), await n3.run();
      });
    }
  });

  // assets/modules/routing-345a2109.js
  var routing_345a2109_exports = {};
  __export(routing_345a2109_exports, {
    default: () => r3
  });
  var r3;
  var init_routing_345a2109 = __esm({
    "assets/modules/routing-345a2109.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      r3 = new window.nijor.component(async function() {
        return `<sectionrs5 title="Routing" n-scope="4XlU0aMwgkhM1Ml47"></sectionrs5>
    <sectionrs5 title="Introduction" n-scope="4XlU0aMwgkhM1Ml47">
        Nijor provides a client-side routing capability that allows the rendering of different user interfaces based on specific routes. Unlike traditional approaches, Nijor's routing mechanism renders routes within the same page, eliminating the need for page refreshes and delivering a seamless user experience.
    </sectionrs5>
    <sectionrs5 title="File-Based Routing" n-scope="4XlU0aMwgkhM1Ml47">
        Nijor simplifies the process of rendering pages for different routes by utilizing file-based routing. This means that developers are relieved from the responsibility of manually coding the rendering logic for each route. Instead, Nijor's compiler automatically handles this based on the organization of files in the <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">src/pages</highlightrs5> directory of your Nijor project. <br n-scope="4XlU0aMwgkhM1Ml47">
        To illustrate this behavior, let's consider an example. When a user visits the '/' route of our website, the page rendered will be src/pages/index.nijor. Similarly, accessing the '/about' route will trigger the rendering of src/pages/about.nijor. In the event that a route doesn't exist, Nijor will render src/pages/404.nijor. This convenient approach streamlines the development process and improves overall efficiency.
    </sectionrs5>
    <sectionrs5 title="Understanding the App.nijor file" n-scope="4XlU0aMwgkhM1Ml47">
        The <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">App.nijor</highlightrs5> is a very important file inside the <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">src/</highlightrs5> directory of a Nijor project. This page gets rendered before rendering any route in Nijor. Without this page, the Nijor router simply won't work. You can render those components in this page which remain same in all the pages, thus preventing the need for rerendering the common components during navigation through different routes. <br n-scope="4XlU0aMwgkhM1Ml47">
        The App.nijor file must have the <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">&lt;div n:slot&gt;&lt;/div&gt;</highlightrs5> in the <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">App.nijor</highlightrs5> file. The content from the routes (pages from the src/page/ dir) will be rendered inside this special tag.
        <coders5 n-scope="4XlU0aMwgkhM1Ml47">
            &lt;template&gt;
                &lt;div n:slot&gt;
                    &lt;!--All the pages from the src/pages directory are rendered inside this div (marked with the n:slot attribute). 
                        Anything outside this div is always rendered irrespective of route.
                        You can write code for common header or footer outside this div so that it renders in every page, #Reasuablity
                    --&gt;
                &lt;/div&gt;

                &lt;!-- Note : Do not add an 'id' attribute to the div with the n:slot attribute. For styling, use 'class' instead. --&gt;
            &lt;/template&gt;
        </coders5>
    </sectionrs5>
    <sectionrs5 title="Boilerplate Code for Routing" n-scope="4XlU0aMwgkhM1Ml47">
        In order to use the Nijor Router in your project, your <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">src/App.js</highlightrs5> file must contain the following Boilerplate code :
        <coders5 lang="js" n-scope="4XlU0aMwgkhM1Ml47">
            import 'nijor';
            import 'nijor/router';
            import App from 'App.nijor';

            //@Routes()
            
            App.init('app');
            App.run();
            let url = window.location.pathname;
            window.nijor.renderRoute(url);
        </coders5>
        Note: The <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">//@Routes()</highlightrs5> comment is crucial for the Nijor router to function properly. Please ensure that there is no code or comments written on the same line as this comment. <br n-scope="4XlU0aMwgkhM1Ml47">
    </sectionrs5>
    <sectionrs5 title="Parameterized Routing" n-scope="4XlU0aMwgkhM1Ml47">
        Nijor supports parameterized routes, allowing for variable paths within routes. To define a parameterized route, enclose the parameter(s) using square brackets, e.g., [parameter-name]. You can add any desired text before or after the parameter name. For example: @[user].nijor, [item].nijor, id-[x].nijor, etc.
        <br n-scope="4XlU0aMwgkhM1Ml47"><br n-scope="4XlU0aMwgkhM1Ml47">
        Let's explore parameterized routes with an example: <br n-scope="4XlU0aMwgkhM1Ml47">
        Suppose we are building a profile page for users on our site, and we want to render the profile of 'Arun' when accessing the '/@arun' route. Similarly, we want to display the profile of 'Himasri' for the '/@himasri' route, and so on. Instead of creating separate files for each user, such as <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">src/pages/@arun</highlightrs5> , <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">src/pages/@himasri</highlightrs5>, and thousands of other profiles, we can create a single file, <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">src/pages/@[user].nijor</highlightrs5> to handle all user profiles. This way, when a user visits routes like '/@himasri' or '/@arun', they will be directed to the same page, <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">src/pages/@[user].nijor</highlightrs5>. <br n-scope="4XlU0aMwgkhM1Ml47">
        <coders5 file="src/pages/@[user]" n-scope="4XlU0aMwgkhM1Ml47">
            &lt;template specs=[user]&gt; &lt;!-- Receiving the parameterised route by array destructuring in specs --&gt;
                &lt;div&gt;
                    &lt;h1&gt;Hi {user}&lt;/h1&gt; 
                    &lt;!-- 
                        If the user visits /@arun &lt;h1&gt;Hi {user}&lt;/h1&gt; will become &lt;h1&gt;Hi arun&lt;/h1&gt; 
                        If the user visits /@himasri &lt;h1&gt;Hi {user}&lt;/h1&gt; will become &lt;h1&gt;Hi himasri&lt;/h1&gt; 
                    --&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </coders5>
    </sectionrs5>
    <sectionrs5 title="Sub Routes within a route" n-scope="4XlU0aMwgkhM1Ml47">
        By sub routes, we mean routing within a parent route. <br n-scope="4XlU0aMwgkhM1Ml47">
        For instance, there is a route say, <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">/blog</highlightrs5> which has some sub-routes like <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">/blog/What-is-Nijor</highlightrs5>, <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">/blog/Learning-Nijor</highlightrs5>, etc and each of these pages have a lot of common components and common layout in general. So, you don't want to copy-paste the same common code for these pages. In these scenarios, sub-routes can be very useful. You can also have parameterized routes as subroutes within a route. <br n-scope="4XlU0aMwgkhM1Ml47"><br n-scope="4XlU0aMwgkhM1Ml47">
        
        In order to create a sub route within a route : <br n-scope="4XlU0aMwgkhM1Ml47">
        (1) Create a folder, say 'blog' inside the src/pages directory. <br n-scope="4XlU0aMwgkhM1Ml47">
        (2) Create the <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">.nijor</highlightrs5> file within it. (write .nijor the way you write .gitignore).<br n-scope="4XlU0aMwgkhM1Ml47">
        (3) Create <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">index.nijor</highlightrs5> file within the folder.<br n-scope="4XlU0aMwgkhM1Ml47">
        (4) Create <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">What-is-Nijor.nijor</highlightrs5> file within the folder.<br n-scope="4XlU0aMwgkhM1Ml47"><br n-scope="4XlU0aMwgkhM1Ml47">
        
        Now, write all the common components in the <highlightrs5 n-scope="4XlU0aMwgkhM1Ml47">.nijor</highlightrs5> file. This file contains all the common code/components for the '/blog' route. Whenever somebody visits '/blog/*', this page will get rendered.
        <coders5 file="src/pages/blog/.nijor" n-scope="4XlU0aMwgkhM1Ml47">
            &lt;sidenav n:imported="components/sidenav"/&gt;
            &lt;template&gt;
                &lt;sidenav&gt;&lt;/sidenav&gt;
                &lt;div n:slot&gt;
                    &lt;!--All the subroutes will be rendered inside this folder.
                    Anything outside it will be rendered for any sub-route within '/blog' route--&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </coders5>

        <coders5 file="src/pages/blog/index.nijor" n-scope="4XlU0aMwgkhM1Ml47">
            &lt;template&gt;
                &lt;div&gt;
                    This is the Index page.
                    Whenever somebody visits '/blog/' or just '/blog' , this page will be rendered.
                &lt;/div&gt;
            &lt;/template&gt;
        </coders5>

        <coders5 file="src/pages/blog/What-is-Nijor.nijor" n-scope="4XlU0aMwgkhM1Ml47">
            &lt;template&gt;
                &lt;div&gt;
                    This is the What-is-Nijor page.
                    Whenever somebody visits '/blog/What-is-Nijor', this page will be rendered.
                &lt;/div&gt;
            &lt;/template&gt;
        </coders5>

    </sectionrs5>
`;
      }, async function() {
        n2.init("sectionrs5"), await n2.run(), t.init("highlightrs5"), await t.run(), n3.init("coders5"), await n3.run();
      });
    }
  });

  // assets/modules/routing.old-c8128c14.js
  var routing_old_c8128c14_exports = {};
  __export(routing_old_c8128c14_exports, {
    default: () => r4
  });
  var r4;
  var init_routing_old_c8128c14 = __esm({
    "assets/modules/routing.old-c8128c14.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      r4 = new window.nijor.component(async function() {
        return `<sectionmz6 title="Routing" n-scope="DqKcqNLmGhDcUnDD"></sectionmz6>
    <sectionmz6 title="Introduction" n-scope="DqKcqNLmGhDcUnDD">
        In Nijor, we can do client-side routing. What it means is that we can render different UI to the user for different routes. The routes will be rendered in the same page due to which the page won't refresh on navigating to another route. This leads to a smoother user experience. <br n-scope="DqKcqNLmGhDcUnDD">

        Here's an example of a simple router in Nijor :
        <codemz6 lang="js" file="src/App.js" n-scope="DqKcqNLmGhDcUnDD">
            import 'nijor';
            import Router from 'nijor/router'; // Importing the Nijor Router
            import App from 'App.nijor'; // Importing the App.nijor page
            import Home from 'pages/index.nijor'; // Importing the home.nijor page
            import About from 'pages/about.nijor'; // Importing the about.nijor page
            import Error404 from 'pages/404.nijor'; // Importing the 404error.nijor page


            /* Initializing the Router. The '#n-route' is the reference to the div
            where the content from the pages (Home.nijor and About.nijor) has to be rendered. */

            const router = new Router('#n-routes');
            router.route('/',Home); // Defining the Routes.
            router.route('/about',About); // Defining the Routes.
            router.route('*',Error404); // '*' route is rendered in case of undefined routes ; can be used for showing a 404 Error page.
            router.render(App); // Rendering the App.nijor file.
        </codemz6>
        <codemz6 file="src/App.nijor" n-scope="DqKcqNLmGhDcUnDD">
            &lt;header n:imported="components/header"/&gt;
            &lt;template&gt;
            &lt;header&gt;&lt;/header&gt; &lt;!-- The header component won't get affected on route change --&gt;
                &lt;div id="n-routes"&gt;
                    &lt;!-- All the routes will be rendered inside this div --&gt;
                    &lt;!-- Content outside this div won't get affected on change in route --&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </codemz6>
        
    </sectionmz6>
    <sectionmz6 title="Parameterized Routing" n-scope="DqKcqNLmGhDcUnDD">
        With parameterised routes we can have variable paths in our routes. Let's understand it with the help of an example :  
        <codemz6 lang="js" file="src/App.js" n-scope="DqKcqNLmGhDcUnDD">
            import 'nijor';
            import Router from 'nijor/router';
            import App from 'App.nijor';
            import Home from 'pages/index.nijor';
            import BlogIndex from 'pages/blog/index.nijor';
            import Blog from 'pages/blog/blog.nijor';
            import Error404 from 'pages/404.nijor';
            const router = new Router('#n-routes');
            router.route('/',Home);
            router.route('/blog',BlogIndex);
            router.route('/blog/&lt;title&gt;',Blog); // Defining the paramtereized Route.
            router.route('*',Error404); // '*' route is rendered in case of undefined routes ; can be used for showing a 404 Error page.
            router.render(App); // Rendering the App.nijor file.
        </codemz6>
        <codemz6 file="src/pages/blog/index.nijor" n-scope="DqKcqNLmGhDcUnDD">
            &lt;!-- This page will get rendered whenever the user visits the /blog route --&gt;
            &lt;template&gt;
                &lt;div&gt;
                    &lt;h1&gt;Search for BlogPosts ....&lt;/h1&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </codemz6>
        <codemz6 file="src/pages/blog/blog.nijor" n-scope="DqKcqNLmGhDcUnDD">
            &lt;template specs=[title]&gt; &lt;!-- Receiving the parameterised route by array destructuring in specs --&gt;
                &lt;div&gt;
                    &lt;h1&gt;{title}&lt;/h1&gt;
                    &lt;!-- 
                        If the user visits /blog/What-is-Nijor, &lt;h1&gt;{title}&lt;/h1&gt; will become &lt;h1&gt;What-is-Nijor&lt;/h1&gt;
                        If the user visits /blog/XYX, &lt;h1&gt;{title}&lt;/h1&gt; will become &lt;h1&gt;XYX&lt;/h1&gt;
                    --&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </codemz6>
    </sectionmz6>
    <sectionmz6 title="preRender method" n-scope="DqKcqNLmGhDcUnDD">
        <codemz6 lang="js" n-scope="DqKcqNLmGhDcUnDD">
            import 'nijor';
            import Router from 'nijor/router';
            const router = new Router('#n-routes');

            router.preRender(()=&gt;DoSomething());
            // function passed to the preRender function runs before every page is rendered on route change.
            // router.preRender((urlParameter)=&gt;DoSomething(urlParameter)); The urlParameter contains the url paramters of a parameterized route.
        </codemz6>
    </sectionmz6>
    <sectionmz6 title="postRender method" n-scope="DqKcqNLmGhDcUnDD">
        <codemz6 lang="js" n-scope="DqKcqNLmGhDcUnDD">
            import 'nijor';
            import Router from 'nijor/router';
            const router = new Router('#n-routes');

            function DoSomething(){
                window.nijor.emitEvent('routechange');
                // Fire the routechange event.
                // Whenever someone navigates to another route, the 'routechange' custom event will get fired.
            }

            router.postRender(()=&gt;DoSomething());
            // function passed to the preRender function runs after every page is rendered on route change.
            // router.postRender((urlParameter)=&gt;DoSomething(urlParameter)); The urlParameter contains the url paramters of a parameterized route.
        </codemz6>
    </sectionmz6>
`;
      }, async function() {
        n2.init("sectionmz6"), await n2.run(), t.init("highlightmz6"), await t.run(), n3.init("codemz6"), await n3.run();
      });
    }
  });

  // assets/modules/structure-92c1304a.js
  var structure_92c1304a_exports = {};
  __export(structure_92c1304a_exports, {
    default: () => o5
  });
  var o5;
  var init_structure_92c1304a = __esm({
    "assets/modules/structure-92c1304a.js"() {
      init_highlight_108c1935();
      init_codeblock_86d6213a();
      o5 = new window.nijor.component(async function() {
        return `<div style="display: none;" n-scope="yY3PemD27bvTN"><codefquw n-scope="yY3PemD27bvTN"></codefquw></div>
    <sectionfquw title="Structure of a Nijor project" n-scope="yY3PemD27bvTN">
        When you use the <highlightfquw n-scope="yY3PemD27bvTN">nijor create {appname}</highlightfquw> command, it creates a new directory named after your project. This page is intended to help you understand the use of each of these directories and files.
    </sectionfquw>
    <sectionfquw title="app directory" n-scope="yY3PemD27bvTN">
        The <highlightfquw n-scope="yY3PemD27bvTN">app</highlightfquw> directory contains the <highlightfquw n-scope="yY3PemD27bvTN">index.html</highlightfquw> file for our website. It also contains another directory called <highlightfquw n-scope="yY3PemD27bvTN">assets</highlightfquw> which stores our css file and it also contains another directory called <highlightfquw n-scope="yY3PemD27bvTN">modules</highlightfquw> which contains the js files produced by the compiler.
    </sectionfquw>
    <sectionfquw title="src directory" n-scope="yY3PemD27bvTN">
        The <highlightfquw n-scope="yY3PemD27bvTN">src</highlightfquw> directory is our main working directory. We generally don't need to touch the <highlightfquw n-scope="yY3PemD27bvTN">app</highlightfquw> directory.
    </sectionfquw>
    <sectionfquw title="src/components directory" n-scope="yY3PemD27bvTN">
        This directory stores all the reusable Nijor components.
    </sectionfquw>
    <sectionfquw title="src/pages directory" n-scope="yY3PemD27bvTN">
        This directory stores all the Nijor components which are to be used as <highlightfquw n-scope="yY3PemD27bvTN">pages</highlightfquw> during routing. Pages are just normal Nijor components which are used for routing, they behave normally as other Nijor components.
    </sectionfquw>
    <sectionfquw title="src/styles directory" n-scope="yY3PemD27bvTN">
        This directory stores our global stylesheets.
    </sectionfquw>
    <sectionfquw title="src/images directory" n-scope="yY3PemD27bvTN">
        This directory stores our images which can be imported into a Nijor component just like a Javascript file using ES6 imports.
    </sectionfquw>
    <sectionfquw title="src/App.js file" n-scope="yY3PemD27bvTN">
        This file is the main entrypoint of our Nijor project.
    </sectionfquw>
    <sectionfquw title="src/App.nijor file" n-scope="yY3PemD27bvTN">
        This file is like the index.html for Nijor. We still need to use the index.html file sometimes though. The template tag of App.nijor is like the body of the index.html file.
    </sectionfquw>
    <sectionfquw title="Nijor Configuration File" n-scope="yY3PemD27bvTN">
        The <highlightfquw n-scope="yY3PemD27bvTN">nijor.config.json</highlightfquw> is a file which contains certain configurations for a Nijor project.<br n-scope="yY3PemD27bvTN">
        If you try to run the <highlightfquw n-scope="yY3PemD27bvTN">nijor build</highlightfquw>,<highlightfquw n-scope="yY3PemD27bvTN">nijor compile</highlightfquw>,<highlightfquw n-scope="yY3PemD27bvTN">nijor serve</highlightfquw> commands inside a Nijor project without this file, then the <highlightfquw n-scope="yY3PemD27bvTN">nijor-compiler</highlightfquw> won't work and will throw errors.
    </sectionfquw>
`;
      }, async function() {
        n2.init("sectionfquw"), await n2.run(), t.init("highlightfquw"), await t.run(), n3.init("codefquw"), await n3.run();
      });
    }
  });

  // assets/modules/How-Nijor-Works-5dfb26d8.js
  var How_Nijor_Works_5dfb26d8_exports = {};
  __export(How_Nijor_Works_5dfb26d8_exports, {
    default: () => t2
  });
  var t2;
  var init_How_Nijor_Works_5dfb26d8 = __esm({
    "assets/modules/How-Nijor-Works-5dfb26d8.js"() {
      init_highlight_108c1935();
      t2 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="V2gHbXIPW9no8T">
        <sectionyk8i title="How Nijor Works ?" n-scope="V2gHbXIPW9no8T">
            Many of you might have thought that how Nijor compiler actually works behind the scene ? Well, in this article I'd tell you exactly that ! <br n-scope="V2gHbXIPW9no8T">
            The Nijor compiler uses <highlightyk8i link="https://rollupjs.org" n-scope="V2gHbXIPW9no8T">RollupJS</highlightyk8i> with <highlightyk8i link="https://github.com/nijorjs/nijor-rollup-plugin" n-scope="V2gHbXIPW9no8T">this plugin</highlightyk8i> to first compile the <highlightyk8i n-scope="V2gHbXIPW9no8T">*.nijor</highlightyk8i> code to <highlightyk8i n-scope="V2gHbXIPW9no8T">*.js</highlightyk8i> code and bundle the components into the pages. All the functional attributes get compiled to normal js code. 
        </sectionyk8i>
    </div>
`;
      }, async function() {
        n2.init("sectionyk8i"), await n2.run(), t.init("highlightyk8i"), await t.run();
      });
    }
  });

  // assets/modules/How-Scoped-CSS-Works-4177beb8.js
  var How_Scoped_CSS_Works_4177beb8_exports = {};
  __export(How_Scoped_CSS_Works_4177beb8_exports, {
    default: () => n6
  });
  var n6;
  var init_How_Scoped_CSS_Works_4177beb8 = __esm({
    "assets/modules/How-Scoped-CSS-Works-4177beb8.js"() {
      init_highlight_108c1935();
      n6 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="2HEGhIQ4GQkErsjT7">
        <sectionzh6 title="How Scoped CSS Works ?" n-scope="2HEGhIQ4GQkErsjT7">
            The CSS code you write inside a component is scoped.
            While compiling <highlightzh6 n-scope="2HEGhIQ4GQkErsjT7">.nijor</highlightzh6> files, the compiler adds the attribute "n-scope" to each and every HTML element inside the template tag and also modifies the CSS code inside the style tag such that the styles only apply to the elements of that particular component. The value of the 'n-scope' attribute is same for all the HTML elements inside a particular Nijor component. <br n-scope="2HEGhIQ4GQkErsjT7">
            
            For example :

            <codezh6 n-scope="2HEGhIQ4GQkErsjT7">
                &lt;template&gt;
                    &lt;div&gt;
                        &lt;h1&gt;Hello World&lt;/h1&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
                &lt;style&gt;
                    div{
                       dispaly : flex; 
                    }
                    h1{
                        color : #0066f6;
                     }
                &lt;/style&gt;
            </codezh6>
            The above code becomes somewhat like the code below.
            <codezh6 n-scope="2HEGhIQ4GQkErsjT7">
                &lt;template&gt;
                    &lt;div n-scope="nsjiue73j"&gt;
                        &lt;h1 n-scope="nsjiue73j"&gt;Hello World&lt;/h1&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
                &lt;style&gt;
                    div[n-scope="nsjiue73j"]{
                       dispaly : flex; 
                    }
                    h1[n-scope="nsjiue73j"]{
                        color : #0066f6;
                     }
                &lt;/style&gt;
            </codezh6>
        </sectionzh6>
    </div>
`;
      }, async function() {
        const { default: n9 } = await Promise.resolve().then(() => (init_codeblock_86d6213a(), codeblock_86d6213a_exports));
        n2.init("sectionzh6"), await n2.run(), t.init("highlightzh6"), await t.run(), n9.init("codezh6"), await n9.run();
      });
    }
  });

  // assets/modules/enei-017f7c38.js
  var enei_017f7c38_exports = {};
  __export(enei_017f7c38_exports, {
    default: () => e5
  });
  var t3, e5;
  var init_enei_017f7c38 = __esm({
    "assets/modules/enei-017f7c38.js"() {
      t3 = /* @__PURE__ */ new Map();
      t3.set("todolist", "http://localhost:3500/assets/");
      e5 = new window.nijor.component(async function([e7]) {
        return `<page fn="${async function(e8) {
          const n9 = document.createElement("link");
          n9.setAttribute("rel", "stylesheet"), n9.setAttribute("href", t3.get(e8) + "style.css"), document.head.appendChild(n9);
          let { Page: s6 } = await import(t3.get(e8) + "modules/App.js");
          s6.init("page"), await s6.run();
        }(e7)}" n-scope="Pkm88Kdo"></page>
`;
      }, async function([t6]) {
      });
    }
  });

  // assets/modules/index-4efdc75a.js
  var index_4efdc75a_exports = {};
  __export(index_4efdc75a_exports, {
    default: () => i4
  });
  var i4;
  var init_index_4efdc75a = __esm({
    "assets/modules/index-4efdc75a.js"() {
      init_highlight_108c1935();
      i4 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="fp8wol38aV3P6Nk05">
        <sectionrwb title="Namaskar \u{1F64F}" n-scope="fp8wol38aV3P6Nk05">
        Hi ! I'm Debarshi Pathak (alias <highlightrwb link="https://twitter.com/DebAxom" n-scope="fp8wol38aV3P6Nk05">DebAxom</highlightrwb>), the creator of Nijor. <br n-scope="fp8wol38aV3P6Nk05">
        I am the Assamese teenager who created Nijor in 2020 at the age of 14 (was about to turn 15). <br n-scope="fp8wol38aV3P6Nk05"><br n-scope="fp8wol38aV3P6Nk05">

        I created Nijor because I didn't want to learn React or Angular as I felt that learning those frameworks is like kinda learning a new language completely. So I decided to create my own framework, Nijor. <br n-scope="fp8wol38aV3P6Nk05">
        The word <highlightrwb n-scope="fp8wol38aV3P6Nk05">Nijor (\u09A8\u09BF\u099C\u09F0)</highlightrwb> means "My" or "Mine" in the Assamese language. I chose the word "Nijor" for my framework because I could create "my own" custom HTML tags with attributes. I've been using NijorJS since 2020 and I decided to write the <highlightrwb link="/docs" n-scope="fp8wol38aV3P6Nk05">docs</highlightrwb> in 2023. <br n-scope="fp8wol38aV3P6Nk05"><br n-scope="fp8wol38aV3P6Nk05">
        
        Nijor has been inspired by Vue and Svelte and it's influence can be felt. The idea of <highlightrwb n-scope="fp8wol38aV3P6Nk05">*.nijor</highlightrwb> files came from <highlightrwb n-scope="fp8wol38aV3P6Nk05">*.vue</highlightrwb> files and the idea of a compiler came from Svelte. I even tried to take some inspiration from their source code, but I couldn't understand their code. So, I had to implement all the features of this framework from scratch (I did steal some code from StalkOverflow though \u{1F601}). <br n-scope="fp8wol38aV3P6Nk05"><br n-scope="fp8wol38aV3P6Nk05">

        My core philosophy behind Nijor is simplicity : The framework should have a very flat learning curve. Due to this philosophy, <highlightrwb n-scope="fp8wol38aV3P6Nk05">*.nijor</highlightrwb> files are more closely related to <highlightrwb n-scope="fp8wol38aV3P6Nk05">*.html</highlightrwb> files than <highlightrwb n-scope="fp8wol38aV3P6Nk05">*.js</highlightrwb> files as it's easier to write JS inside HTML rather than the other way round. <br n-scope="fp8wol38aV3P6Nk05"><br n-scope="fp8wol38aV3P6Nk05">
        
        Nijor is not a perfect framework ; just like everything in this world, Nijor too has it's flaws and it might be confusing at times. <br n-scope="fp8wol38aV3P6Nk05"><br n-scope="fp8wol38aV3P6Nk05">
        
        At last, I'd like to thank the Svelte creator Rich-Harris for creating Rollup JS as without Rollup it'd have been impossible for me to create the Nijor compiler.
        </sectionrwb>
    </div>
`;
      }, async function() {
        n2.init("sectionrwb"), await n2.run(), t.init("highlightrwb"), await t.run();
      });
    }
  });

  // assets/modules/virtual-dom-43d4ed5d.js
  var virtual_dom_43d4ed5d_exports = {};
  __export(virtual_dom_43d4ed5d_exports, {
    default: () => t4
  });
  var t4;
  var init_virtual_dom_43d4ed5d = __esm({
    "assets/modules/virtual-dom-43d4ed5d.js"() {
      init_highlight_108c1935();
      t4 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="csRnU06">
        <sectiongnn title="Does Nijor have a Virtial DOM ?" n-scope="csRnU06">
            No, Nijor doesn't have any Virtual DOM as it's simply overrated ! At the end of the day, the Virtual DOM also communicated with the real DOM. So, I don't really understand how can it be faster than the real DOM ? <br n-scope="csRnU06">
            Nijor uses very savage rendering techniques ; it doesn't even create the HTML elements using JS code, it just dumps the code you wrote inside a Nijor JS file directly into the parent contaier using the <highlightgnn n-scope="csRnU06">.innerHTML</highlightgnn> method.
        </sectiongnn>
    </div>
`;
      }, async function() {
        n2.init("sectiongnn"), await n2.run(), t.init("highlightgnn"), await t.run();
      });
    }
  });

  // assets/modules/index-88e6fdc8.js
  var index_88e6fdc8_exports = {};
  __export(index_88e6fdc8_exports, {
    default: () => c2
  });
  var c2;
  var init_index_88e6fdc8 = __esm({
    "assets/modules/index-88e6fdc8.js"() {
      init_app();
      c2 = new window.nijor.component(async function() {
        return `<div class="main" n-scope="9bcE3dKwKq3">
        <img src="${o}" n-scope="9bcE3dKwKq3">
        <p n-scope="9bcE3dKwKq3">
            <span style="font-size: 35px; font-weight: bold;" n-scope="9bcE3dKwKq3">Nijor</span>
            <span class="tagline" n-scope="9bcE3dKwKq3"> : A modern and practical web framework !</span>
        </p>
        <a n-scope="9bcE3dKwKq3" onclick="return window.nijor.redirect(this.href)" href="/docs"><button n-scope="9bcE3dKwKq3">Get Started</button></a>
    </div>
`;
      }, async function() {
      });
    }
  });

  // assets/modules/internet-error-6cb268bb.js
  var internet_error_6cb268bb_exports = {};
  __export(internet_error_6cb268bb_exports, {
    default: () => n7
  });
  var n7;
  var init_internet_error_6cb268bb = __esm({
    "assets/modules/internet-error-6cb268bb.js"() {
      n7 = new window.nijor.component(async function() {
        return `<div n-scope="kDzCihhfoNZdZ">
        <h1 n-scope="kDzCihhfoNZdZ">Network Error !</h1>
        <p n-scope="kDzCihhfoNZdZ">It seems that you aren't connected to the internet, kindly check your net connection.</p>
    </div>
`;
      }, async function() {
      });
    }
  });

  // assets/modules/app.js
  async function t5(e7) {
    if ("/" === e7)
      return;
    let o6 = e7.split("/");
    return "404" === o6[o6.length - 1] && o6.pop(), o6.pop(), o6.push("404"), (e7 = o6.join("/")).endsWith("/") && "/" != e7 && (e7 = e7.substring(0, e7.length - 1)), window.nijor.routes.has(e7) ? await window.nijor.routes.get(e7)() : await t5(e7);
  }
  function n8() {
    document.body.style.transition = "0.5s";
    let e7 = window.nijor.getTheme();
    "auto" !== e7 && null !== e7 || (e7 = window.nijor.getColorScheme()), "dark" === e7 && window.nijor.setTheme("light"), "light" === e7 && window.nijor.setTheme("dark");
  }
  var e6, o, i5, r5, s5, a;
  var init_app = __esm({
    "assets/modules/app.js"() {
      e6 = new Proxy({}, { set: (e7, t6, o6) => (e7[t6] = o6, document.querySelectorAll(`nirev[var="${t6}"]`).forEach((e8) => {
        e8.innerHTML = o6;
      }), true) });
      window.nijor = { component: class {
        constructor(e7, t6) {
          this.template = e7, this.cb = t6;
        }
        init(e7) {
          this.name = e7;
        }
        run = async function(e7) {
          let t6 = new RegExp(`(<${this.name}[^>]+>|<${this.name}>)`), o6 = document.getElementsByTagName(this.name)[0];
          if (0 === document.getElementsByTagName(this.name).length)
            return;
          let n9 = function(e8) {
            let t7 = [], o7 = [];
            for (let n11, i7 = 0, r6 = e8.attributes, s6 = r6.length; i7 < s6; i7++)
              n11 = r6[i7], t7.push(n11.nodeName), o7.push(n11.nodeValue);
            t7.push("_text_"), o7.push(e8.innerHTML);
            let n10 = o7, i6 = {};
            return t7.forEach((e9, t8) => i6[e9] = n10[t8]), i6;
          }(o6);
          null != e7 && (n9 = e7);
          try {
            o6.innerHTML = "";
          } catch (e8) {
          }
          try {
            let e8 = await this.template(n9);
            o6.parentElement.innerHTML = o6.parentElement.innerHTML.replace(t6, e8), await this.cb(n9), await this.run();
          } catch (e8) {
            let o7 = await this.template(n9);
            document.body.innerHTML = document.body.innerHTML.replace(t6, o7), await this.cb(n9), await this.run();
          }
        };
      }, reactiveVars: e6 }, window.nijor.hashRouterActivated = false, window.nijorfunc = {}, window.location.query = function() {
        let e7 = {}, t6 = document.createElement("a");
        t6.href = window.location.href;
        let o6 = t6.search.substring(1).split("&");
        for (let t7 = 0; t7 < o6.length; t7++) {
          let n9 = o6[t7].split("=");
          e7[n9[0]] = decodeURIComponent(n9[1]);
        }
        return e7;
      }, window.nijor.emitEvent = async function(e7, t6 = {}) {
        document.querySelectorAll("[on" + e7 + "]").forEach((o6) => {
          null === o6.getAttribute("id") && o6.setAttribute("id", "id_" + function(e8, t7) {
            let o7 = Math.floor(Math.random() * (t7 - e8 + 1) + e8), n10 = "", i7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r7 = i7.length;
            for (let e9 = 0; e9 < o7; e9++)
              n10 += i7.charAt(Math.floor(Math.random() * r7));
            return n10;
          }(4, 6));
          let n9 = o6.getAttribute("on" + e7), i6 = n9.split("(")[0], r6 = n9.match(/\((.*)\)/)[1];
          r6 = r6.replace("$data", JSON.stringify(t6)), r6 = r6.replace("this", "_this"), new Function(`
        let _this = document.getElementById('${o6.id}');
        ${i6}(${r6});
        `)();
        });
      }, window.nijor.reload = async function(e7) {
        await window.nijor.emitEvent("reload" + e7, null);
      }, window.nijor.routes = /* @__PURE__ */ new Map(), window.nijor.routes.set("/", () => {
      }), window.nijor.slots = /* @__PURE__ */ new Map(), window.nijor.slots.set("/", () => {
      }), window.nijor.redirect = function(e7) {
        window.nijor.previousRoute = window.location.pathname;
        try {
          history.pushState(null, null, e7), history.pushState(null, null, e7), history.back();
        } catch (t6) {
          window.location.href = e7;
        }
        return false;
      }, window.addEventListener("popstate", async (e7) => {
        let t6 = e7.target.location.pathname;
        await window.nijor.renderRoute(t6), window.nijor.previousRoute = t6, window.nijor.emitEvent("route", window.location.pathname);
      }), window.nijor.setRoute = function(e7, t6, o6) {
        window.nijor.routes.set(e7, async (e8) => {
          try {
            let { default: n9 } = await t6(), i6 = document.getElementById(`routes-slot-${o6}`);
            i6 ? i6.innerHTML = "<app></app>" : (await window.nijor.slots.get(`${o6}`)(), document.getElementById(`routes-slot-${o6}`).innerHTML = "<app></app>"), n9.init("app"), await n9.run(e8);
          } catch (e9) {
          }
        });
      }, window.nijor.addSlot = function(e7, t6) {
        window.nijor.slots.set(e7, async () => {
          try {
            let { default: e8 } = await t6(), o6 = document.getElementById("routes-slot-/");
            o6 && (o6.innerHTML = "<app></app>"), e8.init("app"), await e8.run();
          } catch (e8) {
            console.log(e8);
          }
        });
      }, window.nijor.renderRoute = async function(e7) {
        return e7.endsWith("/") && "/" != e7 && (e7 = e7.substring(0, e7.length - 1)), e7.endsWith(".html") && (e7 = e7.slice(0, -5), history.replaceState(null, null, e7)), window.nijor.routes.has(e7) ? await window.nijor.routes.get(e7)() : await async function(e8, o6) {
          for (const [t6, n9] of o6.entries())
            if (t6 instanceof RegExp) {
              const o7 = t6.exec(e8);
              if (!o7)
                continue;
              let i6 = o7.slice(1, o7.length);
              if (i6[0].indexOf("/") > -1)
                continue;
              return await n9(i6);
            }
          await t5(e8);
        }(e7, window.nijor.routes);
      }, window.nijor.renderSlots = async function(e7) {
        if (e7.endsWith("/") && "/" != e7 && (e7 = e7.substring(0, e7.length - 1)), window.nijor.slots.has(e7))
          return await window.nijor.slots.get(e7)();
      }, window.nijor.AutoTheme = function() {
        if (null === window.localStorage.getItem("theme") || "auto" === window.localStorage.getItem("theme")) {
          window.matchMedia("(prefers-color-scheme: dark)").matches && document.body.classList.toggle("dark-mode");
        } else {
          if ("dark" === window.localStorage.getItem("theme"))
            return document.body.classList.add("dark-mode"), void window.localStorage.setItem("theme", "dark");
          document.body.classList.remove("light-mode"), window.localStorage.setItem("theme", "light");
        }
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
          if (null === window.localStorage.getItem("theme") || "auto" === window.localStorage.getItem("theme")) {
            window.matchMedia("(prefers-color-scheme: dark)").matches ? document.body.classList.toggle("dark-mode") : document.body.classList.remove("dark-mode");
          }
        });
      };
      window.nijor.setTheme = function(e7) {
        if ("light" === e7)
          return document.body.classList.remove("dark-mode"), void window.localStorage.setItem("theme", "light");
        if ("dark" === e7)
          return document.body.classList.add("dark-mode"), void window.localStorage.setItem("theme", "dark");
        if ("auto" === e7) {
          window.localStorage.setItem("theme", "auto"), window.matchMedia("(prefers-color-scheme: dark)").matches ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
        }
      }, window.nijor.getTheme = () => window.localStorage.getItem("theme") || "auto", window.nijor.getColorScheme = () => true === window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      o = "data:image/svg+xml,%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='150px' height='150px' viewBox='0 0 1500 1500' preserveAspectRatio='xMidYMid meet'%3e%3cg id='layer101' fill='%2300a2e8' stroke='none'%3e %3cpath d='M150 1397 c0 -8 -5 -17 -11 -19 -7 -2 21 -200 80 -567 50 -310 91 -568 91 -572 0 -5 6 -9 12 -9 7 0 178 165 380 367 l368 368 1 -360 1 -360 99 -94 c55 -52 102 -91 105 -88 10 10 -157 1131 -169 1139 -7 4 -16 8 -22 8 -5 0 -175 -165 -377 -367 l-368 -368 -1 380 -1 380 -94 89 c-54 51 -94 82 -94 73z'/%3e %3c/g%3e%3cg id='layer102' fill='%230ec4f8' stroke='none'%3e %3cpath d='M703 838 l-363 -363 0 -120 0 -120 365 365 366 366 -3 117 -3 117 -362 -362z'/%3e %3c/g%3e%3c/svg%3e";
      i5 = { "/docs": "docs", "/examples": "examples", "/faq": "faq" };
      window.nijorfunc._yuOpenCloseMenu = function(e7) {
        let t6 = document.getElementById("docs-sidenav-mobile");
        if ("menu" === e7.innerHTML)
          return t6.style.width = "75%", void (e7.innerHTML = "close");
        t6.style.width = "0%", e7.innerHTML = "menu";
      }, window.nijorfunc._yuChangeRoute = function(e7, t6) {
        e7.style.display = "flex", e7.querySelectorAll(".nav-link").forEach((e8) => {
          e8.style.color = "white", e8.getAttribute("tab") === i5["/" + t6.split("/")[1]] && (e8.style.color = "#07b0ff");
        }), screen.width < 600 && ("/docs" != window.location.pathname ? (document.getElementById("header-nijor-logo").style.display = "block", document.getElementById("header-nijor-menu").style.display = "none") : (document.getElementById("header-nijor-logo").style.display = "none", document.getElementById("header-nijor-menu").style.display = "block", document.getElementById("header-nijor-menu").innerHTML = "menu"));
      }, window.nijorfunc._yuChangeTheme = n8, window.nijorfunc._yuChangeTheme = n8;
      r5 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="5CxQ32zMHl">
        <span class="material-symbols-sharp menu" id="header-nijor-menu" n-scope="5CxQ32zMHl" onclick="window.nijorfunc._yuOpenCloseMenu(this)">menu</span>
        <a class="logo" id="header-nijor-logo" n-scope="5CxQ32zMHl" onclick="return window.nijor.redirect(this.href)" href="/"><img src="${o}" n-scope="5CxQ32zMHl"></a>
        <div class="nav-bar" n-scope="5CxQ32zMHl" onroute="window.nijorfunc._yuChangeRoute(this,$data)">
            <a tab="docs" class="nav-link" n-scope="5CxQ32zMHl" onclick="return window.nijor.redirect(this.href)" href="/docs">Docs</a>
            <a href="https://github.com/nijorjs" class="nav-link" n-scope="5CxQ32zMHl">Github</a>
            <a tab="faq" class="nav-link" n-scope="5CxQ32zMHl" onclick="return window.nijor.redirect(this.href)" href="/faq">FAQ</a>
            <button class="material-symbols-sharp theme-dark-btn" n-scope="5CxQ32zMHl" onclick="window.nijorfunc._yuChangeTheme()">dark_mode</button>
            <button class="material-symbols-sharp theme-light-btn" n-scope="5CxQ32zMHl" onclick="window.nijorfunc._yuChangeTheme()">light_mode</button>
        </div>
    </div>
`;
      }, async function() {
      });
      s5 = new window.nijor.component(async function() {
        return '<headern1y n-scope="KUJzBw0SoS"></headern1y>\n    <div style="margin-top: 5rem;" id="routes-slot-/" n-scope="KUJzBw0SoS"></div>\n';
      }, async function() {
        r5.init("headern1y"), await r5.run();
      });
      window.nijor.addSlot("/docs", () => Promise.resolve().then(() => (init_nijor_ea49d40b(), nijor_ea49d40b_exports))), window.nijor.addSlot("/faq", () => Promise.resolve().then(() => (init_nijor_d86d842a(), nijor_d86d842a_exports))), window.nijor.setRoute("/404", () => Promise.resolve().then(() => (init_eac5c69a(), eac5c69a_exports)), "/"), window.nijor.setRoute("/docs/code-splitting", () => Promise.resolve().then(() => (init_code_splitting_e305c76f(), code_splitting_e305c76f_exports)), "/docs"), window.nijor.setRoute("/docs/components", () => Promise.resolve().then(() => (init_components_adc165dd(), components_adc165dd_exports)), "/docs"), window.nijor.setRoute("/docs/custom-events", () => Promise.resolve().then(() => (init_custom_events_3eb026fc(), custom_events_3eb026fc_exports)), "/docs"), window.nijor.setRoute("/docs/dark-mode", () => Promise.resolve().then(() => (init_dark_mode_f5f60162(), dark_mode_f5f60162_exports)), "/docs"), window.nijor.setRoute("/docs/examples", () => Promise.resolve().then(() => (init_examples_b69564d2(), examples_b69564d2_exports)), "/docs"), window.nijor.setRoute("/docs/functional-attributes", () => Promise.resolve().then(() => (init_functional_attributes_fc6294c7(), functional_attributes_fc6294c7_exports)), "/docs"), window.nijor.setRoute("/docs", () => Promise.resolve().then(() => (init_index_1e5b1e53(), index_1e5b1e53_exports)), "/docs"), window.nijor.setRoute("/docs/installation", () => Promise.resolve().then(() => (init_installation_521bea79(), installation_521bea79_exports)), "/docs"), window.nijor.setRoute("/docs/nijor-cli", () => Promise.resolve().then(() => (init_nijor_cli_345b2011(), nijor_cli_345b2011_exports)), "/docs"), window.nijor.setRoute("/docs/reactivity", () => Promise.resolve().then(() => (init_reactivity_bbdcfbb9(), reactivity_bbdcfbb9_exports)), "/docs"), window.nijor.setRoute("/docs/routing", () => Promise.resolve().then(() => (init_routing_345a2109(), routing_345a2109_exports)), "/docs"), window.nijor.setRoute("/docs/routing.old", () => Promise.resolve().then(() => (init_routing_old_c8128c14(), routing_old_c8128c14_exports)), "/docs"), window.nijor.setRoute("/docs/structure", () => Promise.resolve().then(() => (init_structure_92c1304a(), structure_92c1304a_exports)), "/docs"), window.nijor.setRoute("/faq/How-Nijor-Works", () => Promise.resolve().then(() => (init_How_Nijor_Works_5dfb26d8(), How_Nijor_Works_5dfb26d8_exports)), "/faq"), window.nijor.setRoute("/faq/How-Scoped-CSS-Works", () => Promise.resolve().then(() => (init_How_Scoped_CSS_Works_4177beb8(), How_Scoped_CSS_Works_4177beb8_exports)), "/faq"), window.nijor.setRoute("/faq/enei", () => Promise.resolve().then(() => (init_enei_017f7c38(), enei_017f7c38_exports)), "/faq"), window.nijor.setRoute("/faq", () => Promise.resolve().then(() => (init_index_4efdc75a(), index_4efdc75a_exports)), "/faq"), window.nijor.setRoute("/faq/virtual-dom", () => Promise.resolve().then(() => (init_virtual_dom_43d4ed5d(), virtual_dom_43d4ed5d_exports)), "/faq"), window.nijor.setRoute("/", () => Promise.resolve().then(() => (init_index_88e6fdc8(), index_88e6fdc8_exports)), "/"), window.nijor.setRoute("/internet-error", () => Promise.resolve().then(() => (init_internet_error_6cb268bb(), internet_error_6cb268bb_exports)), "/"), s5.init("app"), s5.run();
      a = window.location.pathname;
      window.nijor.renderRoute(a), setTimeout(() => window.nijor.emitEvent("route", window.location.pathname), 1);
    }
  });
  init_app();
})();
