import React from 'react'

function StopForm() {
    const categories = ['Name','Color','Country','City','Preposition','Regular_verb','Irregular_verb','Adjective']
    let words = {
        Name: "",
        Color: "",
        Country: "",
        City: "",
        Preposition: "",
        Regular_verb: "",
        Irregular_verb: "",
        Adjective: ""
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({words});
    }
    const handleChange = (e) => {
        words[e.target.name] = e.target.value
    }
  return (
    <div className='card'>
        <div className='text-center'>
            <h1>A</h1>
        </div>
        <div className='card-body'>
            <form onSubmit={handleSubmit}>
                {
                    categories.map( (cat,ind) =>{
                        return(
                            <div className="mb-1 row" key={ind}>
                                <label htmlFor={cat}  className="col-sm-4 col-form-label">{cat}: </label>
                                <div className='col-sm-8'>
                                    <input className="form-control-plaintext" type="text" name={cat} id={cat} onChange={handleChange}/>
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

export default StopForm