import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = ({data}) => {

  return (
    <div className='card'>
      <div className="top">
        <img src={data.logo} alt="" />
        <button>
          <p>Save</p>
          <span ><Bookmark size={16} /></span>
        </button>
      </div>

      <div className="center">
        <h2>{data.company} <span>5 days ago</span></h2>
        <h3>{data.title}</h3>
        <div className='button'>
          <button>{data.tag1}</button>
          <button>{data.tag2}</button>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>${data.salary}/hr</h4>
          <p>{data.jobPostDate}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>

    
  )
}

export default Card