<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Sitemap — Dancehall Museum</title>
        <meta name="robots" content="noindex" />
        <style>
          body { margin: 0; padding: 3rem 1.5rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; background: #faf9f6; color: #1a1a1c; }
          .wrap { max-width: 900px; margin: 0 auto; }
          h1 { font-size: 1.5rem; margin-bottom: 0.25rem; }
          p.note { color: #6b6b6f; font-size: 0.9rem; margin-top: 0; margin-bottom: 2rem; }
          p.note a { color: #b8892f; }
          table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
          th { text-align: left; padding: 0.6rem 0.75rem; border-bottom: 2px solid #1a1a1c; text-transform: uppercase; letter-spacing: 0.06em; font-size: 0.7rem; color: #6b6b6f; }
          td { padding: 0.6rem 0.75rem; border-bottom: 1px solid #e4e2db; vertical-align: top; }
          tr:hover td { background: #f2f0ea; }
          a { color: #1a1a1c; text-decoration: none; word-break: break-all; }
          a:hover { color: #b8892f; text-decoration: underline; }
          .count { color: #6b6b6f; font-size: 0.8rem; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>Dancehall Museum — XML Sitemap</h1>
          <p class="note">
            This is the machine-readable sitemap used by search engines. Looking for a readable page instead? Visit <a href="/sitemap">the plain-English sitemap</a>.
            <br />
            <span class="count"><xsl:value-of select="count(sm:urlset/sm:url)" /> URLs listed</span>
          </p>
          <table>
            <tr>
              <th>URL</th>
              <th>Last modified</th>
              <th>Priority</th>
            </tr>
            <xsl:for-each select="sm:urlset/sm:url">
              <tr>
                <td><a href="{sm:loc}"><xsl:value-of select="sm:loc" /></a></td>
                <td><xsl:value-of select="sm:lastmod" /></td>
                <td><xsl:value-of select="sm:priority" /></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
