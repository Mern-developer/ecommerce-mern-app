import React from 'react';

 const Ratings=( props )=>{
const {Ratings, reviews} =props

return(
<>
<span>
<i style={{color: '#ffc000', fontSize: '18'}} 
    className={
        Ratings >=1 ? 'fas fa-star'
        : Ratings >=0.5 ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
/>
</span>
<span>
<i style={{color: '#ffc000', fontSize: '18'}} 
    className={
        Ratings >=2 ? 'fas fa-star'
        : Ratings >=1.5 ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
/>
</span>
<span>
<i style={{color: '#ffc000', fontSize: '18'}} 
    className={
        Ratings >=3 ? 'fas fa-star'
        : Ratings >=2.5 ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
/>
</span>
<span>
<i style={{color: '#ffc000', fontSize: '18'}} 
    className={
        Ratings >=4 ? 'fas fa-star'
        : Ratings >=3.5 ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
/>
</span>
<span>
<i style={{color: '#ffc000', fontSize: '18'}} 
    className={
        Ratings >=5 ? 'fas fa-star'
        : Ratings >=4.5 ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
/>
</span> 
<span>
{' '} Reviews {reviews}
</span>

</>
    )
}

export default Ratings;