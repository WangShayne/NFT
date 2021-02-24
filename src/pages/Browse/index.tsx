import styles from './index.less';
import { Layout, Menu, Collapse, Row, Col, Card } from 'antd';
import {
  StarTwoTone,
  BuildTwoTone,
  AccountBookTwoTone,
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Panel } = Collapse;

export default () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const Panel_Status = () => {
    return (
      <div className={styles.panelTitle}>
        <StarTwoTone twoToneColor="#5a3cc4" />
        <span style={{ marginLeft: '10px' }}> Status </span>
      </div>
    );
  };

  const Panel_Collections = () => {
    return (
      <div className={styles.panelTitle}>
        <BuildTwoTone twoToneColor="#5a3cc4" />
        <span style={{ marginLeft: '10px' }}> Collections </span>
      </div>
    );
  };

  const Panel_OnSaleIn = () => {
    return (
      <div className={styles.panelTitle}>
        <AccountBookTwoTone twoToneColor="#5a3cc4" />
        <span style={{ marginLeft: '10px' }}> On Sale In </span>
      </div>
    );
  };

  const style = { background: '#0092ff', padding: '8px 0' };
  return (
    <Layout style={{ height: '100%' }}>
      <Sider className={styles.slider} width={300} theme={'light'}>
        <div>
          <Collapse
            defaultActiveKey={['1', '2', '3']}
            ghost
            expandIconPosition={'right'}
          >
            <Panel header={Panel_Status()} key="1">
              <p>{text}</p>
            </Panel>
            <Panel header={Panel_Collections()} key="2">
              <p>{text}</p>
            </Panel>
            <Panel header={Panel_OnSaleIn()} key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </Sider>
      <Content style={{ background: '#fff' }}>
        <div className="site-card-wrapper">
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div style={style}>col-6</div>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};
