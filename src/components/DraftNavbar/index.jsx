import React from 'react'
import { Container, NavbarLink, Icon, Button, LogoLink } from './style'
import { navItems } from '../../utils/navbar'
import { Menu, Dropdown } from 'antd'
import 'antd/dist/antd.css'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default function Navbar() {
  const menu = (
    <Menu>
      {navItems.map(({ child }, index) => {
        return child.map(({ path, title }, index) => {
          return <Menu.Item key={index}>{title}</Menu.Item>
        })
      })}
    </Menu>
  )

  return (
    <Container>
      <LogoLink to='/'>
        <Container.Brand>
          <Icon.Logo />
          Houzing
        </Container.Brand>
      </LogoLink>
      <Container.Navbar>
        {navItems.map(({ path, title, child, id }, index) => {
          return (
            <Dropdown overlay={menu} placement='bottomCenter' arrow>
              <NavbarLink activeStyle={{ color: '#2dc1db' }} key={id} to={path}>
                {title}
              </NavbarLink>
            </Dropdown>
          )
        })}
      </Container.Navbar>
      <Container.LogIn>
        <Container.Icon>
          <Icon.Phone /> +99890-7778899
        </Container.Icon>
        <Container.Icon>
          <Icon.User /> Login/Register
        </Container.Icon>
        <Button>
          <Icon.Plus />
          Create Listing
        </Button>
      </Container.LogIn>
    </Container>
  )
}
