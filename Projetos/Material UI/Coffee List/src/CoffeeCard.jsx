import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Share from '@material-ui/icons/Share';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function CoffeeCard(props) {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={avatarUrl} />
        }
        action={
          <IconButton aria-label="settings">
            <Share />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        style={{ height: '150px' }}
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          { description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
}
