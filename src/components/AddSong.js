import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function FormDialog(props) {
  const { open, handleClose } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add song</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the song name, genre and choose a file mp3.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="genre"
          label="Genre"
          type="text"
          fullWidth
        />
        <input
          accept="mp3/*"
          style={{ display: 'none', margin: '20px' }}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button
            style={{ margin: '10px 0 10px' }}
            size="large"
            variant="contained"
            color="default"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
        </label>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
