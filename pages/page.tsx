import { useRouter } from 'next/router'
import {type FC} from 'react'
import client from '../client'
import { type GetStaticProps } from 'next'

const Post: FC = (post) => {
    const router = useRouter();
    return (
        <article>
            <h1>{router.query.slug}</h1>
        </article>
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
      `*[_type == "post" && defined(slug.current)][].slug.current`
    )
  
    return {
      paths: paths.map((slug: any) => ({params: {slug}})),
      fallback: true,
    }
  }
  
  export async function getStaticProps<GetStaticProps>(context: any) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const post = await client.fetch(`
      *[_type == "post" && slug.current == $slug][0]
    `, { slug })
    return {
      props: {
        post
      }
    }
  }
  
  export default Post