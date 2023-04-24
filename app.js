const html = document.createElement('html');
html.lang = 'en';

const head = document.createElement('head');

const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', "UTF-8");

const metaCompat = document.createElement('meta');
metaCompat.setAttribute('http-equiv', "X-UA-Compatible");
metaCompat.setAttribute('content', "IE=edge");

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', "viewport");
metaViewport.setAttribute('content', "width=device-width, initial-scale=1.0");

const linkStylesheet = document.createElement('link');
linkStylesheet.setAttribute('rel', "stylesheet");
linkStylesheet.setAttribute('href', "assets/style.css");

const title = document.createElement('title');
title.textContent = "The collection";

const body = document.createElement('body');

const h1 = document.createElement('h1');
h1.textContent = "Movie Collection";

const divCardContainer = document.createElement('div');
divCardContainer.setAttribute('id', "card-container");

const script = document.createElement('script');
script.setAttribute('defer', "");
script.setAttribute('src', "app.js");

head.append(metaCharset, metaCompat, metaViewport, linkStylesheet, title);
body.append(h1, divCardContainer, script);
html.append(head, body);

document.documentElement.replaceWith(html);
