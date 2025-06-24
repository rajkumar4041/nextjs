'use client';

import { useEffect, useState } from 'react';

const Blogs = () => {
  const [res, setRes] = useState(null);

  const getData = async () => {
    try {
      fetch('/blogs/api')
        .then((res) => {
          res.json();

          console.log('hit 2', res, res?.json());
          return res.json();
        })
        .then((data) => {
          setRes(data);
        });
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return null;
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      blogs data get from api
      {/*
      This is a simple component that fetches data from the blogs API endpoint.
      It uses the `useEffect` hook to call the `getData` function when the component mounts.
      The `getData` function fetches data from the `/api/blogs` endpoint and logs it to the console.
    */}
      <h1>{res}</h1>
    </div>
  );
};

export default Blogs;
