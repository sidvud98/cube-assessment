import React from 'react'
import LeftPane from './LeftPane'
import DetailedPane from './DetailedPane'
import '../styles/index.scss'

export default function Canvas() {
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
