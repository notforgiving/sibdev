import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { VideoProp } from "../../typing/video";

import styles from "./style.module.css";

function Video({ pic, title, date, url, viewCount, channelTitle }: VideoProp) {
  const lengthTitle = 25;
  const corpTitle =
    title.length >= lengthTitle ? title.slice(0, lengthTitle) : title;

  const thousand = Number(viewCount) / 1000 > 1;
  const million = Number(viewCount) / 1000000 > 1;

  const convertDate = (date: string): any => {
    const now = Math.round(new Date().getTime() / 1000.0);
    const formatDate = Math.round(new Date(date).getTime() / 1000.0);
    const different = now - formatDate;
    const weeks = {
      value: Math.round(different / 604800),
      text: "недель",
    };
    const days = {
      value: Math.round(different / 86400),
      text: "дней",
    };
    const hours = {
      value: Math.round(different / 3600),
      text: "часов",
    };
    const minuts = {
      value: Math.round(different / 60),
      text: "минут",
    };
    const seconds = {
      value: Math.round(different),
      text: "секунд",
    };
    const result = [weeks, days, hours, minuts, seconds];
    for (let i = 0; i < result.length; i++) {
      if (result[i].value) {
        return result[i];
      }
    }
  };

  return (
    <a
      href={`https://youtu.be/${url}`}
      target="_blank"
      className={styles.video}
    >
      <Card>
        <CardMedia
          image={pic}
          title="Paella dish"
          className={styles.videoPic}
        />
        <Typography
          variant="h6"
          color="textSecondary"
          component="p"
          className={styles.videoTitle}
        >
          {title.length >= lengthTitle ? `${corpTitle}...` : corpTitle}
        </Typography>
        <Typography color="textSecondary" className={styles.videoChannelTitle}>
          {channelTitle}
        </Typography>
        <Typography color="textSecondary" className={styles.videoViewCount}>
          {thousand && !million
            ? `${Math.round(Number(viewCount) / 1000)} тыс. просмотров  `
            : ""}
          {million && thousand
            ? `${Math.round(Number(viewCount) / 1000000)} млн. просмотров  `
            : ""}
          {
            !thousand && !million ? `${viewCount} просмотров  ` : ``
          }
          {convertDate(date).value} {convertDate(date).text} назад
        </Typography>
      </Card>
    </a>
  );
}

export default Video;
