import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { sortValues } from "./../../config/sorting";

import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { setFavorite, updateFavorite } from "./../../redux/actions/favorites";

import styles from "./style.module.css";

interface SaveModalProps {
  onClose: any;
  searchName?: string;
  searchText?: string;
  searchValue?: number;
  searchSort?: string;
  id?: string;
  update?: boolean;
}

function SaveModal({
  onClose,
  searchName,
  searchText,
  searchValue,
  searchSort,
  id,
  update,
}: SaveModalProps) {
  const numberSort = sortValues.filter((item: any) => {
    return item.text == searchSort;
  });
  const dispatch = useDispatch();
  const { search } = useSelector((state: any) => state);
  const [parametrs, setParametrs] = useState({
    number: searchValue ? searchValue : 0,
    name: searchName ? searchName : "",
    sort: searchSort ? numberSort[0].id : 0,
    request: searchText ? searchText : search,
  });

  const handleChangeValue = (e: any) => {
    setParametrs({
      ...parametrs,
      number: e.target.value,
    });
  };

  const handleChangeName = (e: any) => {
    setParametrs({
      ...parametrs,
      name: e.target.value,
    });
  };

  const handlChangeSort = (e: any) => {
    setParametrs({
      ...parametrs,
      sort: e.target.value,
    });
  };

  const saveRequest = () => {
    dispatch(setFavorite(parametrs));
    onClose();
  };

  const updateRequest = () => {
    dispatch(updateFavorite({ id, ...parametrs }));
    onClose();
  };

  const body = (
    <div className={styles.modalPaper}>
      <Typography
        variant="h4"
        id="simple-modal-title"
        className={styles.modalTitle}
      >
        Сохранить запрос
      </Typography>
      <TextField
        disabled
        id="outlined-disabled"
        label="Запрос"
        defaultValue={parametrs.request}
        variant="outlined"
        className={styles.modalInput}
      />
      <TextField
        required
        id="outlined-required"
        label="Название"
        defaultValue={parametrs.name}
        variant="outlined"
        className={styles.modalInput}
        onChange={handleChangeName}
      />
      <FormControl variant="outlined" className={styles.modalInput}>
        <InputLabel id="select-outlined-label">Сортировка</InputLabel>
        <Select
          labelId="select-outlined-label"
          id="demo-simple-select-outlined"
          value={parametrs.sort}
          label="Сортировка"
          onChange={handlChangeSort}
        >
          {sortValues.map((sort: any, index: number) => {
            return (
              <MenuItem value={sort.id} key={index}>
                {sort.name}
              </MenuItem>
            );
          })}
        </Select>
        <div className={styles.modalRange}>
          <Typography>Количество результатов</Typography>
          <input
            type="range"
            min="0"
            max="50"
            value={parametrs.number}
            onChange={handleChangeValue}
            className={styles.modalInput}
          />
          <Typography className={styles.modalRangeMin}>
            {parametrs.number}
          </Typography>
          <Typography className={styles.modalRangeMax}>{`50`}</Typography>
        </div>
      </FormControl>
      <div className={styles.modalButtons}>
        <Button
          variant="contained"
          color="primary"
          onClick={update ? updateRequest : saveRequest}
        >
          Сохранить
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          Не сохранять
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      className={styles.modal}
      open={true}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Paper elevation={0} className={styles.modalBody}>
        {body}
      </Paper>
    </Modal>
  );
}

export default SaveModal;
