import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';

const SPREADSHEET_ID = '1C-WRghSglNWNxM-k5m7WLNtgmu3062gKZ5sKR1_VIb4';
const CLIENT_EMAIL = 'demo-306@second-base-342017.iam.gserviceaccount.com';
const PRIVATE_KEY =
  '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCGRbIWfi0trgmC\nPj8M+EhT/Jn6mm5mVfXZdCfIELNkx9I4JZaA4HB5FBfDHMBcbuAzvLfG5aSGYuXR\n7YdM86P5z+uy7RgsPZAdehJrjJ7SbUNR8CzsVnu3RyfaImyqZYrHG1aldlxF5bM8\nUZJeiw3UL5OAd8vZ5N69dgpAFHFX8TjgjYJlHLdHk1WDyP0vMYcCEFcGJ9DUezpp\nv9dBP2nolQg2q5ZP/D0nAIwZrwnd5iKj/SvqKbsx5KYZ+AkXUXP7MdmUFnpHPKWa\nWbQ5me7F42m1z4tLpCR4uPzPCk1fQ1bUT4sEnIHXGH4dr+SRJwRbNodPSDwlAX0L\nJ+98JY/jAgMBAAECggEANdQA9fV1ZSetFjKgEjICxPCyRf3dHld9rMRdIl5XnKJi\nyzF+aYIQdOmyMPz4vNWSOguA3VK4p0tEeOkxYY8XAJHzGpLkKvAvMzH56nXAQfmd\nkF6pk8GD7VCwUEmWqKT2gqWaEdEmYrsYJKlK9W3niFXeWxUretm+1dNZfqDzY15z\nV82JHjJluFLEXLyCESf7SRNnUu7l4Cs6cvZdgn/GBWKuDRTzQ/6XSoHgtgidd4FF\nBg+IPzVUqJsd/pswLIqhASw0SshbNh2elBTV3fFpAckQqUiSfYzrlcKDHGgXesqQ\nfyKq1h6zrSuE7d7E6ypw2iFtSMdFEHw+BuPZWN1mEQKBgQC6rOcvTtqVCn1yNpsO\nxk1eRWcUvghsQFbVXjl/DxlNg14FKUfnzTqdCBClk++jAW4U7221fsrcNdxkZNSI\nn1x32GXuH5L8PeDY6Xm+7L35HwVA9rhQkKsJwxq1wfcsL9d6bTN+VvcfOElM/Wg6\nKyZHFqLlKLmKpGrl2ZXcd5Cs6QKBgQC4Ity8Jc3y71qnPEtrBuqa8ak0z/0WMFXA\nQVoBY6oRFMrIZY053iUvbq3YRx7s8e/tSMm/S9B8TKosi/CfIpVVgiXU1v0EgbnX\nI6S+0JfhPI/Qdr2Mnc5E4kh5eevVdQznhf725KUQz/IVaSq1f1BbKUqM7681yX+Z\nkeFFGqJm6wKBgFg5MQV1se4wR/s7fWqtI5GDIWV3Lkni2mb6ohe/jgjJJh0wVlBh\n+OqQDjYCxYV3PoxcX7AgHUWXmvJDiQKMtknZlsrEV1Yo9GPva99kyZ+8HmKGd7Nz\nu7HgaHYwFl3mumKcy3JRLXeuxU3CkYi0LeH4+8FrzsyMSg0ZGS9ZvqFJAoGAEVJO\nO3C+9+xmNbcpTQ8ggKTdCvfJ0g2H84byRZEvjV3MWZ+b8magTt71gZPnJ9j2ffbL\n66/hE+BOXdRoNUAWli2hC22R7ZuadM+Ijt6meuyshqq02AZ8QeSbdrnuYm0ZYqor\nOuR1VqiJGFSFTP+F+p1ewvVFISUsWLDtZQfFYTMCgYB2U3eKiUTsRuj7Cc7DcGEP\nY/ow0VptUlb8B9UAcDNMVfPKhos9KzwV4IvUP/VFlAJ8agBZ6snyrRYqFt+K7Abf\nmB8Yw03ObxDpuyYvY0ouey9H9pMHSlV2AqVebJiBIGgzePBjti39HRNESE1g6KV5\nBmFdjWY0v3hwAjgt88yXfQ==\n-----END PRIVATE KEY-----\n';

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const loadSpreadsheet = async () => {
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL,
    private_key: PRIVATE_KEY,
  });

  await doc.loadInfo();
};

const getSpreadsheetRows = async (): Promise<GoogleSpreadsheetRow[]> => {
  await loadSpreadsheet();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  return rows;
};

const getUsersPubKeys = async (): Promise<string[]> => {
  const rows = await getSpreadsheetRows();
  return rows.map((row) => row.Address);
};

export { getSpreadsheetRows, getUsersPubKeys };
