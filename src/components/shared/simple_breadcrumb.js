import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Link from '@material-ui/core/Link';

const styles = theme => ({
    root: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '20px 20vmax',
        width:'fit-content',
        
    },
    paper: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        backgroundColor: '#151d27'
    },
});

function SimpleBreadcrumb(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Breadcrumbs aria-label="Breadcrumb">
                    <Link color="secondary" href="/">
                        Inicio
                    </Link>
                    <Link color="secondary" href="/jogos">
                        Catálogo de Jogos
                    </Link>
                    <Typography color="primary">Detalhes</Typography>
                </Breadcrumbs>
            </Paper>
        </div>
    );
}

SimpleBreadcrumb.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBreadcrumb);