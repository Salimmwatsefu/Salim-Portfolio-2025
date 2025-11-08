import React from 'react';

export default function OutsideTerminal() {
  const [selectedImage, setSelectedImage] = React.useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="text-white mt-28">
      {/* Header */}
      <header className="sm:flex sm:items-center">
        <h1 className="mt-2  sm:mt-0 font-bold text-3xl text-gray-100 mb-10">
          Outside the Terminal 🎮
        </h1>
      </header>

       {/* Description and image */}

       <div className=" grid md:grid-cols-2 grid-cols-1 my-10">

     
      <div>
    <div className=" text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed space-y-4">
    <div className="block mt-5">
      <h1 className="text-gray-100 text-lg font-semibold">Gym & Running</h1>
        <p>
        I'm a dedicated gym goer, training 4–5 times a week. I also enjoy running — from short sprints to endurance jogs and even marathons.
          Fitness keeps me grounded and pushes me to improve daily.
      </p>
    </div>

    <div className="block mt-6">
      <h1 className="text-gray-100 text-lg font-semibold">Football</h1>
        <p>
      Football has always been part of my weekends. Whether it's playing casually with friends or watching matches, 
      it's my favorite way to connect, compete, and stay active.
    </p>
    </div>

    <div className="block mt-6">
      <h1 className="text-gray-100 text-lg font-semibold">Gaming</h1>
      <p>
      When I'm not lifting or on the pitch, I unwind with gaming — from story-driven adventures to fast-paced esports.
      Check out a bit of my gaming section below 👇
      </p>
    </div>
    </div>

</div>

      {/* --- Main Personal Image --- */}
      <div className="rounded-lg  relative flex justify-center">
        <div className="absolute border-2 border-orange-700 md:h-[450px] h-[300px] rounded-lg md:w-[450px] w-[300px] ml-20 mt-6"></div>
        <img
          alt="Salim portrait"
          src="salim.jpg"
          className="rounded-lg md:w-[80%] w-[90%] z-50 relative shadow-xl"
        />
      </div>

     </div>


      {/* --- Gaming Section --- */}
      <div className="mt-40">
        <h2 className="text-3xl font-semibold text-gray-100 mb-20 ">
          Gaming Zone 🎮
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="/gamerprofile.png"
              alt="Gamer Profile"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImage({ src: "/gamerprofile.png", alt: "Gamer Profile" })}
            />
            <p className="mt-5 text-gray-400  text-center">
               My Gamer Profile — showing my gamerID annd overview
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/FavGames.png"
              alt="Favorite Games"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImage({ src: "/FavGames.png", alt: "Favorite Games" })}
            />
            <p className="mt-5 text-gray-400 text text-center">
              🕹️ Favorite games currently: EA Sports FC25, GTA 5, and Call of Duty.
            </p>
          </div>

          
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}