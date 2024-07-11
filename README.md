# Filmstrip View Template Viewer

This project is a website template viewer modeled after the filmstrip folder view in Windows Explorer. It is developed as a Single Page Application (SPA) using React for the front-end and Node.js/Express for the back-end API.

## Screenshot
![image](https://github.com/AKASH-PRASAD7/filmstrip-view/assets/110546856/541e4ed2-5b3b-4796-9561-5302cffd2d0c)

## Features

- Display thumbnail images in a filmstrip view below the main large image.
- A sliding window with 4 thumbnails visible at a time.
- "Next" and "Previous" links to navigate through the thumbnails.
- Clicking on a thumbnail displays the corresponding large image along with its metadata.
- Thumbnails have a border when selected.

## Technical Stack

- Front-end: React, Vite, Axios, Tailwind CSS
- Back-end: Node.js/Express
- CSS for styling

## Installation and Running the Project

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/filmstrip-view.git
   ```

2. **Set up the server:**

   ```bash
   cd server
   npm install
   ```

3. **Set up the client:**

   ```bash
   cd ../client
   npm install
   ```

4. **Run the server:**

   ```bash
   cd ../server
   npm start
   ```

   The server should now be running on `http://localhost:8000`.

5. **Run the client:**

   ```bash
   cd ../client
   npm start
   ```

   The client should now be running on `http://localhost:5173`.

## Usage

- Navigate to `http://localhost:5173` in your web browser.
- You will see the filmstrip view with thumbnails.
- Use the "Next" and "Previous" buttons to navigate through the thumbnails.
- Click on a thumbnail to view its large image and metadata.
