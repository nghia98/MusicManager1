import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 50,
    backgroundColor: '#e8eaf6',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  formInput: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    minWidth: 350,
  },
}));

export default function Search(props) {
  const { valueSearch, handleSearch } = props;
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <div className={classes.formInput}>
        <SearchIcon />
        <InputBase
          className={classes.input}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          defaultValue={valueSearch}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </Paper>
  );
}
