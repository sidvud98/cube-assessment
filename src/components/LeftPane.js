import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { cardsActions } from '../store/cards'
import { useCallback } from 'react';
import '../styles/index.scss'
import Loader from './Helpers/Loader'


const Card = React.memo(({ name, title, innerRef, isActive, id }) => {
  const dispatch = useDispatch()
  let handleClick = (id) => {
    dispatch(cardsActions.changeActiveId(id))
  }
  return (
    <div
      className={`card ${isActive ? 'active' : null}`}
      onClick={(e) => { handleClick(id) }}
      id={id} ref={innerRef}>
      <h3 className='name'>{name}</h3>
      <h4 className='role'>{title}</h4>
    </div>
  )
})



const LeftPane = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.cards.users);
  const activeId = useSelector((state) => state.cards.activeId);

  const countRef = useRef(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);


  const fetchData = () => {
    if (!hasMore) return
    setLoading(true)
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      params: { _limit: 3, _page: 1 + countRef.current }
    })
      .then((response) => {
        if (response.data.length === 0) {
          setHasMore(false)
          setLoading(false)
          return
        }
        dispatch(cardsActions.add(response.data))
        setLoading(false);
        countRef.current += 1
      })
      .catch((error) => {
        setLoading(false);
        return
      });
  }

  const scrollableDivRef = useRef(null);
  const observer = useRef()
  const LastCardRef = useCallback(element => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !loading) {
        fetchData()
      }
    }, { threshold: 0.75 })
    if (element) observer.current.observe(element)
  }, [loading])


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div
      ref={scrollableDivRef}
      className='left-pane'
    >
      {users.map((item, index) => {
        return (
          <Card
            name={item.name}
            innerRef={users.length === index + 1 ? LastCardRef : null}
            title={item.company.bs}
            id={item.id}
            isActive={item.id === activeId}
          />
        )
      })}
      {loading && <Loader />}
    </div>
  );
};

export default React.memo(LeftPane);












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