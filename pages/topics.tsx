import Link from "next/link";
import { NotionRenderer, BlockMapType } from "react-notion";
import React, { useState } from 'react';

export type Post = { id: string; slug: string; title: string; section: string, date: string };
export type Entry = { role: string; value: any};


import dynamic from 'next/dynamic'
import { Console } from "console";
const Navbar = dynamic(() => import('../components/navbar'))




export default function Tables() {

  const [blocks, setBlocks] = useState({})
  const [title, setTitle] = useState("")
  const [pages, setPages] = useState([])


    
  async function getMainContent() {
    console.log("ENTERED GETALLTABLES FUNc")

    const blocks = await fetch(
      `https://notion-api.splitbee.io/v1/page/9d9acee1ba974befb33ba3c112e81c8a`
    ).then((res) => res.json());
    setBlocks(blocks)

    const title = blocks['9d9acee1-ba97-4bef-b33b-a3c112e81c8a'].value.properties.title[0][0];
    setTitle(title)

    /* console.log("BLOCKS INDEX")
    console.log(blocks['9d9acee1-ba97-4bef-b33b-a3c112e81c8a'].value.properties.title[0][0])
    console.log("NOTION RENDERER")
    console.log(<NotionRenderer blockMap={blocks} />) */

    const arr: any = []
    console.log("OBJECT KEYS")
    console.log(Object.keys(blocks))
    Object.keys(blocks).forEach(async function(key:any) {
      if(blocks[key].value.type === "collection_view_page") {
        const pageId = blocks[key].value.id
        const pageContents: Promise<Post[]> = await fetch(
          `https://notion-api.splitbee.io/v1/table/${pageId}`
        ).then((res) => res.json());
        console.log("PAGECONTENTS");
        const titleObject = (await pageContents).find((object) => object.section !== "")
        arr.push([pageId, titleObject]);
      }
     
    });
    console.log("ARRAY AFTER PUSHES")
    console.log(arr)

    setPages(arr)
    
  }

  /*   async function getAllTables() {
    console.log("ENTER GET ALLTABLES FUNCTION")
    const arr: any = []
    Object.keys(blocks).forEach(function(key:any) {
      arr.push(blocks[key]);
    });
    console.log("BLOCKSS")
    console.log(blocks)
    console.log("MAPPED ALL JSON ENTRIES")
    arr.map((block:any) => {
      console.log("BLOCK")
      console.log(block)
    })
  } */

  async function loadEverything () {
    await getMainContent()
  }
  
  loadEverything()
  


  console.log("PAGES")
  console.log(pages)
  if (pages===[]) return null;
  return (
    <div className="content">
      <h1>{title}</h1>
      <NotionRenderer blockMap={blocks} />
      {pages.map((page) => {
        <p>{page}</p>
      })}
    </div>
  );
};
