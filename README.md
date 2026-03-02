# w3villa

To install dependencies:

```bash
bun install
or
npm install
```

To run:

```bash
bun run dev
or
npm run dev (install nodemon)
```
# Dictionary Search & AutoSuggestion System

A simple Node.js + Express API that implements a dictionary search and prefix-based autosuggestion system.

## Features
- Search a word and increase its frequency if found
- Get prefix-based suggestions (max k results)
- Add new words dynamically to the dictionary

## API Routes

1. **Search Word**
   GET `/api/search?word=<word>`
   → Returns FOUND / NOT FOUND

2. **Prefix Suggestion**
   GET `/api/prefix?word=<prefix>&k=3`
   → Returns up to k suggested words

3. **Add Word**
   POST `/api/add`
   Body: `{ "word": "example" }`

## Note
Data is stored in-memory and resets when the server restarts.
