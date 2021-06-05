import React from 'react'
import IconFA from '../UI/IconFA'
import classes from './Logo.module.css'
import {NavLink} from 'react-router-dom'

const Logo = props => {
	return (
		<div className={classes.Logo}>
			<NavLink
				to={`${process.env.PUBLIC_URL}/`}
				onClick={() => props.openMenu(!props.isOpenMenu)}
			>
				<IconFA faClass='fab fa-galactic-republic' fontSize='42'/>
			</NavLink>
		</div>
	)
}

export default Logo