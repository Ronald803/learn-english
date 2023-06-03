import React from 'react'

function Stop() {
    const categories = ['Name','Color','Country','City','Preposition','Regular verb','Irregular verb',]
  return (
    <div className='card'>
        <div className='text-center'>
            <h1>A</h1>
        </div>
        <div className='card-body'>
            <form>
                {
                    categories.map( cat =>{
                        return(
                            <div className="mb-1 row">
                                <label for={cat}  class="col-sm-4 col-form-label">{cat}: </label>
                                <div className='col-sm-8'>
                                    <input className="form-control-plaintext" type="text" id={cat} />
                                </div>
                            </div>        
                        )
                    })
                }
                <div className='text-center'>
                    <button type='submit' className='btn btn-primary'>Stop!!!</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Stop