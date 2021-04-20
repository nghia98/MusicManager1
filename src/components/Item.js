import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { green, blueGrey } from '@material-ui/core/colors';
import { Checkbox, IconButton, Tooltip } from '@material-ui/core';
import { PlayArrow, Edit } from '@material-ui/icons';

import StyledTableCell from './TableCustoms/StyledTableCell';
import StyledTableRow from './TableCustoms/StyledTableRow';

export default function Item(props) {
  const {
    row,
    labelId,
    isItemSelected,
    handleClick,
    handleOpenModalDetail,
    handleOpenEditForm,
  } = props;
  const classes = useStyles();

  return (
    <StyledTableRow
      hover
      onClick={(event) => handleClick(event, row.name)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.name}
      selected={isItemSelected}
    >
      <StyledTableCell padding="checkbox">
        <Checkbox
          checked={isItemSelected}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </StyledTableCell>
      <StyledTableCell component="th" id={labelId} scope="row" padding="none">
        {row.name}
      </StyledTableCell>
      <StyledTableCell align="left">{row.genre}</StyledTableCell>
      <StyledTableCell align="left">
        <div className={classes.actions}>
          <Tooltip title="Play song">
            <IconButton
              aria-label="play"
              className={classes.playIcon}
              onClick={() => handleOpenModalDetail([row.name, row.genre])}
            >
              <PlayArrow style={{ color: green[500] }} fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit song">
            <IconButton
              aria-label="edit"
              onClick={() => handleOpenEditForm([row.name, row.genre])}
            >
              <Edit style={{ color: blueGrey[500] }} fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </div>
      </StyledTableCell>
    </StyledTableRow>
  );
}

const useStyles = makeStyles((theme) => ({
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
  playIcon: {
    padding: 7,
    marginRight: 20,
    marginLeft: 20,
  },
}));
