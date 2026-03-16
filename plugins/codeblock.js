import { codeToHtml } from 'shiki/bundle/web';

function replaceTags(code, oTag, nTag) {
  const regex = new RegExp(`<${oTag}([^>]*)>([\\s\\S]*?)</${oTag}>`, 'gi');
  return code.replace(regex, (match, attrs, content) => `<${nTag}${attrs}>${content}</${nTag}>`);
}

export default async function ({ document, scripts }) {

    for await (const element of document.querySelectorAll('code[shiki]')) {
        element.querySelectorAll('nijor-style').forEach(style => {
            style.removeAttribute('theme');
        });

        const lang = element.getAttribute('lang');

        let html = element.innerHTML;
        html = replaceTags(html,'template', 'body');
        html = replaceTags(html,'nstyle', 'style');
        html = replaceTags(html,'nscript', 'script');
        html = replaceTags(html,'nhead', 'head');
        html = html.replaceAll("</import>","");
        html = html.replace('nroute','n:route');
        html = html.replace('nref','n:ref');
        html = html.replace('nbind','n:bind');
        html = html.replaceAll('&lt;','<');
        html = html.replaceAll('&gt;','>');
        element.removeAttribute('shiki');
        element.removeAttribute('lang');
        
        try {
            let code = await codeToHtml(html, {
                lang: lang,
                theme: 'slack-dark'
            });
            
            code = code.replaceAll('#F44747','#569CD6')
            code = code.replaceAll(`<span style="color:#E6E6E6">=</span><span style="color:#CE9178">""</span>`,"");

            element.innerHTML = code;
        } catch (error) {
            console.error(`[Shiki Plugin] : ${error}`);
        }
    }

    return ({
        name : "shikijs",
        data:{
            body: document.body.innerHTML,
            ...scripts
        } 
    });
}