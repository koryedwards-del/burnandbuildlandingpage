/** Shared Print Shop shell — one watermark, two header variants, content dropped in. */

import { formatPrintDateTime, programClientName } from '../../js/programBridgeUi.js';

/** @typedef {'generic' | 'personalized' | 'report'} PrintHeaderVariant */

/**
 * Print view config. Content builders live in plannerPrint.js; this file owns the shell.
 * headerVariant:
 *   generic      — logo + brand + title (reference docs)
 *   personalized — logo + brand + title + prepared-for line (client-specific lists)
 *   report       — weekly report layout (name prominent, week plan subtitle)
 */
export const PRINT_VIEW_CONFIG = {
  week: {
    docTitle: 'Weekly',
    pageSize: 'landscape',
    pageMargin: '0.35in',
    headerVariant: 'report',
    headerTitle: 'Week Plan',
    contentClass: 'print-content--week',
  },
  shopping: {
    docTitle: 'Grocery List',
    pageSize: 'portrait',
    pageMargin: '0.5in',
    headerVariant: 'personalized',
    headerTitle: 'Shopping List',
    contentClass: 'print-content--shopping',
  },
  foodlist: {
    docTitle: 'Food List',
    pageSize: 'landscape',
    pageMargin: '0.25in',
    headerVariant: 'generic',
    headerTitle: 'Food List',
    contentClass: 'print-content--foodlist',
  },
  bestresults: {
    docTitle: 'For Best Results',
    pageSize: 'portrait',
    pageMargin: '0.35in',
    headerVariant: 'generic',
    headerTitle: 'For Best Results',
    contentClass: 'print-content--qa',
  },
  faq: {
    docTitle: 'Frequently Asked Questions',
    pageSize: 'portrait',
    pageMargin: '0.35in',
    headerVariant: 'generic',
    headerTitle: 'Frequently Asked Questions',
    contentClass: 'print-content--qa',
  },
};

export function printDocumentTitle(view, programPackage) {
  const name = programClientName(programPackage);
  const docName = PRINT_VIEW_CONFIG[view]?.docTitle || 'Weekly';
  return `B&B- ${docName} - ${name}`;
}

export function buildPrintWatermarkHtml(logoUrl) {
  return `
    <div class="print-watermark" aria-hidden="true">
      <img src="${logoUrl}" alt="" />
    </div>
  `;
}

export function buildPrintHeaderHtml(variant, title, { logoUrl, programPackage } = {}) {
  if (variant === 'report') {
    const name = escapeHtml(programClientName(programPackage));
    const date = escapeHtml(formatPrintDateTime(new Date()));
    return `
      <header class="print-header print-header--report">
        <img class="print-logo" src="${logoUrl}" alt="Burn &amp; Build" width="72" height="72" />
        <div class="print-header-text">
          <p class="print-header-eyebrow">Personalized nutrition plan for</p>
          <h1 class="print-header-name">${name}</h1>
          <p class="print-header-guide">Burn &amp; Build Diet · Week Plan</p>
          <p class="print-header-date">${date}</p>
        </div>
      </header>
    `;
  }

  const name = escapeHtml(programClientName(programPackage));
  const date = escapeHtml(formatPrintDateTime(new Date()));
  const metaLine = variant === 'personalized'
    ? `<p class="print-header-meta">Prepared for ${name} · ${date}</p>`
    : '';

  return `
    <header class="print-header print-header--standard">
      <img class="print-logo" src="${logoUrl}" alt="Burn &amp; Build" width="72" height="72" />
      <div class="print-header-text">
        <p class="print-header-brand">Burn &amp; Build Diet</p>
        <h1 class="print-header-title">${escapeHtml(title)}</h1>
        ${metaLine}
      </div>
    </header>
  `;
}

export function buildPrintPageShell({
  headerHtml,
  bodyHtml,
  breakBefore = false,
  sheet = false,
  sectionClass = '',
} = {}) {
  const classes = [
    'print-page',
    sectionClass,
    sheet ? 'print-page--sheet' : '',
    breakBefore ? 'print-page--break' : '',
  ].filter(Boolean).join(' ');

  return `
    <section class="${classes}">
      ${headerHtml}
      ${bodyHtml}
    </section>
  `;
}

export function buildPrintDocumentHtml({
  view,
  title,
  logoUrl,
  styles,
  bodyHtml,
}) {
  const config = PRINT_VIEW_CONFIG[view] || PRINT_VIEW_CONFIG.week;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>${styles}</style>
</head>
<body class="print-body print-body--${view}">
  <article class="print-document ${config.contentClass}">
    ${buildPrintWatermarkHtml(logoUrl)}
    ${bodyHtml}
  </article>
</body>
</html>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
