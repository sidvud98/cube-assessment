import React from 'react'
import LeftPane from './LeftPane'
import DetailedPane from './DetailedPane'
import '../styles/index.scss'

const Canvas = () => {
  return (
    <>
      <div className='heading'>Heading Lorem Epsum</div>
      <div className="canvas">
        <LeftPane />
        <DetailedPane />
      </div>
    </>
  )
}


export default React.memo(Canvas)












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