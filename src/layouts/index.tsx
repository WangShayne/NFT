import styles from "./index.less"
import { Layout, Menu, Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export default (props:any) => {
  return (
    <>
      <Layout className={styles.layout}>
        <Header className={styles.layoutHeader}>
          <div className={`${styles.container} ${styles.containerHeader}`}>
            <div className={styles.logo}>
              <h2> N  F  T</h2>
            </div>
            <div className={styles.search}><Input placeholder="default size" prefix={<SearchOutlined />} /></div>
            <Menu className="site-layout-menu" theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Browers</Menu.Item>
              <Menu.Item key="2">Asset</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className={`${styles.container} ${styles.bottomRadius}`}>
            <div className="site-layout-content">{props.children}</div>
          </div>
        </Content>
        {/*<Footer style={{ textAlign: 'center' }}>*/}
        {/*  <div className={styles.container}>*/}
        {/*    NFT Design ©2021 Created by Boer & Shayne*/}
        {/*  </div>*/}
        {/*</Footer>*/}
      </Layout>
    </>
  )
}
