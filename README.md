# Streamdeck plugin - Daily Note Timestamp

Append timestamp at the end of the file

Output, for example, at the end of the file selected

- [b] `2025-02-08 12:22 AM (UTC +08:00)`🎨 maximation-affaire
- [b] `2025-02-08 12:22 AM (UTC +08:00)`🐠 snuffiness-ostial
- ["] `2025-02-08 12:31 AM (UTC +08:00)`🔜 🌑 incompossible-staymakers
- [b] `2025-02-08 12:55 AM (UTC +08:00)`🌎 virilizes-salamis
- ["] `2025-02-08 12:55 AM (UTC +08:00)`🔚 🌑 incompossible-staymakers
- [b] `2025-02-08 12:55 AM (UTC +08:00)`😘 departmentalizes-ultrarespectable

```plaintext
// Timestamp
- [b] `{timestamp}` {emoji?} {passphrase?} {text?}
// Interval
- ["] `{timestamp}` 🔜 {emoji?} {passphrase?} {text?}
- ["] `{timestamp}` 🔚 {emoji?} {passphrase?} {text?}
```

## Time stamp

- e.g., 2025-02-08 12:53 AM (UTC +08:00)
  - full_date: YYYY-MM-DD hh:mm A (UTC Z)
  - date_only: YYYY-MM-DD
  - time_only: hh:mm A (UTC Z)

## Random emoji and Passphrase

```js
// https://www.npmjs.com/package/generate-passphrase
import { generateMultiple } from "generate-passphrase";

// https://gist.github.com/ikr7/c72843556ef3a12014c3
var emojis = ["😄", "😃", "😀", "😊"];
console.log(emojis[Math.floor(Math.random() * emojis.length)]);

const passphrase = generateMultiple(5, {
  length: 2,
  numbers: false,
});
console.log(passphrase);

// output
[
  "maximation-affaire",
  "snuffiness-ostial",
  "incompossible-staymakers",
  "virilizes-salamis",
  "departmentalizes-ultrarespectable",
];
```

🎨, 🐠, 🌑, 🌎, 😘

## Options needed

For example,

> [!NOTE]
>
> - Title: Daily note
> - Base directory: `D:\Clouds\Dropbox\Obsidian\main\Journal` <- select directory
> - Target file: `{YYYY}\{YYYY-MM_DD}.md` <- input target filename
> - Timestamp format: `YYYY-MM-DD hh:mm A (UTC Z)`

or

> [!NOTE]
>
> - Title: Scribble
> - Target file: `D:\Clouds\Dropbox\Obsidian\main\00 Storage\Playground.md` <- specific file
> - Timestamp format: `hh:mm A (UTC Z)`

(For time interval and timestamp, the options need to be filled aren't different.)
