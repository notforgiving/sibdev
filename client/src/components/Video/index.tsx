import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styles from "./style.module.css";

interface VideoProp {
  pic: string;
  title: string;
  description: string;
}

function Video({ pic, title, description }: VideoProp) {
  const lengthTitle = 25;
  const lengthDescription = 50;
  const corpTitle =
    title.length >= lengthTitle ? title.slice(0, lengthTitle) : title;
  const corpDescription =
    description.length >= lengthDescription
      ? description.slice(0, lengthDescription)
      : description;
  return (
    <Card className={styles.video}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title.length >= lengthTitle ? `${corpTitle}...` : corpTitle}
        subheader="September 14, 2016"
      />
      <CardMedia image={pic} title="Paella dish" className={styles.videoPic} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description.length >= lengthDescription
            ? `${corpDescription}...`
            : corpDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Video;
