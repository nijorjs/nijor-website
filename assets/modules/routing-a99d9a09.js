import{$ as e,a as t}from"./highlight-9f5512bf.js";import i from"./codeblock-5d174ceb.js";var n=new window.nijor.component((async function(){return'<sectionxj6 title="Routing" n-scope="HEScrdA3Y"></sectionxj6>\n    <sectionxj6 title="Introduction" n-scope="HEScrdA3Y">\n        Nijor provides a client-side routing capability that allows the rendering of different user interfaces based on specific routes. Unlike traditional approaches, Nijor\'s routing mechanism renders routes within the same page, eliminating the need for page refreshes and delivering a seamless user experience.\n    </sectionxj6>\n    <sectionxj6 title="File-Based Routing" n-scope="HEScrdA3Y">\n        Nijor simplifies the process of rendering pages for different routes by utilizing file-based routing. This means that developers are relieved from the responsibility of manually coding the rendering logic for each route. Instead, Nijor\'s compiler automatically handles this based on the organization of files in the <highlightxj6 n-scope="HEScrdA3Y">src/pages</highlightxj6> directory of your Nijor project. <br n-scope="HEScrdA3Y">\n        To illustrate this behavior, let\'s consider an example. When a user visits the \'/\' route of our website, the page rendered will be src/pages/index.nijor. Similarly, accessing the \'/about\' route will trigger the rendering of src/pages/about.nijor. In the event that a route doesn\'t exist, Nijor will render src/pages/404.nijor. This convenient approach streamlines the development process and improves overall efficiency.\n    </sectionxj6>\n    <sectionxj6 title="Understanding the App.nijor file" n-scope="HEScrdA3Y">\n        The <highlightxj6 n-scope="HEScrdA3Y">App.nijor</highlightxj6> is a very important file inside the <highlightxj6 n-scope="HEScrdA3Y">src/</highlightxj6> directory of a Nijor project. This page gets rendered before rendering any route in Nijor. Without this page, the Nijor router simply won\'t work. You can render those components in this page which remain same in all the pages, thus preventing the need for rerendering the common components during navigation through different routes. <br n-scope="HEScrdA3Y">\n        The App.nijor file must have the <highlightxj6 n-scope="HEScrdA3Y">&lt;div n:slot&gt;&lt;/div&gt;</highlightxj6> in the <highlightxj6 n-scope="HEScrdA3Y">App.nijor</highlightxj6> file. The content from the routes (pages from the src/page/ dir) will be rendered inside this special tag.\n        <codexj6 n-scope="HEScrdA3Y">\n            &lt;template&gt;\n                &lt;div n:slot&gt;\n                    &lt;!--All the pages from the src/pages directory are rendered inside this div (marked with the n:slot attribute). \n                        Anything outside this div is always rendered irrespective of route.\n                        You can write code for common header or footer outside this div so that it renders in every page, #Reasuablity\n                    --&gt;\n                &lt;/div&gt;\n\n                &lt;!-- Note : Do not add an \'id\' attribute to the div with the n:slot attribute. For styling, use \'class\' instead. --&gt;\n            &lt;/template&gt;\n        </codexj6>\n    </sectionxj6>\n    <sectionxj6 title="Boilerplate Code for Routing" n-scope="HEScrdA3Y">\n        In order to use the Nijor Router in your project, your <highlightxj6 n-scope="HEScrdA3Y">src/App.js</highlightxj6> file must contain the following Boilerplate code :\n        <codexj6 lang="js" n-scope="HEScrdA3Y">\n            import \'nijor\';\n            import \'nijor/router\';\n            import App from \'App.nijor\';\n\n            //@Routes()\n            \n            App.init(\'app\');\n            App.run();\n            let url = window.location.pathname;\n            window.nijor.renderRoute(url);\n        </codexj6>\n        Note: The <highlightxj6 n-scope="HEScrdA3Y">//@Routes()</highlightxj6> comment is crucial for the Nijor router to function properly. Please ensure that there is no code or comments written on the same line as this comment. <br n-scope="HEScrdA3Y">\n    </sectionxj6>\n    <sectionxj6 title="Parameterized Routing" n-scope="HEScrdA3Y">\n        Nijor supports parameterized routes, allowing for variable paths within routes. To define a parameterized route, enclose the parameter(s) using square brackets, e.g., [parameter-name]. You can add any desired text before or after the parameter name. For example: @[user].nijor, [item].nijor, id-[x].nijor, etc.\n        <br n-scope="HEScrdA3Y"><br n-scope="HEScrdA3Y">\n        Let\'s explore parameterized routes with an example: <br n-scope="HEScrdA3Y">\n        Suppose we are building a profile page for users on our site, and we want to render the profile of \'Arun\' when accessing the \'/@arun\' route. Similarly, we want to display the profile of \'Himasri\' for the \'/@himasri\' route, and so on. Instead of creating separate files for each user, such as <highlightxj6 n-scope="HEScrdA3Y">src/pages/@arun</highlightxj6> , <highlightxj6 n-scope="HEScrdA3Y">src/pages/@himasri</highlightxj6>, and thousands of other profiles, we can create a single file, <highlightxj6 n-scope="HEScrdA3Y">src/pages/@[user].nijor</highlightxj6> to handle all user profiles. This way, when a user visits routes like \'/@himasri\' or \'/@arun\', they will be directed to the same page, <highlightxj6 n-scope="HEScrdA3Y">src/pages/@[user].nijor</highlightxj6>. <br n-scope="HEScrdA3Y">\n        <codexj6 file="src/pages/@[user]" n-scope="HEScrdA3Y">\n            &lt;template specs=[user]&gt; &lt;!-- Receiving the parameterised route by array destructuring in specs --&gt;\n                &lt;div&gt;\n                    &lt;h1&gt;Hi {user}&lt;/h1&gt; \n                    &lt;!-- \n                        If the user visits /@arun &lt;h1&gt;Hi {user}&lt;/h1&gt; will become &lt;h1&gt;Hi arun&lt;/h1&gt; \n                        If the user visits /@himasri &lt;h1&gt;Hi {user}&lt;/h1&gt; will become &lt;h1&gt;Hi himasri&lt;/h1&gt; \n                    --&gt;\n                &lt;/div&gt;\n            &lt;/template&gt;\n        </codexj6>\n    </sectionxj6>\n    <sectionxj6 title="Sub Routes within a route" n-scope="HEScrdA3Y">\n        By sub routes, we mean routing within a parent route. <br n-scope="HEScrdA3Y">\n        For instance, there is a route say, <highlightxj6 n-scope="HEScrdA3Y">/blog</highlightxj6> which has some sub-routes like <highlightxj6 n-scope="HEScrdA3Y">/blog/What-is-Nijor</highlightxj6>, <highlightxj6 n-scope="HEScrdA3Y">/blog/Learning-Nijor</highlightxj6>, etc and each of these pages have a lot of common components and common layout in general. So, you don\'t want to copy-paste the same common code for these pages. In these scenarios, sub-routes can be very useful. You can also have parameterized routes as subroutes within a route. <br n-scope="HEScrdA3Y"><br n-scope="HEScrdA3Y">\n        \n        In order to create a sub route within a route : <br n-scope="HEScrdA3Y">\n        (1) Create a folder, say \'blog\' inside the src/pages directory. <br n-scope="HEScrdA3Y">\n        (2) Create the <highlightxj6 n-scope="HEScrdA3Y">.nijor</highlightxj6> file within it. (write .nijor the way you write .gitignore).<br n-scope="HEScrdA3Y">\n        (3) Create <highlightxj6 n-scope="HEScrdA3Y">index.nijor</highlightxj6> file within the folder.<br n-scope="HEScrdA3Y">\n        (4) Create <highlightxj6 n-scope="HEScrdA3Y">What-is-Nijor.nijor</highlightxj6> file within the folder.<br n-scope="HEScrdA3Y"><br n-scope="HEScrdA3Y">\n        \n        Now, write all the common components in the <highlightxj6 n-scope="HEScrdA3Y">.nijor</highlightxj6> file. This file contains all the common code/components for the \'/blog\' route. Whenever somebody visits \'/blog/*\', this page will get rendered.\n        <codexj6 file="src/pages/blog/.nijor" n-scope="HEScrdA3Y">\n            &lt;sidenav n:imported="components/sidenav"/&gt;\n            &lt;template&gt;\n                &lt;sidenav&gt;&lt;/sidenav&gt;\n                &lt;div n:slot&gt;\n                    &lt;!--All the subroutes will be rendered inside this folder.\n                    Anything outside it will be rendered for any sub-route within \'/blog\' route--&gt;\n                &lt;/div&gt;\n            &lt;/template&gt;\n        </codexj6>\n\n        <codexj6 file="src/pages/blog/index.nijor" n-scope="HEScrdA3Y">\n            &lt;template&gt;\n                &lt;div&gt;\n                    This is the Index page.\n                    Whenever somebody visits \'/blog/\' or just \'/blog\' , this page will be rendered.\n                &lt;/div&gt;\n            &lt;/template&gt;\n        </codexj6>\n\n        <codexj6 file="src/pages/blog/What-is-Nijor.nijor" n-scope="HEScrdA3Y">\n            &lt;template&gt;\n                &lt;div&gt;\n                    This is the What-is-Nijor page.\n                    Whenever somebody visits \'/blog/What-is-Nijor\', this page will be rendered.\n                &lt;/div&gt;\n            &lt;/template&gt;\n        </codexj6>\n\n    </sectionxj6>\n'}),(async function(){e.init("sectionxj6"),await e.run(),t.init("highlightxj6"),await t.run(),i.init("codexj6"),await i.run()}));export{n as default};