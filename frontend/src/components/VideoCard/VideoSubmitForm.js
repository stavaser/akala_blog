import React from 'react';
import { Button, Collapse, Input, Select } from 'antd';
import { StyledVideoSubmitForm } from './VideoCard.styled';
const { Panel } = Collapse;
const { Option } = Select;

const VideoSubmitForm = () => {
  return (
    <StyledVideoSubmitForm>
      <h3>Interested in adding your own video?</h3>
      {/* <Select
            size="large"
            //   defaultValue="Choose your prompt"
            style={{ width: '100%', marginBottom: '20px' }}
          >
            {prompts2.map((prompt) => {
              return <Option value={prompt}>{prompt}</Option>;
            })}

            <Option value="Yiminghe">yiminghe</Option>
          </Select> */}
      <Input size="large" placeholder="Share it here!" />
    </StyledVideoSubmitForm>
  );
};

export default VideoSubmitForm;
