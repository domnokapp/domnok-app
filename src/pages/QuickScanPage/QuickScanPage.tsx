import type { FC } from 'react';
import { Alert } from '@mui/material';
import {Html5Qrcode} from "html5-qrcode";

export const QuickScanPage: FC = () => {
  const html5QrCode = new Html5Qrcode('reader');
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      /* handle success */
  };
  const config = { fps: 10, qrbox: { width: 250, height: 250 } };
  html5QrCode.start({ facingMode: 'user' }, config, qrCodeSuccessCallback);

  return (
    <div>

      <div>
        <Alert severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
      </div>

      <div>
        <div id="reader"></div>
      </div>

    </div>
  );
};