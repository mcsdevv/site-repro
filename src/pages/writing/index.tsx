import Article from "../../components/article";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";

export const meta = {
  title: "Brandon's Blog",
  description: "Recent blog posts from Brandon Pittman.",
};

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
}

export default function Writing({ posts }) {
  return (
    <Layout className="max-w-3xl mx-auto" meta={meta}>
      <h1 className="text-4xl font-bold">Recent Blog Posts</h1>

      <ul className="mt-16 grid gap-16">
        {posts.map((post) => (
          <li key={post.data.slug} className="">
            <Article post={post} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
