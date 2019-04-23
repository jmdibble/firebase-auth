import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (

  <div>

        <Link to={ROUTES.SIGN_IN}> Sign In |</Link>

        <Link to={ROUTES.LANDING}> Landing |</Link>

        <Link to={ROUTES.HOME}> Home |</Link>

        <Link to={ROUTES.ACCOUNT}> Account |</Link>

        <Link to={ROUTES.ADMIN}> Admin |</Link>

        <SignOutButton />

  </div>
);

const NavigationNonAuth = () => (
  <div>
  <Link to={ROUTES.SIGN_IN}> Sign In |</Link>

  <Link to={ROUTES.LANDING}> Landing |</Link>
  </div>
);

export default Navigation;