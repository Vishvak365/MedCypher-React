import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Modal } from 'semantic-ui-react'
import IconButton from '@material-ui/core/IconButton';
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
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className='background'>
                    <IconButton className={classes.menuButton}>
                        <Modal trigger={
                            <Button className='button'
                                icon='add'
                                content='Add Cypher'
                            />
                        } centered={false}>
                            <Modal.Content>
                                <AddForm />
                            </Modal.Content>
                        </Modal>
                    </IconButton>
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