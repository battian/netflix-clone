import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

const ContentRow = ({ title, requestUrl }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  const [media, setMedia] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(requestUrl);
      setMedia(response.data.results);
    }

    fetchData();
  }, [requestUrl]);

  const handleLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = media.length * 200;

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 90;
    }

    setScrollX(x);
  };

  return (
    <div className="content-row">
      <h2>{title}</h2>
      <div className="content-row__bofore" onClick={handleLeft}>
        <FiChevronLeft style={{ fontSize: 50 }} />
      </div>
      <div className="content-row__next">
        <FiChevronRight style={{ fontSize: 50 }} onClick={handleRight} />
      </div>
      <div className="content-row__listarea">
        <div
          className="content-row__list"
          style={{
            marginLeft: scrollX,
            width: media ? media.length * 200 : 0,
          }}
        >
          {media.map((item) => (
            <div className="content-row__item" key={item.id}>
              <img
                src={
                  item.poster_path
                    ? `${baseUrl}${item.poster_path}`
                    : 'https://via.placeholder.com/300x450'
                }
                alt={item.original_title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
