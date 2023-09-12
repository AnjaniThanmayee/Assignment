import './wholesome.css'

const Wholesome =() =>{
    return(
        <>
        <h1> Try Sara's Wholesome Food 🤩</h1>
        <div className='container'>
            <div className='row'>
                <div className="col-3">
            <img className='wfi' src="https://headsupfortails.com/cdn/shop/files/chicken_turkey.png?v=1692792883"/>
            </div>
            <div className="col-3">
            <img className='wfi col-4' src="https://headsupfortails.com/cdn/shop/files/chicken_brown_rice.png?v=1692792868"/>
            </div>
            <div className="col-3">
            <img className='wfi col-4' src="https://headsupfortails.com/cdn/shop/files/paneer_eggs.png?v=1692792898"/>

            </div>
            <div className="col-3">
            <img className='wfi col-4' src="https://headsupfortails.com/cdn/shop/files/lamb_apple.png?v=1692792911"/>
            </div>
            </div>
            </div>
            </>
    )
}

export default Wholesome