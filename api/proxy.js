export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxkSovS2uekV8r1R-Olsv13MawNZmR6WGI_XT9bEYF__hztp_sTcJtjAmN6QUkKUDe1KQ/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send('Erro ao encaminhar para o Apps Script');
  }
}
