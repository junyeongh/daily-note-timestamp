# Daily Note Timestamp - Stream Deck Plugin

A Stream Deck plugin that appends timestamps, emoji, and passphrases to your notes.

## Examples

Output, for example, at the end of the file selected:

- [b] `0000-00-00 12:22 AM (UTC +08:00)`🎨 maximation-affaire
- [b] `0000-00-00 12:22 AM (UTC +08:00)`🐠 snuffiness-ostial
- ["] `0000-00-00 12:31 AM (UTC +08:00)`🔜 🌑 incompossible-staymakers
- [b] `0000-00-00 12:55 AM (UTC +08:00)`🌎 virilizes-salamis
- ["] `0000-00-00 12:55 AM (UTC +08:00)`🔚 🌑 incompossible-staymakers
- [b] `0000-00-00 12:55 AM (UTC +08:00)`😘 departmentalizes-ultrarespectable

## Features

- Support for both single timestamps and time intervals
  - [x] for a specific file
  - [ ] for a daily note
- Append timestamps in various formats
  - e.g., 2025-02-08 12:53 AM (UTC +08:00)
    - [x] full_date: YYYY-MM-DD hh:mm A (UTC Z)
    - [ ] date_only: YYYY-MM-DD
    - [ ] time_only: hh:mm A (UTC Z)
- Notification toast

For example,

> [!NOTE]
>
> - Title: Scribble
> - Target file: `D:\Clouds\Dropbox\Obsidian\main\00 Storage\Playground.md` <- specific file
> - Timestamp format: `hh:mm A (UTC Z)`

or

> [!NOTE]
>
> - Title: Daily note
> - Base directory: `D:\Clouds\Dropbox\Obsidian\main\Journal` <- select directory
> - Target file: `{YYYY}\{YYYY-MM_DD}.md` <- input target filename
> - Timestamp format: `YYYY-MM-DD hh:mm A (UTC Z)`

## Actions

### 1. Time Stamp

Appends a single timestamp entry with optional emoji and passphrase.

Format:

```markdown
- [b] `{timestamp}` {emoji?} {passphrase?} {text?}
```

### 2. Time Interval

Appends a time interval entry with optional emoji and passphrase.

Format:

```markdown
- ["] `{timestamp}` 🔜 {emoji?} {passphrase?} {text?}
- ["] `{timestamp}` 🔚 {emoji?} {passphrase?} {text?}
```

## Additional Resources

- [Getting Started | Stream Deck SDK](https://docs.elgato.com/streamdeck/sdk/introduction/getting-started)
- [Home | SDPI Components](https://sdpi-components.dev/)
