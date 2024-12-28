<details>
<summary><h2>Task List</h2></summary>

- [x] Initial scaffolding of technologies (React, Vite, Router, Latest upgrades, etc.)
- [x] Initial Push to Github Repo
- [x] Create core routes (Home, KVK#, Information, Migration, NotFound)
- [x] Source fonts
- [ ] Add statics for Source Sans 3 (Already have variable)
- [x] Home Page
- [x] Information Page
- [x] Fix json linebreaks \n not working (white-space: pre-wrap)
- [x] Migration Page (Add dynamic button rendering depending on options entered)
- [x] Not Found Page
- [x] KVK Page
- [x] Footer design
- [ ] Error component in root route
- [ ] Nav background on scroll
- [x] Nav mobile responsive
- [ ] Meta
- [ ] Deploy

</details>

<br/>
<div align="center">

<h3 align="center">Rise of Kingdoms - Kingdom Site Template</h3>
<p align="center">
Lighweight React/Vite Template for Rise of Kingdoms Websites.
<br/>
<br/>
<a href="#">View Live Project</a>
</p>
</div>

## About The Project

![Screenshot]()

### Features

- Landing hero page.
- Automatic KVK page generation according to data input.
- Information page for FAQ.
- Migration page for thirdparty site linking.

### Built With

- [React 19.0.0](https://react.dev/)
- [Vite SWC 6.0.5](https://vite.dev/)
- [TanStack Router 1.91.1](https://tanstack.com/router/latest)
- [TypeScript 5.7.2](https://www.typescriptlang.org/)

## Usage

<details><summary><h2>Installation</h2></summary>
<p>Instructions on setting up development.</p>

1. Open in IDE.
2. pnpm install.
3. pnpm run dev.
4. Navigate to localhost:3000 to preview.

</details>

<details><summary><h2>Editing: Home</h2></summary>
<p>Instructions on editing landing page.</p>

1. src > routes > index.tsx
2. Edit kingdom name text & tagline.

</details>

<details><summary><h2>Editing: Seasons</h2></summary>
<p>Instructions on editing Seasons page.</p>

1. src > data > kvkdata.json.
2. Add, modify or delete kvk blocks - earliest at the top.
3. Add iframe URL to "dataUrl" - like Google Sheets or Looker Studio.
4. Add form links if used (as many as you need) - otherwise leave as "forms": [] to avoid rendering the forms section.

</details>

<details><summary><h2>Editing: Information</h2></summary>
<p>Instructions on editing Information page.</p>

1. src > data > faq.json.
2. Add, modify or delete Q&A blocks.

</details>

<details><summary><h2>Editing: Migration</h2></summary>
<p>Instructions on editing Information page.</p>

1. src > data > contacts.json.
2. Add, modify or delete button blocks.
3. I.E. [{ "buttonText": "DISCORD", "link": "linkhere" }, [{ "buttonText": "FACEBOOK", "link": "linkhere" }]]

</details>

<details><summary><h2>Editing: Website color palette</h2></summary>
<p>Instructions on editing website color palette.</p>

1. src > styles > core.css.
2. Look for color variables in :root at the top of the file.
3. Simply edit the color values - preferably in the same format as default (hsl).

</details>

<details><summary><h2>Editing: Website "logo" & title.</h2></summary>
<p>Instructions on editing website logo text and title.</p>

1. src > components > Navbar.tsx.
2. Change "KD0000" to your own kingdom number.
3. index.html
4. Change "KD0000" to your own kingdom number.

</details>

## Contact

MGSimard - g.marcgs@gmail.com  
[@MGSimard on X](https://x.com/MGSimard)

For more info, view my portfolio at [mgsimard.github.io](https://mgsimard.github.io). Resume attached.
