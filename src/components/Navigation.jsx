﻿import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { Glyphicon, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { locales, organization } from '../config'
import FormattedMessage from './Application/FormattedMessage'
import LocalePicker from './LocalePicker'

@observer
class Navigation extends Component {
  constructor (props, context) {
    super(props, context)
    this.handleData = this.handleData.bind(this)
    this.handleHelp = this.handleHelp.bind(this)
  }

  handleData(event) {
    window.location.replace('#/viewappdata')
  }

  handleHelp(event) {
    const { navigationData } = this.props
    const { currentSlide } = navigationData
    const article = currentSlide.getAttribute('data-help-article')

    this.props.helpData.showArticle(article)
  }

  render() {
    return (
      <Navbar fixedTop>
        <div className="usa-grid">
        <Navbar.Header>
          <Navbar.Brand>
            <span className="hidden-xs">
              <FormattedMessage
                  id="app.nav.title"
                  description="Text for the page title."
                  defaultMessage="{organizationName} Application for Free and Reduced Price School Meals"
                  values={{
                    organizationName: organization.name
                  }}
              />
            </span>
            <span className="hidden-sm hidden-md hidden-lg">
              <FormattedMessage
                  id="app.nav.shortTitle"
                  description="Text for the page title on mobile devices."
                  defaultMessage="{organizationShortName} Application for School Meals"
                  values={{
                    organizationShortName: organization.shortname
                  }}
              />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2} onClick={this.handleData}>
              <Glyphicon glyph="list-alt" />&nbsp;
              <FormattedMessage
                  id="app.nav.data"
                  description="Text for the Data navigation item."
                  defaultMessage="Data"
              />
            </NavItem>
            <NavItem eventKey={1} onClick={this.handleHelp}>
              <Glyphicon glyph="question-sign" />&nbsp;
              <FormattedMessage
                  id="app.nav.help"
                  description="Text for the Help navigation item."
                  defaultMessage="Help"
              />
            </NavItem>
            <LocalePicker localeData={localeData} locales={locales} />
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}

Navigation.propTypes = {
  helpData: PropTypes.object.isRequired,
  localeData: PropTypes.object.isRequired,
  navigationData: PropTypes.object.isRequired,
};

export default Navigation
