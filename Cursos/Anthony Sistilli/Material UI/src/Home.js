import { useState } from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
	}

  return (
    <>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="About" />
          <Tab label="Contact" />
        </Tabs>
      </AppBar>
      { selectedTab === 0 && <About /> }
      { selectedTab === 1 && <Contact /> }
    </>
  );
}
 
export default Home;