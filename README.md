# Dynamic Image Gallery - React

A responsive image gallery built with React featuring working image links from Unsplash and a dark/light theme toggle.

live like : https://dynamic-image-gallery-react-five.vercel.app/

## Features

✅ **Dynamic Data**: Images stored in an array of objects
✅ **Component Mapping**: Images rendered using `.map()`
✅ **Reusable Component**: `ImageCard` component for each image
✅ **Props**: Data passed using props
✅ **Responsive Layout**: Grid layout that adapts to different screen sizes
✅ **Dark Theme**: Toggle between light and dark modes
✅ **Clean Code**: Follows React best practices
✅ **Working Images**: All images sourced from Unsplash
✅ **Lazy Loading**: Images load as they come into view
✅ **Hover Effects**: Smooth animations on card hover

## Project Structure

```
myapp/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── imageCard.jsx
│   ├── app.jsx
│   ├── app.css
│   └── index.js
└── package.json
```

## Key React Concepts Demonstrated

1. **Component Composition**: Main `App` component uses reusable `ImageCard` component
2. **Props**: Passing image data from parent to child component
3. **State Management**: Using `useState` hook for theme toggling
4. **List Rendering**: Using `.map()` to render dynamic lists
5. **Conditional Styling**: Applying classes based on state (`dark-mode`)
6. **Event Handling**: Click handler for theme toggle button

## Components

### App Component (`app.jsx`)
- Main container component
- Manages dark mode state
- Contains the images array
- Maps through images to render `ImageCard` components

### ImageCard Component (`imageCard.jsx`)
- Reusable component for displaying individual images
- Receives image data via props
- Displays image and title

## Styling Features

- **Responsive Grid**: Auto-fill grid layout
- **Mobile-First**: Breakpoints at 768px and 480px
- **Smooth Transitions**: Theme switching and hover effects
- **Modern Design**: Card-based layout with shadows
- **Sticky Header**: Header remains visible while scrolling

## Installation & Setup

1. Make sure you have Node.js installed
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Image Sources

All images are sourced from Unsplash (https://unsplash.com), a free stock photo platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add search functionality
- Implement image lightbox/modal
- Add filtering by categories
- Include pagination or infinite scroll
- Add image upload feature
