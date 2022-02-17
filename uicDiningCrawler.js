import cheerio from 'cheerio';
import fetch from 'node-fetch';

// get html from uic https://dining.uic.edu/locations/
const response = await fetch('https://dining.uic.edu/locations/');
const html = await response.text();
const $ = cheerio.load(html);

// $(".tile-item__image")[i].attribs.src -> img src
// $($(".tile-item__title--image")[0]).text().trim() -> title txt
// $($(".tile-item__description")[0]).text().trim() -> locations

let images = [];
let titles = ["Student Center East", "Student Center West"];
let locations = [];
let links = [];

images = $(".component-link-tile__item").find("img").map(function () {
    return $(this).attr('src').trim();
}).toArray();

titles = titles.concat($(".component-link-tile__item").find(".tile-item__title--image").map(function () {
    return $(this).text().trim();
}).toArray());

locations = $(".component-link-tile__item").find(".tile-item__description").map(function () {
    return $(this).text().trim();
}).toArray();

links = $(".component-link-tile__item").find(".tile-item__link").map(function () {
    return $(this).attr('href');
}).toArray();


let res = [];

for(let i = 0; i < images.length; i++) {
    res.push({
        url: images[i],
        title: titles[i],
        lcation: locations[i],
        link: links[i]
    })
}

console.log(res);


