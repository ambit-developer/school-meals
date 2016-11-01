﻿import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeTypeFormGroup from '../IncomeTypeFormGroup'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import { Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { tooltiptext } from '../../Tooltiptext'
import Tooltipcomp from '../Tooltip'
import FormattedMessage from '../FormattedMessage'

@observer
class ChildIncomeOverview extends Component {
  get isValid() {
    return this.props.allChildren
               .map(child => child.incomeTypes.child.isApplicable != null)
               .reduce((a, b) => a && b, true)
  }

  render() {
    const { allChildren } = this.props

    const pluralizedChildrenIncome =
      (allChildren.length === 1 ? 'child\'s' : 'childrens\'') + ' income'

    return(
      <Slide nextDisabled={!this.isValid} id="child-income">

        <p className="usa-font-lead">
        <FormattedMessage
              id="app.slides.childIncomeOverview.intro"
              description="Introductory paragraph."
              defaultMessage="The next few questions are about your &nbsp;{tooltip}&nbsp;."
              values={{
                tooltip: <Tooltipcomp text={tooltiptext.childincome}>
                            <FormattedMessage
                                id="app.slides.childIncomeOverview.introToolTip"
                                description="Introductory tooltip"
                                defaultMessage="{income}"
                                  values={{
                                    income: pluralizedChildrenIncome
                                  }}
                            />
                         </Tooltipcomp>
              }}
          />
        </p>

        <p>
         <FormattedMessage
              id="app.slides.childIncomeOverview.sources"
              description="income Source List beginning"
              defaultMessage="Some common sources of income for children are:"
         />
         </p>
        <ul className="usa-content-list">
          <li>
          <FormattedMessage
              id="app.slides.childIncomeOverview.fullOrPartJob"
              description="Full-/part-time job"
              defaultMessage="a full-time or part-time job,"
          />
         </li>
          <li>
          <FormattedMessage
              id="app.slides.childIncomeOverview.socialSecurity"
              description="Social Security"
              defaultMessage="{socialSecurity}&nbsp; benefits, if the child is disabled, or is the &nbsp;{beneficiary}&nbsp; of another person’s Social Security benefits,"
              values={{
              socialSecurity: <Tooltipcomp text={tooltiptext.ssiChildren}>
                        <FormattedMessage
                          id="app.slides.childIncomeOverview.social"
                          description="social"
                          defaultMessage="Social Security"
                        />
                        </Tooltipcomp>,
              beneficiary: <Tooltipcomp text={tooltiptext.ssSurvivor}>
                        <FormattedMessage
                          id="app.slides.childIncomeOverview.benefit"
                          description="benefit"
                          defaultMessage="beneficiary"
                        />
                        </Tooltipcomp>
              }}
          />
        </li>

          <li>
          <FormattedMessage
            id="app.slides.childIncomeOverview.money"
            description="money regularly received"
            defaultMessage="money regularly received from extended family or friends outside the household, or"
          />
          </li>
          <li>
          <FormattedMessage
              id="app.slides.childIncomeOverview.moneyFrom"
              description="money From pension, annuity, or trust"
              defaultMessage="money from a &nbsp;{pension}&nbsp;, &nbsp;{annuity}&nbsp;, or &nbsp;{trust}"
              values={{
              socialSecurity: <Tooltipcomp text={tooltiptext.pensionChildren}>
                        <FormattedMessage
                          id="app.slides.childIncomeOverview.social"
                          description="pension"
                          defaultMessage="pension"
                        />
                        </Tooltipcomp>,
              beneficiary: <Tooltipcomp text={tooltiptext.annuityChildren}>
                        <FormattedMessage
                          id="app.slides.childIncomeOverview.annuity"
                          description="annuity"
                          defaultMessage="annuity"
                        />
                        </Tooltipcomp>,
              beneficiary: <Tooltipcomp text={tooltiptext.trust}>
                        <FormattedMessage
                          id="app.slides.childIncomeOverview.trust"
                          description="trust"
                          defaultMessage="trust"
                        />
                        </Tooltipcomp>
              }}
          />
        </li>
        </ul>

        <p>
        <FormattedMessage
          id="app.slides.childIncomeOverview.doNotInclude"
          description="Do not include"
          defaultMessage="Do not include infrequent earnings, such as income from occasional baby-sitting or mowing lawns."
        />
        </p>

        {allChildren.map(child =>
          <IncomeTypeFormGroup person={child} incomeTypeName="child"
                               key={child.id} incomeDescription="income">
          <FormattedMessage
              id="app.slides.childIncomeOverview.doNotInclude"
              description="Do not include"
              defaultMessage="Does {informalName} have income from any of these, or any other, sources?"
              values={{
              informalName: <strong>informalName(child)</strong>
              }}
          />
          </IncomeTypeFormGroup>
        )}
      </Slide>
    )
  }
}

ChildIncomeOverview.propTypes = {
  allChildren: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ChildIncomeOverview
