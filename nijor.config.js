import shikijs from './plugins/codeblock.js';

export const server = {
    port : 3000,
    live_reload : true,
}

export const build = {
    mode : "ssr"
}

export const middlewares = [];

export const plugins = [shikijs];

export const headers = {};