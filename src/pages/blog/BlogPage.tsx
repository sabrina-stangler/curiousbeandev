import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { PageContainer } from "../../components"
import { blogPosts } from "../../constants"
import { markdownToReact } from "simple-markdown"
import { BlogPost } from "../../models"

import './BlogPage.css'

export function BlogPage() {
  const { fileName } = useParams<{ fileName: string }>()
  const [metadata, setMetadata] = useState<BlogPost>()
  const [parsedMarkdown, setParsedMarkdown] = useState<React.ReactNode>()

  // Source: https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl
  useEffect(() => {
    if (fileName && fileName.length > 0) {
      // * Grab post metadata
      setMetadata(blogPosts.find(bp => bp.fileName = fileName))

      // * Import file
      import(`../../constants/blog-posts/${fileName}.md`)
        .then(res => {
          console.log(res)
          fetch(res.default)
            .then(res => res.text())
            .then(res => {
              if (res !== undefined) {
                const parsed = markdownToReact(res)
                if (parsed !== undefined) { setParsedMarkdown(parsed) }
              }
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  }, [fileName])

  return (
    <PageContainer>
      <div className="blog-page-container">
        { metadata &&
          <div>
            <h1>{metadata.title}</h1>
            <h2>{metadata.date.toLocaleDateString()}</h2>
          </div>}
        { parsedMarkdown !== undefined && parsedMarkdown}
        { parsedMarkdown === undefined && <p>Failed to load post</p>}
      </div>
    </PageContainer>
  )
}