import React, { Component } from 'react';
import { Row, Grid, Col, ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap'
import './competitionfile.css'
// import { Collapsible, CollapsibleItem} from 'react-materialize';
import diploma from '../img/diploma.svg'
import idea from '../img/idea.svg'
import notes from '../img/notes.svg'

export default class Competitionsfile extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (


            <Col xs={12} md={8} className="ln-right-column">
                <Col xsHidden smHidden md={1} className="ln-right-column" xsHidden>
                    <div className="vertical-line-ln-comp"></div>
                </Col>
                <Col xs={12} md={11} className="ln-right-column">
                    <Row>
                        <ul className="heading-ln">
                            <li> <h1 className="competition-Webpreneurship">Social Case Challenge</h1></li>
                            <li><p className="competition-Webpreneurship-bottomtext-comp">Description</p></li>

                        </ul>

                        <ul className="competition-Allyouneed1">
                            <li><p>Current methods to provide the porter services in Indian Railway stations are pathetic in terms of the ease to get a coolie, booking one and later paying for it without any hustles or feuds. This goes for the service providers or Coolies as well. Fluctuating wages based on a bargain model, fewer perks and negligible respect for the job drives the tension between a customer and a coolie. Having identified this, Enactus IIT Roorkee in its drive to empower the porters and help the customers have come up with an in depth analysis of the problem. However, they are stuck with a feasible solution to tackle this and require your team’s help to reach a conclusion.<br /> Follow the guidelines below and register your team for the competition. You can read the detailed case. The case contains the key findings from the Enactus IIT Roorkee team and your main tasks as their consultants.</p></li>

                        </ul>
                        <ul className="competition-highlights1">
                            <li><h1>Format</h1></li>
                        </ul>
                        <ul className="competition-workforacompany1">
                            <li><p>This event will be conducted in two stages and its detailed procedures have been clarified below.</p></li>

                        </ul>
                        <ul className="competition-session1-ln">
                            <li><h1 className="comp-stage1">Stage - I</h1></li>
                            <li><p className="comp-submission">Abstract Submissions</p></li>
                        </ul>
                        <ol className="comp-rules-1">
                            <li><p> Participants are needed to send in the abstract of the original/review work including the References, the idea proposed with figures (if needed) to [enactus id] and CC to [e-summit id]. It should present your perspective as well as address all the issues pertaining to the problem statement.</p></li>
                            <li><p>Abstract should not exceed 1000 words and the covering page of the abstract must have: Name(s), Institution of study, Email address(s), contact number(s), e-summit ids of all the team members.</p></li>
                            <li><p> Your email should have the event and team name as your subject. For Example, A mail should have subject as: “[event name]: Team “name” and file title as: “Abstract by Team “name””.Selection to the next round for final presentations will be based on the abstract submitted.</p></li>
                            <li><p className="competition-deadline"> Deadline for Abstract Submissions is 20th March, 2018.</p></li>
                            <li><p>The result for the first round will be put up on the website till 28th March, 2018 and will also be mailed to you.</p></li>
                            <li><p>For any particular queries regarding paper presentations, please contact the respective event Coordinators.</p></li>
                        </ol>
                        <ul className="competition-session1-ln">
                            <li><h1 className="comp-stage2">Stage - II</h1></li>
                            <li><p className="comp-presentation-ln">Presentation</p><br />
                                <p className="secondround-ln-comp">The second round will be conducted at IIT Roorkee during E-Summit 2018</p>
                            </li>
                        </ul>
                        <ol className="beforerule-ln">
                            <li><p>Participants should submit their full paper in “.pdf ” format. You need to bring two passport size photographs of each participant along with all the necessary details attached.</p></li>
                            <li><p>Final Presentations should be in “.pdf ” format strictly and should be timed for 15 min. (10 minutes for presentation and 5 minutes for Question and Answer round. Be as creative as possible, while presenting your solution.</p></li>
                            <li><p>Participants should ensure that their presentation include all relevant figures, tables and references.</p></li>
                            <li><p>The decision of the judges shall be final and binding.</p></li>

                        </ol>
                        <ul className="comp-rules">
                            <li><h1>Rules</h1></li>
                        </ul>

                        <ul className="comp-rules-brief">
                            <li>Each team may have a maximum of four members. Solo entries are also allowed.</li>
                            <li>No member can be a part of two or more teams.</li>
                            <li>Any entry is allowed to submit only one submission.</li>
                            <li>Multiple teams from the same college are allowed to participate for the event.</li>
                            <li>The last modified abstract as on <span className="highlightedtext-competition">20th March 2018 11:59 pm </span>will be considered final.</li>
                            <li>The teams must strictly follow all the deadlines failing to which will lead to their disqualification</li>
                            <li>You however are allowed to do your own research through free internet sources and stakeholder interactions.</li>
                            <li>Any research that you do should be attached to the submission email in the form of downloadable Google drive links. These can include Interaction Videos or YouTube video clips, infographics, tables, reports, etc. Everything you submit will be reviewed by both the Stage I and Stage II judges.</li>
                        </ul>
                    </Row>
                    <Row>
                        <Col md={11} sm={12} mdOffset={1}>
                            <ul className="competition-ecommerce-ln-comp">
                                <li><p className="comp-elig">Eligibility criteria</p></li>
                                <li><p>Each team may have a maximum of four members. Solo entries are also allowed.</p></li>
                                <li><p>Participants should be students who can be from the same college or different colleges.</p></li>
                            </ul>
                            <ul className="competition-ecommerce-ln-comp">
                                <li><p>Prizes</p></li>

                            </ul>
                            <Grid fluid="container-fluid" className="notes-comp-container" >
                                <Row>
                                    <Row className="appendedImages">

                                        <Col xs={12} md={4}>
                                            <div className="bplan-about-div">
                                                <img src={notes} />
                                                <p>Prizes worth Rs. _______ would be awarded to the finalists.</p>
                                            </div>

                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="bplan-about-div">
                                                <img src={notes} />
                                                <p>Your ideas will receive the exposure of and recognition.
                                                    </p>
                                            </div>

                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="bplan-about-div">
                                                <img src={notes} />
                                                <p>A certificate of appreciation would be provided to the participants.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                    <Row>
                        <ButtonToolbar className="competition-registernow">
                            <Button bsStyle="primary" bsClass="comp-registernow">REGISTER NOW</Button>
                        </ButtonToolbar>
                    </Row>
                    <Row className="query-comp-ln">
                        <p>for further queries contact us at: Event Coordinator(9999999999)</p>
                    </Row>
                </Col>
            </Col>



        )
    }

}
