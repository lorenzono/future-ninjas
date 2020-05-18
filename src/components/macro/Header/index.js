import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import {
  Header,
  HeaderDivision,
  HeaderNavItems,
  HeaderLink,
  NavPicture,
  NavTitle,
  NavSvg,
  viewBox,
  NavIcon,
  NavMenu,
  Space
} from '../../../style'

export default function HeaderComponent(props) {

  const [menu, setMenu] = useState(false)

  return (
    <>
      <Header color={props.headerColor}>
        <HeaderDivision>
          <HeaderLink
            onClick={() => props.changePage(props.logo.ref)}
            tabIndex='0'
            color={props.navColor}
          >
            {props.logo.src ?
              <NavPicture
                src={props.logo.src}
                alt={props.logo.alt}
              /> :
              <NavTitle>
                {props.logo.alt}
              </NavTitle>
            }
          </HeaderLink>
          <HeaderNavItems display={1}>
            {props.navItems.map(item =>
              <HeaderLink
                key={v4()}
                selected={item.ref === props.currentPage} // Ver sobre custom attributes no DOM no React 16
                color={props.navColor}
                onClick={() => props.changePage(item.ref)}
                tabIndex='0'
              >
                <NavTitle>
                  {item.title}
                </NavTitle>
              </HeaderLink>
            )}
          </HeaderNavItems>
          <HeaderNavItems>
            <NavSvg
              onClick={() => setMenu(!menu)}
              color={props.navColor}
              tabIndex='0'
              viewBox={viewBox}>
              {NavIcon}
            </NavSvg>
          </HeaderNavItems>
        </HeaderDivision>
      </Header>
      <NavMenu
        color={props.headerColor}
        show={menu}
      >
        {props.navItems
          .filter(item => item.ref !== props.currentPage)
          .map(item => // Ver como "sumir" com isso depois que clicar pra esconder, mas esperar um pouco pro menu subir
            <HeaderLink
              key={v4()}
              color={props.navColor}
              padding={1}
              onClick={() => props.changePage(item.ref)}
            >
              <NavTitle>
                {item.title}
              </NavTitle>
            </HeaderLink>
          )
        }
      </NavMenu>
      <Space>
      </Space>
    </>
  )
}

HeaderComponent.propTypes = {
  changePage: PropTypes.func.isRequired,
  headerColor: PropTypes.string.isRequired,
  navColor: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  navItems: PropTypes.array.isRequired,
  currentPage: PropTypes.string
}