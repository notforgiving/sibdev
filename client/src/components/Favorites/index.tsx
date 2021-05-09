import {  useSelector } from "react-redux";

import Request from "./../Request";

import { favoriteDB } from "../../typing/favorite";

import styles from "./style.module.css";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useState } from "react";

function Favorites() {
  const { favorites, errors } = useSelector((state: any) => state);
  const [message,setMessage] = useState(false)

  const handleCloseMessage = () =>{
    setMessage(!message)
  }

  return (
    <div className={styles.body}>
      {favorites.map((markReq: favoriteDB) => {
        return (
          <Request
            id={markReq._id}
            key={markReq._id}
            name={markReq.name}
            text={markReq.text}
            value={markReq.value}
            sort={markReq.sort}
          />
        );
      })}
      {errors.message ? (
        <Snackbar
          open={message}
          autoHideDuration={2000}
          onClose={handleCloseMessage}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Alert
            onClose={handleCloseMessage}
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

export default Favorites;
