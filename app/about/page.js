export default function About() {
  return (
    <div
      className=" pt-52 py-30 sm:bg-center   bg-cover 
             bg-[url('/imgs/wallpapers/1(1).png')] 
             sm:bg-[url('/imgs/wallpapers/1.png')]"
    >
      <h1 className=" text-h-nc text-yellow-400 font-bold">من نحن:</h1>
      <p className="text-h3-nc text-yellow-400">
        فرقه تعمل علي تطوير منصه لتنميه الشباب العربي بافضل الطرق واوفر الاسعار{" "}
      </p>
      <div className="flex justify-center my-30">
        <div className=" flex flex-col md:flex-row justify-around gap-10">
          <img
            src="/imgs/media/facebook.png"
            alt="facebook"
            className=""
            style={{ width: 47, height: 47 }}
          />
          <img
            src="/imgs/media/instagram.png"
            alt="instagram"
            className=""
            style={{ width: 47, height: 47 }}
          />
          <img
            src="/imgs/media/twitter.png"
            alt="twitter"
            className=""
            style={{ width: 47, height: 47 }}
          />
          <img
            src="/imgs/media/youtube.png"
            alt="youtube"
            className=""
            style={{ width: 47, height: 47 }}
          />
        </div>
      </div>
    </div>
  );
}
