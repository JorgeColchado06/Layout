import React from 'react'
import { AppBar, Toolbar, CssBaseline, IconButton, Typography, Button } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

const Layout = () => {
	const history = useHistory()

	return (
		<>
			<CssBaseline />
			<AppBar color='secondary'>
				<Toolbar>
					<IconButton edge='start' color='inherit'>
						<MenuIcon />
					</IconButton>
					<Typography style={{ flexGrow: 1 }}>Samus App</Typography>
					<Button variant='text' color='inherit' onClick={() => history.push('/')}>Log out</Button>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default Layout