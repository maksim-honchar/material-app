import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from  './app.module.css';

const useStyles = makeStyles({
  btn: {
   '&.MuiButton-root': {
    padding: '6px 16px',
    textTransform: 'lowercase'
   },
   '&.MuiButton-contained': {
     background: 'yellow'
   },
    '&.MuiButton-contained:hover': {
     background: 'green',
     color: 'white'
    }
  },
});

function App() {
  const classes = useStyles()

  return (
    <div className={styles.root}>
       <Button 
       variant="contained"
        className={classes.btn}
       >
         TITLE BUTTON
       </Button>
    </div>
  );
}

export default App;
