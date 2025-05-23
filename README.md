# Photo Fetcher

A small, simple, responsive image gallery project built with React and Vite. This app demonstrates core React concepts such as components, pages, layouts, and routing (via React Router DOM). It fetches and displays random images from the [Picsum API](https://picsum.photos/) using Axios.

## Features

- Built with React and Vite
- Client-side routing using React Router DOM
- Fetches images from the Picsum API with Axios
- Styled using pure CSS (no frameworks)
- Makes use of HTML5 semantics
- Modular architecture with reusable components

## Demo

> Deployment link: https://ktamburi.github.io/Photo-Fetcher/

## Project Structure

src/

├── Components/ # Contains all React components.

│ └── UI/ # Reusable UI components like toggle.

├── Layouts/ # Layout components for different page structures.

├── Pages/ # Page-level components (views/routes).

├── Services/ # API calls.

├── Styles/ # CSS files for styling the app.

├── HttpClient.jsx # Axios instance/ Http-Client setup.

├── App.jsx # Root React component.

├── main.jsx # Entry point, mounts React app.

└── Router.jsx # React page router using react-router-dom.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

#### Clone the repository
> git clone https://github.com/ktamburi/Photo-Fetcher.git
> cd photo-fetcher

#### Install dependencies
> npm install

#### Run development server
> npm run dev

## Technologies Used
> React, Vite, React Router DOM, Axios, Picsum API, HTML5 & CSS3

## License
This project is open source and available under the MIT License.
