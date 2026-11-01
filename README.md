# Node.js and Express Lab

A small JavaScript lab project demonstrating two ways to create a web server with Node.js:

- An Express server with multiple routes and a 404 response.
- A basic server built with Node.js's built-in `http` module.

## Requirements

- Node.js 18 or later
- npm (included with Node.js)

## Getting started

Open a terminal in the project directory and install the dependencies:

```bash
npm ci
```

Start the Express server:

```bash
npm start
```

The Express server listens at [http://localhost:3000](http://localhost:3000).

To run the built-in HTTP server instead, stop the Express server and run:

```bash
npm run start:http
```

Both servers use port `3000`, so run only one at a time.

## Express API

| Method | Path | Response |
| --- | --- | --- |
| `GET` | `/` | Plain-text welcome message |
| `GET` | `/about` | JSON containing the student's name and section |
| `GET` | `/time` | JSON containing the current date and time |
| Any other request | Any other path | `404 - Page Not Found` |

Example responses:

`GET /`:

```text
Welcome to my Node.js Express Server!
```

`GET /about`:

```json
{
  "name": "srijani yerram",
  "section": "cse-2E"
}
```

`GET /time`:

```json
{
  "currentDateTime": "2026-11-01T16:50:00.000Z"
}
```

The value returned by `/time` is generated when the request is made, so it will differ from the example.

## Built-in HTTP server

The separate `http-server.js` program uses Node.js's built-in `http` module. It responds to requests with the plain-text message `Hello`. It does not provide the Express routes.

## Project files

| File | Purpose |
| --- | --- |
| `server.js` | Express application and its routes |
| `http-server.js` | Basic server using the built-in HTTP module |
| `package.json` | Project metadata, scripts, and dependency declaration |
| `package-lock.json` | Locked dependency versions for reproducible installs |

## Testing the endpoints

With the Express server running, open these URLs in a browser:

- [http://localhost:3000/](http://localhost:3000/)
- [http://localhost:3000/about](http://localhost:3000/about)
- [http://localhost:3000/time](http://localhost:3000/time)
- [http://localhost:3000/not-a-route](http://localhost:3000/not-a-route) (returns 404)

## Student information

- Name: Srijani Yerram
- Registration number: 252U1R1232
- Section: CSE-2E
