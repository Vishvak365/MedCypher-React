import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from 'semantic-ui-react'
//import Button from '@material-ui/core/Button';

import { Search } from 'semantic-ui-react';
import AddForm from '../add_image_form.js';
import './appbar.css';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MenuAppBar(props) {
    const classes = useStyles();
    //Handling onChange event for Search
    const handleChange = (chgEvent) => {
        chgEvent.preventDefault();
        props.setSearch(chgEvent.target.value);
    }
    const handleClick = (chgEvent) => { //Handles the linking to the admin page for Create,Update,Delete
        window.open('http://medcypher.azurewebsites.net/Admin/Tools', '_blank');
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button color='green' icon='add' content='Add Cypher' onClick={handleClick} />

                    <Typography variant="h6" className={classes.title}>
                        MEDCYPHER
                        <img src="http://clipartmag.com/images/picture-of-stethoscope-20.png" className={classes.title} height="40px" alt="" />
                    </Typography>
                    <Search
                        onSearchChange={handleChange}
                        showNoResults={false}
                        placeholder="Type to search..."
                    />
                </Toolbar>
            </AppBar>
        </div >
    );
}