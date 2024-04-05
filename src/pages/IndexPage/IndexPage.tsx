import './IndexPage.css';

import type { FC } from 'react';
import { Link } from "../../components/Link";
import { Page } from "../../components/Page";
import { routes } from "../../navigation/routes.ts";
import { ActionsGrid } from '../../components/Cards/ActionsGrid.tsx';

export const IndexPage: FC = () => {
  return (
    <Page title="Home Page">
      <ActionsGrid />
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
