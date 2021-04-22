import { ChangeEvent, useState } from "react";
import {useDispatch} from 'react-redux';

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TabPanel from "./../../components/TabPanel";

import {logOut} from './../../redux/actions/authorization';

import styles from "./style.module.css";

function Profile() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleLogOut = () => {
    dispatch(logOut())
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={value}
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
      <TabPanel value={value} index={0}>
        123
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}

export default Profile;
