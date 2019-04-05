import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import CampusAmbassador from './ca'
import UserDashboard from '../containers/user-dashboard';

import SignUpForm from './Form/signupform'
import LoginForm from './Form/loginform'
import Landingpage from './landingpage'
import FooterLanding from './Footer/footer-landingpage'
import Lioauth from './lioauth'
import Ideastormcombined from './Ideastorm/bplancombined'
import CaseStudyCombined from './casestudy/casestudycombined'
import LandingMain from './landingpagenew/landingmain.js'
import LandingMainComp from './landingpagenew/landingmaincomp.js'
import MainEvents from './events/events'
import Workshops from './events/workshops'
import Networking from './events/networking'
import Competition from './events/competition'
import Knowledge from './events/knowledge'
import Zonal from './events/zonals'
import Startup from './startupinternship/startup'
import StartupDetail from './startupinternship/startup-detail'
import Partners from './partners/partner'

export default class Main extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Landingpage} />
                <Route path='/ca' component={CampusAmbassador} />
                <Route path='/dashboard' component={UserDashboard} />
                <Route path='/login' component={LoginForm} />
                <Route path='/signup' component={SignUpForm} />
                <Route path='/footer' component={FooterLanding} />
                <Route path='/lioauth' component={Lioauth} />
                <Route path='/ideastorm' component={Ideastormcombined} />
                <Route path='/casestudy' component={CaseStudyCombined} />
                <Route path='/ln' component={LandingMain} />
                <Route path='/lnc' component={LandingMainComp} />
                <Route path='/events' component={MainEvents} />
                <Route path='/workshop' component={Workshops} />
                <Route path='/networking' component={Networking} />
                <Route path='/competition' component={Competition} />
                <Route path='/knowledge' component={Knowledge} />
                <Route path='/zonals' component={Zonal} />
                <Route exact path='/sip' component={Startup} />
                <Route path="/sip/:id" component={StartupDetail} />
                <Route path='/partner' component={Partners} />
            </Switch>
        )
    }
}