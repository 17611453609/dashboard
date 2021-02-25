import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import ThemeWrapper from './ThemeWrapper';
import LeftSidebarLayout from '../Layout/LeftSidebarLayout';
import { ToastContainer } from 'react-toastify';
import Login from '../Login';
import Age from '../Age';
import AgeAndGender from '../AgeAndGender';
import AgeAndRace from '../AgeAndRace';
import Area from '../Area';
import AreaAndAge from '../AreaAndAge';
import AreaAndGender from '../AreaAndGender';
import Gender from '../Gender';
import Race from '../Race';
import RaceAndArea from '../RaceAndArea';
import RaceAndGender from '../RaceAndGender';

function App(props: any) {
  return (
    <div>
      <Fragment>
        <Helmet
          titleTemplate="%s - 数据展示"
          defaultTitle="数据展示"
        >
          <meta name="description" content="数据展示" />
        </Helmet>
        <ThemeWrapper>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <LeftSidebarLayout >
              <Switch>
                <Route path="/app/age" exact component={Age} />
                <Route path="/app/ageAndGender" exact component={AgeAndGender} />
                <Route path="/app/ageAndRace" exact component={AgeAndRace} />
                <Route path="/app/area" exact component={Area} />
                <Route path="/app/areaAndAge" exact component={AreaAndAge} />
                <Route path="/app/areaAndGender" exact component={AreaAndGender} />
                <Route path="/app/gender" exact component={Gender} />
                <Route path="/app/race" exact component={Race} />
                <Route path="/app/raceAndArea" exact component={RaceAndArea} />
                <Route path="/app/raceAndGender" exact component={RaceAndGender} />
              </Switch>
            </LeftSidebarLayout>
          </Switch>
          </Router>
        </ThemeWrapper>
      </Fragment>
      <ToastContainer />
    </div>
  );
}


export default App;
