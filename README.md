# R-bloggers Redirect

A Quantum Firefox (shld work in Chrome) unpacked WebExtension to find and load the real page link for an R-blog syndicated to R-bloggers.

## What's Inside The Tin

R-bloggers is a decent aggregator but most authors have a blog theme designed to format their posts optimally and they deserve the "clicks", too.

Load this WebExtension and whenever you hit an R-bloggers link that does point to a feeder blog you will automagically be redirected to said feeder blog's entry.

It should not interfere with general interaction on R-bloggers, just the final target article pages.

## Installation (Firefox)

- Clone the repo
- Read `manifest.json` and `rbloggers.js` to make sure I'm not pwning you
- Go to `about:debugging` in Firefox
- Hit "Load Temporary Addon"
- Select the `manifest.json`

## TODO

- generalize (and republish) for other aggregators
- better icon(s)
