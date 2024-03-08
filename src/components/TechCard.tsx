import Image from "next/image";
import React from "react";

interface propsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
}

const TechCard:React.FC<propsType> = ({img, title, desc, rating}) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
        <div>
            <Image className="w-full h-auto" src={img} width={200} height={300} alt={title} 
            />
        </div>
        <div className="space-y-2 py-2">
            <h2 className="text-blue-300 font-medium uppercase">{title}</h2>
            <p className="text-blackish max-w-[150px]">{desc}</p>
        </div>
    </div>
  );
};

export default TechCard