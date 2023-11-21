import * as utils from './utils.js';

const name = document.getElementById("name");
const description = document.getElementById("description");
const fb_link = document.getElementById("fb_link");
const insta_link = document.getElementById("insta_link");
const yt_link = document.getElementById("yt_link");
// const github_link = document.getElementById("github_link");

name.innerHTML = utils.name;
description.innerHTML = utils.description;
fb_link.href = utils.fb_link;
insta_link.href = utils.insta_link;
yt_link.href = utils.yt_link;
// github_link.href = utils.github_link;
