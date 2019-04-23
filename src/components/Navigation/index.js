import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>

        <Link to={ROUTES.SIGN_IN}> Sign In |</Link>

        <Link to={ROUTES.LANDING}> Landing |</Link>

        <Link to={ROUTES.HOME}> Home |</Link>

        <Link to={ROUTES.ACCOUNT}> Account |</Link>

        <Link to={ROUTES.ADMIN}> Admin |</Link>

        <SignOutButton />

  </div>
);

export default Navigation;