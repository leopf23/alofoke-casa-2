import Image from "next/image";

export default function Banner() {
    return (
        <div className="block relative md:flex justify-center items-center rounded-lg w-full h-[400px] sm:h-[500px] overflow-hidden">

            <div className="z-10 relative text-white text-center">
                <h2 className="text-red-700 md:text-[2rem] text-2xl text-left monument-font">Bienvenidos a</h2>
                <div className="block md:flex justify-center items-center gap-[350px]">
                    <h1 className="font-bold lg:text-[6.0rem] text-5xl tracking-[-.10em] alofoke-font">La casa</h1>
                 <img className="lg:right-[24rem] absolute lg:w-[500px] lg:h-[465px]" src="/house.png" />

                    <h1 className="font-bold text-red-700 lg:text-[6.0rem] text-5xl alofoke-font">Alofoke</h1>
                </div>
            </div>
        </div>
    );
}
