import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  createMuiTheme,
  ThemeProvider,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: '#c5cae9',
    padding: 25,
  },
  audioPlayer: {
    marginLeft: 30,
    marginTop: 5,
  },
  mgTop: {
    marginTop: 20,
  },
  textName: {
    marginTop: 40,
  },
  mgLeft: {
    marginLeft: 10,
  },
}));

export default function DetailSong(props) {
  const {
    open,
    handleClose,
    isEditForm,
    handleOpenModalDel,
    handleOpenEditForm,
    data,
  } = props;
  const [nameSong, setNameSong] = useState(data[0]);
  const [genreSong, setGenreSong] = useState([data[1]]);
  const classes = useStyles();
  const muiTheme = createMuiTheme({});
  const src = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  ];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
    >
      <DialogTitle id="form-dialog-title" className={classes.title}>
        Song details
      </DialogTitle>
      <Divider />
      <div className={classes.audioPlayer}>
        <ThemeProvider theme={muiTheme}>
          <AudioPlayer
            elevation={5}
            width="100%"
            variation="primary"
            spacing={4}
            download={true}
            autoplay={true}
            order="reverse"
            preload="auto"
            loop={true}
            src={src}
          />
        </ThemeProvider>
      </div>
      <DialogContent>
        {isEditForm ? (
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              className={classes.mgTop}
              fullWidth
              defaultValue={data[0]}
            />
            <TextField
              autoFocus
              margin="dense"
              id="genre"
              label="Genre"
              type="text"
              className={classes.mgTop}
              fullWidth
              defaultValue={data[1]}
            />
          </div>
        ) : (
          <div>
            <DialogContentText className={classes.textName}>
              Name: <span className={classes.mgLeft}>{data[0]}</span>
            </DialogContentText>
            <DialogContentText className={classes.mgTop}>
              Genre: <span className={classes.mgLeft}>{data[1]}</span>
            </DialogContentText>
          </div>
        )}
        <DialogContentText className={classes.mgTop}>
          Last update: 20:39 20/04/2021
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {isEditForm ? (
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        ) : (
          <Button onClick={() => handleOpenEditForm(data)} color="primary">
            Edit
          </Button>
        )}
        <Button
          onClick={() => {
            handleClose();
            handleOpenModalDel();
          }}
          color="secondary"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
