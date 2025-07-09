import { Render, dispatchEvent } from "nijor";
import { autoTheme } from "nijor/theme";
import "nijor/router";
import App from 'App.nijor';

//@Routes()

(async()=>{
    await Render(App);
    autoTheme();
})();

setTimeout(()=>dispatchEvent('route',window.location.pathname),100);