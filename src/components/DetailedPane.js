import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/index.scss'
import axios from 'axios';
import { imgActions } from '../store/images'
import ImageComponent from './Helpers/ImageComponent';

export default function DetailedPane() {
  const dispatch = useDispatch();
  const urlsArray = useSelector(state => state.images.urls)
  const activeId = useSelector(state => state.cards.activeId)
  const imgRndRef = useRef(1);


  const fetchImg = () => {
    let searchTerm = 'plants'
    axios({
      method: 'get',
      url: 'https://api.unsplash.com/search/photos',
      params: {
        query: 'flowers',
        per_page: 9,
        client_id: process.env.REACT_APP_CLIENT_ID,
        page: imgRndRef.current,
      }
    })
      .then((response) => {
        dispatch(imgActions.addUrls(response))
        imgRndRef.current++
      })
      .catch((error) => {
        console.error(error);
      });
  }


  useEffect(() => {
    fetchImg()
  }, [activeId])


  // useEffect(() => {
  //   const interval = setInterval(() => { fetchImg() }, 10000);
  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, [])


  const usrDetails = useSelector(state => state.cards.activeUser)
  if (usrDetails) {
    const { geo, ...rest } = usrDetails.address
    var add = Object.values(rest).join(', ')
  }
  if (!usrDetails) return null
  return (
    <div className='detail-pane'>
      <div className='creds'>
        <h1 className="name" > {usrDetails.name}</h1>
        <h2 className="title" > {usrDetails.company.name}</h2>
        <h4 className="address">{add}</h4>
      </div >
      <div className="grid-container">
        {urlsArray.map(eachImg => {
          return <ImageComponent src={eachImg.img} hash={eachImg.hash} />
        })}
      </div>
    </div>
  )
}
