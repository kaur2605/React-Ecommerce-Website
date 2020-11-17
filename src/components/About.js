import React from 'react'
import gro from '../gro.jpg'

export default function About() {
    return (
        <div className="row m-3 p-3">
            <div className="col-md-6 ">
                <p>Welcome to theshopsmart.com, your best place to find the Indian Grocery. We're devoted to giving you the unbeatable class products, with a focus on your timesaving, loyalty, customer service and uniqueness.</p>
                <br></br>
                <p>Founded in 2020 by Rakesh K. Rajput, theshopsmart.com has a vision to give their best shot to satisfy their customers and fulfil their needs in a very best possible way.</p>
                <br></br>
                <p>We now serve customers all over Copenhagen area and are thrilled to be a part of the climate-friendly, fair-trading wing of the Grocery Industry.</p>
                <br></br>
                <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                <br></br>
                <p>Sincerely,
                Rakesh K. Rajput, [Founder]</p>
            </div>
            <div className="col-md-6">

                <img className="p-3" src={gro} alt="Grocery" />
            </div>

        </div>
    )
}
