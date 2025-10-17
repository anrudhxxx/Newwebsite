import { Helmet } from 'react-helmet-async';

export function SEO({ title, description }: { title: string; description?: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:title" content={title} />
    </Helmet>
  );
}
