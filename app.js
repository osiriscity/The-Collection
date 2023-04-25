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



// array for card
const movies = [
    {
      titre: "Iron man",
      date: "2008",
      realisateur: "Jon Favreau",
      platforme: ["Disney+ , AppleTv"],
      affiche : "./asset/img/iron-man.jpg",
      teaser: "https://youtu.be/8ugaeA-nMTc",
      genre: ["Super-héros"],
    },
    //2
    {
      titre: "Aparajito (L'invaincu)",
      date: "1956",
      realisateur: "Satyajit Ray",
      platforme: ["Prime video, Plex"],
      affiche : "asset/img/aparajito.jpg",
      teaser: "https://youtu.be/mgv68E_o6VM",
      genre: ["Drama"],
    },
    //3
    {
      titre: "Blade Runner 2049",
      date: "30 avril 2008",
      realisateur: "Denis Villeneuve",
      platforme: ["Canal+ , Prime video"],
      affiche : "asset/img/BladeRunner.jpg",
      teaser: "https://youtu.be/gCcx85zbxz4",
      genre: ["Science-fiction"],
    },
    //4
    {
      titre: "Us",
      date: "2019",
      realisateur: "Jordan Peele",
      platforme: ["Netflix"],
      affiche : "asset/img/us.jpg",
      teaser: "https://youtu.be/hNCmb-4oXJA",
      genre: ["Horreur, Thriller"],
    },
    //5
    {
      titre: "기생충 (Parasite)",
      date: "2019",
      realisateur: "Bong Joon-ho",
      platforme: ["Prime video"],
      affiche : "asset/img/parasite.jpg",
      teaser: "https://youtu.be/5xH0HfJHsaY",
      genre: ["Thriller, Drame"],
    },
    //6
    {
      titre: "L.A Confidential",
      date: "1997",
      realisateur: "Curtis Hanson",
      platforme: ["Disney+"],
      affiche : "asset/img/la.confidential.jpg",
      teaser: "https://youtu.be/6sOXrY5yV4g",
      genre: ["Policier"],
    },
    //7
    {
      titre: "Iron man",
      date: "30 avril 2008",
      realisateur: "Jon Favreau",
      platforme: ["Disney+ , AppleTv"],
      affiche : "",
      teaser: "https://youtu.be/8ugaeA-nMTc",
      genre: ["Super-héros"],
    },
    //8
    {
      titre: "Iron man",
      date: "30 avril 2008",
      realisateur: "Jon Favreau",
      platforme: ["Disney+ , AppleTv"],
      affiche : "",
      teaser: "https://youtu.be/8ugaeA-nMTc",
      genre: ["Super-héros"],
    },
    //9
    {
      titre: "Iron man",
      date: "30 avril 2008",
      realisateur: "Jon Favreau",
      platforme: ["Disney+ , AppleTv"],
      affiche : "",
      teaser: "https://youtu.be/8ugaeA-nMTc",
      genre: ["Super-héros"],
    },
    //10
    {
      titre: "Iron man",
      date: "30 avril 2008",
      realisateur: "Jon Favreau",
      platforme: ["Disney+ , AppleTv"],
      affiche : "",
      teaser: "https://youtu.be/8ugaeA-nMTc",
      genre: ["Super-héros"],
    },
    //11
    {
      titre: "Iron man",
      date: "30 avril 2008",
      realisateur: "Jon Favreau",
      platforme: ["Disney+ , AppleTv"],
      affiche : "",
      teaser: "https://youtu.be/8ugaeA-nMTc",
      genre: ["Super-héros"],
    },
    //12
    {
      titre: "Iron man",
      date: "30 avril 2008",
      realisateur: "Jon Favreau",
      platforme: ["Disney+ , AppleTv"],
      affiche : "",
      teaser: "https://youtu.be/8ugaeA-nMTc",
      genre: ["Super-héros"],
    },
];