import PropTypes from 'prop-types';

export default function Winners(props) {
    return (
       <>
          <div className="cursor-pointer flex flex-col p-4 gap-2 bg-white rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
             <h1 className="text-xl font-bold text-gray-800">{props.name}</h1>
             <p className="text-sm text-gray-600">EDIÇÃO 382 - 1 YAMAHA LANDER 2024</p>
             <p className="text-gray-700">Número da sorte: 718000</p>
             <p className="text-gray-700">Data da premiação: 21/07/2024</p>
             <p className="text-gray-700">Sorteio: 1GS06/0382</p>
          </div>
       </>
    );
 }
 
 Winners.propTypes = {
    name: PropTypes.string.isRequired,
 };