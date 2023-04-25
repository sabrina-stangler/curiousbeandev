import { Link } from "react-router-dom";
import { PageContainer } from "../../components";
import { blogPosts } from "../../constants";
import './BlogBrowse.css'

export function BlogBrowse() {

  return (
    <PageContainer>
      {blogPosts.map(bp => {
        return (
          <Link key={bp.fileName} to={`/blog/${bp.fileName}`}>{bp.title}</Link>
        )})
      }
    </PageContainer>
  )
}