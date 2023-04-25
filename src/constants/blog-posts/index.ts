import { BlogPost } from '../../models'

const allBlogPosts: BlogPost[] = [
  {
    title: 'test post',
    date: new Date('2023-04-25'),
    fileName: 'welcome',
  },
  {
    title: 'Setting up the blog',
    date: new Date('2023-04-25'),
    fileName: 'blog-setup'
  }
]

export const blogPosts = allBlogPosts.sort((a, b) => b.date.getTime() - a.date.getTime())