import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, Col, Row, Table } from 'antd';
import ViewCard from './home-card';
import ViewChart from './home-chart';
import './index.scss';

export default class Home extends Component {
  getChartData() {
    const xAxis = ['07-16', '07-17', '07-18', '07-19', '07-20', '07-21', '07-22'];
    const yAxis = [5, 1, 8, 9, 3, 6, 12];
    return { xAxis, yAxis };
  }
  getData() {
    const columns = [{
      title: '主题',
      dataIndex: 'subject',
      key: 'subject',
    }, {
      title: '渠道',
      dataIndex: 'channel',
      key: 'channel',
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    }, {
      title: '优先级',
      dataIndex: 'priority',
      key: 'priority',
    }, {
      title: '负责人',
      dataIndex: 'owner',
      key: 'owner',
    }, {
      title: '最后回复时间',
      dataIndex: 'laset_date',
      key: 'laset_date',
    }];
   const dataSource = [{
     id: '1',
     subject: 'h哈啥哈哈按时打算打算打打',
     channel: '微信',
     status: '开启',
     priority: '高',
     owner: 'wowo',
     laset_date: '2016-01-01'
    }, {
     id: '2',
     subject: 'h哈啥哈哈按时打算打算打打',
     channel: '微信',
     status: '开启',
     priority: '高',
     owner: 'wowo',
     laset_date: '2016-01-01'
    }, {
     id: '3',
     subject: 'h哈啥哈哈按时打算打算打打',
     channel: '微信',
     status: '开启',
     priority: '高',
     owner: 'wowo',
     laset_date: '2016-01-01'
    }, {
     id: '4',
     subject: 'h哈啥哈哈按时打算打算打打',
     channel: '微信',
     status: '开启',
     priority: '高',
     owner: 'wowo',
     laset_date: '2016-01-01'
    }];

    return { columns, dataSource };
  }
  goTicket() {
    this.context.router.push('/ticket');
  }
  render() {
    const { columns, dataSource } = this.getData();
    const chartData = this.getChartData();
    return (
      <div className="ud-home">
        <Row gutter={16}>
          <Col span="6">
            <Card title="公司公告">管理员可在管理中心【账户设置】中，编辑公司公告显示内容。</Card>
            <Card title="系统公告" style={{ marginTop: 20 }}>新功能上线。</Card>
          </Col>
          <Col span="18">
            <Row gutter={16}>
              <Col span="12">
                 <Row gutter={16}>
                    <Col span="12">
                      <ViewCard num="107" icon="file-text" text="解决中的工单" clazz="tc-resolve" />
                    </Col>
                    <Col span="12">
                      <ViewCard num="127" icon="book" text="开启的工单" clazz="tc-open" />
                    </Col>
                    <Col span="12">
                      <ViewCard num="20" icon="phone" text="昨日电话通话" clazz="call" />
                    </Col>
                    <Col span="12">
                      <ViewCard num="36" icon="message" text="昨日IM对话" clazz="im" />
                    </Col>
                 </Row>
              </Col>
              <Col span="12">
                <ViewChart chartData={chartData} />
              </Col>
            </Row>
            <Row gutter={16}>
              <Card
                title="我的未关闭工单"
                bodyStyle={{ padding: 5 }}
                extra={<Link to="/ticket">查看更多</Link>}
              >
                <Table
                  rowKey="id"
                  onRowClick={this.goTicket.bind(this)}
                  className="tc-table"
                  dataSource={dataSource}
                  columns={columns}
                />
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

Home.propTypes = {};
Home.contextTypes = {
  router: PropTypes.object.isRequired // 需要注入router
};

