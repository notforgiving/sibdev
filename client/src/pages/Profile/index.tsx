import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TabPanel from "./../../components/TabPanel";
import Search from "./../../components/Search";
import SaveModal from "./../../components/SaveModal";
import Favorites from "./../../components/Favorites";

import { logOut } from "./../../redux/actions/authorization";
import { setSearchString } from "./../../redux/actions/search";
import { clearFavorites, getFavorites } from "../../redux/actions/favorites";

import styles from "./style.module.css";
import Alert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";
import { clearMessage } from "../../redux/actions/message";

function Profile() {
  const dispatch = useDispatch();
  const { search, errors } = useSelector((state: any) => state);

  const [page, setPage] = useState(0);
  const [visableModal, setVisableModal] = useState(false);
  const [searchString, setString] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  useEffect(() => {
    setString(search);
  }, [search]);

  useEffect(() => {
    setAlert(true);
  }, [errors.message]);

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleChange = (event: ChangeEvent<{}>, newPage: number) => {
    setPage(newPage);
    dispatch(clearMessage());
  };

  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearMessage());
    dispatch(clearFavorites());
  };

  const handleChangeSearch = (event: ChangeEvent<{ value: string }>) => {
    setString(event.target.value);
  };

  const handleChangeVisableModal = () => {
    dispatch(setSearchString(searchString));
    setVisableModal(!visableModal);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={page}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            icon={<SearchIcon />}
            aria-label="phone"
            id={`scrollable-prevent-tab-${0}`}
            aria-controls={`scrollable-prevent-tabpanel-${0}`}
          />
          <Tab
            icon={<FavoriteIcon />}
            aria-label="favorite"
            id={`scrollable-prevent-tab-${1}`}
            aria-controls={`scrollable-prevent-tabpanel-${1}`}
          />
          <Tab
            icon={<ExitToAppIcon />}
            aria-label="favorite"
            onClick={handleLogOut}
          />
        </Tabs>
      </AppBar>
      <div className={styles.body}>
        <TabPanel value={page} index={0}>
          <Search
            search={searchString}
            onChange={handleChangeSearch}
            modal={handleChangeVisableModal}
          />
        </TabPanel>
        <TabPanel value={page} index={1}>
          <Favorites />
        </TabPanel>
      </div>
      {visableModal ? <SaveModal onClose={handleChangeVisableModal} /> : ""}
      {errors.message ? (
        <Snackbar
          open={alert}
          autoHideDuration={2000}
          onClose={handleCloseAlert}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert
            onClose={handleCloseAlert}
            severity={errors.status ? "success" : "warning"}
          >
            {errors.message}
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
    </div>
  );
}

export default Profile;
