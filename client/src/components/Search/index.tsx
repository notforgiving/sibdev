import { useState } from "react";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";

import styles from "./style.module.css";

interface SearchProps {
  search: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  modal: React.ChangeEventHandler<any>;
}

function Search({ search, onChange, modal }: SearchProps) {


  return (
    <Paper component="form" className={styles.root}>
      <InputBase
        className={styles.input}
        placeholder="Поиск видео"
        onChange={onChange}
      />
      <IconButton
        className={styles.iconButton}
        aria-label="search"
        onClick={modal}
      >
        {search != "" ? <FavoriteBorderIcon /> : ""}
      </IconButton>
      <IconButton
        type="submit"
        className={styles.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider className={styles.divider} orientation="vertical" />
    </Paper>
  );
}

export default Search;
