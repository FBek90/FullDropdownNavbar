import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../asseets/icons/logo.svg'
import { ReactComponent as Phone } from '../../asseets/icons/phone.svg'
import { ReactComponent as User } from '../../asseets/icons/user.svg'
import { ReactComponent as Plus } from '../../asseets/icons/plus.svg'
import { ReactComponent as Arrow } from '../../asseets/icons/arrow.svg'

export const Container = styled.div`
  display: flex;
  background: #4e606f;
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
export const LogoLink = styled(Link)`
  text-decoration: none;
`
Container.Brand = styled.div`
  display: flex;
  flex: 1;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  height: 40px;
  align-items: center;
  cursor: pointer;
  color: white;
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
  justify-content: space-around;
`
Container.Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 168px;
  height: 45px;
  background: #ffffff;
  color: #0061df;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.5s ease-in-out;
  :hover,
  :focus {
    color: #fff !important;
    background: #2dc1db;
    border-color: #2dc1db !important;
    & path {
      fill: #fff;
    }
  }
`

export const Icon = styled.div``

Icon.Logo = styled(Logo)`
  margin-right: 10px;
`
Icon.User = styled(User)`
  margin-right: 5px;
  cursor: pointer;
  :hover,
  :focus {
    font: inherit;
    & path {
      fill: #2dc1db;
    }
  }
`
Icon.Phone = styled(Phone)`
  margin-right: 5px;
  cursor: pointer;
  :hover,
  :focus {
    & path {
      fill: #2dc1db;
    }
  }
`
Icon.Plus = styled(Plus)`
  margin-right: 10px;
  margin-left: 10px;
  width: 20px;
  height: 20px;
`
Icon.Arrow = styled(Arrow)`
  margin-left: 3px;
  cursor: pointer;
  padding-bottom: 3px;
  :hover,
  :focus {
    & path {
      stroke: #2dc1db;
    }
  }
`
