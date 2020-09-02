import Link from "next/link";

import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/navbar'))

export type Post = { id: string; slug: string; title: string; date: string };
export const getAllPosts = async (NOTION_BLOG_ID: string): Promise<Post[]> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const machineLearning = await getAllPosts("af6467d314b24869bdca28e1e0c1c545");
  const webDev = await getAllPosts("6d837d21d3e24b8db2381a7d8b0f0632");

  return {
    props: {
      posts: machineLearning,
      webDev
    },
  };
}

function HomePage({ posts, webDev }: { posts: Post[], webDev: Post[] }) {
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-contents">
      <h3 className="pageTitle">Topics</h3>
      <h2 className="topicTitle">Machine Learning</h2>
      <div>
        {posts.map((post) => (
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <a className="notionLink">
              <p className="notionPost">{post.title}</p >
              <div className="sub">note created --insert date here--</div>
            </a>
          </Link>

        ))}
        </div>

        <h2 className="topicTitle">Web Development</h2>
        <div>
        {webDev.map((post) => (
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <a className="notionLink">
              <p className="notionPost">{post.title}</p>
              <div className="sub">posted on --insert date here--</div>
            </a>
          </Link>

        ))}
        </div>
      </div>
    </div>

  );
}

export default HomePage;
