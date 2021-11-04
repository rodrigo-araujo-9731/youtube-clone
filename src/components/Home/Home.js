import React from 'react';
import YoutubeLogo from '../../assets/logop.png'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles} from '@mui/styles';
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItemIcon,
  ListItemText,
  ListItem,
  ListSubheader,
  Hidden,
  TextField,
} from "@mui/material";
import Typography from '@mui/material/Typography';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TheatersIcon from '@mui/icons-material/Theaters';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import {BsSearch} from 'react-icons/bs'
import MicIcon from '@mui/icons-material/Mic';


import GetVideos from '../GetVideos/GetVideos';



const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer +1,
    backgroundColor: 'white',
    borderBottom: "100px",
    borderColor: 'black'
  },
  searchBar: {
    width: 500,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    zIndex: 1
  
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  grow: {
    flexGrow: 1,
  },
  searchButton: {
    color: '#808080',
    backgroundColor: '#808080',
    borderColor: '#808080',
    height: 40,
    width: 5,

  },
  buttonSign: {
    textDecoration: 'bold',
  },
  icons: {
    paddingRight: theme.spacing(1),
  },
  logo: {
    width: 100,
    marginLeft: 20,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));



function Home() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar
          color="inherit"
          style={{
            boxShadow: "none",
            borderBottom: "1px solid #bcbcbc",
          }}
          // className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuIcon}
              color="inherit"
              aria-label="menu"
            ></IconButton>

            <MenuIcon />
            <img src={YoutubeLogo} alt="logo" className={classes.logo} />
            <div className={classes.grow} />
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              className={classes.searchBar}
            />
            {/* //Button Search// */}
            <Button
              style={{
                borderColor: "#bcbcbc",
                backgroundColor: "#f9f9f9",
                fontSize: "18px",
                height: "40px",
                width: "20px",
              }}
              startIcon={<BsSearch />}
              variant="outlined"
              color="inherit"
            ></Button>
            <IconButton
              className={classes.icons}
              color="inherit"
              style={{
                borderRadius: 100,
                backgroundColor: "#f9f9f9",
                marginLeft: 5,
              }}
            >
              <MicIcon />
            </IconButton>
            <div className={classes.grow} />

            <IconButton className={classes.icons} color="inherit">
              <AppsIcon />
            </IconButton>
            <IconButton className={classes.icons} color="inherit">
              <MoreVertIcon />
            </IconButton>
            {/* //Button Login// */}
            <Button
              className={classes.buttonSign}
              startIcon={<AccountCircleIcon />}
              variant="outlined"
              color="primary"
            >
              sign in
            </Button>
          </Toolbar>
        </AppBar>
        <Box display="flex">
          <Hidden mdDown>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{ paper: classes.drawerPaper }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>
                <List>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primarry: classes.listItemText,
                      }}
                      primary={"Home"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primarry: classes.listItemText,
                      }}
                      primary={"Explore"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primarry: classes.listItemText,
                      }}
                      primary={"Subscriptions"}
                    />
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primarry: classes.listItemText,
                      }}
                      primary={"Library"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primarry: classes.listItemText,
                      }}
                      primary={"History"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<OndemandVideoIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primarry: classes.listItemText,
                      }}
                      primary={"Your videos"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<WatchLaterIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primarry: classes.listItemText,
                      }}
                      primary={"Watch later"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<ThumbUpAltIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primarry: classes.listItemText,
                      }}
                      primary={"Liked videos"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<ExpandMoreIcon />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primarry: classes.listItemText,
                      }}
                      primary={"Show more"}
                    />
                  </ListItem>
                </List>
                <Divider />
                <Box p={5}>
                  <Typography variant="body1">
                    Sign in to like videos, comment, and subscribe.
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<AccountCircleIcon />}
                    >
                      SIGN IN
                    </Button>
                  </Box>
                </Box>
                <Divider />
                <Divider />
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                      className={classes.subheader}
                    >
                      BEST OF YOUTUBE
                    </ListSubheader>
                  }
                >
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <MusicNoteIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Music"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <SportsKabaddiIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Sports"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <SportsEsportsIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Gaming"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <TheatersIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Movies"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <AnnouncementIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"News"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <LiveTvIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"Live"}
                    />
                  </ListItem>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>
                      <BlurOnIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText,
                      }}
                      primary={"360º Video"}
                    />
                  </ListItem>
                </List>
                <Divider />
              </div>
            </Drawer>
          </Hidden>

          <Box p={8}>
            <Toolbar />
            <Typography
              variant="h5"
              color="textPrimary"
              style={{ fontWeight: 600, marginBottom: "50px" }}
            >
              Featured
            </Typography>
            <GetVideos />
          </Box>
        </Box>
      </div>
    );
}

export default Home;