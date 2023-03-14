import './title.css'

interface TitleProps {
  children: any;
}

export function Title({ children }: TitleProps) {
  
  return (
    <div className="title-container">
      <span className="title">{children}</span>
    </div>
  )
}