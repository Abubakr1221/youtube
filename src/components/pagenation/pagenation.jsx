import like from "../../assets/like.svg";
import dithlike from "../../assets/dithlike.svg";
import share from "../../assets/share.svg";
import more from "../../assets/More.svg";
import ovalsubs from "../../assets/food.svg";
import "../pagenation/pagenation.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const VideoList = () => {
  const { videoId } = useParams();
  const [element, setElement] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8e2ad1ec74mshf0476501262e15ep192ccbjsn153e27b55080",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setElement(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(element);
  return (
    <div className="container">
      <div className="pagenation">
        <div className="pagenation__card">
          <iframe
            className="pagenation__img"
            allowFullScreen
            src={`https://www.youtube.com/embed/${videoId}`}
            alt=""
          />
          <div className="pagenation-card__block">
            <p className="pagenation-card-block__text">Video nomi yoq</p>
          </div>
        </div>
        <div className="pagenation-card-block__numbers">
          <p className="pagenation-card-block-numbers__month">123k views</p>
          <div className="like__block">
            <div className="pagenation-card-block-numbers__like">
              <img src={like} alt="like" />
              <p className="pagenation-card-block-numbers-like__text">123k</p>
            </div>
            <div className="pagenation-card-block-numbers__like">
              <img src={dithlike} alt="dithlike" />
              <p className="pagenation-card-block-numbers-like__text">435k</p>
            </div>
            <div className="pagenation-card-block-numbers__like">
              <img src={share} alt="share" />
              <p className="pagenation-card-block-numbers-like__text">Share</p>
            </div>
            <div className="pagenation-card__more">
              <img src={more} alt="more" />
            </div>
          </div>
        </div>
        <div className="pagenation__hr">
          <hr></hr>
        </div>
        <div className="pagenation-card__Subscribe">
          <img
            className="pagenation-card-Subscribe__img"
            src={ovalsubs}
            alt="ovalfood"
          />
          <div className="pagenation-card-subscribe__box">
            <p className="pagenation-card-subscribe-first__text">
              Food & Drink
            </p>
            <p className="pagenation-card-subscribe-last__text">
              Published on 14 Jun 2019
            </p>
            <p className="pagenation-card-subscribe-second__text">
              245K subscribed
            </p>
          </div>
          <div className="pagenation-card-subscribe__block">
            <p className="pagenation-card-subscribe-block__text">
              Subscribe 2.3m
            </p>
            <p className="pagenation-card-subscribe-block-second__text">
              Subscribe
            </p>
          </div>
        </div>
        <div className="pagenation-card-subscribe-footer__block">
          <p className="pagenation-card-subscribe-footer-first__text">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy; it is based on a
            number of factors, including ad placement, demographic, even the
            consumers mood when they see your ad.
          </p>
          <p className="pagenation-card-subscribe-footer-last__text">
            Show more
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
