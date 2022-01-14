import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Modal } from 'antd';
const Prompt = ({ title, videos }) => {
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');

  const openModal = (url) => {
    setUrl(url);
    setVisible(true);
  };

  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        style={{ textAlign: 'center', alignItems: 'center' }}
        // okButtonProps={{ disabled: true }}
        // cancelButtonProps={false}
      >
        <ReactPlayer style={{ margin: '0 auto' }} url={url} />
      </Modal>
      <section className="prompt-container">
        <div className="prompt">
          <div className="prompt-header">
            <h1>{title}</h1>
          </div>
          <div className="prompt-content">
            <ul className="prompt-content-items">
              {videos.map((video) => {
                return (
                  <li className="prompt-content-item">
                    <a>
                      <img src={`https://picsum.photos/800/300/?random`} />
                      <div className="prompt-content-item-info">
                        <div className="wrap">
                          <h1>Name S.</h1>
                          <h2>Location, AB</h2>
                        </div>
                        <div className="view-full">
                          <a onClick={() => openModal(video.url)}>
                            View full story
                          </a>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
              {/* {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
                <li className="prompt-content-item">
                  <a>
                    <img src={`https://picsum.photos/80${i}/30${i}/?random`} />
                    <div className="prompt-content-item-info">
                      <div className="wrap">
                        <h1>Name S.</h1>
                        <h2>Location, AB</h2>
                      </div>
                      <div className="view-full">
                        <a onClick={() => setVisible(true)}>View full story</a>
                      </div>
                    </div>
                  </a>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prompt;
