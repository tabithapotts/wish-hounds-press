# Wish Hounds Press

**Live site:** [https://tabithapotts.github.io/wish-hounds-press/](https://tabithapotts.github.io/wish-hounds-press/)

Wish Hounds Press is the website for a small publishing imprint run by an author. It publishes dark literary short fiction and is named after the Wish, or Wisht, Hounds of Devon: a pack of spectral hounds that kept their kennel in Wistman's Wood and hunted lone travellers and the spirits of unbaptised children.

The site has four pages, plus a thank-you page for the contact form. It presents the imprint's first title, *A Book of Short Stories*, and points readers to the retailers where they can buy it.

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

It is built with HTML, CSS and Bootstrap for layout and responsiveness. The structure allows new titles to be added later, starting with the two books planned for 2027: an anthology of short stories by Story Radio authors and a collection of Tabitha Potts' prize-winning stories.

## Who it is for

| Visitor | What they need | Where they find it |
| :---- | :---- | :---- |
| Readers | Learn about the book, sample each story, find where to buy it in print, ebook or audiobook | Book page |
| Bookshops | Trade information and contact details | Trade page, then Contact page |
| Authors | Whether the imprint is open to submissions | Trade page |
| Reviewers | Information about the book and a way to ask for a review copy | Book page, then Trade or Contact page |

## Features and user benefits

**Site-wide**

- A consistent navigation bar and footer on every page, so visitors can move between pages easily from anywhere.
- Semantic HTML, alt text on meaningful images and lazy-loaded images, for accessibility and faster loading.
- A "Join the newsletter" link in the footer of every page, so visitors can sign up from anywhere on the site.

**Book page**

- **Hero section:** the most important part of the page for readers. It has the imprint logo, the blurb, the cover and buy buttons for the paperback, ebook and audiobook, with an affiliate link disclosure, so readers can go straight to a retailer.
- **Reviews slider:** three reviews that change only when the visitor clicks the arrows or dots, so nothing moves on its own.
- **Crow Girl trailer:** a portrait video with my narration and the words shown on screen, and a poster image. It only downloads when the visitor presses play. With the sample pop-ups, it gives a really good feel for the book and the audiobook.
- **Story samples:** one card for each of the six stories, showing its title plate from the book. "Read a sample" opens a Bootstrap modal pop-up with the opening of the story and an audio clip of me reading it, so readers can sample the book and the audiobook without leaving the page. The written excerpt also acts as a transcript of the audio. I think the samples and the trailer are the best features of the site.
- **"About the stories":** an introduction to the themes of the collection, above the cards.
- **"Coming soon":** a panel about the two books planned for 2027, with a link to the newsletter.

**About page**

- Visitors can find out more about me and the imprint, and get a sense of the kind of fiction I publish.
- **The imprint's story:** why I started Wish Hounds Press.
- **The Devon legend:** the story of the Wish Hounds behind the name, with a link to read more about them.
- **Author bio:** a short biography, including my awards and shortlistings.
- **Newsletter sign-up:** readers can sign up to hear about new titles. It uses Web3Forms with no JavaScript, like the contact form: each sign-up arrives by email and I add it to the mailing list by hand.

**Trade page**

- Trade information for bookshops and libraries: ISBN, format, pages, price and publication date, with a link to the contact form for trade terms and review copies.
- A note that submissions are currently closed, so authors know not to send manuscripts.

**Contact page**

- A contact form using Web3Forms, with no JavaScript. The browser checks the required fields and the email address before sending, and afterwards the visitor is taken to a thank-you page, so they know the message went through.
- A dropdown asking who is getting in touch (reader, bookshop or library, press or reviewer, or other), so I can see at a glance what each message is about.
- A privacy note explaining how visitors' details are used.

Trade and contact information started out on one page, but it looked too busy, so I split it into two. The Trade page is for bookshops, reviewers and authors, and the Contact page is for anyone with a question.

## Design

The look is dark but stylish, like an old book: a parchment page, near-black story cards and black-line engraving-style artwork as accents. Woodcuts and an "old book" feel are very common on folk horror websites, so the style tells visitors straight away what kind of fiction the imprint publishes. Colours are held as CSS variables so they stay consistent across pages.

**Fonts**

- **IM Fell English** for headings, the navigation, buttons and drop caps. It looks like an old printed book and adds atmosphere.
- **EB Garamond** for body text, because it is easier to read in longer passages.

Both come from Google Fonts and are held as CSS variables (`--font-heading` and `--font-body`).

**Colours**

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
| Light parchment | `#F3ECDA` | Background of the body text panels |

Near-black on parchment and parchment on near-black both reach a contrast ratio of 13.8:1, which passes WCAG AA. Cover red is never used as text on near-black, and brass and cover teal are never used as text on parchment, because those pairings fail the contrast requirement.

*(TODO, optional: add the colour palette image and wireframes.)*

**Layout decisions**

- **Centred text on the Book page:** the hero and "About the stories" are centred, with the cover and buy buttons beneath the blurb. The story text in the pop-ups stays left-aligned, because long centred passages are harder to read.
- **Light text panels:** after feedback from my teacher that the body text looked "floaty", each body text section now sits in a pale parchment box (`.panel-light`) with a thin near-black border to match the divider. The class goes on a div inside each Bootstrap column, not on the column itself, so the gaps between columns stay intact.
- **Divider:** a plain line with a printer's flower (❧) in the middle, made with CSS flexbox and `::before` and `::after`. I chose it because it is simple and I can explain every line of it.
- **Navigation:** the links sit on the right, with more space between them on tablets and large screens; on phones they collapse into a menu. An earlier version lined the links up with the Trade page's right-hand column using container query units (`cqw`), but I simplified it because the calculation was too complex to explain.
- **Reviews slider:** the reviews never move on their own, for accessibility; visitors change them with the arrows or dots. Large brass quotation marks in IM Fell English frame each quote. The arrows are made dark with Bootstrap's own `carousel-dark` class, and the dots are plain brass circles, an outline for each review and filled for the one on show.

## Deployment

The site is deployed with GitHub Pages from the `main` branch.

1. Push the latest code to the `main` branch of the GitHub repository.
2. In the repository, open **Settings**, then **Pages**.
3. Under **Build and deployment**, set the source to **Deploy from a branch**, choose `main` and the `/ (root)` folder, then save.
4. Wait a minute or two, then open the live link at the top of this file.

After deploying, I checked that the live site matches the version running locally. The site will later move to the imprint's own domain, wishhoundspress.com.

To run it locally, clone the repository and open `index.html` in a browser.

## Testing

### HTML validation

Each live page was checked with the [W3C Markup Validation Service](https://validator.w3.org/nu/) on 22 November 2026, with "errors & warnings only" ticked.

| Page | Result | Screenshot |
| :---- | :---- | :---- |
| Book (`index.html`), before the fix | 7 errors | [html-index-before.png](docs/testing/validation/html-index-before.png) |
| Book (`index.html`), after the fix | No errors or warnings | [html-index-after.png](docs/testing/validation/html-index-after.png) |
| About (`about.html`) | No errors or warnings | [html-about.png](docs/testing/validation/html-about.png) |
| Trade (`trade.html`) | No errors or warnings | [html-trade.png](docs/testing/validation/html-trade.png) |
| Contact (`contact.html`) | No errors or warnings | [html-contact.png](docs/testing/validation/html-contact.png) |
| Thank you (`thank-you.html`) | No errors or warnings | [html-thank-you.png](docs/testing/validation/html-thank-you.png) |

The 7 errors on the Book page were fixed with ARIA roles (see Bugs and errors).

### CSS validation

`assets/css/styles.css` was checked with the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) (CSS level 3 + SVG): no errors found. [Screenshot: css-styles.png](docs/testing/validation/css-styles.png)

The validator lists 14 warnings. They read "Due to their dynamic nature, CSS variables are currently not statically checked", which is the validator's standard message for any stylesheet that uses CSS variables, not a fault.

### Lighthouse

**All four categories, live site (PageSpeed Insights).** I ran Lighthouse on every live page with Google's [PageSpeed Insights](https://pagespeed.web.dev/) on 22 November 2026, which uses Lighthouse 13.6.0. Screenshots are in `docs/testing/lighthouse/`, named `pagespeed-<page>-mobile.png` and `pagespeed-<page>-desktop.png`.

| Page | Performance (mobile / desktop) | Accessibility | Best Practices | SEO |
| :---- | :---- | :---- | :---- | :---- |
| Book | 96 / 99 | 100 | 100 | 100 |
| About | 94 / 100 | 100 | 100 | 91 |
| Trade | 98 / 100 | 100 | 100 | 100 |
| Contact | 98 / 100 | 100 | 100 | 100 |
| Thank you | 99 / 100 | 100 | 100 | 63 |

Accessibility, Best Practices and SEO were the same on mobile and desktop. The mobile test simulates a mid-range phone on a slow 4G connection, which is why its performance scores are a little lower.

**Accessibility, Best Practices and SEO, earlier run.** These were also checked with Lighthouse on mobile and desktop for every page, with the same results. The full reports (open the `.html` files in a browser) and screenshots are in `docs/testing/lighthouse/`.

- Thank you (SEO 63): the page has `<meta name="robots" content="noindex">` on purpose, so search engines do not list it. Visitors should only reach it after sending a message.
- About (SEO 91): the link to the Invisible Works article uses the text "here". Link text should make sense on its own, because screen-reader users often move from link to link. *(TODO: change the link text, then re-run Lighthouse on the About page.)*

### Other testing

- Responsive layout checked on desktop, tablet and mobile widths: notes to add.

## Screenshots

Full-page screenshots of every page, on desktop (1280 pixels wide) and mobile (390 pixels wide). Click a link to open the screenshot.

| Page | Desktop | Mobile |
| :---- | :---- | :---- |
| Book page | [index-desktop.png](docs/screenshots/index-desktop.png) | [index-mobile.png](docs/screenshots/index-mobile.png) |
| About | [about-desktop.png](docs/screenshots/about-desktop.png) | [about-mobile.png](docs/screenshots/about-mobile.png) |
| Trade | [trade-desktop.png](docs/screenshots/trade-desktop.png) | [trade-mobile.png](docs/screenshots/trade-mobile.png) |
| Contact | [contact-desktop.png](docs/screenshots/contact-desktop.png) | [contact-mobile.png](docs/screenshots/contact-mobile.png) |
| Thank you | [thank-you-desktop.png](docs/screenshots/thank-you-desktop.png) | [thank-you-mobile.png](docs/screenshots/thank-you-mobile.png) |

## Bugs and errors

- W3C validator errors on the Book page (22 November 2026): the validator reported 7 errors. A plain `div` is not allowed an `aria-label` or `aria-labelledby` unless it also has a `role`. The reviews carousel had `aria-label` without a role, and the six story pop-ups had `aria-labelledby` without one. Bootstrap adds `role="dialog"` to a pop-up with JavaScript when it opens, but the validator only reads the HTML. Fixed by adding `role="region"` to the carousel (the standard role for an accessible carousel) and `role="dialog"` to each pop-up. The Book page now passes with no errors.
- Duplicate `<h1>`: adding the blurb created a second `<h1>` with the book title. A page should have one `<h1>`, as screen readers use it as the page's main title. Fixed by removing the second one.
- `<figcaption>` inside `<blockquote>`: the reviews first had `<figcaption>` inside `<blockquote>`, which the W3C validator rejects, because a `<figcaption>` must sit directly inside a `<figure>`. Fixed by wrapping each review in a `<figure>` and moving the `<figcaption>` after the `<blockquote>`.
- Video shape: a landscape (16:9) frame would have cropped the portrait trailer to a narrow strip. Fixed by changing the frame to 9:16 with a maximum height.
- Video file size: the original trailer was 14.6 MB. Resizing it to 720 x 1280 brought it down to about 5 MB, which helps the Lighthouse performance score. The trailer was later remade from my own photographs at the same size, and is now 4.7 MB.
- About page logo squashed on tablets: between 768px and 991px the logo and the text sat side by side, but the logo column was only about 240px wide, so the logo's circular lettering ran into the heading. Fixed by moving the side-by-side layout from Bootstrap's `md` breakpoint (768px) to `lg` (992px), so on tablets the logo sits centred above the text.

No known bugs remain.

## Credits and attribution

**Code and services**

- [Bootstrap 5.3.9](https://getbootstrap.com/), loaded from the jsDelivr CDN, for layout, the navigation, the reviews slider and the story pop-ups.
- [Google Fonts](https://fonts.google.com/): IM Fell English and EB Garamond.
- [Web3Forms](https://web3forms.com/) for the contact form and newsletter sign-up.

**Images**

- Cover design of *A Book of Short Stories* by Sophie Harris-Greenslade.
- The story title plates are from *A Book of Short Stories*. They were either sourced from out-of-copyright images or created by me, except the Crow Girl plate, which is credited in the book as "Illustration by Amy Shepheard".

**Video and audio**

- Crow Girl trailer: made from my own crow photographs, set in EB Garamond, with my narration. Built by Claude at my request.
- Audio samples: read by me, taken from the audiobook of *A Book of Short Stories* on Audible. As the audiobook is exclusive to Audible through ACX, excerpts on my own website must be verbatim and no longer than 5 minutes or 10% of the audiobook's length, whichever is longer. The samples total about 7 minutes.

**Text and reviews**

- Story openings and the blurb are from *A Book of Short Stories* by Tabitha Potts.
- Reviews by William J Brown in *Horrified Magazine*, I. Rosenfeld for the British Fantasy Society, and strange.scholar on Instagram.

## Declaration of AI use

I used Claude, in the Claude desktop app, and Claude Code, in VS Code. I used them to create a prototype of the site from the brief I had already worked out, then edited it to reach the aesthetic and functionality I wanted. For personal reasons I was not able to build the site step by step, as I had originally planned, but I am pleased with the result and plan to use it on my own site.

**What Claude did**

- Built the first version of the pages and the stylesheet from my brief, wireframes and colour palette.
- Converted the logo and story title plates to WebP, and copied the opening of each story from the print PDF into the pop-ups.
- Drafted the first versions of the legend paragraph, the author bio and the privacy note, which I then checked.
- Wrote the audio player code. Edited the original trailer, and later built the new trailer from my photographs.
- Found and fixed HTML validator errors, and ran Lighthouse and validation checks.
- Replaced the contact form script with a version that needs no JavaScript, at my teacher's request.
- Copied the planning issues onto my GitHub project board from my User Journey notes, and wrote about three-quarters of the commit messages.

**What I decided and did myself**

- Wrote the brief and planned the site: its audiences, pages, colours and wireframes.
- Wrote the blurb, story descriptions and awards, and chose the reviews.
- Narrated the audiobook and the trailer, and cut the audio samples from my audiobook myself in Descript.
- Chose the house style: curly quotes, italic titles and "Potts'".
- Made the design decisions in the Layout decisions section above, including the text panels after my teacher's feedback, the printer's flower divider, the simpler navigation and a reviews slider that doesn't move on its own.
- Split trade and contact information into two pages because one page looked too busy, and chose a portrait frame for the trailer.

*(TODO, optional: add short reflections on AI in code creation, debugging and optimisation, and on its overall effect on your workflow.)*

## Planned future updates

- A submission form with file attachments (a paid Web3Forms feature).
- Correcting the lettering on the imprint logo.
- Search and filter for the catalogue.
- A blog and an events section.
- Direct paperback sales through a hosted checkout, as a later phase.
- A page for the Story Radio anthology, the imprint's second title.
