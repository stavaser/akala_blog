// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import ArticleCard from '../components/ArticleCard';
// import { Layout, Menu } from 'antd';
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from '@ant-design/icons';
// import WidthListener from '../components/WidthListener';
// import {
//   DESKTOP,
//   MOBILE,
//   SCREEN_CHANGED,
//   TABLET,
// } from '../redux/constants/screen.constants';
// import { changeScreenMode } from '../redux/actions/screen.actions';

// const { Header, Footer, Sider, Content } = Layout;

// const Main = ({ mode }) => {
//   const dispatch = useDispatch();
//   const [width, setWidth] = useState(window.innerWidth);
//   const [collapsed, setCollapsed] = useState(false);
//   const screen_mode = useSelector((state) => state.screen.mode);

//   useEffect(() => {
//     function handleResize() {
//       setWidth(window.innerWidth);
//     }
//     window.addEventListener('resize', handleResize);
//     dispatch(changeScreenMode(width));
//     return () => window.removeEventListener('resize', handleResize);
//   }, [width]);

//   const toggle = () => {
//     setCollapsed(!collapsed);
//   };
//   const menu_items = [
//     { title: 'Home', icon: 'ð ' },
//     { title: 'Standardized Testing', icon: 'ð' },
//     { title: "Barbara's Corner", icon: 'ð' },
//     { title: 'College Admissions', icon: 'ð' },
//     { title: 'AKALA students', icon: 'ð§ðŧâðĪâð§ðū' },
//     { title: 'Amazing Opportunities!!', icon: 'ð' },
//     { title: 'Calling All Podcast Lovers!', icon: 'ð§' },
//     { title: 'About Us', icon: 'âđïļ' },
//     { title: 'Contact', icon: 'âïļ' },
//     { title: 'Just For Fun!!', icon: 'ðĪŠ' },
//   ];

//   return (
//     <Layout>
//       <Header className="header-container">AKALA</Header>
//       <Layout>
//         {screen_mode == DESKTOP && (
//           <Sider className="sider-container">
//             <Menu mode="inline" defaultSelectedKeys={['1']}>
//               {menu_items.map((item) => {
//                 return (
//                   <Menu.Item key={item.title} icon={item.icon}>
//                     {item.title}
//                   </Menu.Item>
//                 );
//               })}
//             </Menu>
//           </Sider>
//         )}
//         <Content style={{ margin: '20px 40px' }}>
//           <ArticleCard
//             image={
//               'https://media.istockphoto.com/photos/piano-keyboard-of-an-old-music-instrument-close-up-picture-id641307550?k=20&m=641307550&s=612x612&w=0&h=gKlkkcbL4RorlF24oNjjGv0kkZxFzUW8V9sjtJf2o2w='
//             }
//             title="Piano Lalalala"
//             date="Jan 5"
//             likes={5}
//             comments={1}
//             tags={['piano', 'music', 'notes']}
//             body="habdjha ahsfdbshabdfs hasdbjhsadkhasd"
//             screen_mode
//           />

//           <ArticleCard
//             title="Piano Lalalala"
//             date="Jan 5"
//             likes={5}
//             comments={1}
//             tags={['piano', 'music', 'notes']}
//             body="habdjha ahsfdbshabdfs hasdbjhsadkhasd"
//             screen_mode
//           />
//         </Content>
//         {screen_mode == DESKTOP && (
//           <Sider className="sider-container">
//             <ArticleCard
//               title="Piano Lalalala"
//               date="Jan 5"
//               likes={5}
//               comments={1}
//               tags={['piano', 'music', 'notes']}
//               body="habdjha ahsfdbshabdfs hasdbjhsadkhasd"
//               screen_mode
//             />
//           </Sider>
//         )}
//       </Layout>
//     </Layout>
//   );
// };

// export default Main;
