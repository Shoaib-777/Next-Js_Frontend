import { AiOutlineHeart, AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { CardsDatas } from "../api/Data";

const Cards = () => {
  let CardsData = CardsDatas;
  console.log(CardsData)
  return (
    <div className="w-full md:w-[600px] shadow-xl shadow-slate-200 flex mt-5">
      <div className="w-[84px] h-[40px] md:w-[125px] md:h-[40px]">
        <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-m8xmwvzx.png" alt="" className="pl-3 pt-2 inline w-full mt-2  " />
      </div>
      <div className="pt-3 pl-2">
        <h3 className="inline font-bold text-xl">{CardsData.name}</h3> <span className="bg-blue-700 rounded-xl text-white px-2 py-1">Sector 2</span> <span className="float-right pr-2 text-blue-600 font-semibold">{CardsData.time}</span>
        <p className="text-wrap">{CardsData.para}</p>
        <div className="flex gap-4">
          <AiOutlineHeart size={25} /><span>{CardsData.like}</span> <AiOutlineEye size={25} /><span>{CardsData.views}</span><BiComment size={25} /><span>{CardsData.comments}</span><AiOutlineShareAlt size={25} /><span> Share</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
