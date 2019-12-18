import { NextApiRequest, NextApiResponse } from 'next';
import GoogleSpreadsheet from 'google-spreadsheet';
import secret from '../../src/secret.json';

interface ValidPayload {
  name: string;
  attendance: boolean;
  plusone: boolean;
  wishes: string;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(404).json({});
  }

  try {
    const { name, attendance, plusone, wishes } = req.body as ValidPayload;

    const doc = new GoogleSpreadsheet(secret.spreadsheetId);

    doc.useServiceAccountAuth(secret.googleDocsCredentials, () => {
      const newData = {
        name: name ? String(name) : '',
        attendance: Boolean(attendance),
        plusone: Boolean(plusone),
        wishes: wishes ? String(wishes) : '',
      };

      doc.addRow(1, newData, (err, row) => {
        const success = !err && row;

        if (!success) {
          res.status(500).json({ success });
          return;
        }

        res.status(200).json({ success: true });
      });
    });
  } catch (e) {
    return res.status(500).json({ success: false });
  }
};
