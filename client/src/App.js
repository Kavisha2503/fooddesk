import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import CustomNavbar from "./components/CustomNavbar";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import { navlinks } from './storage/Navlinks';

const App = () => {

	//Store whether User is LoggedIn or not 
	const [status, setStatus] = useState(false);
	//Get the data regarding LoggedIn user
	const loggedInUser = useSelector(state => state.loggedInUser);

	//For every update of loggedIn user we have to update the status of user
	useEffect(() => {
		setStatus(loggedInUser.username !== null && loggedInUser.password !== null && loggedInUser.usertype !== null);
	}, [loggedInUser]);

	return (
		<BrowserRouter>
			{ status && <CustomNavbar navlinks={navlinks} style={{ zIndex: 10 }} />}
			<Switch>
				<Redirect exact from="/" to={navlinks[0].path} />
				{
					navlinks.map((navlink) => {
						return (
							<Route exact path={navlink.path} key={navlink.id}>
								{ status ? navlink.target : <Redirect exact from={navlink.path} to='/HomePage' />}
							</Route>
						)
					})
				}
				<Route exact path="/LogIn">
					{ status ? <Redirect to={navlinks[0].path} /> : <LogIn />}
				</Route>
				<Route exact path="/HomePage">
					{ status ? <Redirect to={navlinks[0].path} /> : <HomePage />}
				</Route>
				<Route exact path="/ForgotPassword">
					{status ? <Redirect to={navlinks[0].path} /> : <ForgotPassword />}
				</Route>
				<Route exact path="/SignUp">
					{status ? <Redirect to={navlinks[0].path} /> : <SignUp />}
				</Route>
				<Route>
					<Redirect to='/NotFound' />
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}   

export default App;
