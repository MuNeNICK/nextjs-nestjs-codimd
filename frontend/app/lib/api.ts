import matter from 'gray-matter'
import { initializeApollo } from './graphqlClient'
import { POSTS_QUERY } from '../graphql/posts.query';

export async function getPostData() {
  const client = initializeApollo(null, null);
  const { data } = await client.query({query: POSTS_QUERY});
  const posts = await data.notes
  return posts
}

export async function getPostSlugs() {
  const posts = await getPostData()
  const postslug = posts.map((note) => note.title)

  return postslug
}

export async function getPostBySlug(slug: string, fields: string[] = []) {

  const posts = await getPostData()

  const note = posts.find((note: any) => note.title === slug)

  if (typeof note === "undefined") {
    return null
  }

  const fileContents = note.content


  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  await Promise.all(fields.map(async (field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  }))

  return items
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(slugs
    .map((slug: string) => getPostBySlug(slug, fields))
    .sort())
  return posts
}
