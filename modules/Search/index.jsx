import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Link from 'next/link';
import styles from "./index.module.scss";
import Router from 'next/router';

const Search = () => {
    const [search, setSearch] = useState('');

    
  return (
    <div>
        <h1>Search</h1>
        <TextField id="outlined" label="Input Country Name" variant="outlined" onChange={e => setSearch(e.target.value)}  value={search}/>
        <Button variant="contained" className={styles.btnSearch} onClick={() => Router.push({pathname: '/test',
             query: { country: search }})}>Search</Button>
        
    </div>
  )
}

export default Search