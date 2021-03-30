import { useHistory, useLocation } from "react-router-dom";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import {
	Drawer,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	AppBar,
	Toolbar,
} from "@material-ui/core";
import { SubjectOutlined, AddCircleOutlined } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles(theme => {
	return {
		root: {
			display: "flex",
		},
		page: {
			background: "#f9f9f9",
			width: "100%",
			padding: theme.spacing(3),
		},
		drawer: {
			width: drawerWidth,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		active: {
			backgroundColor: "#f4f4f4",
		},
		title: {
			padding: theme.spacing(2),
		},
		appbar: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
		toolbar: theme.mixins.toolbar,
		date: {
			flexGrow: 1,
		},
	};
});

export default function Layout({ children }) {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();

	const menuItems = [
		{
			text: "My Notes",
			icon: <SubjectOutlined color="secondary" />,
			path: "/",
		},
		{
			text: "Create Note",
			icon: <AddCircleOutlined color="secondary" />,
			path: "/create",
		},
	];

	return (
		<div className={classes.root}>
			{/* App bar */}
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar>
					<Typography className={classes.date}>
						Today is the {format(new Date(), "do MMMM Y")}
					</Typography>
					<Typography>Mario</Typography>
				</Toolbar>
			</AppBar>

			{/* Side drawer */}
			<Drawer
				className={classes.drawer}
				variant="permanent"
				anchor="left"
				classes={{ paper: classes.drawerPaper }}
			>
				<div>
					<Typography variant="h5" className={classes.title}>
						Ninja Notes
					</Typography>
				</div>

				{/* List / Links */}
				<List>
					{menuItems.map(item => (
						<ListItem
							key={item.text}
							button
							onClick={() => history.push(item.path)}
							className={location.pathname == item.path ? classes.active : null}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>

			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	);
}
