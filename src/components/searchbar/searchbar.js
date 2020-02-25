import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from "@material-ui/core/InputBase";
import color from '@material-ui/core/colors/amber';

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
    inputRoot: {
        color: "white",
        backgroundColor: color[100]
    },
}));
export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ "aria-label": "search" }}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}