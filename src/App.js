import React, { useState, useEffect } from 'react';
import './App.css';

import { Button, Grid, Container } from '@material-ui/core';

import Header from './components/Header';
import Search from './components/Search';
import ModalAddSong from './components/AddSong';
import ListItems from './components/ListItems';
import ModalDeleteSong from './components/DeleteSong';
import ModalDetailSong from './components/DetailSong';
import SongService from './apis/song';

function createData(name, genre) {
  return { name, genre };
}

const rows = [
  createData('Rolling the deep', 'Pop'),
  createData('Healing the world', 'Pop'),
  createData('Eclair', 'Rock'),
  createData('Frozen yoghurt', 'Ballat'),
  createData('Gingerbread', 'Pop'),
  createData('Honeycomb', 'Rock'),
  createData('Rolling the dea', 'Pop'),
  createData('Healing the war', 'Pop'),
  createData('Eclairs', 'Rock'),
  createData('Frozens yoghurt', 'Ballat'),
  createData('Gingerbreads', 'Pop'),
  createData('Honeycombs', 'Rock'),
  createData('Eclair1', 'Rock'),
];

function App() {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalDel, setOpenModalDel] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [isEditForm, setEditForm] = useState(false);
  const [data, setData] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [dataRows, setDataRows] = useState([]);

  useEffect(() => {
    getAllSong();
  }, []);

  //Modal Delete
  const handleOpenModalDel = () => {
    setOpenModalDel(true);
  };

  const handleCloseModalDel = () => {
    setOpenModalDel(false);
  };

  //Modal Add
  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
  };

  const handleCloseModalAll = () => {
    setOpenModalAdd(false);
  };

  //Modal Detail
  const handleOpenModalDetail = (data) => {
    setOpenModalDetail(true);
    setData(data);
  };

  const handleCloseModalDetail = () => {
    setOpenModalDetail(false);
    setEditForm(false);
  };

  //Handle change info song -> edit
  const handleOpenEditForm = (data) => {
    setOpenModalDetail(true);
    setEditForm(true);
    setData(data);
  };

  console.log(openModalDetail, isEditForm);

  //Handle search
  const handleSearch = (search) => {
    let sourceArray = rows;
    let newArray = [];
    if (search.length <= 0) {
      newArray = sourceArray;
    } else {
      search.toLowerCase();
      for (let item of sourceArray) {
        if (item.name.toLowerCase().indexOf(search) > -1) {
          newArray.push(item);
        }
      }
    }
    setDataRows(newArray);
    setValueSearch(search);
  };

  const getAllSong = () => {
    SongService.getAll()
      .then((res) => {
        setDataRows(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Container fixed>
        <Header />

        <div style={{ marginBottom: 20 }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <div style={{ marginLeft: 40 }}>
              <Button
                style={{ margin: 10 }}
                size="large"
                variant="contained"
                color="primary"
                onClick={handleOpenModalAdd}
              >
                Add
              </Button>

              <Button
                style={{ margin: 10 }}
                size="large"
                variant="contained"
                color="secondary"
                onClick={handleOpenModalDel}
              >
                Delete
              </Button>
            </div>

            <div style={{ marginRight: 50 }}>
              <Search valueSearch={valueSearch} handleSearch={handleSearch} />
            </div>
          </Grid>
        </div>

        <ListItems
          rows={dataRows}
          handleOpenModalDel={handleOpenModalDel}
          handleOpenModalDetail={handleOpenModalDetail}
          handleOpenEditForm={handleOpenEditForm}
        />

        <ModalAddSong open={openModalAdd} handleClose={handleCloseModalAll} />

        <ModalDeleteSong
          open={openModalDel}
          handleClose={handleCloseModalDel}
        />
        <ModalDetailSong
          open={openModalDetail}
          handleClose={handleCloseModalDetail}
          isEditForm={isEditForm}
          handleOpenModalDel={handleOpenModalDel}
          handleOpenEditForm={handleOpenEditForm}
          data={data}
        />
      </Container>
    </div>
  );
}

export default App;
