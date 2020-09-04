import { NotionRenderer, BlockMapType } from "react-notion";
import React from "react"

import { getTopic, Post } from "../../components/getContent";

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Get all posts again
  const posts = await getTopic("af6467d314b24869bdca28e1e0c1c545");

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);
  console.log(post?.id)

  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post!.id}`
  ).then((res) => res.json());
  
  console.log("BLOCKS")
  console.log(blocks)
  console.log("NOTION RENDERER")
  console.log(<NotionRenderer blockMap={blocks} />)

  return {
    props: {
      blocks,
      post,
    },
  };
}

const BlogPost: React.FC<{ post: Post; blocks: BlockMapType }> = ({
  post,
  blocks,
}) => {
  if (!post) return null;

  return (
    <div className="content">
      <h1>{post.title}</h1>
      <NotionRenderer blockMap={blocks} />
    </div>
  );
};

export async function getStaticPaths() {
  const table = await getTopic("af6467d314b24869bdca28e1e0c1c545");
  return {
    paths: table.map((row) => `/topics/${row.slug}`),
    fallback: true,
  };
}

export default BlogPost;
