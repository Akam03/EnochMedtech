# Enoch Medtech website

Static website for Enoch Medtech (www.enochmedtech.com). No build step: `index.html`, `style.css`, `script.js` and `assets/`.

## Preview locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Deploy on GitHub Pages with the GoDaddy domain
1. GitHub repo > Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`. (Merge the working branch into `main` first.)
2. In the same page set Custom domain to `www.enochmedtech.com` (the `CNAME` file already says this) and tick "Enforce HTTPS" once it is available.
3. GoDaddy > My Products > Domain > DNS. Add these records:

| Type  | Name | Value                  |
|-------|------|------------------------|
| CNAME | www  | `akam03.github.io`     |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |

Delete any existing "Parked" A record on `@` and the default `www` CNAME. DNS can take from a few minutes up to a few hours. GitHub's own docs list the current IPs.

## Enquiry form
Until a form service is configured the form opens the visitor's email app addressed to contact@enochmedtech.com. For direct submissions, create a free form at formspree.io and replace `FORM_ID_HERE` in the `action` of `index.html`.
