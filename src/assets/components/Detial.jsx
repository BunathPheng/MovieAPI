import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import p1 from "../components/2.png";
import p2 from "../components/3.png";
import { motion,AnimatePresence} from "framer-motion";
const Detial = () => {
  const img_url = "https://image.tmdb.org/t/p/w500";
  const img =
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2008/04/30/21/26206.jpg";
  const getid = useParams().id;
  const [item, setitems] = useState({});
  const [meta, setmeta] = useState([]);
  const [product, setproduct] = useState([]);
  const [tralier , settralier] = useState("");
  const [display , setdisplay] = useState(false);
  const getitems = async () => {
    const url = `https://api.themoviedb.org/3/movie/${getid}?api_key=94af780ac836fda29874bd3b68ce92e3&&append_to_response=videos`;
    const res = await fetch(url);
    const getdata = await res.json();
    setitems(getdata);
    setmeta(getdata.genres);
    setproduct(getdata.production_countries);
    console.log(getdata);
  };
  useEffect(() => {
    getitems();
  }, []);
  const playtrailer = () =>
  {
    const getkey = item.videos.results.find((video) => video.name ==="Official Trailer" );
    settralier(getkey.key);
    setdisplay(!display);

  }
  return item.lenght === 0 ? (
    <h1></h1>
  ) : (
    <>
      <div className="">
        <img
          src={img_url + item.backdrop_path}
          alt=""
          className="fixed w-full h-screen object-cover blur-sm z-0 lg:z-0"
        />
        <div className="w-[70%] mx-auto">
          <div className=" flex flex-col-reverse gap-1 justify-center items-center lg:flex lg:flex-row lg:justify-between  lg:items-center">
            <div className="w-48 h-72 w-object-cover rounded-lg mt-1 lg:mt-20 z-10">
              { item.poster_path == null ?<img className="h-[50vh] lg:h-[40vh] cursor-pointer group overflow-hidden" src={p2} alt="" />:<img src={img_url + item.poster_path} alt="" />}
              <button className="mt-4 rounded-lg bg-black p-2 font-bold" onClick={playtrailer}>
                {display ?"Closetrailer": "Playtrailer"}
              </button>
              {
                display &&  <iframe
                allowFullScreen
                src={`https://www.youtube.com/embed/${tralier}`}
                className=" mt-2 absolute left-10 lg:left-[10%] w-80 h-52 rounded-lg"
              ></iframe>
              }
            </div>
            <div className=" z-10 lg:fixed lg:right-0 lg:top-0 w-full lg:w-[50vw] lg:h-screen lg:backdrop-blur-lg lg:flex lg:flex-col p-0 lg:p-20 ">
              <h1 className=" text-2xl font-bold tracking-wide">
                {item.original_title}
              </h1>
              <p className="mt-3 ">
                <b>Rate:</b>
                {item.vote_average}
              </p>
              <p className="mt-3 ">
                <b>Rate relesase:</b>
                {item.release_date}
              </p>
              <hr className="mt-3" />
              <p className="mt-3 text-sm">{item.overview}</p>
              <hr className="mt-3" />

              {meta.map((el) => (
                <p className="mt-3 text-sm" key={el.id}>
                  {el.name}{" "}
                </p>
              ))}
              <h1 className="mt-3 font-bold">PRODUCTION COMPANEY</h1>
              {product.map((e) => (
                <p className="mt-3 text-sm" key={e.id}>
                  {e.name}{" "}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detial;
