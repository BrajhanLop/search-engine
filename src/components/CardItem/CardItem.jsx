
const CardItem = ({ dat }) => {
  return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
            <img className="w-full h-48" src={dat.images.original.url} alt="Descripción de la imagen"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{dat.title}</div>
                    <p className="text-gray-700 text-base">{dat.username}</p>
                </div>
        </div>
  )
}

export default CardItem
