import React, { useEffect, useState } from 'react';
import { IoMdPlay, IoIosInformationCircleOutline } from 'react-icons/io';

import api from '../../services/api';
import request from '../../services/requests';

import './styles.css';

const Banner = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(request.netflixOriginals);

      const random = Math.floor(
        Math.random() * response.data.results.length - 1,
      );

      setMedia(response.data.results[random]);
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${media?.backdrop_path})`,
      }}
    >
      <section className="banner_content">
        <h1 className="banner_title">
          {media?.title || media?.name || media?.original_name}
        </h1>

        <p className="banner_description">{truncate(media?.overview, 150)}</p>

        <div className="banner_buttons">
          <button className="banner_button play">
            <IoMdPlay size={30} />
            Play
          </button>
          <button className="banner_button">
            <IoIosInformationCircleOutline size={30} />
            More Info
          </button>
        </div>
      </section>
      <div className="banner_fade" />
    </section>
  );
};

export default Banner;
