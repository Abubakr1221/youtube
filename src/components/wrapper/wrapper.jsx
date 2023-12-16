import "./wrapper.css";
import home from "../../assets/home.svg";
import home2 from "../../assets/home-2.svg";
import fire from "../../assets/fire.svg";
import subs from "../../assets/subs.svg";
import library from "../../assets/library.svg";
import history from "../../assets/history.svg";
import watch from "../../assets/watch.svg";
import favourites from "../../assets/favourites.svg";
import liked from "../../assets/liked.svg";
import music from "../../assets/music.svg";
import games from "../../assets/games.svg";
import array from "../../assets/array.svg";
import human1 from "../../assets/human-1.svg";
import human2 from "../../assets/human-2.svg";
import human3 from "../../assets/human-3.svg";
import human4 from "../../assets/human-4.svg";
import human5 from "../../assets/human-5.svg";
import human6 from "../../assets/human-6.svg";
import setting from "../../assets/setting.svg";

import { useMovieContext } from "../../contexts/movie-context";
import { Link } from "react-router-dom";

export const Wrapper = () => {
  const { data } = useMovieContext();
  return (
    <main>
      <div className="container">
        <section className="wrapper">
          <div className="wrapper__card">
            <div className="wrapper-card__sidebar">
              <div className="wrapper-card-sidebar__items">
                <ul className="wrapper-card-sidebar-items__list">
                  <li className="wrapper-card__items">
                    <a className="wrapper-card-items__link" href="#">
                      <img
                        className="wrapper-card-home-first__img"
                        src={home}
                        alt="home"
                      />
                      <img
                        className="wrapper-card-home-last__img"
                        src={home2}
                        alt="redhome"
                      />
                      <p className="wrapper-card-items-first__text">Home</p>
                    </a>
                  </li>
                  <li className="wrapper-card__items">
                    <a className="wrapper-card-items__link" href="#">
                      <img src={fire} alt="fire" />
                      <p className="wrapper-card-items-last__text">Trending</p>
                    </a>
                  </li>
                  <li className="wrapper-card__items">
                    <a className="wrapper-card-items__link" href="#">
                      <img src={subs} alt="subs" />
                      <p className="wrapper-card-items-last__text">
                        Subscriptions
                      </p>
                    </a>
                  </li>
                </ul>
                <ul className="wrapper-card-sidebar-items-secons__list">
                  <li className="wrapper-card-second__items">
                    <a className="wrapper-card-items-second__link" href="#">
                      <img src={library} alt="library" />
                      <p className="wrapper-card-items-second__text">Library</p>
                    </a>
                  </li>
                  <li className="wrapper-card-second__items">
                    <a className="wrapper-card-items-second__link" href="#">
                      <img src={history} alt="history" />
                      <p className="wrapper-card-items-second__text">History</p>
                    </a>
                  </li>
                  <li className="wrapper-card-second__items">
                    <a className="wrapper-card-items-second__link" href="#">
                      <img src={watch} alt="watch" />
                      <p className="wrapper-card-items-second__text">
                        Watch later
                      </p>
                    </a>
                  </li>
                  <li className="wrapper-card-second__items">
                    <a className="wrapper-card-items-second__link" href="#">
                      <img src={favourites} alt="favourites" />
                      <p className="wrapper-card-items-second__text">
                        favourites
                      </p>
                    </a>
                  </li>
                  <li className="wrapper-card-second__items">
                    <a className="wrapper-card-items-second__link" href="#">
                      <img src={liked} alt="liked" />
                      <p className="wrapper-card-items-second__text">
                        liked videos
                      </p>
                    </a>
                  </li>
                  <li className="wrapper-card-second__items">
                    <a className="wrapper-card-items-second__link" href="#">
                      <img src={music} alt="music" />
                      <p className="wrapper-card-items-second__text">Music</p>
                    </a>
                  </li>
                  <li className="wrapper-card-second__items">
                    <a className="wrapper-card-items-second__link" href="#">
                      <img src={games} alt="games" />
                      <p className="wrapper-card-items-second__text">Games</p>
                    </a>
                  </li>
                  <li className="wrapper-card-second__items">
                    <a className="wrapper-card-items-second__link" href="#">
                      <img src={array} alt="games" />
                      <p className="wrapper-card-items-second__text">
                        Showmore
                      </p>
                    </a>
                  </li>
                </ul>
                <p className="Subscriptions">Subscriptions</p>
                <ul className="wrapper-card-Subscriptions__list">
                  <li className="wrapper-card-subscriptions__items">
                    <a className="wrapper-card-subscriptions__link" href="#">
                      <img src={human1} alt="women" />
                      <p className="wrapper-card-subscriptions__text">
                        Gussie Singleton
                      </p>
                    </a>
                  </li>
                  <li className="wrapper-card-subscriptions__items">
                    <a className="wrapper-card-subscriptions__link" href="#">
                      <img src={human2} alt="women" />
                      <p className="wrapper-card-subscriptions__text">
                        Nora Francis
                      </p>
                    </a>
                  </li>
                  <li className="wrapper-card-subscriptions__items">
                    <a className="wrapper-card-subscriptions__link" href="#">
                      <img src={human3} alt="women" />
                      <p className="wrapper-card-subscriptions__text">
                        Belle Briggs
                      </p>
                    </a>
                  </li>
                  <li className="wrapper-card-subscriptions__items">
                    <a className="wrapper-card-subscriptions__link" href="#">
                      <img src={human4} alt="women" />
                      <p className="wrapper-card-subscriptions__text">
                        Eunice Cortez
                      </p>
                    </a>
                  </li>
                  <li className="wrapper-card-subscriptions__items">
                    <a className="wrapper-card-subscriptions__link" href="#">
                      <img src={human5} alt="women" />
                      <p className="wrapper-card-subscriptions__text">
                        Emma Hanson
                      </p>
                    </a>
                  </li>
                  <li className="wrapper-card-subscriptions__items">
                    <a className="wrapper-card-subscriptions__link" href="#">
                      <img src={human6} alt="women" />
                      <p className="wrapper-card-subscriptions__text">
                        Leah Berry
                      </p>
                    </a>
                  </li>
                </ul>
                <ul className="wrapper-card-setting__list">
                  <li className="wrapper-card-setting__items">
                    <a className="wrapper-card-setting__link" href="#">
                      <img src={setting} alt="setting" />
                      <p className="wrapper-card-setting__text">Setting</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper-card__video">
              {data &&
                data.items.map((element) => (
                  <Link
                    to={`/videos/${element.id?.videoId}`}
                    className="wrapper-card-video__play"
                  >
                    <img
                      className="wrapper-card-video-play__img"
                      src={element.snippet.thumbnails.default.url}
                      alt="video"
                    />
                    <h3 className="wrapper-card-video__title">
                      {element.snippet.title}
                    </h3>
                    <div className="wrapper-card-video__block">
                      <p className="wrapper-card-vodeo__text">
                        {element.snippet.publishedAt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Wrapper;
