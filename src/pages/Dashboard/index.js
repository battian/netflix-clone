import React from 'react';

import requests from '../../services/requests';
import ContentRow from '../../components/ContentRow';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './styles.css';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Banner />

      <section className="rows">
        <ContentRow
          title="Netflix Originals"
          requestUrl={requests.netflixOriginals}
        />

        <ContentRow
          title="Recommended For You"
          requestUrl={requests.recommendedForYou}
        />
        <ContentRow title="Trending Now" requestUrl={requests.trending} />
        <ContentRow title="Top Movies" requestUrl={requests.topMovies} />
        <ContentRow title="Documentaries" requestUrl={requests.documentary} />
        <ContentRow title="Action Movies" requestUrl={requests.action} />
        <ContentRow title="TV Shows" requestUrl={requests.trendingTv} />
      </section>

      <Footer />
    </>
  );
};

export default Dashboard;
