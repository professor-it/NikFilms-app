import React, {Component} from 'react'
import classes from './Layout.module.css'
import Nav from '../../components/Nav'
import Login from '../../components/Login'
import Logo from '../../components/Logo'
import Radium from 'radium'

class Layout extends Component {
	render() {
		const menu = [
			{
				title: 'Главная',
				icon: 'fas fa-home',
				to: `${process.env.PUBLIC_URL}/`,
				exact: true
			},
			{
				title: 'Рейтинг фильмов',
				icon: 'fas fa-film',
				to: `${process.env.PUBLIC_URL}/films`,
				exact: false
			},
			{
				title: 'Рейтинг сериалов',
				icon: 'fas fa-tv',
				to: `${process.env.PUBLIC_URL}/ser`,
				exact: false
			},
			{
				title: 'Рейтинг игр',
				icon: 'fas fa-gamepad',
				to: `${process.env.PUBLIC_URL}/games`,
				exact: false
			},
		]

		if (this.props.auth) {
			const add = {
				title: 'Добавить',
				icon: 'fas fa-plus',
				to: `${process.env.PUBLIC_URL}/add`,
				exact: false
			}
			menu.push(add)
		}

		const style = {
			'@media (min-width: 320px) and (max-width: 768px)': {
				display: 'flex'
			}
		}

		return (
			<div className={classes.Layout}>
				<div className={`${classes.menu} .menu`} style={this.props.isOpenMenu ? style : null}>
					<Logo openMenu={this.props.openMenu} isOpenMenu={this.props.isOpenMenu}/>
					<Nav menu={menu} openMenu={this.props.openMenu} isOpenMenu={this.props.isOpenMenu}/>
					<Login
						auth={this.props.auth}
						openMenu={this.props.openMenu}
						isOpenMenu={this.props.isOpenMenu}
						onResetAuth={this.props.onResetAuth}
					/>
				</div>
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}

export default Radium(Layout)