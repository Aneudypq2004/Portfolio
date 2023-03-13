
import tecnology from '/Tecnology.svg'
import learn from '/Learn.svg'


function Tecnology() {

    return (
        <div className='tecnology'>

            <div className='learn'>
                <img src={learn} alt="Tecnology icons" />

            </div>

            {/* // ALL ICONS */}

            <div className='icons' >
                <img className='turn' src={tecnology} alt="Tecnology icons" />
            </div>



        </div>
    )
}

export default Tecnology