import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='item1 col-12 col-md-6 col-lg-4 col-sl-4 my-5  '  >

<div className='row Item-inside'>
    <div className='col-12 col-md-12 col-lg-4 img-div'>
      <img src={props.image} className=' img-fluid' alt=''/>

    </div>
        <div className='col-12 col-md-12 col-lg-8'>
            <div className=' main-title pt-4 pb-3'>
              <h1>{props.name}</h1>
              <p>{props.description}</p>

            </div>

        <div className='menu-price-book'>
          <div className='price-book-divide d-flex justify-content-between'>
            <h2>{props.price}</h2>
            <a href=" ">
                  <button className='btn btn-success'>
                    OrderNow  
                  </button>
            </a>

          </div>
          <p>*Prices may differ on specific dates</p>

        </div>

        </div>

</div>

</div>
    </>
  )
}

export default Card