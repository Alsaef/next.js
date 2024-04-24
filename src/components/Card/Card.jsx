import Link from 'next/link';
import React from 'react';

const Card = ({project}) => {
    return (
        <div>
               <div>
          <div className="card bg-base-100 shadow-xl p-2">
  <div className=' flex justify-center items-center'><img style={{height:"200px"}} src={project.project_image_section} alt="" /></div>
  <div className="card-body">
    <h2 className="card-title">{project.project_name}</h2>
    <p>{project.category}</p>
    <div className="card-actions justify-end">
     <Link href={`/projects/${project._id}`}><button className="btn btn-primary">See Full Project</button></Link>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Card;