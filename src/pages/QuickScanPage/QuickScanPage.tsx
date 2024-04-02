import type { FC } from 'react';
import { Alert } from '@mui/material';
import {Html5Qrcode} from "html5-qrcode";

export const QuickScanPage: FC = () => {
  const html5QrCode = new Html5Qrcode('reader');

  html5QrCode.start(
    cameraId,
    {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    },
    (decodedText, decodedResult) => {
      alert(decodedText);
    },
    (errorMessage) => {
      // Start failed, handle it.
    })
  .catch((err) => {
    // Start failed, handle it.
  });

  return (
    <div>

      <div>
        <Alert severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
      </div>

      <div>
        <div id="reader" width="100%"></div>
      </div>

    </div>
  );
};