import styles from './index.less';
import { Layout, Menu, Input, Avatar } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export default (props: any) => {
  return (
    <>
      <Layout className={styles.layout} style={{ height: '100%' }}>
        <Header className={styles.layoutHeader}>
          <div className={`${styles.container} ${styles.containerHeader}`}>
            <div className={styles.logo}>
              <h1 className={styles.logoTitle}> N F T</h1>
            </div>
            <div className={styles.search}>
              <Input placeholder="default size" prefix={<SearchOutlined />} />
            </div>
            <div className={styles.avatarGroup}>
              <Avatar
                style={{ backgroundColor: '#5a3cc4' }}
                icon={<UserOutlined />}
              />
            </div>
            <Menu
              className="site-layout-menu"
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
            >
              <Menu.Item key="1">Browers</Menu.Item>
              <Menu.Item key="2">Asset</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{ padding: '0 50px', height: '100%' }}>
          <div className={`${styles.container} ${styles.containerContent}`}>
            {props.children}
          </div>
        </Content>
        {/*<Footer style={{ textAlign: 'center' }}>*/}
        {/*  <div className={styles.container}>*/}
        {/*    NFT Design ©2021 Created by Boer & Shayne*/}
        {/*  </div>*/}
        {/*</Footer>*/}
      </Layout>
    </>
  );
};
