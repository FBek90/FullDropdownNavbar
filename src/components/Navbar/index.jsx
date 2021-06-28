import { Menu } from 'antd'
import 'antd/dist/antd.css'
import { navItems } from '../../utils/navbar'
import {
  MenuItem,
  Item,
  SubItem,
  Container,
  Icon,
  Button,
  MenuItemGroup,
} from './style'
import { Link } from 'react-router-dom'
import SiteNav, { ContentGroup } from 'react-site-nav'

// const SubMenu = MenuItem.SubMenu
// const MenuItemGroup = MenuItem.ItemGroup

export default function Navbar() {
  return (
    // <SiteNav>
    //   {navItems.map(({ path, title, child, id }, index) => {
    //     return (
    //       <ContentGroup
    //         activeStyle={{ color: '#2dc1db' }}
    //         // key={id}
    //         // to={path}
    //         title={title}
    //         height='100'
    //         width='150'
    //       >
    //         <>
    //           {child.map(({ path, title }) => {
    //             return <Link to={path}>{title}</Link>
    //           })}
    //         </>
    //       </ContentGroup>
    //     )
    //   })}
    //   <Menu.Item>CONTACT</Menu.Item>
    // </SiteNav>
    <Container>
      <Link to='/'>
        <Container.Brand>
          <Icon.Logo />
          Houzing
        </Container.Brand>
      </Link>
      <Container.Navbar>
        <MenuItem mode='horizontal'>
          {navItems.map(({ path, title, child, id }, index) => {
            return (
              <SubItem title={title}>
                <MenuItemGroup>
                  {child.map(({ path, title }) => {
                    return (
                      <Item>
                        <Link key={id} to={path}></Link>
                        {title}
                      </Item>
                    )
                  })}
                </MenuItemGroup>
              </SubItem>
            )
          })}
          <Item>
            <Link to='/contact'> </Link>
            CONTACT
          </Item>
        </MenuItem>
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
