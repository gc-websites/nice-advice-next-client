// Click-id hygiene shared by the TikTok/Meta helpers.
//
// Ad platforms sometimes serve the page with the raw URL template (previews,
// moderation crawlers) or with a bogus pseudo-macro the buyer typed into the
// ad URL (e.g. ?ttclid=__CLICKID__ — NOT a real TikTok macro). Persisting or
// forwarding such values poisons attribution: TikTok/Meta receive a literal
// "__CLICKID__" and can match nothing. Rule: better NO click id than a fake one.
export function isRealClickId(v: string | null | undefined): v is string {
  if (!v) return false;
  // literal template macros: __CLICKID__, __CAMPAIGN_ID__, {{ad.id}} …
  // (anchored to the WHOLE value: macros always arrive as the entire param;
  // a real base64url fbclid could legally contain an embedded "__x__" run)
  if (/^__[A-Za-z0-9_]+__$/.test(v)) return false;
  if (v.includes('{{') || v.includes('}}')) return false;
  // the parameter's own name echoed back (seen from FB scanners: fbclid=fbclid)
  const lower = v.toLowerCase();
  if (lower === 'ttclid' || lower === 'fbclid' || lower === 'gclid' || lower === 'clickid') {
    return false;
  }
  return true;
}
