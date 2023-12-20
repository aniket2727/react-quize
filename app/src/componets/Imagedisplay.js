import React from 'react'
import { useState } from 'react';
const Imagedisplay = () => {
    const [previewUrl, setPreviewUrl] = useState('');

    const handleImageChange = (event) => {
      const selectedImage = event.target.files[0];
  
      if (selectedImage) {
        const imageUrl = URL.createObjectURL(selectedImage);
        setPreviewUrl(imageUrl);
      }
    };
  
    return (
      <div>
        <label htmlFor="imageInput">Choose an image:</label>
        <input
          type="file"
          id="imageInput"
          onChange={handleImageChange}
          accept="image/*"
        />
  
        {previewUrl && (
          <div>
            <h2>Image Preview:</h2>
            <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    );
}

export default Imagedisplay
