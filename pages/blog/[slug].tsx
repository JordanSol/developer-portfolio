import client from '../../client'
import { NextPage } from 'next'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq'
import PortableText from 'react-portable-text'
import { useEffect } from 'react'

const urlFor = (source: any) => {
  return imageUrlBuilder(client).image(source)
}

const Post: NextPage<{post: any}> = ({post}) => {

  useEffect(() => {
    console.log(post)
  }, [post])
    if (!post) {
      return (
        <main className='w-screen h-screen'>
          Blog Post Not Found
        </main>
      )
    }
    return (
        <div className='pt-20 px-4 max-w-screen-lg mx-auto'>
          <h1 className='my-6 text-3xl md:text-4xl text-center text-yellow-300'>{post?.title}</h1>
          <div className='w-full flex justify-center'>
            <div className='rounded-md overflow-hidden w-full sm:w-1/2'>
              <Image src={urlFor(post?.coverImage).width(640).url()} width={640} height={360} layout="responsive" alt="Blog Image"/>
            </div>
          </div>
          <div className='flex justify-center'>
            {/* <figure className='avatar rounded-full border-2 border-yellow-300 overflow-hidden'>
              <Image src={urlFor(post?.author.picture).width(50).url()} width={50} height={50} alt="Author image" />
            </figure> */}
          </div>
          <br/>
            <PortableText content={post?.content} serializers={{
              h3: (props: any) => <h3 className='text-xl md:text-2xl text-yellow-300' {...props} />,
              normal: (props: any) => <p className='mb-6' {...props} />,
              link: (props: any) => <a target='_blank' rel='noopener noreferrer' className='link' {...props} /> 
            }} />
        </div>
    )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image
}`

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
console.log(slug)
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