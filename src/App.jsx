import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Accommodations from './pages/Accommodations';
import Reservations from './pages/Reservations';
import NewReservation from './pages/NewReservation';
import EditAccommodationPage from './pages/EditAccommodationPage';
import Welcome from './components/Welcome';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/accommodations" component={Accommodations} />
                <Route path="/reservations" component={Reservations} />
                <Route path="/new-reservation" component={NewReservation} />
                <Route path="/edit-accommodation/:id" component={EditAccommodationPage} />
                <Route path="/welcome" component={Welcome} />
            </Switch>
        </Router>
    );
}

export default App;