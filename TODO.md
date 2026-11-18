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
- [ ] `contact.html`: localhost Web3Forms key added for testing. Swap in the live site key before launch, then send a test message
- [ ] `about.html`: paste your Mailchimp form address into the newsletter form's `action`

## Files to add

- [ ] Decide whether to use the Amazon mobile video too (it is in the `wish-hounds-press-video-originals` folder, outside the site)
- [x] The corrected logo ("Wish Hounds Press"), now `assets/images/whp-logo-new.webp`

## Audio samples

- [x] Crow Girl sample (`assets/audio/crow-girl-sample.m4a`, 1:32) ends after "...from a single feather or an egg."
- [ ] Audible Exclusive allows 8 minutes of excerpts in total. Crow Girl uses 1:32, leaving about 6:30 for the other five stories (up to about 1:15 each)
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
