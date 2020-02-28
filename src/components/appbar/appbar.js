import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import search, { Search } from 'semantic-ui-react';


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
function nullFun() {

}

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
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>

                        <img src="http://clipartmag.com/images/picture-of-stethoscope-20.png" classname={classes.title} height="40px" alt="this is car image" />
                        MEDCYPHER

                    </Typography>
                    <Search
                        onSearchChange={handleChange}
                        value={props.search}
                        results={nullFun}
                    />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}