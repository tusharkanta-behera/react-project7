import React, {useState} from 'react';

const Card = () => {
    
    const [state, setState] = useState ({
        show : "Write Something"
    })

    const showing = (event) => {
        setState({
            show : event.target.value
        })
    }

    
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-success">
                                <h3 className="text-center text-white">Card Header</h3>
                            </div>

                            <div className="card-body">
                                <form action="">
                                    <div className="mb-3">
                                        <input onChange={showing} type="text" className="form-control" placeholder="Enter Your Content" />
                                    </div>

                                    <p className="display-2">{state.show}</p>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;