import React from 'react'
import LeftPane from './LeftPane'
import DetailedPane from './DetailedPane'

export default function Canvas() {
  return (
    <div>
      <h1>This is the heading</h1>
      <div>
        <LeftPane />
        <DetailedPane />
      </div>
    </div>
  )
}
