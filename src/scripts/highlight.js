import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/bash";
import bash from "highlight.js/lib/languages/javascript";

hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('javascript', js);
hljs.registerLanguage('bash', bash);

export default hljs;