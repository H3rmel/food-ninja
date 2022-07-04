// React Icons
import { HiOutlineClock } from "react-icons/hi";

type Props = {
    name: string;
    by: string;
    image: string;
}

const Card = ({name, by, image}: Props) => {
  return (
    <div className="card">
      <img src={image} alt={`${name} photo`} className="card-image" />
      <div className="flex flex-col m-4">
        <span className="font-bold">{name}</span>
        <span className="text-gray-500 text-sm">{by}</span>
      </div>
      <span className="card-badge">
        <HiOutlineClock size={16} />
        25 mins
      </span>
    </div>
  );
};

export default Card;
