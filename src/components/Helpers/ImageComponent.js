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














/*
  COPYRIGHT NOTICE:

  This project and its contents are confidential and proprietary to Sai Siddharth Vudikavalasa. 
  They are intended solely for the use of the individual or entity to whom they are addressed.
  All rights reserved. Unauthorized use or distribution, in whole or in part, is prohibited. 
  Use of this project for commercial purposes is not permitted without prior consent from the author.

  Sai Siddharth Vudikavalasa
  22nd November 2023
  sidvud98@gmail.com
*/