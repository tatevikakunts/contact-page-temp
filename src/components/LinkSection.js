import React, {useEffect, useState} from "react";

const LinkSection = ()=>{

const [toggleOn, setToggleOn] = useState(false)

    const handleClick = ()=>{
    setToggleOn(!toggleOn)
    }


    return(
        <>
            <section className="container-fluid mx-0  d-flex flex-lg-row flex-md-wrap flex-sm-column-reverse mt-2">
                <div className="col-lg-6 col-sm-12 bg-grey d-flex flex-column justify-content-center align-items-center px-5">
                    <h3 className="cta-title mx-4">Lorem ipsum dolor sit amet, consectetur.</h3>
                    <p className="cta-descr mx-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, culpa!</p>
                    <button className="cta bg-black text-white p-3 mx-4" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"  onClick={handleClick}>{toggleOn?"Close me!":"Contact us"}</button>
                </div>
                <div className="col-lg-6 col-sm-12 image-block"></div>

            </section>
            <section className="collapse contact-section container-fluid" id="collapseExample">
                <div className="card card-body bg-transparent text-white border-0 fs-3">
                    Contact
                </div>

            </section>
        </>

    )
}
export default LinkSection