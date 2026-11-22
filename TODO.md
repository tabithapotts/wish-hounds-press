# Wish Hounds Press: what to edit next

The four pages are built and working. Everything still to do is marked in the code with a `TODO` comment.
In VS Code, press Cmd + Shift + F and search for `TODO` to jump to each one.

## Text in [square brackets] to replace

- [x] `index.html`: the book blurb in the hero
- [x] `index.html`: the "Coming soon" line about the next collection
- [x] `about.html`: why you started the imprint
- [ ] `about.html`: check the legend paragraph and the author bio (both are drafts)
- [x] `trade.html`: trade details (ISBN, format, pages, price, publication date)
- [ ] `contact.html`: check the privacy wording matches what you actually do

## Links and services to connect

- [x] `index.html`: ebook and audiobook buttons link to Amazon UK with `?tag=mrstabithapot-21`. The paperback button links to IngramSpark
- [ ] Footer on all four pages: Instagram and Facebook links still point to `#`
- [x] Web3Forms access key added to the contact and newsletter forms (the same key works locally and on the live site)
- [ ] Send a test message from both forms on the live site and check the thank-you page appears
- [x] `about.html`: newsletter form now uses Web3Forms (signups arrive by email; add them to the mailing list by hand). Change its `redirect` too when wishhoundspress.com goes live

## Files to add

- [ ] Decide whether to use the Amazon mobile video too (it is in the `wish-hounds-press-video-originals` folder, outside the site)
- [x] The corrected logo ("Wish Hounds Press"), now `assets/images/whp-logo-new.webp`

## Audio samples

- [x] Crow Girl sample (`assets/audio/crow-girl-sample.m4a`, 1:32) ends after "...from a single feather or an egg."
- [x] The Edge sample (`assets/audio/the-edge-clip.mp3`, 0:50)
- [x] Hagstone (1:03), The Bells of London Town (1:00), The Djinn (1:33) and The Gift (1:07) samples added
- [x] All six samples total 7:05, under the 8-minute Audible Exclusive excerpt allowance
- [ ] Check by ear that each clip matches its written excerpt (the excerpt is the transcript)
- [ ] Full chapters are kept in `wish-hounds-press-audio-originals`, outside the site. Never put a full chapter in `assets/audio/`

## Decisions still open

- [x] Add the book cover beside the intro text (done: beside the buy buttons)
- [ ] Keep one row of six cards on very wide screens (1400px and up)?
- [ ] Has your tutor approved a self-chosen project?

## Before you submit

- [x] Delete the old, unused image and video files
- [ ] Validate the HTML (validator.w3.org) and CSS (jigsaw.w3.org/css-validator)
- [ ] Run Lighthouse in Chrome DevTools
- [ ] Finish the README: screenshots, testing results, credits and the AI declaration in your own words
- [ ] Commit in small steps with clear messages
