// src/components/home/DataServiceTypewriter.jsx
import React, { useState, useEffect } from 'react';

const DataServiceTypewriter = () => {
  const services = [
    "Acquisition",
    "Scraping",
    "Storage",
    "Transformation",
    "Analysis",
    "Pipelines",
    "Visualization"
  ];
  
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentService = services[currentServiceIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(currentService.substring(0, currentText.length + 1));
        
        if (currentText === currentService) {
          // Full word typed, wait and then start deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        setCurrentText(currentService.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          // Word fully deleted, move to next service
          setIsDeleting(false);
          setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
        }
      }
    }, isDeleting ? 50 : 150); // Faster deletion than typing
    
    return () => clearTimeout(timeout);
  }, [currentText, currentServiceIndex, isDeleting, services]);
  
  return (
    <span className="typewriter-text border-r-2 border-current animate-blink" aria-live="polite">
      {currentText}
    </span>
  );
};

export default DataServiceTypewriter;