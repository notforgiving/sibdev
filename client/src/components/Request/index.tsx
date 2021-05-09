import { useState } from "react";

import { sortValues } from "./../../config/sorting";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CreateIcon from "@material-ui/icons/Create";
import SaveModal from "./../SaveModal";
import { requestProp } from "./../../typing/request";

import styles from "./style.module.css";
import Confirm from "../Confirm";

function Request({ name, text, value, sort, id }: requestProp) {
  const sortTranslate = sortValues.filter((value) => value.text === sort);
  const [del, setDel] = useState(false);
  const [change, setChange] = useState(false);

  const handleClickDelete = () => {
    setDel(!del);
  };

  const changeRequest = () => {
    setChange(!change);
  };

  return (
    <Card className={styles.requestBody}>
      <CardHeader title={name} subheader={text} />
      <CardActions disableSpacing className={styles.requestFooter}>
        <div className={styles.requestActions}>
          <Typography>{value} запросов </Typography>
          <IconButton aria-label="run favorite">
            <PlayArrowIcon fontSize="large" style={{ color: green[500] }} />
          </IconButton>
          <IconButton aria-label="change favorite" onClick={changeRequest}>
            <CreateIcon color="primary" />
          </IconButton>
          <IconButton aria-label="delete favorite" onClick={handleClickDelete}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </div>
        <div>
          <Typography>{sortTranslate[0].name}</Typography>
        </div>
      </CardActions>
      {del ? <Confirm close={handleClickDelete} id={id} /> : ""}
      {change ? (
        <SaveModal
          onClose={changeRequest}
          searchName={name}
          searchText={text}
          searchValue={value}
          searchSort={sort}
          id={id}
          update={true}
        />
      ) : (
        ""
      )}
    </Card>
  );
}

export default Request;
