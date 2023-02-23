import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { withRouter } from 'next/router'

const Details = () => {
    const [data, setData] = useState([]);
    const router = useRouter();
   
    const getData = async () => {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${router.query.country}`);
        
        setData(data);
      };
     
      useEffect(() => {
        getData();
      }, []);

	return (
		<div>{JSON.stringify(data)}</div>
	);
}

export default Details