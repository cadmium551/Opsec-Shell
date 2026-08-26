# Opsec Shell
Opsec Shell is an awesome program designed by awesome people to do awesome stuff like launching sandboxed HTML files! Each file is to the server, and displayed on the server.

## Why?
We at Opsec Operations created Opsec Shell to intervene against ISPs interfering with traffic and blocking javascript on local HTML files.

## How?
Each user HTML file is uploaded the the server using pure, raw, javascript, and displayed to the user

## Dedup?
To prevent duplicate file uploads, the HTML files are sent through sha256sum, and added to a database. If any file has the same sha256 sum as another file, the original file is displayed.
