import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Prompt = ({ title, videos }) => {
  console.log(title);
  return (
    <section className="prompt-container">
      <div className="prompt">
        <div className="prompt-header">
          <h1>{title}</h1>
        </div>
        <div className="prompt-content">
          <ul className="prompt-content-items">
            {/* {videos.map((video) => {
              return (
                <li className="prompt-content-item">
                  <img src="https://picsum.photos/800/300/?random" />
                  <ReactPlayer url={video.url} />
                </li>
              );
            })} */}
            {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
              <li className="prompt-content-item">
                <a>
                  <img src={`https://picsum.photos/80${i}/30${i}/?random`} />
                  <div className="prompt-content-item-info">
                    <div className="wrap">
                      <h1>Name S.</h1>
                      <h2>Location, AB</h2>
                    </div>
                    <div className="view-full">
                      <a>View full story</a>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Prompt;
