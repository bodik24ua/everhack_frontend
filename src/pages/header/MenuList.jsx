import * as React
    from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    Collapse,
    ListItemButton,
} from '@mui/material'
import AlignVerticalBottomIcon
    from '@mui/icons-material/AlignVerticalBottom'
import ComputerIcon
    from '@mui/icons-material/Computer'
import PeopleOutlineIcon
    from '@mui/icons-material/PeopleOutline'
import MovingIcon
    from '@mui/icons-material/Moving'
import {
    Link
} from 'react-router-dom'

import {
    ExpandLess,
    ExpandMore
} from '@mui/icons-material'

const MenuList = ({toggleDrawer}) => {
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <Box
            sx={{width: 250}}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <Link
                    to={'/'}
                    onClick={toggleDrawer(false)}>
                    <ListItem
                        button
                        key={'My desk'}>
                        <ListItemIcon>
                            <ComputerIcon/>
                        </ListItemIcon>
                        <ListItemText
                            primary={'My desk'}/>
                    </ListItem>
                </Link>
                <Link
                    to={'/'}
                    onClick={toggleDrawer(false)}>
                    <ListItem
                        button
                        key={'Content'}>
                        <ListItemIcon>
                            <AlignVerticalBottomIcon/>
                        </ListItemIcon>
                        <ListItemText
                            primary={'Content'}/>
                    </ListItem>
                </Link>
                <ListItemButton
                    onClick={handleClick}>
                    <ListItemIcon>
                        <PeopleOutlineIcon/>
                    </ListItemIcon>
                    <ListItemText
                        primary="Inbox"/>
                    {open ?
                        <ExpandLess/> :
                        <ExpandMore/>}
                </ListItemButton>
                <Collapse
                    in={open}
                    timeout="auto"
                    unmountOnExit>
                    <List
                        component="div"
                        disablePadding>
                        <Link
                            to={'/career'}
                            sx={{pl: 4}}
                            onClick={toggleDrawer(false)}>
                            <ListItemButton
                                sx={{pl: 4}}>
                                <ListItemIcon>
                                    <MovingIcon/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Starred"/>
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>

            </List>
        </Box>
    )
}

export default MenuList
