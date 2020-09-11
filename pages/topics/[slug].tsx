import { NextPage } from 'next'



export type Post = { id: string; slug: string; title: string; section: string, date: string };

interface Props {
  pageData?: any;
}

const BlogPost: NextPage<Props> = ({pageData}) => {

  console.log(pageData)

  if (!pageData){
      return (
        <h1>Error</h1>
      );
  }

  return (
    <div>
      <h1>Contents Page</h1>
        {pageData.map((post: any) => (
          <p className="notionPost">{post.title}</p>
        ))}
    </div>
  );
}


BlogPost.getInitialProps = async (ctx) => {
  console.log('entereD GETINITIALPROPS')
  const {query} = ctx;
  console.log(query)
  console.log(`query id ${query.id}`)
  const response = await fetch(`https://notion-api.splitbee.io/v1/table/${query.id}`)
  const pageData = await response.json()
  return {pageData: pageData};
}

export default BlogPost


