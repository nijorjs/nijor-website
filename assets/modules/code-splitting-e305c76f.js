import{$ as t,a as o}from"./highlight-108c1935.js";import i from"./codeblock-86d6213a.js";var e=new window.nijor.component((async function(){return'<div style="display:none;" n-scope="iomqzRZuEbN8JlV4"><code4ttow n-scope="iomqzRZuEbN8JlV4"></code4ttow></div>\n    <section4ttow title="Code Splitting" n-scope="iomqzRZuEbN8JlV4">\n        The Nijor compiler automatically compiles and packages all <highlight4ttow n-scope="iomqzRZuEbN8JlV4">*.nijor page</highlight4ttow> files into multiple Javascript files. But compiles the <highlight4ttow n-scope="iomqzRZuEbN8JlV4">*.nijor component</highlight4ttow> files with the <highlight4ttow n-scope="iomqzRZuEbN8JlV4">*.nijor page</highlight4ttow> itself.\n        Although this is not an issue for most projects, it can cause problems with increased loading time, resulting in a bad user experience.\n        To overcome this problem, Nijor includes a built-in feature called code-splitting.\n        By code-splitting your application, you can selectively <highlight4ttow n-scope="iomqzRZuEbN8JlV4">lazy-load</highlight4ttow> only the components that are currently required by the user, which can greatly enhance your app\'s performance.\n        This approach does not reduce the overall amount of code in your app, but it does prevent loading of unnecessary code and reduces the amount of code needed during the initial load. All the pages in your app are lazy-loaded and there\'s no way to change it !\n    </section4ttow>\n    <section4ttow title="Lazy-loading a component" n-scope="iomqzRZuEbN8JlV4">\n        To lazy-load a component, just add the <highlight4ttow n-scope="iomqzRZuEbN8JlV4">lazy</highlight4ttow> attribute after it.\n        <code4ttow n-scope="iomqzRZuEbN8JlV4">\n            &lt;card1 n:imported="components/card.nijor"/&gt; &lt;!--Without Lazy Loading--&gt;\n            &lt;card2 n:imported="components/card.nijor" lazy/&gt; &lt;!--With Lazy Loading--&gt;\n        </code4ttow>\n    </section4ttow>\n'}),(async function(){t.init("section4ttow"),await t.run(),o.init("highlight4ttow"),await o.run(),i.init("code4ttow"),await i.run()}));export{e as default};