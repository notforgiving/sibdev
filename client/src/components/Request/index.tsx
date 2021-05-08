import { useState } from "react";

import {sortValues} from './../../config/sorting';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import styles from "./style.module.css";

interface requestProp {
  name: string;
  text: string;
  value: number;
  sort: string,
}

function Request({ name, text, value, sort }: requestProp) {
  const sortTranslate = sortValues.filter((value=>value.text===sort))
  return (
    <Card className={styles.requestBody}>
      <CardHeader title={name} subheader={text} />
      <CardActions disableSpacing className={styles.requestFooter}>
        <div className={styles.requestActions}>
          <Typography>{value} запросов </Typography>
          <IconButton aria-label="add to favorites">
            <PlayArrowIcon fontSize="large" style={{ color: green[500] }} />
          </IconButton>
          <IconButton aria-label="share">
            <DeleteIcon color="secondary" />
          </IconButton>
        </div>
        <div>
          <Typography>{sortTranslate[0].name}</Typography>
        </div>
      </CardActions>
    </Card>
  );
}

export default Request;
