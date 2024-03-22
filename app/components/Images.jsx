import { imageData } from "../api/Data"
const Images = () => {
  let imgData = imageData
  console.log(imgData)
  return (
    <div className="shadow-xl  mt-7 w-[301px]">
        <img src="https://i.pinimg.com/originals/55/a7/5d/55a75dc4ddafd271f264ae00890fb858.jpg" alt="" width={300} height={150} />
        <div className="px-2 py-2">

        <h3 className="text-center font-bold text-2xl">{imgData.title}</h3>
        <p>{imgData.desc}</p>
        </div>
    </div>
  )
}

export default Images