import Link from "next/link";
import { NotionRenderer, BlockMapType } from "react-notion";
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

export type Post = { id: string; slug: string; title: string; section: string, date: string };
export type Arr = { id: string; section: any};



import dynamic from 'next/dynamic'
import { Console } from "console";
const Navbar = dynamic(() => import('../components/navbar'))


export async function getStaticProps() {
  console.log("started GETSSTATICPROPS")

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/9d9acee1ba974befb33ba3c112e81c8a`).then((res) => res.json());
  //setData(blocks.data)
  console.log("got blocks")


  const title = blocks['9d9acee1-ba97-4bef-b33b-a3c112e81c8a'].value.properties.title[0][0];
  console.log("got page title")


  const getTopics = async function() {
    console.log("entering for loop")
    const arr: any =  []
  
    for (const key of Object.keys(blocks)) {
      if(blocks[key].value.type === "collection_view_page") {
        const pageId = blocks[key].value.id
        //console.log(blocks[key].value)
        const pageContents: Promise<Post[]> = await fetch(
          `https://notion-api.splitbee.io/v1/table/${pageId}`
        ).then((res) => res.json());
        const titleObject = (await pageContents).find((object) => object.title === "do-not-delete")
        console.log("addnig content to array")
  
        const content: any = [pageId, titleObject?.section, titleObject?.slug]
        arr.push(content)
      }
    }
    
    console.log('outputting array from for loop')
    return arr
  }

  const arr = await getTopics()

  console.log("outputting props")
  console.log(arr)

  return {
    props: {
      blocks,
      title,
      arr
    },
  };
}

const MainContent: React.FC<{ arr: Arr[]; blocks: BlockMapType; title: string }> = ({
  blocks,
  title,
  arr
}) => {


  if (!blocks) return (
    <h1>Loading Content From Notion...</h1>
  );


  console.log("FINAL ARRAY")
  console.log(arr)
  return (
    <div className="content">
      <Navbar />
      <h1>{title}</h1>
      {/* <NotionRenderer blockMap={blocks} /> */}
      <div>
        {arr.map((topic: any) => (
          <Link href={{ pathname: `/topics/[slug]?id=${topic[0]}`, query: {id: topic[0]}}} as={`/topics/${topic[2]}`}>
            <a className="notionLink">
              <h1>{topic[1]}</h1>
            </a>
          </Link>
        ))}
        </div>
    </div>
  );
};

export default MainContent;
