import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative flex justify-center items-center rounded-lg w-full h-[400px] sm:h-[500px] overflow-hidden">
     
      <div className="z-10 relative text-white text-center">
        <h1 className="font-bold text-4xl sm:text-6xl">Alofoke Casa</h1>
        <p className="mt-4 text-xl sm:text-2xl">
          Tu casa de entretenimiento digital
        </p>
      </div>
    </div>
  );
}
