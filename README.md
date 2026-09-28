# Electronic Ceramics Laboratory Website

<<<<<<< HEAD
Website for the **Electronic Ceramics Laboratory (ECL)** at **National Taiwan University**.

This repository contains the working design and content structure for the laboratory website. It is intentionally a lightweight static website so it can eventually be uploaded to an NTU or MSE web server without installing a framework or running a server-side application.

## Project responsibilities

The intended collaboration is simple:

- **Professor / Principal Investigator:** reviews the website, decides what information should be published, supplies verified text and images, and approves the final version.
- **Site maintainer:** implements the requested changes, keeps formatting consistent across pages, tests the website, and prepares it for publication.

The professor does **not** need to edit HTML or use Git to contribute. Sending a consolidated list of corrections by email, a shared document, or GitHub issue is enough. Screenshots with annotations are especially useful for visual changes.

## Recommended review process

For each review round:

1. Open the current website and review it on both a computer and a phone.
2. Organize feedback by page name: Home, News, Research, Publications, PI, People, Teaching, or Equipment & Facilities.
3. For text changes, provide the exact replacement wording whenever possible.
4. For images, provide the original full-resolution files and identify the page and person/equipment they belong to.
5. The site maintainer implements the changes and sends back an updated version for approval.
6. Only verified and approved information is included in the published website.

A useful feedback format is:

```text
Page: People
Location: Master's Students, second card
Change: Replace the name with ...
Change: Replace the research topic with ...
Image: filename.jpg
```
=======
>>>>>>> 969cc59dfbb5e102dd54f5cbba76cd341027b2e9
Website for the Electronic Ceramics Laboratory at National Taiwan University.

## Current site map

<<<<<<< HEAD
| Page | File | Intended content |
| --- | --- | --- |
| Home | `index.html` | Lab identity and short introduction |
| News | `news.html` | Announcements, awards, publications, and events |
| Research | `research.html` | Research areas and current projects |
| Publications | `publications.html` | Selected and recent publications |
| Principal Investigator | `pi.html` | Professor biography, interests, and professional links |
| People | `people.html` | Ph.D., master's, and undergraduate researchers |
| Teaching | `teaching.html` | Courses and educational information |
| Equipment & Facilities | `facilities.html` | Laboratory equipment and capabilities |
| About | `about.html` | Laboratory overview and history |
| Contact | `contact.html` | Email, address, telephone, and directions |

## Information needed before publication

The current website is a layout prototype and deliberately contains placeholders. Before launch, the laboratory should confirm and supply:

- Professor's full English name, title, biography, research interests, email, faculty profile, and Google Scholar link
- Current member names, degree levels, research topics, email addresses, and approved photographs
- Laboratory description, history, and major research themes
- Accurate equipment names, models, capabilities, and photographs
- Verified publication citations, DOI links, and approved PDF links
- Current and past teaching information
- News items with dates and images
- Department name, building, room number, telephone number, and contact email
- Photo permissions and any required credits
- Final copyright year and ownership wording

Please do not publish personal contact information or photographs until the relevant person has approved their use.

## Viewing the website locally
=======
>>>>>>> 969cc59dfbb5e102dd54f5cbba76cd341027b2e9
- `index.html` - Home
- `news.html` - News
- `research.html` - Research
- `publications.html` - Publications
- `pi.html` - Principal Investigator
- `people.html` - People
- `teaching.html` - Teaching
- `facilities.html` - Equipment & Facilities
- `about.html` - About
- `contact.html` - Contact

<<<<<<< HEAD
No installation or build step is currently required. The site uses ordinary HTML and JavaScript plus Tailwind CSS from a CDN.
## Start the website

### Simple option
Open a terminal in the project folder and run:

Open `index.html` in a web browser. This is sufficient for a quick review.

### Recommended option

From the project folder, start a small local web server:

=======
## Start the website

Open a terminal in the project folder and run:

>>>>>>> 969cc59dfbb5e102dd54f5cbba76cd341027b2e9
```powershell
py -m http.server 8000
```

<<<<<<< HEAD
Then visit:

```text
http://localhost:8000/
```

Stop the server by pressing `Ctrl+C` in the terminal.

An internet connection is required while reviewing the current version because Tailwind CSS is loaded from `https://cdn.tailwindcss.com`.

## Notes for the site maintainer

### Where the visible placeholder content comes from

`placeholder-mode.js` currently generates and inserts the visible `<main>` content for every page. This makes it easy to keep the prototype in placeholder mode.

As a result:

- Change most visible page content in `placeholder-mode.js` during the prototype stage.
- Changes made to the existing `<main>` markup inside an individual HTML file may not appear, because the script replaces that area when the page loads.
- Headers, navigation, page metadata, mobile menus, and footers still live in the individual HTML files.
- Remove or refactor placeholder mode before final publication so the approved content has one clear source of truth.

### Assets and links

- The laboratory logo is `ECL logo.png`.
- Keep filenames web-safe and descriptive; prefer names such as `professor-name.jpg` or `tube-furnace.jpg`.
- Use relative links so the site remains portable between local preview and the NTU server.
- Check every navigation link, email address, DOI, PDF, faculty profile, and external link before publishing.
- Compress large photographs for the web while retaining the original files separately.

### Testing checklist

Before sharing or publishing an update, verify:
## View the website

- All pages load without missing files.
- Desktop navigation and the mobile menu both work.
- The layout remains readable at phone, tablet, and desktop widths.
- No placeholder text, sample names, sample emails, or unverified claims remain.
- Images have useful alternative text and are not visibly stretched.
- Keyboard navigation and visible focus states still work.
- External links open the intended official pages.
- The browser console shows no errors.
- The site has been checked in at least Chrome or Edge and one mobile browser.
Open this address in a web browser:

## Version control
<http://localhost:8000/>

The project repository is hosted at:
Keep the terminal open while viewing the website. An internet connection is required because the current design loads Tailwind CSS from its CDN.

<https://github.com/enzothermic/eclwebsite>

The site maintainer should make changes in small, clearly named commits. Major design or content revisions should be reviewed before they are merged into the version intended for deployment. Do not commit passwords, private student information, server credentials, or unpublished research data.

## Hosting plan
## Stop the website

The preferred public address is expected to be:
Return to the terminal running the server and press:

```text
https://ecl.mse.ntu.edu.tw/
Ctrl+C
```

That address must be approved and configured by the appropriate MSE/NTU network administrator. The administrator will need the final hosting location, responsible professor, technical contact, and either the server IP address or DNS target.

The current site can be deployed by copying the HTML files, `placeholder-mode.js`, the logo, and all final image/PDF assets to the approved web directory. There is currently no React, Node.js, database, or server-side runtime requirement.

## Publication approval

The website should be considered ready for public deployment only after:

1. All placeholders have been replaced with verified information.
2. The professor has approved the text, member list, publications, and images.
3. The site maintainer has completed the testing checklist.
4. MSE/NTU has approved the hosting location and domain configuration.
=======
## View the website

Open this address in a web browser:

<http://localhost:8000/>

Keep the terminal open while viewing the website. An internet connection is required because the current design loads Tailwind CSS from its CDN.

## Stop the website

Return to the terminal running the server and press:

```text
Ctrl+C
```
>>>>>>> 969cc59dfbb5e102dd54f5cbba76cd341027b2e9
