import img from "../assets/Foto_Non_Formal_Mirza-removebg-preview.png";
import svgwhatsap from "../assets/whatsapp (1).svg";
import svginstagram from "../assets/instagram.svg";
import svglinkedin from "../assets/linkedin.svg";

function Profile2() {
  return (
    <nav className="bg-custom-green p-4">
      <div className="flex justify-between flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 p-8 mx-2 justify-between">
          <div className="text-2xl font-bold">About Me</div>
          <p>
            I'm A Web Developer, I'm a Junior programmer with good knowledge of
            front-end and back-end techniques
          </p>
        </div>
        <div className="flex-1 p-8 mx-2 flex justify-center items-center">
          <img
            src={img}
            alt="Mirza Ali Yusuf"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
          />
        </div>
        <div className="flex-1 p-8 mx-2 justify-center items-center ">
          <div className="text-2xl font-bold">Details</div>
          <h1 className="font-bold">Nama :</h1>
          <p>Mirza Ali Yusuf</p>
          <h1 className="font-bold">Age :</h1>
          <p>21 Years</p>
          <h1 className="font-bold">Location :</h1>
          <p>Indonesia</p>
          <h1 className="font-bold">Email :</h1>
          <p>mirzaaliyusuf45@gmail.com</p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/mirzaaliyusuf"
              className="p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-full w-8 h-8 md:w-8 md:h-8"
                src={svglinkedin}
                alt=""
              />
            </a>
            <a
              href="https://wa.me/6282164867475?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda!
"
              className="p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-full w-8 h-8 md:w-8 md:h-8"
                src={svgwhatsap}
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/mirzaaliyusuf/?hl=en"
              className="p-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-full w-8 h-8 md:w-8 md:h-8"
                src={svginstagram}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Profile2;
