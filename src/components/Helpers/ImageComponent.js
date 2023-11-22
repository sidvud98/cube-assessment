import React, { useState, useEffect } from 'react'
import { Blurhash } from 'react-blurhash'

export default function ImageComponent({ src, hash }) {
  const [imageLoaded, setImageLoaded] = useState(false)


  // DOWN HERE THE API IS FETCHING BOTH URL AND HASH AT ONCE
  // THUS THERE IS ACTUALLY NO NEED TO IMPLEMENT BLUR HASH
  // THIS CODE IS FOR THE SCENARIO IF THERE ARE TWO APIS BEING CALLED
  // THEN REMOVE SETTIMEOUT AND REPLACE WITH THE SECOND API PROMISE

  setTimeout(() => {
    setImageLoaded(true)
  }, 1000)

  return (
    <div class="grid-item">
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1} />

      )}

      {imageLoaded && (
        <img src={src} alt="" height={'100%'} width={'100%'} />
      )}

    </div>
  );
}