import React from 'react';
import { Paper, Tabs, Tab, Box, Typography } from '@material-ui/core';
import Login from '../Login/login.component';
import Register from '../Register/register.component';

export default function SignInOutContainer() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const paperStyle = {width: 320, margin: '20px auto'}
    const tabStyle = {width: 100}

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    return (
        <Paper  elevation={20} style={paperStyle}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab style={tabStyle} label="Sign In" />
                <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0}>
               <Login handleChange={handleChange}/>
            </TabPanel><TabPanel value={value} index={1}>
                <Register/>
            </TabPanel>
        </Paper>
    )

}