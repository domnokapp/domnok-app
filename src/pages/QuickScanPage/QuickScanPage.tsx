import type { FC } from 'react';
import { Alert } from '@mui/material';

export const QuickScanPage: FC = () => {
  return (
    <div>
      <Alert severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </div>
  );
};