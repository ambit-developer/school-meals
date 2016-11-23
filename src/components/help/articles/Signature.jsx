import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import ArticleFaqSection from '../ArticleFaqSection'
import ArticleDefinitionSection from '../ArticleDefinitionSection'
import Topic from '../Topic'
import { help, define } from './HelpText'

//F41, F11-13

export default class Signature extends Component {
  render() {
    return (
      <Article>
        <ArticleFaqSection>
        <Topic title={help.ssnTitle} body={help.ssnBody} />
        <Topic title={help.usCitizenTitle} body={help.usCitizenBody} />
        <Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
        <Topic title={help.checkedTitle} body={help.checkedBody} />
        </ArticleFaqSection>
      </Article>
    )
  }
}
