import { NotionRenderer, BlockMapType } from "react-notion";


// -------- Get Contents from Regular Page -----------

export async function getAllTables() {
  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/9d9acee1ba974befb33ba3c112e81c8a`
  ).then((res) => res.json());

  const title = blocks.find((t) => t.value.properties.title !== "");


  console.log("BLOCKS")
  console.log(blocks)
  console.log("BLOCKS")
  console.log(title)
  console.log("NOTION RENDERER")
  console.log(<NotionRenderer blockMap={blocks} />)

  return {
    props: {
      blocks,
      title,
    },
  };
} 



// -------- Get Contents from Table -----------

export type Post = { id: string; slug: string; title: string; date: string };
export type Entry = { role: string; value: any};


export const getTopic = async (NOTION_BLOG_ID: string): Promise<Post[]> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export async function getTables() {
  const machineLearning = await getTopic("af6467d314b24869bdca28e1e0c1c545");
  const webDev = await getTopic("6d837d21d3e24b8db2381a7d8b0f0632");
  console.log(machineLearning)

  return {
    props: {
      posts: machineLearning,
      webDev
    },
  };
}

export default function HomePage({ posts, webDev }: { posts: Post[], webDev: Post[] }) {



  return (
    <div className="main-container">
      <Navbar />
      <div className="main-contents">
      <h3 className="pageTitle">Topics</h3>
      <h2 className="topicTitle">Machine Learning</h2>
      <div>
        {posts.map((post) => (
          <Link href="/topics/[slug]" as={`/topics/${post.slug}`}>
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
          <Link href="/topics/[slug]" as={`/topics/${post.slug}`}>
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

