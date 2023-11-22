import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/index.scss'
import axios from 'axios';
import { imgActions } from '../store/images'
import ImageComponent from './Helpers/ImageComponent';

const DetailedPane = () => {
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


  useEffect(() => {
    const interval = setInterval(() => { fetchImg() }, 10000);
    return () => {
      clearInterval(interval);
    }
  }, [])


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


export default React.memo(DetailedPane)








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