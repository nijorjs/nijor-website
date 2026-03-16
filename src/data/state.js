import { reactive } from "nijor/reactivity";
import { onRoute } from 'nijor/router';

export const route = reactive(window.location.pathname);

onRoute(r => route.value = r );