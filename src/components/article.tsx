import Link from "next/link";

import PostMeta from "./post_meta";
// import PostTags from "./post_tags";

const ArticleTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
);

export default function Article({ post }) {
  return (
    <article className="grid gap-4">
      <Link href="/writing/[slug]" as={"/writing/" + post.data.slug}>
        <a className="grid gap-1 rounded-md focus:outline-none focus:ring">
          <div className="grid gap-1">
            <div>
              <ArticleTitle title={post.data.title} />
            </div>
            <PostMeta post={post} />
          </div>

          <p>{post.data.description}</p>
        </a>
      </Link>

      {/* <PostTags tags={post.data.tags} limit={3} /> */}
    </article>
  );
}
