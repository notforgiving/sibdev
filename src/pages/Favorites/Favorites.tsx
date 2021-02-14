import { useEffect } from "react";
import Request from "../../components/Request";
import Hedaer from "./../../components/Header";
import style from "./style.module.css";
import { getReqsts } from "./../../redux/actions/reqActions";
import { useDispatch, useSelector } from "react-redux";

function Favorites() {
  const dispatch = useDispatch();
  const { favorites }: any = useSelector((state) => state);

  useEffect(() => {
    dispatch(getReqsts());
  }, [dispatch]);

  return (
    <>
      <Hedaer />
      <section className={style.container}>
        <h1 className={style.title}>Избранное</h1>
        <div className={style.list}>
          {favorites.map((chosen: any) => {
            return (
              <Request
                key={chosen._id}
                className={style.listItem}
                dataReq={chosen}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Favorites;
