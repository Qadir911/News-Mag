import image from '../assets/download.png'
const NewsItem = ({title,description,src,url}) => {
  return (
    <>
      <div className="card  bg-dark text-light mb-3 d-inline-block px-2 py-3 mx-3 my-4" style={{width:"290px" }}>
  <img src={src?src:image} style={{width:"270px", height:"180px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,20)}</h5>
    <p className="card-text">{description?description.slice(0,60):"In today's headlines, escalating tensions in the Middle East prompt global concern."}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
    </>
  )
}

export default NewsItem
