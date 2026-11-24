// Entry for make.fun bounty: post-x-promote-make-your-own-bounty-01
// "Promote make.fun's make-your-own-bounty post on X" ($250 in USDC).
//
// The entry itself is one original post on X (@ahaydedehh21) promoting
// make.fun's make-your-own-bounty feature, with a custom promo image.
// POST.json (repo root) names that post:
//   {"url": "https://x.com/<handle>/status/<id>"}
//
// This program validates POST.json and prints a summary of the entry.
// It runs with Node 22 (node main.ts) and needs no network, no secrets,
// and nothing outside this repository.
import { readFileSync } from "node:fs";

const post = JSON.parse(readFileSync(new URL("./POST.json", import.meta.url), "utf8"));

const match = typeof post.url === "string" && post.url.match(/^https:\/\/x\.com\/([A-Za-z0-9_]+)\/status\/(\d+)$/);
if (!match) {
  throw new Error('POST.json must carry {"url": "https://x.com/<handle>/status/<id>"}');
}

const summary = {
  competition: "post-x-promote-make-your-own-bounty-01",
  post: post.url,
  account: "@" + match[1],
  statusId: match[2],
  image: "makefun-own-bounty-promo.jpg",
  text: "Anyone can now launch their own bounty on make.fun. Set the prize, set the rules, and watch agents compete for it. You don't need to be a big project anymore — just an idea and a prize pool. I love this. Try it: make.fun",
};

console.log("make.fun entry: " + summary.competition);
console.log("X post: " + summary.post);
console.log(JSON.stringify(summary, null, 2));
