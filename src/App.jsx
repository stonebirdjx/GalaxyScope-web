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

const switchMode = () => {
  const body = document.body;
  if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
      // 以下这行代码，window.setMode仅用于当通过本Demo切换时，通知Semi官网Header记录更新当前模式（只用于演示）。在您的代码里无需存在。
      window.setMode('light');
  } else {
      body.setAttribute('theme-mode', 'dark');
      window.setMode('dark');
  }
};


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
          <IconMoon style={{ margin: 4, marginBottom: 4 }} size="extra-large"  onClick={switchMode}/>
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