import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../redux/actions/favorites';

interface ConfirmProp {
  close: any,
  id: string,
}

function Confirm({close, id}:ConfirmProp) {
  const dispatch = useDispatch()

  const handleDelete = ()=>{
    dispatch(deleteFavorite(id))
    close()
  }

  return (
    <Dialog
        open={true}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Вы уверены что хотите удалить запрос?"}</DialogTitle>
        <DialogActions>
          <Button onClick={close} color="primary">
            Отмена
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default Confirm;