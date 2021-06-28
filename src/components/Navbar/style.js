import { Menu } from 'antd'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../asseets/icons/logo.svg'
import { ReactComponent as Phone } from '../../asseets/icons/phone.svg'
import { ReactComponent as User } from '../../asseets/icons/user.svg'
import { ReactComponent as Plus } from '../../asseets/icons/plus.svg'

export const Container = styled.div`
  display: flex;
  background: white;
  padding: 10px 100px;
  color: white;
`

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-right: 30px;
  color: white;
  white-space: nowrap;
  :hover,
  :focus {
    color: #2dc1db;
  }
`

Container.Brand = styled.div`
  display: flex;
  flex: 1;
  font-weight: bold;
  font-size: var(--navbar-title-size);
  line-height: 22px;
  height: 30px;
  align-items: center;
  cursor: pointer;
  color: var(--facebook-bg-color);
  :hover,
  :focus {
    color: var(--icon-hover-color) !important;
    & path {
      fill: var(--icon-hover-color);
    }
  }
`
Container.Navbar = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: center;
`
Container.LogIn = styled.div`
  flex: 2;
  display: flex;
  font-size: 13px;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
`
Container.Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-right: 5px;
  color: var(--facebook-bg-color);
  :hover,
  :focus {
    color: var(--icon-hover-color) !important;
    & path {
      fill: var(--icon-hover-color);
    }
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 140px;
  height: 35px;
  background: var(--facebook-bg-color);
  color: white;
  /* color: #0061df; */
  border-radius: 8px;
  border: 1px solid var(--facebook-bg-color);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.5s ease-in-out;
  :hover,
  :focus {
    color: var(--facebook-bg-color) !important;
    background: white;
    & path {
      fill: var(--facebook-bg-color);
    }
  }
`

export const Icon = styled.div``

Icon.Logo = styled(Logo)`
  margin-right: 10px;
  height: 40px;
  :hover,
  :focus {
    & path {
      fill: var(--icon-hover-color);
    }
  }
`
Icon.User = styled(User)`
  margin-right: 5px;
  cursor: pointer;
  :hover,
  :focus {
    font: inherit;
    & path {
      fill: var(--icon-hover-color);
    }
  }
`
Icon.Phone = styled(Phone)`
  margin-right: 5px;
  cursor: pointer;
  :hover,
  :focus {
    & path {
      fill: var(--icon-hover-color);
    }
  }
`
Icon.Plus = styled(Plus)`
  margin-right: 10px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  & path {
    fill: white;
  }
  :hover,
  :focus {
    & path {
      fill: var(--facebook-bg-color);
    }
  }
`

export const MenuItem = styled(Menu)`
  font-style: normal;
  background: white;
  font-weight: bold;
  text-decoration: none;
  font-size: var(--nav-item-size);
  border-bottom: 1px solid white;
`
export const Item = styled(Menu.Item)`
  font-style: normal;
  font-weight: bold;
  font-size: var(--nav-item-size);
  line-height: 22px;
  :hover,
  :focus {
    color: #2dc1db;
  }
`
export const SubItem = styled(Menu.SubMenu)`
  font-style: normal;
  font-weight: bold;
  font-size: var(--nav-item-size);
  line-height: 22px;
  :hover,
  :focus {
    color: #2dc1db;
  }
`
export const MenuItemGroup = styled(Menu.ItemGroup)`
  /* color: blue; */
  /* :hover,
  :focus {
    color: #2dc1db;
  } */
`
