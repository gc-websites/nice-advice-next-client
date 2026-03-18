fetch('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://nice-advice.info/&strategy=mobile')
  .then(res => res.json())
  .then(data => {
    if (!data.lighthouseResult) {
      console.log('No lighthouseResult:', data);
      return;
    }
    const lcp = data.lighthouseResult.audits['largest-contentful-paint-element'];
    const cls = data.lighthouseResult.audits['layout-shift-elements'];
    console.log('--- LCP Details ---');
    console.log(JSON.stringify(lcp?.details?.items, null, 2));
    console.log('--- CLS Details ---');
    console.log(JSON.stringify(cls?.details?.items, null, 2));
  })
  .catch(err => console.error(err));
