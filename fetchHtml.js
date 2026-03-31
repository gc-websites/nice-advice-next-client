const fs = require('fs');
const https = require('https');

https.get('https://gaulois.org/v/cim-marketing-certification-course/', (res) => {
    let rawHtml = '';
    res.on('data', (chunk) => { rawHtml += chunk; });
    res.on('end', () => {
        fs.writeFileSync('temp_gaulois_page.html', rawHtml);
        console.log('Saved to temp_gaulois_page.html');
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});
