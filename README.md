# Automatic Redirection to source posts from aggregators

A Quantum Firefox (shld work in Chrome) unpacked WebExtension to find and load the real page link in aggregator re-posts

## What's Inside The Tin

Many aggregators are useful. Some are horrible. And, most authors have a blog theme designed to format their posts optimally and they deserve the "clicks", too.

Load this WebExtension and whenever you hit an aggregator page that does point to a feeder blog you will automagically be redirected to said feeder blog's entry. The `manifest.js` file is a good place to see which ones are supported (two right now).

It should not interfere with general interaction on most aggregators, just the final target article pages.

Currently has a hardcoded delay that's long enough to register as a "view" to most ad networks (since many/most aggregators rely on ad revenue).

## Installation (Firefox)

- Clone the repo
- Read `manifest.json` and various js files to make sure I'm not pwning you
- Go to `about:debugging` in Firefox
- Hit "Load Temporary Addon"
- Select the `manifest.json`

## TODO

- add more aggregators
- options page to customzie delay time and possibly other things
- some visual indicator about the impending redirect
- better icon(s)
