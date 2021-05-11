import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";

import { SearchProps } from "./../../typing/search";

import styles from "./style.module.css";
import { getVideos } from "../../redux/actions/video";
import { useDispatch } from "react-redux";
import { setSearchString } from "../../redux/actions/search";

function Search({ search, onChange, modal }: SearchProps) {
  const dispatch = useDispatch();
  
  const handleRunSearch = () => {
    dispatch(setSearchString(search));
    dispatch(getVideos({search}))
  };

  return (
    <Paper className={styles.root}>
      <InputBase
        className={styles.input}
        placeholder="Поиск видео"
        onChange={onChange}
        value={search}
      />
      <IconButton
        className={styles.iconButton}
        aria-label="search"
        onClick={modal}
      >
        {search != "" ? <FavoriteBorderIcon /> : ""}
      </IconButton>
      <IconButton
        className={styles.iconButton}
        aria-label="search"
        onClick={handleRunSearch}
        disabled={!search}
      >
        <SearchIcon />
      </IconButton>
      <Divider className={styles.divider} orientation="vertical" />
    </Paper>
  );
}

export default Search;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

