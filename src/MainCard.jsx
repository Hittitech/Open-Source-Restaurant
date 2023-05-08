import React from 'react'

function MainCard(props) {
  return (
    <>
        <h1 className=' mt-5 text-center main-heading'>The Open-Source Restraunt</h1>
      <hr/>
      <div className='mt-5 container'>
      <div className='menu-tab  d-flex  justify-content-around '>
          
          
        <props.Categories
          selectedItem={props.selectedItem}
          cat={props.cat}
        />
      </div>
      </div>
        <div className=' menu-items container-fluid mt-5' >
            <div className='row'>
                <div className='col-11  mx-auto '>
                    <div className='row my-5'>
                    {
                      props.data.map((elem)=>{
                        const {id,name,image,category,price,description}=elem;

                        return(
                          <>
                            <props.Card

                              id={id}
                              key={id}
                              name={name}
                              image={image}
                              category={category}
                              price={price}
                              description={description}
                            />

                          </>
                        )

                      })
                    }
                  

                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export default MainCard