# Project rules

- Keep static blog articles in the existing typed catalog and register their URLs in the sitemap; the listing, recommendations and prerendering consume that catalog.
- Test category-count changes alongside the catalog so content expansion cannot silently miss a requested category.
- Keep service content in the shared JSON catalog so routes, internal links and build-time public HTML use identical information.
- Preserve first-entry attribution in session storage through internal navigation so contact clicks retain their campaign; never store personal identifiers in campaign tags.
- Use build-time WebP transformations for imported photography and reserve image dimensions to reduce bandwidth and layout shifts.
- Emit real public text and page metadata in the existing prerender plugin; do not advertise private routes or fabricate article timestamps.