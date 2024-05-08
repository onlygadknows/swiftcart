import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../assets/styles/custom_css.css";
const Rating = ({ value, text }) => {
  return (
    <div className="rating">
        <div>
        <span>
        {value >= 1 ? 
          <FaStar />
         : value >= 0.5 ? 
          <FaStarHalfAlt />
         : 
          <FaRegStar />
        }
      </span>
      <span>
        {value >= 2 ? 
          <FaStar />
         : value >= 1.5 ? 
          <FaStarHalfAlt />
         : 
          <FaRegStar />
        }
      </span>
      <span>
        {value >= 3 ? 
          <FaStar />
         : value >= 2.5 ? 
          <FaStarHalfAlt />
         : 
          <FaRegStar />
        }
      </span>
      <span>
        {value >= 4 ? 
          <FaStar />
         : value >= 3.5 ? 
          <FaStarHalfAlt />
         : 
          <FaRegStar />
        }
      </span>
      <span>
        {value >= 5 ? 
          <FaStar />
         : value >= 4.5 ? 
          <FaStarHalfAlt />
         : 
          <FaRegStar />
        }
      </span>
        </div>
      
      
      <p className="rating-text">{text && text}</p>
    </div>
  );
};

export default Rating;
