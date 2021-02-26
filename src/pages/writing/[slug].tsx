import Layout from "@components/layout";
import OldPostWarning from "@components/OldPostWarning";
import PostMeta from "@components/post_meta";
import { getAllPosts, queryPost } from "@lib/api";
import hydrate from "next-mdx-remote/hydrate";
import CustomLink from "@components/Link";

const components = {
  a: CustomLink,
};

export default function Post({ source, data }) {
  const content = hydrate(source, { components });
  const meta = { title: data.title, description: data.description };

  return (
    <Layout meta={meta}>
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="grid gap-2">
          <h1 className="text-5xl font-bold ">{data.title}</h1>
          <PostMeta post={{ data }} />
        </div>

        <OldPostWarning date={data.date} />

        <p className="pl-4 border-l-4 border-blue-500 border-opacity-50 lead">
          {data.description}
        </p>

        <div className="prose sm:prose-lg dark:prose-dark">{content}</div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { data, content, source } = await queryPost(params.slug, true);

  return {
    props: {
      source,
      content,
      data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.data.slug,
        },
      };
    }),
    fallback: false,
  };
}
