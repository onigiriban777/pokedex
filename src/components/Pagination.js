import { func } from 'prop-types';
import React from 'react';
import Button from '@material-ui/core/Button';
import './pagination.css';

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    return (
        <React.Fragment>
            <div id='botones' >
           {gotoPrevPage && <Button onClick={gotoPrevPage} variant='contained' color='primary' size='large' >Prev</Button> } 
            {gotoNextPage &&<Button onClick={gotoNextPage} variant='contained' color='primary' size='large'>Next</Button> } 
            </div>
        </React.Fragment>
    )
}