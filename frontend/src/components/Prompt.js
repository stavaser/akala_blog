import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Modal } from 'antd';
import { Player, BigPlayButton } from 'video-react';

const Prompt = ({ title, answers }) => {
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');
  const openModal = (url) => {
    setUrl(url);
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={() => closeModal()}
        onCancel={() => closeModal()}
        width={1000}
        style={{ textAlign: 'center', alignItems: 'center' }}
        // okButtonProps={{ disabled: true }}
        // cancelButtonProps={false}
      >
        <Player autoPlay src={url}>
          <BigPlayButton position="center" />
        </Player>
        {/* <ReactPlayer
          style={{ margin: '0 auto' }}
          url={[
            { src: ' "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"', type: 'video/mp4' },
          ]}
        /> */}
      </Modal>
      <section className="prompt-container">
        <div className="prompt">
          <div className="prompt-header">
            <h1>{title}</h1>
          </div>
          <div className="prompt-content">
            <ul className="prompt-content-items">
              {answers?.map((answer) => {
                return (
                  <li className="prompt-content-item">
                    <a>
                      <img src={answer.thumbnail} />
                      <div className="prompt-content-item-info">
                        <div className="wrap">
                          <h1>{answer.submitted_by}</h1>
                        </div>
                        <div className="view-full">
                          <a onClick={() => openModal(answer.video_file)}>View full story</a>
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
