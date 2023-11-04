import {
    Box
} from '@mui/material'

const list = (anchor) => (
    <Box
        sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            <ListItem
                key={'My desk'}
                disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ?
                            <InboxIcon/> :
                            <MailIcon/>}
                    </ListItemIcon>
                    <ListItemText
                        primary={'My desk'}/>
                </ListItemButton>
            </ListItem>
            <ListItem
                key={'Content'}
                disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ?
                            <InboxIcon/> :
                            <MailIcon/>}
                    </ListItemIcon>
                    <ListItemText
                        primary={'Content'}/>
                </ListItemButton>
            </ListItem>
            <ListItem
                key={'Content'}
                disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ?
                            <InboxIcon/> :
                            <MailIcon/>}
                    </ListItemIcon>
                    <ListItemText
                        primary={'People'}/>
                </ListItemButton>
            </ListItem>

        </List>
        <Divider/>
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem
                    key={text}
                    disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ?
                                <InboxIcon/> :
                                <MailIcon/>}
                        </ListItemIcon>
                        <ListItemText
                            primary={text}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
)
