import React, { useState } from "react";

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const photos = [
    { src: "/foto1.jpg", date: "12.10.24", caption: "Nosso primeiro fim de semana juntos." },
    { src: "/foto2.jpg", date: "01.03.25", caption: "Primeira vez que fiquei na sua casa" },
    { src: "/foto3.jpg", date: "22.03.25", caption: "O dia que oficializou a minha melhor escolha" },
    { src: "/foto4.jpg", date: "01.05.25", caption: "O melhor show com a melhor companhia" },
  ];

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setTimeout(() => setShowModal(true), 10);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedPhoto(null), 300);
  };

  return (
    <div className="relative min-h-screen bg-pink-100 p-4 md:p-8 flex flex-col items-center overflow-hidden">
      <h1 className="text-3xl md:text-5xl font-bold text-red-600 mb-4 text-center">
        Feliz dia dos namorados Meu Bem {'\u2764'}
      </h1>
      <p className="text-center max-w-xl text-gray-700 mb-8 px-2">
        Hoje é o meu primeiro dia dos namorados que passo namorando, primeiro de muitos que ainda virão. Eu nem sei colocar em palavras o bem que você me faz, você chegou em um momento que o amor era uma das minhas últimas preocupações e você fez ele se tornar essencial. Mesmo com a distância você me passa uma segurança que nunca senti com ninguém, o seu jeito atencioso e cuidadoso de sempre perguntar sobre tudo me deixa bobo kkkkk. Cada dia que passa eu me apaixono mais por cada detalhe seu, sua determinação com as coisas me inspira a ser alguém melhor todos os dias, sempre que eu ouço você falando sobre o seu futuro eu penso "eu também preciso correr atrás, pois se eu quero passar uma vida com ele eu também preciso correr atrás das minhas responsabilidades". Só queria te dizer que eu te amo muito e queria muito poder estar com você nesse momento, mas como infelizmente isso não é possível comprei esse presente pra você e fiz essa página, afinal eu sou o menino do TI (Tesão Intenso {'\u1fae6'} ). Abaixo tem algumas fotos que separei de momentos especiais com você, eu amo todos os nossos momentos juntos e esses são apenas alguns que assim como os outros guardo com muito carinho na memória. Te amo meu bem {'\u2764'}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => openModal(photo)}
            className="bg-white shadow-lg rounded-md p-2 w-full flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <img
              src={photo.src}
              alt={`Namorados ${photo.date}`}
              className="w-full h-40 md:h-56 object-cover rounded"
            />
            <span className="mt-2 text-sm text-gray-600 font-mono">
              {photo.date}
            </span>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <>
          {/* Fundo opaco */}
          <div
            className={`fixed inset-0 bg-white transition-opacity duration-300 z-40 ${showModal ? 'opacity-70' : 'opacity-0'}`}
          />

          <div className="fixed inset-0 flex justify-center items-center z-50 p-4 pointer-events-none">
            <div
              className={`transform transition-transform duration-300 ${showModal ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} bg-white rounded-lg w-full max-w-md sm:max-w-lg text-center p-4 relative shadow-xl pointer-events-auto`}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={selectedPhoto.src}
                alt={`Foto ${selectedPhoto.date}`}
                className="w-full max-h-[70vh] object-contain rounded"
              />
              <p className="mt-4 text-gray-700 italic">{selectedPhoto.caption}</p>
              <span className="block mt-2 text-sm text-gray-500 font-mono">
                {selectedPhoto.date}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
