import React from 'react'
import { useState } from 'react';
const Imageupload = () => {
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
    
        if (selectedImage) {
          
          console.log('Selected Image:', selectedImage);
    
          // You can also display the image preview
          const reader = new FileReader();
          reader.onload = (e) => {
            const previewUrl = e.target.result;
            console.log('Image Preview:', previewUrl);
            // Update state or perform other actions with the previewUrl
          };
          reader.readAsDataURL(selectedImage);
        }
      };
    
      return (
        <div>
          <label htmlFor="imageInput">Choose an image:</label>
          <input
            type="file"
            id="imageInput"
            onChange={handleImageChange}
            accept="image/*" // Specify accepted image types
          />
        </div>
      );
}

export default Imageupload
