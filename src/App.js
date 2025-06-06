import "nijor";
import {dispatchEvent} from "nijor";
import "nijor/router";
import {autoTheme} from  "nijor/theme";
import App from 'App.nijor';

//@Routes()

App.init('app');
(async ()=>await App.run())();
autoTheme();
window.nijor.renderRoute(window.location.pathname);
setTimeout(()=>dispatchEvent('route',window.location.pathname),100);