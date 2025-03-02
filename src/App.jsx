import './App.css';
import "reset-css/reset.css";
import {
  Nav,
  Avatar,
  Dropdown,
} from '@douyinfe/semi-ui';

import {
  IconEmoji,
  IconUser,
  IconFemale,
  IconLanguage,
  IconUserCardVideo,
  IconComment,
  IconMoon,
  IconGithubLogo,
} from '@douyinfe/semi-icons';


const App = () => {
  return (
    <div style={{ width: '100%' }}>
      <Nav
        mode={'horizontal'}
        items={[
          { itemKey: 'user', text: '个人简介', icon: <IconUser /> },
          { itemKey: 'ocr', text: '图文识别', icon: <IconLanguage /> },
          { itemKey: 'media', text: '媒体', icon: <IconUserCardVideo /> },
          { itemKey: 'chart', text: 'AI对话', icon: <IconComment /> },
        ]}
        header={{
          logo: <IconEmoji style={{ height: '36px', fontSize: 36 }} />,
          text: 'GalaxyScope'
        }}
        footer={
          <>
          <IconMoon style={{ margin: 4, marginBottom: 4 }} size="extra-large" />
              <IconGithubLogo style={{ margin: 4 }} size="extra-large" />
              <Avatar size="small" color='light-blue' style={{ margin: 4 }}>胡静</Avatar>
              <span>lisan530</span>
              <IconFemale />
          </>
        }
      />
    </div>
  );
};

export default App;