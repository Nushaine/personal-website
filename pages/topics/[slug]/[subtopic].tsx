import router from 'next/router'
import { useRouter } from 'next/router'

import { getTopic } from "../../../components/getContent";



export async function getStaticProps() {
  console.log("ID")

  console.log(id)
  //const id = router.query.id

  return {
    props: {
      id
    },
  };
}

const SubContent: React.FC<{ id: string }> = ({
  id,
}) => {

  console.log(id)
  if (!id) return null;

  return (
    <h1>{id}</h1>
  )
}

export async function getStaticPaths() {
  const table = await getTopic("af6467d314b24869bdca28e1e0c1c545");
  return {
    paths: table.map((row) => `/topics/${row.slug}`),
    fallback: true,
  };
}

export default SubContent