import "./IndexPage.css";

import type { FC } from "react";

import { Link } from "../../components/Link";
import { Page } from "../../components/Page";
import { routes } from "../../navigation/routes.ts";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export const IndexPage: FC = () => {
  const data = JSON.stringify({
    eventType: 'web_app_setup_closing_behavior',
    eventData: {
      is_visible: true,
    },
  });

  window.parent.postMessage(data, 'https://web.telegram.org');

  return (
    <Page title="Home Page">
      <div>
        <Button variant="contained">Getting Started</Button>
      </div>
      <div>
        <TextField required id="outlined-basic" label="Full Name" variant="outlined" />
      </div>
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
