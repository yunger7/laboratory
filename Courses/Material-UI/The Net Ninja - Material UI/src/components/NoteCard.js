import { Card, CardHeader, CardContent, IconButton, Typography, makeStyles, Avatar } from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import { DeleteOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      switch (note.category) {
        case "work":
          return yellow[700];
        case "money":
          return green[500];
        case "todos":
          return pink[500];
        default:
          return blue[500];
      }
    }
  }
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              { note.category[0].toUpperCase() }
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
        title={note.title}
        subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
 
export default NoteCard;