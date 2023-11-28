import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const Priceoption = ({ option }) => {
    const { name, price, features } = option
    return (
        <div className='bg-blue-500 rounded-md text-white p-6'>
            <h2 className='text-center'>
                <span className="text-5xl">{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className='pl-6'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='w-full mt-12 bg-green-500 py-4 hover:bg-green-800 font-bold text-xl'>Buy Now</button>
        </div>
    );
};

Priceoption.propTypes = {
    option: PropTypes.object,
}

export default Priceoption;