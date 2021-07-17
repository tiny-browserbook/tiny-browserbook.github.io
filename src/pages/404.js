import React from "react";
import { Link } from "gatsby";

import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO";

export default function NotFound() {
  return (
    <Layout title="ページが存在しません">
      <SEO title="404: Not found" />
      <p>そのページは存在しません。</p>
      <p>
        <Link to="/">トップページはこちら</Link>
      </p>
    </Layout>
  );
}
