import React, { useState } from "react";
import ImageCard from "./components/imageCard";
import "./app.css";

const images = [
  { id: 1, url: "https://images.unsplash.com/photo-1511497584788-876760111969?w=500", title: "Nature View" },
  { id: 2, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", title: "Mountain" },
  { id: 3, url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500", title: "Ocean" },
  { id: 4, url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500", title: "Forest" },
  { id: 5, url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500", title: "Cityscape" },
  { id: 6, url: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=500", title: "Sunset" },
  { id: 7, url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=500", title: "Wildlife" },
  { id: 8, url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500", title: "Architecture" },
  { id: 9, url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500", title: "Portrait" },
  { id: 10, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", title: "Landscape" },
  { id: 11, url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500", title: "Beach" },
  { id: 12, url: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=500", title: "Snow" },
  { id: 13, url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500", title: "Desert" },
  { id: 14, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", title: "River" },
  { id: 15, url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500", title: "Flowers" },
  { id: 16, url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500", title: "Autumn" },
  { id: 17, url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500", title: "Night Sky" },
  { id: 18, url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500", title: "Bridge" },
  { id: 19, url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500", title: "Lake" },
  { id: 20, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", title: "Valley" },
  { id: 21, url: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500", title: "Clouds" },
  { id: 22, url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500", title: "Road" },
  { id: 23, url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500", title: "Farm" },
  { id: 24, url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500", title: "Island" },
  { id: 25, url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=500", title: "Waterfall" },
  { id: 26, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500", title: "Park" },
  { id: 27, url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500", title: "Street" },
  { id: 28, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500", title: "Hill" },
  { id: 29, url: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=500", title: "Canyon" },
  { id: 30, url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500", title: "Field" },
  { id: 31, url: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=500", title: "Sunrise" },
  { id: 32, url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500", title: "Village" }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>Dynamic Image Gallery</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>
      <div className="gallery">
        {images.map((img) => (
          <ImageCard key={img.id} image={img} />
        ))}
      </div>
    </div>
  );
}

export default App;