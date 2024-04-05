import './IndexPage.css';

import type { FC } from 'react';
import { Link } from "../../components/Link";
import { Page } from "../../components/Page";
import { routes } from "../../navigation/routes.ts";

export const IndexPage: FC = () => {
  return (
    <Page title="Home Page">
      <p>
        This page is a home page in this boilerplate. You can use the links
        below to visit other pages with their own functionality.
      </p>
      <div>
        <input type="text" placeholder="Enter your full name" />
        <input type="text" placeholder="Enter your dob" />
      </div>
      <ul className="index-page__links">
        {routes.map(
          ({ path, title }) =>
            title && (
              <li className="index-page__link" key={path}>
                <Link to={path}>{title}</Link>
              </li>
            ),
        )}
      </ul>
    </Page>
  );
};
