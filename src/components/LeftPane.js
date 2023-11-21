import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { cardsActions } from '../store/cards'




function Card({ name, title, index }) {
  return (
    <div key={index} style={{ border: 'solid', width: '500px', height: '300px', backgroundColor: 'gray' }}>
      <h3>{name}</h3>
      <h4>{title}</h4>
    </div>
  )
}



const LeftPane = () => {

  const dispatch = useDispatch();



  const scrollableDivRef = useRef(null);
  const users = useSelector((state) => state.cards.users);

  const countRef = useRef(0);
  const hasMore = useRef(true);
  const [loading, setLoading] = useState(false);



  const fetchData = () => {
    setLoading(true)
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      params: { _limit: 3, _page: 1 + countRef.current }
    })
      .then((response) => {
        if (response.data.length === 0) {
          hasMore.current = false
          return
        }
        dispatch(cardsActions.add(response.data))
        setLoading(false);
        countRef.current += 1
        console.log('added');
      })
      .catch((error) => {
        // console.error('Error fetching users: ', error);
        setLoading(false);
        return
      });
  }


  const handleScroll = () => {
    const div = scrollableDivRef.current;
    if (hasMore.current && div) {
      const { scrollTop, scrollHeight, clientHeight } = div;
      if (scrollHeight - scrollTop === clientHeight) {
        fetchData()
      }
    }
  }


  useEffect(() => {
    fetchData()
    const div = scrollableDivRef.current;
    if (div) {
      div.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
      }
    };
  }, [])



  return (
    <div
      ref={scrollableDivRef}
      style={{ overflowY: 'scroll', height: 'calc(100vh - 82px)', border: 'solid red' }}
    >
      {users.map((item, index) => {
        return <Card name={item.name} title={item.company.bs} index={index} />
      })}
      {loading && <h1>Loading...</h1>}
    </div>
  );
};

export default LeftPane;