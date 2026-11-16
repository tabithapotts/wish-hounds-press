# Wish Hounds Press

**Live site:** [https://tabithapotts.github.io/wish-hounds-press/](https://tabithapotts.github.io/wish-hounds-press/)
*(TODO: confirm this link once GitHub Pages is switched on, and note the wishhoundspress.com address if it is pointed at the site.)*

Wish Hounds Press is a three-page website for an independent horror imprint, named after the ghostly hounds said to roam the Devon moors. It presents the imprint's first title, *A Book of Short Stories*, and points readers to the retailers where they can buy it.

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
| Bookshops | Trade information and contact details | Contact and trade page |
| Authors | Whether the imprint is open to submissions | Contact and trade page |

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

**About page**

- The imprint's story and the Devon legend behind its name, plus a short author bio.
- A Mailchimp newsletter sign-up, so interested readers can hear about new titles.

**Contact and trade page**

- A contact form using Web3Forms with an immediate on-screen confirmation, so the sender knows the message went through.
- Trade information for bookshops, a note that submissions are currently closed, and a privacy note.

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
| Contact and trade | to add | to add |

## Bugs and errors

*(TODO: record the bugs you meet and how you fixed them, and list any that remain.)*

## Credits and attribution

- Bootstrap 5.3.9, loaded from the jsDelivr CDN.
- Google Fonts: IM Fell English and EB Garamond.
- Story title plates and text from *A Book of Short Stories* by Tabitha Potts. The Crow Girl plate is credited in the book as "Illustration by Amy Shepheard".
- Web3Forms (contact form) and Mailchimp (newsletter).

*(TODO: list every external source, for example Bootstrap, any fonts, icons, images and the Web3Forms and Mailchimp services. Say where each came from.)*

## Declaration of AI use

**Build notes for the declaration (delete once it is written):**

- 15 November 2026: Claude (Anthropic) wrote the first version of `index.html`, `about.html`, `contact.html`, `assets/css/styles.css` and `assets/js/contact.js` from my brief, wireframes and colour palette.
- Claude converted the logo and the story title plates to WebP, and copied the opening paragraphs of each story from the print PDF into the modals.
- Claude drafted the legend paragraph, the author bio and the privacy note. I need to check and rewrite these.
- Everything changed after that date is my own work unless noted here.

*(TODO: write this in your own words once the build is finished. Say which tools you used, what you used them for, and the decisions you made yourself. The course also asks for short reflections on AI in code creation, debugging and optimisation, and on its overall effect on your workflow.)*

## Planned future updates

- A submission form with file attachments (a paid Web3Forms feature).
- Correcting the lettering on the imprint logo.
- Search and filter for the catalogue.
- A blog and an events section.
- Direct paperback sales through a hosted checkout, as a later phase.
- A page for the Story Radio anthology, the imprint's second title.
