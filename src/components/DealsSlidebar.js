import React from 'react'
import { Link } from 'react-router-dom'

const DealsSlidebar = () => {
    return (
        <>
            <div className="col-md-2 p-2 shadow-lg " style={{backgroundColor:'#f3f3f3'}}>
                <h4>Catagories</h4>
                <form>
                    <div className="form-check">
                    <input className="form-check-input"type="checkcox" vslue=""/>
                    <label ClassName="form-check-label">Mobile</label>
                    </div>
                    
                    <div className="form-check">
                    <input className="form-check-input"type="checkcox" vslue=""/>
                    <label ClassName="form-check-label">Mobile</label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input"type="checkcox" vslue=""/>
                    <label ClassName="form-check-label">Mobile</label>
                    </div>

                    <div className="form-check">
                    <input className="form-check-input"type="checkcox" vslue=""/>
                    <label ClassName="form-check-label">Mobile</label>
                    </div>

                    <div className="form-check">
                    <input className="form-check-input"type="checkcox" vslue=""/>
                    <label ClassName="form-check-label">Mobile</label>
                    </div>

                    <div className="form-check">
                    <input className="form-check-input"type="checkcox" vslue=""/>
                    <label ClassName="form-check-label">Mobile</label>
                    </div>

                    <Link className="text-decoration-none" tp="#">see more categories</Link>

                </form>
                <h4>Deal Type</h4>
                <Link className="text-decoration-none" to="#">Deal of the day</Link> <br/>
                <Link className="text-decoration-none" to="#">Deal of the day</Link> <br/>
                <Link className="text-decoration-none" to="#">Deal of the day</Link> <br/>
                <Link className="text-decoration-none" to="#">Deal of the day</Link> <br/>
            </div>
        </>
    )
}

export default DealsSlidebar
