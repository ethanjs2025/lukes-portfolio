const artworks = [
  { id: 1, title: 'Bird', image: `${import.meta.env.BASE_URL}artwork/BIRD.png` },
  { id: 2, title: 'Box', image: `${import.meta.env.BASE_URL}artwork/BOX.png` },
  { id: 3, title: 'Centipede', image: `${import.meta.env.BASE_URL}artwork/centipede.png` },
]

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 xl:px-20 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 max-w-[1800px] mx-auto">
        {artworks.map((artwork) => (
          <div 
            key={artwork.id}
            className="group bg-gray-100 dark:bg-gray-800 rounded-lg p-12 lg:p-16 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center overflow-hidden">
              {artwork.image ? (
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  {artwork.title}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}