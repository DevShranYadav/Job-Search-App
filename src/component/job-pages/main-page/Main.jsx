import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { searchData } from '../../API1/data';
import { Button, Table, TableBody, TableCell } from 'semantic-ui-react';
export default function Main() {
    // const history = useHistory();
    const navigate = useNavigate();
    const [search, setSearch] = useState('')
    console.log(search);
    // const [extractedData, setExtractedData] = useState({});

    function submit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        // history.push('/details')
        navigate('/details');
    }


    return (
        <>
            <h2>Enetr the Programming Language that are you looking for job</h2>
            <div class="ui input">
                <input type="text" placeholder="Pleas enter your programing language" value={search} onChange={(e) => setSearch(e.target.value)} />
                <Button onClick={submit}>Search</Button>
            </div>
            
        </>
    )
}
