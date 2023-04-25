import { BlogPost } from '../../models'

const allBlogPosts: BlogPost[] = [
  {
    title: 'Welcome',
    date: new Date('04-24-2023'),
    fileName: 'welcome',
  },
  {
    title: 'Setting up the blog',
    date: new Date('04-25-2023'),
    fileName: 'blog-setup'
  }
]

export const blogPosts = allBlogPosts.sort((a, b) => b.date.getTime() - a.date.getTime())