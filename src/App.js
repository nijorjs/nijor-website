import { Render } from "nijor/core";
import { autoTheme } from "nijor/theme";
import "nijor/router";
import App from "@/App.nijor";

autoTheme();

//@Routes()

(async () => {
    if (document.body.classList.contains('rendered')) {
        document.body.innerHTML = `<app></app>`;
    }
    await App.run('app', 1);
    await Render(document.getElementById('app'));
})();