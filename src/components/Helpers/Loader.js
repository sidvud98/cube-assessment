import React from 'react'
import '../../styles/spinner.scss'

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
