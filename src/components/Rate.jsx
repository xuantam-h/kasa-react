
import emptyStar from '../assets/emptyStar.svg';
import filledStar from  '../assets/filledStar.svg';
import '../styles/Rate.scss';

const Rate = ({score}) => {
    const rates = [1,2,3,4,5];

    return (
        <div className="accomodation-ratings">
            {rates.map((rate,index) => {
                return (
                    score >= rate ? (
                        <img 
                            key={index}
                            className='rating-filled'
                            src={filledStar}
                            alt='star'
                        />
                    ) : (
                        <img 
                            key={index}
                            className='rating-empty'
                            src={emptyStar}
                            alt='star'
                        />
                    )
                )
                
            })}
        </div>
    );
}
  
export default Rate;