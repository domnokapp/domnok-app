import { type FC, useState, useEffect } from 'react';
import { Alert } from '@mui/material';
// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from '../../store/constant';

export const QuickScanPage: FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(false);
  }, []);

  return (
    <div>

      <div>
        <Alert severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
      </div>

      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              ddd
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};