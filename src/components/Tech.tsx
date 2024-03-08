import TechCard from "./TechCard";

const techData = [
    {
        img:"/banner3.jpg",
        title:"Banking",
        desc:"Our domain expertise in banking caters to an intricate series",
        rating:4,
    },
    {
        img:"/banner3.jpg",
        title:"Telecommunication",
        desc:"We help you to transform your identity by integrating technology",
        rating:4,
    },
    {
        img:"/banner3.jpg",
        title:"Containerization",
        desc:"We create portable and scalable application containers ",
        rating:5,
    },
    {
        img:"/banner3.jpg",
        title:"Containerization",
        desc:"We create portable and scalable application containers ",
        rating:3,
    },
]

const Tech = () => {
  return (
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">Technology
            </h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gy2">
                {techData.map((item, index) => (
                    <TechCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Tech;