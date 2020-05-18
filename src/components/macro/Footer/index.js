import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import {
  Footer,
  FooterDivision,
  FooterTitle,
  FooterLink,
  ExternalLink,
  Logo,
  Span,
} from '../../../style'

const FooterComponent = props => (
  <Footer color={props.footerColor}>
    <FooterDivision>
      <div>
        <FooterTitle color={props.navColor}>
          {props.title}
        </FooterTitle>
        {props.navItems.map(item =>
          <FooterLink
            key={v4()}
            onClick={() => props.changePage(item.ref)}
            tabIndex='0'
          >
            {item.title}
          </FooterLink>
        )}
      </div>
      <div>
        <FooterTitle>
          Redes Sociais
        </FooterTitle>
        {props.socialMedias.map(media =>
          <ExternalLink
            key={v4()}
            href={media.ref}
          >
            <Logo
              src={media.src}
              alt={media.title}
            />
            <Span>
              {media.title}
            </Span>
          </ExternalLink>
        )}
      </div>
    </FooterDivision>
  </Footer>
)

FooterComponent.propTypes = {
  footerColor: PropTypes.string.isRequired,
  navColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  navItems: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired,
  socialMedias: PropTypes.array
}

export default FooterComponent