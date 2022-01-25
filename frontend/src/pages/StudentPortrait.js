import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';
import { Button, Collapse, Input, Layout, Modal, Select } from 'antd';
import ReactPlayer from 'react-player/youtube';
import { Carousel } from '3d-react-carousal';
import WidthListener from '../components/WidthListener';

import { DESKTOP, MOBILE, SCREEN_CHANGED, TABLET } from '../redux/constants/screen.constants';
import { changeScreenMode } from '../redux/actions/screen.actions';
import Prompt from '../components/Prompt';
import { getAllPrompts } from '../redux/actions/prompt.actions';

const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;
const { Option } = Select;

const StudentPortrait = () => {
  const prompts = useSelector((state) => state.prompt.list);

  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    dispatch(getAllPrompts());
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    dispatch(changeScreenMode(width));
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  console.log(prompts);
  const questions = [
    {
      title: 'The meaning of work is…',
      videos: [
        { name: 'LP', url: 'https://youtu.be/X4YwbYlOiP0' },
        { name: 'Aakshay', url: 'https://youtu.be/avUvyTFN8nE' },
      ],
    },
    { title: 'I get up in the morning because…', videos: [] },
    {
      title: 'If you had a magic wand… AND My dream job…',
      videos: [
        { name: 'Piyush', url: 'https://youtu.be/1vLgzqaUKnQ' },
        { name: 'Fatima', url: 'https://youtu.be/IEGEt_KV6VU' },
        { name: 'Lunna', url: 'https://youtu.be/ejRNt78M4LE' },
      ],
    },
    { title: 'My dream job…', videos: [] },
    { title: 'Are you a producer or consumer?', videos: [] },
    {
      title: 'Never Expected...',
      videos: [{ name: 'Aakshay', url: 'https://youtu.be/a7LlZ1tqK0A' }],
    },
    { title: 'Now Is The Time', videos: [] },
    { title: 'Question Compilations', videos: [] },
  ];

  const prompts2 = [
    'Looking ahead, I',
    ' My life right now',
    'To me, work means',
    'At this point in my life',
    'Now is the time',
    'I was raised to believe',
    'My greatest challenge',
    'My American Story started when',
    'I never expected',
    'What gets me out of bed in the morning',
    'What keeps me up at night',
    'I took a risk when',
    'Most days I feel',
    'You don’t know what its like to',
    'My parents want me to',
    'When I grow up',
    'If I had a magic wand',
  ];
  return (
    <Layout>
      <Modal
        title="Submit a response"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Prompt:
        <Select
          size="large"
          //   defaultValue="Choose your prompt"
          style={{ width: '100%', marginBottom: '20px' }}
        >
          {prompts2.map((prompt) => {
            return <Option value={prompt}>{prompt}</Option>;
          })}

          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        Video link:
        <Input size="large" placeholder="Paste the Youtube URL" />
      </Modal>
      <div className="portrait-banner">
        <h1>Student Portrait</h1>
        <p>
          Our country is home to millions of people. Each one of us is unique, and we’re all part of
          the American story.
        </p>
        <p>
          PBS American Portrait asked people all over the country to submit their individual stories
          by responding to one of a number of thought provoking prompts. Whether it’s joy or sorrow,
          triumph or hardship, family traditions followed for decades or just the morning school
          run, this is a picture of life as it is really lived. American Portrait gives us a glimpse
          into the lives of people across the country and helps their stories be heard.
        </p>
      </div>
      {prompts?.map((item) => {
        return <Prompt title={item.title} answers={item.answers} />;
      })}
      <div className="prompt-request">
        <h1>Like What You See? Want to get involved? Keep reading…</h1>
        <p>
          Complete the sentence in a video, poem, drawing, song, or written statement! Start
          brainstorming! To submit a video, post it on youtube (can be unlisted) and submit the link
          below in the message box.
        </p>
        <Button type="primary" size="large" onClick={showModal}>
          Submit a video
        </Button>
      </div>
    </Layout>
  );
};

export default StudentPortrait;
