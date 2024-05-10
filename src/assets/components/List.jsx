import React from "react";
import { Link } from "react-router-dom";
import p3 from "../components/3.png";
import { motion, AnimatePresence } from "framer-motion";
const List = ({ movie }) => {
  const img_url = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {movie.length === 0 ? (
        <span className="absolute w-full top-0 right-0 bg-black opacity-0">
          <img
            src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.guteschaf-ig.de%2FextLink%2Fhttp%3A%2Fboom-pics.click%2Floading-png-animated.html&psig=AOvVaw1ZaB5KG8GVFrPY5gK53Xgo&ust=1709005444990000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjLhNqKyoQDFQAAAAAdAAAAABBP"
            alt=""
          />
        </span>
      ) : (
        <motion.div
          layout
          className="w-[95%] lg:w-[70%] mx-auto grid grid-cols-1 gap-y-2 gap-x-0 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-5"
        >
          <AnimatePresence>
            {movie.map((movies) => (
              <Link to={"detial/" + movies.id} key={movies.id}>
                <motion.div
                  layout
                  animate={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  exit={{ opacity: 0 }}
                  className="nomcod"
                >
                  {movies.poster_path == null ? (
                    <img src={p3} alt="" />
                  ) : (
                    <img
                      src={img_url + movies.poster_path}
                      className="object-cover w-full rounded-lg h-[90%] group-hover:scale-105   transition duration-300 ease-in-out"
                    />
                  )}
                  <p>{movies.title}</p>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};
export default List;
