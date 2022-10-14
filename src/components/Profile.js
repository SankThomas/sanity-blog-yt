import React from "react";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <div className="max-w-2xl mx-auto my-20 grid grid-cols-1 md:gap-8 bg-white dark:bg-slate-800 md:grid-cols-2 rounded-lg shadow-lg md:place-items-center overflow-hidden">
        <article>
          <img
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Thomas Sankara"
            className="md:h-64 md:object-cover"
          />
        </article>

        <article className="p-8 md:p-0 md:pr-8">
          <h3 className="text-2xl mb-4">Thomas Sankara</h3>
          <p>
            Is a Front-end web designer and developer in Figma and ReactJs,
            based in Nairobi, Kenya.
          </p>

          <ul className="flex items-center justify-start gap-4 mt-8">
            <li>
              <GrFacebook className="text-2xl text-slate-600 dark:text-slate-400" />
            </li>
            <li>
              <FaTwitter className="text-2xl text-slate-600 dark:text-slate-400" />
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
