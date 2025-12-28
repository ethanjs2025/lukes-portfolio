// Automatically load all images from public/artwork/
const artworkFiles = [
  'BIRD.png',
  'BOX.png',
  'CARDS.png',
  'centipede.png',
  'CLIFF.png',
  'DOCTOR.png',
  'nightmare.png',
  'SKULL.png',
  'TWIN PEAKS.png',
  'weres wolf.png',
]

const artworks = artworkFiles.map((filename, index) => ({
  id: index + 1,
  image: `${import.meta.env.BASE_URL}artwork/${filename}`,
}))

export default function Gallery() {
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-16 xl:px-20 py-12 lg:py-16">
      {/* Header Section */}
        <div className="max-w-[1800px] mx-auto mb-12 lg:mb-16">
          <h3 className="text-4xl lg:text-5xl font-light text-left mb-4 leading-relaxed lg:leading-relaxed">
            A collection of works by <br /> Luke Smith
          </h3>
        </div>

      {/* Gallery Grid */}
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {artworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="group bg-gray-100 dark:bg-gray-800 rounded-lg p-6 lg:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt="Artwork by Luke Smith"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

