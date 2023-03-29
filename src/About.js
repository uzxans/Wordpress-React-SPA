// import React from 'react';
import React, { Component, useEffect, useState } from 'react';
import {
  Link,
  useRouteMatch
} from "react-router-dom";



export function About({ }) {

  const [obj, setObj] = useState({
    error: null,
    isLoaded: false,
    items: []
  });

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER + "/api/posts?populate=*")
      .then(res => res.json())
      .then(
        (result) => {
          setObj({
            isLoaded: true,
            items: result.data
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setObj({
            isLoaded: true,
            error
          });
        }
      )
  }, []);// === componentDidMount

  const { error, isLoaded, items } = obj;
  // console.info(items);

  let match = useRouteMatch();

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map((item, index) => {
          console.log(item);
          console.log('url:', item?.attributes?.images?.data?.[0]?.attributes?.url);
          console.log(process.env.REACT_APP_SERVER + item?.attributes?.images?.data?.[0]?.attributes?.url);
          return (
            <li key={index}>
              <h1>{item.attributes.Title}</h1>
              <img src={process.env.REACT_APP_SERVER + item?.attributes?.images?.data?.[0]?.attributes?.url} alt="" />
              {/* <div><ReactMarkdown>{item.attributes.text}</ReactMarkdown></div> */}
              <Link to={`${match.url}/${obj.id}`}>Читать далее...</Link>
            </li>
          )
        })
        }
      </ul>
    );
  }
}


// export const About = () => (
//   <h1>Page Users</h1>
// )