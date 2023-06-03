import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const PrimaryNav = styled.nav`
  height: 80px;
  display: flex;
  background: #3853A4;
  justify-content: space-between;
  align-items:center;
  padding-left:2%;
`
export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size:12px;
  align-items: center;
  text-decoration: none;
  font-weight:700;
  padding:1rem 0.6rem 1rem 0.6rem;
  margin: 1rem 0.5rem 1rem 0.5rem;
  height: 100%;
  &.active {
    background:red;
    border-radius:10px;
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  height:40px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  color:white;
  padding: 0.6rem 0 0.6rem 0;
  min-width:750px;
  margin-left:auto;
  background: #283353;
  justify-content:center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`