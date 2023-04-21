import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MyTabs = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Friedrichshain</Tab>
                <Tab>Kreuzberg</Tab>
            </TabList>

            <TabPanel>
                <p>Friedrichshain is a quarter (Ortsteil) of the borough of Friedrichshain-Kreuzberg in Berlin, Germany. From its creation in 1920 until 2001, it was a freestanding city borough. Formerly part of East Berlin, it is adjacent to Mitte, Prenzlauer Berg, Kreuzberg and Lichtenberg.</p>
            </TabPanel>
            <TabPanel>
                <p>Kreuzberg is a district of Berlin, Germany. It is part of the Friedrichshain-Kreuzberg borough located south of Mitte. During the Cold War era, it was one of the poorest areas of West Berlin, but since German reunification in 1990, it has become more gentrified and is known for its arts scene.</p>
            </TabPanel>
        </Tabs>
    );
};

export default MyTabs;