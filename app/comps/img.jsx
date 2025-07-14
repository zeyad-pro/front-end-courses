'use client' // لو بتستخدم Next.js App Router

import { useState } from 'react'

export default function ImageUploader() {
  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
    }
  }

  return (
    <div className="p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      {image && (
        <img
          src={image}
          alt="Selected"
          className="max-w-sm rounded-lg border border-gray-300"
        />
      )}
    </div>
  )
}
