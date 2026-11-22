# Wish Hounds Press

**Live site:** [https://tabithapotts.github.io/wish-hounds-press/](https://tabithapotts.github.io/wish-hounds-press/)
*(TODO: confirm this link once GitHub Pages is switched on, and note the wishhoundspress.com address if it is pointed at the site.)*

Wish Hounds Press is a four-page website for an independent horror imprint, named after the ghostly hounds said to roam the Devon moors. It presents the imprint's first title, *A Book of Short Stories*, and points readers to the retailers where they can buy it.

## Table of contents

1. [Purpose](#purpose)
2. [Who it is for](#who-it-is-for)
3. [Features and user benefits](#features-and-user-benefits)
4. [Design](#design)
5. [Deployment](#deployment)
6. [Testing](#testing)
7. [Screenshots](#screenshots)
8. [Bugs and errors](#bugs-and-errors)
9. [Credits and attribution](#credits-and-attribution)
10. [Declaration of AI use](#declaration-of-ai-use)
11. [Planned future updates](#planned-future-updates)

## Purpose

The site has three aims:

- to sell books by directing readers to retailers;
- to build a mailing list through a newsletter sign-up;
- to present the imprint to bookshops and to authors who may want to submit.

It is built with HTML, CSS and Bootstrap for layout and responsiveness. The structure allows further titles to be added later, starting with a second short story collection.

## Who it is for

| Visitor | What they need | Where they find it |
| :---- | :---- | :---- |
| Readers | Learn about the book, sample each story, find where to buy it in print, ebook or audiobook | Book page |
| Bookshops | Trade information and contact details | Trade page, then Contact page |
| Authors | Whether the imprint is open to submissions | Trade page |

## Features and user benefits

*(TODO: update this list to match what is actually built before submission.)*

**Site-wide**

- A consistent navigation bar and footer with social links, so visitors can move between pages easily from anywhere.
- Semantic HTML, alt text on meaningful images and lazy-loaded images, for accessibility and faster loading.

**Book page**

- A hero section with the imprint logo, cover, blurb and buy buttons for print, ebook and audiobook, with an affiliate link disclosure. Readers can go straight to a retailer.
- One card per story, showing that story's title plate from the book. A "Read a sample" button opens a Bootstrap modal with the opening of the story, so readers can sample each one without leaving the page.
- A "coming soon" card previewing the next collection.
- A featured *Crow Girl* video with controls, a poster image and captions, so the reader decides when to play it.

<!-- DRAFT NOTES (16 November 2026): rewrite in your own words, update the bullets above to match, then delete this comment.

Book page changes:
- The hero shows the Crow Girl trailer in a portrait (9:16) frame, like a phone screen. It fills the width on a phone and is never taller than 80% of the screen on a laptop. The author's narration matches the text shown on screen, so it needs no separate captions. A still from the video is the poster, and preload="none" means it only downloads when the visitor presses play.
- The hero is kept short (blurb, one review and the buy buttons) so the buy buttons are visible without scrolling on a laptop.
- An "About the stories" section above the cards introduces the themes and each story.
- A "Reviews" section below the cards. Reviews use figure, blockquote and figcaption, with Bootstrap's blockquote classes.
- Audio sample: the Crow Girl pop-up has a 1 minute 32 second sample of the author reading the opening, using the browser's built-in audio player. The written excerpt below it acts as a transcript, for accessibility. A short script (assets/js/story-audio.js) stops the audio when the pop-up closes.

About page changes:
- The author bio now includes the author's awards and shortlistings.
-->

**About page**

- The imprint's story and the Devon legend behind its name, plus a short author bio.
- A Mailchimp newsletter sign-up, so interested readers can hear about new titles.

**Trade page**

- Trade information for bookshops (ISBN, format, pages, price and publication date), with a link to the contact form for trade terms.
- A note that submissions are currently closed, so authors know not to send manuscripts.

**Contact page**

- A contact form using Web3Forms, with no JavaScript. The browser checks the required fields and the email address before sending, and after sending the visitor is taken to a thank-you page (`thank-you.html`), so they know the message went through.
- A privacy note explaining how visitors' details are used.

<!-- DRAFT NOTE (17 November 2026): rewrite in your own words, then delete this comment.
- The "Contact and trade" page was split into two pages, Trade and Contact, so each page has one clear job. Bookshops and authors go to Trade; anyone with a question goes to Contact. The navigation now reads Book, About, Trade, Contact on every page.
- The Contact page is now a single centred column. The Trade page keeps the two-column layout, and the navbar still lines up with its right-hand column on large screens.
-->


## Design

The look is dark but stylish, like an old book: a parchment page, near-black story cards and black-line engraving-style artwork as accents. Colours are held as CSS variables so they stay consistent across pages.

| Name | Hex | Use |
| :---- | :---- | :---- |
| Parchment | `#E8DCC0` | Page background; text on near-black cards |
| Near-black | `#14110F` | Story cards, modals and footer; text on parchment |
| Cover red | `#B10034` | Tagline, active links, secondary buttons |
| Deep teal | `#2F6B5C` | Links and small accents on parchment |
| Deep brass | `#7A5C2E` | Small accents on parchment |
| Brass | `#B08D57` | Borders, rules and drop caps on near-black |
| Cover teal | `#468F7E` | Illustration frames and links on near-black |
| Soft parchment | `#D8CDB0` | Body text on near-black |

Near-black on parchment and parchment on near-black both reach a contrast ratio of 13.8:1, which passes WCAG AA. Cover red is never used as text on near-black, and brass and cover teal are never used as text on parchment, because those pairings fail the contrast requirement.

*(TODO, optional: add the colour palette image and wireframes.)*

<!-- DRAFT NOTES (16 November 2026, layout session): rewrite in your own words, then delete this comment.

Layout and decoration decisions:
- Centred text on the Book page: the hero, "About the stories" and "Reviews" are centred, with the cover and buy buttons centred beneath the blurb. The story text in the pop-ups stays left-aligned, because long centred passages are harder to read.
- Centred reviews: the brass rule down the left side looked lopsided on centred text, so centred reviews have short brass rules above and below the quote instead.
- Story cards: more space between the cards (1.5rem instead of 1rem) and at the screen edges on tablets and larger (3rem instead of 1.5rem), so the grid feels less crowded.
- Navigation: on large screens the nav links spread across the same width as the right-hand column of the Contact page, so "Book" lines up with the start of that column. On tablets the links have a little more space between them; on phones the collapsed menu is unchanged.
- Light text panels: after feedback from my teacher that the body text looked 'floaty', each body text section now sits in a pale parchment box (`--light-parchment`, #F3ECDA) with a thin near-black border to match the divider. The class is `.panel-light`, and it goes on a div inside each Bootstrap column, never on the column itself, so the gaps between columns stay intact.
- Divider: a plain line with a printer's flower (❧) in the middle, made with CSS flexbox and ::before and ::after. A thorny stem drawn as an SVG mask was tried, but I went back to the printer's flower because it is simpler and I can explain every line of it.
- Cover leaf: a leaf cut from the cover artwork (assets/images/divider-leaf.webp) was tried in the middle of the divider. The divider looked better as the stem alone, so the leaf is kept for use elsewhere.
-->



## Deployment

The site is deployed with GitHub Pages from the `main` branch.

1. Push the latest code to the `main` branch of the GitHub repository.
2. In the repository, open **Settings**, then **Pages**.
3. Under **Build and deployment**, set the source to **Deploy from a branch**, choose `main` and the `/ (root)` folder, then save.
4. Wait a minute or two, then open the live link at the top of this file.

*(TODO: after deploying, check the live site matches the version running locally.)*

To run it locally, clone the repository and open `index.html` in a browser.

## Testing

*(TODO: complete after testing, and add the screenshots of each result.)*

- HTML validated with the W3C Markup Validator: result to add.
- CSS validated with the W3C CSS Validator (Jigsaw): result to add.
- Lighthouse scores for Performance, Accessibility, Best Practices and SEO: results to add.
- Responsive layout checked on desktop, tablet and mobile widths: notes to add.

## Screenshots

*(TODO: add desktop and mobile screenshots of every page.)*

| Page | Desktop | Mobile |
| :---- | :---- | :---- |
| Book page | to add | to add |
| About | to add | to add |
| Trade | to add | to add |
| Contact | to add | to add |

## Bugs and errors

*(TODO: record the bugs you meet and how you fixed them, and list any that remain.)*

<!-- DRAFT NOTES (16 November 2026): rewrite in your own words, then delete this comment.

- Duplicate h1: adding the blurb created a second <h1> with the book title. A page should have one <h1>, as screen readers use it as the page's main title. Fixed by removing the second one.
- figcaption inside blockquote: the reviews first had <figcaption> inside <blockquote>, which the W3C validator rejects, because a <figcaption> must sit directly inside a <figure>. Fixed by wrapping each review in a <figure> and moving the <figcaption> after the <blockquote>.
- Prettier reformatting: saving index.html in VS Code reformatted the whole file, so the commit looked as if every line had changed. Fixed by committing the formatting on its own first, then the content changes, and formatting all three pages the same way.
- Audio kept playing after a pop-up was closed. Fixed with assets/js/story-audio.js, which pauses the audio when Bootstrap closes the pop-up.
- Video shape: a landscape (16:9) frame would have cropped the portrait trailer to a narrow strip. Fixed by changing the frame to 9:16 with a maximum height.
- Video file size: the original trailer was 14.6 MB. Resizing it to 720 x 1280 brought it down to about 5 MB, which helps the Lighthouse performance score.
- Gaps in the thorny stem (fixed before the stem was replaced by the printer's flower): the repeated pattern showed gaps between each section, because the browser kept each tile's proportions when stretching it to fit. Fixed by adding preserveAspectRatio="none" to the SVG.
- Half-thorns at the ends of the stem (also before it was replaced): the pattern was cut off part-way at each end. Fixed with mask-repeat: round, which stretches the tiles slightly so a whole number fits.
- Masks blocked when opened from disk: browsers refuse to load a mask image from a separate file when the site is opened directly from the computer (file://). Fixed by writing the SVG into the CSS as a data URI.
- About page logo squashed on tablets: between 768px and 991px the logo and the text sat side by side, but the logo column was only about 240px wide, so the logo's circular lettering ran into the heading. Fixed by moving the side-by-side layout from Bootstrap's md breakpoint (768px) to lg (992px), so on tablets the logo sits centred above the text.
-->

## Credits and attribution

- Bootstrap 5.3.9, loaded from the jsDelivr CDN.
- Google Fonts: IM Fell English and EB Garamond.
- Story title plates and text from *A Book of Short Stories* by Tabitha Potts. The Crow Girl plate is credited in the book as "Illustration by Amy Shepheard".
- Web3Forms (contact form) and Mailchimp (newsletter).
- The leaf image (`assets/images/divider-leaf.webp`) is cut from the cover artwork of *A Book of Short Stories*. The thorny stem divider is drawn in the style of the cover's vines. *(TODO: add the cover artist's credit.)*

*(TODO: list every external source, for example Bootstrap, any fonts, icons, images and the Web3Forms and Mailchimp services. Say where each came from.)*

<!-- DRAFT NOTES (16 November 2026): check, rewrite in your own words, then delete this comment.

- Book trailer: remade from the author's own crow photographs, set in EB Garamond, with the author's narration; built by Claude at the author's request.
- Crow Girl audio sample: read by the author, taken from the audiobook of A Book of Short Stories (Audible). Used under the ACX terms for Audible Exclusive titles, which allow verbatim excerpts of up to 10% of the audiobook's length on the rights holder's own website to promote it.
- Reviews: William J Brown in Horrified Magazine, and I. Rosenfeld for the British Fantasy Society. Consider adding links to the original reviews.
-->

## Declaration of AI use

**Build notes for the declaration (delete once it is written):**

- 15 November 2026: Claude (Anthropic) wrote the first version of `index.html`, `about.html`, `contact.html`, `assets/css/styles.css` and `assets/js/contact.js` from my brief, wireframes and colour palette.
- Claude converted the logo and the story title plates to WebP, and copied the opening paragraphs of each story from the print PDF into the modals.
- Claude drafted the legend paragraph, the author bio and the privacy note. I need to check and rewrite these.
- Everything changed after that date is my own work unless noted here.
- 22 November 2026: Claude built a new Crow Girl trailer at my request, from my own crow photographs, set in EB Garamond, with my narration. It replaces the earlier trailer.
- 22 November 2026: at my teacher's request, Claude replaced the contact form script (`assets/js/contact.js`) with a no-JavaScript version: a Web3Forms `redirect` field and a new `thank-you.html` page.

<!-- DRAFT NOTES (16 November 2026): rewrite in your own words for the declaration, then delete this comment.

What Claude did on 16 November:
- Suggested a portrait video frame, and wrote the HTML and CSS for it.
- Edited the original trailer (since replaced): removed the music, cut the out-of-date end card, resized it to 720 x 1280, slowed it to two-thirds speed and made a poster still.
- Checked the GitHub Pages file size limits and the ACX rules on audio excerpts for Audible Exclusive titles.
- Cut and converted the Crow Girl audio sample, and wrote the audio player markup, styles and the script that stops the audio when a pop-up closes.
- Reviewed my new blurb and reviews code, found two validator errors (a duplicate h1 and figcaption inside blockquote) and fixed them at my request.
- Restructured the Book page at my request: short hero, new "About the stories" and "Reviews" sections, awards moved to the About page. Changed quotes to curly quotes and story titles to italics.
- Split the work into separate commits, including a formatting-only commit.

What I did and decided myself:
- Chose to make the video portrait, to remove the music, to cut the end card and to slow the video down (original trailer, since replaced).
- Wrote the blurb, story descriptions, awards paragraph and chose the reviews.
- Narrated the audiobook, chose the length of the audio sample (to match the written excerpt) and confirmed the cut point by ear.
- Decided the house style: curly quotes, italic titles and "Potts’".

What Claude did later on 16 November (layout session):
- Created the 20 planning issues, labels and milestones on GitHub from my markdown file, and added them to the project board with a Priority field.
- Centred the Book page text, added space around the story cards and spread out the navbar, at my request.
- Cut a leaf from the cover artwork and made its background transparent, then drew the thorny stem divider in the style of the cover.
- Checked the divider at desktop and phone widths with screenshots, and fixed the gaps and half-thorns it found.
- Wrote the commit messages and split the work into separate commits.

What I did and decided myself (layout session):
- Supplied the planning issues, based on my Product Definition Challenge scores, and chose to track them on the project board. (TODO: say who drafted the issue text.)
- Asked for centred text, more space around the cards and a wider navbar lined up with the second column.
- Had the idea of reusing the cover artwork for the dividers, asked for a thorny stem, and chose the stem without the leaf.

Reflection prompts for the course: where did AI save time (media editing, spotting validator errors)? Where did you need to check its work (the audio cut point it could not hear, the ACX terms)? How did it change your workflow?
-->

*(TODO: write this in your own words once the build is finished. Say which tools you used, what you used them for, and the decisions you made yourself. The course also asks for short reflections on AI in code creation, debugging and optimisation, and on its overall effect on your workflow.)*

## Planned future updates

- A submission form with file attachments (a paid Web3Forms feature).
- Correcting the lettering on the imprint logo.
- Search and filter for the catalogue.
- A blog and an events section.
- Direct paperback sales through a hosted checkout, as a later phase.
- A page for the Story Radio anthology, the imprint's second title.
