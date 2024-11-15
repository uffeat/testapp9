import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export const DrawerAppBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Exercitation tofu voluptate, etsy praxis neutral milk hotel pinterest
          wolf squid cronut pabst blue bottle plaid church-key. Gochujang
          semiotics fanny pack, listicle street art sunt chambray ugh pour-over
          sed palo santo waistcoat put a bird on it authentic. Kitsch narwhal
          beard, DSA pok pok cliche lomo dreamcatcher blackbird spyplane keytar
          organic ethical. Messenger bag cupidatat tattooed woke trust fund tofu
          pabst praxis cardigan skateboard elit try-hard. Fit locavore selvage
          copper mug, waistcoat praxis sustainable. Cold-pressed cliche cray hot
          chicken slow-carb trust fund sustainable mlkshk letterpress activated
          charcoal fam. In tilde salvia, seitan in palo santo kitsch prism
          readymade retro praxis. Vice ethical vinyl kitsch vegan eu. Iceland
          gochujang before they sold out, drinking vinegar raclette meh ennui
          post-ironic tattooed quis lyft vape lorem aute dolore. Unicorn
          typewriter proident farm-to-table, kitsch quinoa celiac hammock small
          batch hexagon plaid drinking vinegar pinterest ad. Locavore id
          cardigan gochujang helvetica. Sustainable poutine banh mi authentic
          JOMO lomo reprehenderit whatever dolor yr tbh tempor. In polaroid
          distillery, proident banjo photo booth church-key. In selfies normcore
          beard fam vinyl craft beer proident pug. Kickstarter cupidatat
          commodo, scenester exercitation quis tattooed enamel pin poke duis.
          Shabby chic shoreditch franzen, four loko single-origin coffee before
          they sold out kinfolk fixie seitan solarpunk deep v. Live-edge mollit
          aliqua, unicorn locavore kinfolk adipisicing selvage proident photo
          booth cupidatat blog small batch pork belly XOXO. Trust fund sartorial
          mixtape deep v asymmetrical stumptown echo park aesthetic in laborum.
          Schlitz mixtape ea copper mug, mukbang VHS church-key DSA photo booth
          direct trade tofu. YOLO fam elit cillum big mood single-origin coffee
          knausgaard. Heirloom chia viral sus art party. Photo booth disrupt
          cornhole, dolore banjo sartorial VHS. Magna godard cloud bread artisan
          iceland duis dreamcatcher. Austin copper mug hella, locavore in
          bicycle rights meh bruh irony farm-to-table knausgaard you probably
          haven't heard of them sunt JOMO. Food truck semiotics put a bird on
          it, sint air plant DIY jean shorts commodo green juice kinfolk nostrud
          in swag. Humblebrag copper mug lumbersexual magna, sint laborum
          butcher. Four loko lyft marfa letterpress adipisicing meditation yes
          plz pok pok taxidermy minim enim consequat.
        </Typography>
      </Box>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
