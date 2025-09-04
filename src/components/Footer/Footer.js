
import { Layout, Col, Row, Typography, Flex, Divider, Image} from 'antd';
import {InstagramOutlined, WhatsAppOutlined, MailOutlined} from '@ant-design/icons'

import logo2 from '../../images/logo2.PNG'

const { Footer} = Layout;
const { Paragraph} = Typography;

export default () => {
    return (
        <Footer>
          <Row>
            <Col xl={24} xs={24} style={{ textAlign: 'right', alignItems: 'flex-end' }}>
              <Paragraph style={{ margin: 0 }}>
                Contact me or visit me at 
              </Paragraph>
              <Paragraph style={{ margin: 0 }}>
                Gdansk Poland
              </Paragraph>
              <Flex wrap gap="small" vertical style={{ alignItems: 'flex-end' }}>
                <Flex wrap gap="small" style={{ justifyContent: 'flex-end' }}>
                  <InstagramOutlined /> 
                  <span>pembcc</span>
                </Flex>
                <Flex style={{ justifyContent: 'flex-end' }}>
                  <MailOutlined />
                  <span style={{ marginLeft: '10px' }}>Msushchevich@gmail.com</span>
                </Flex>   
              </Flex>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={24} style={{ textAlign: 'center' }}>
              Copyright © {new Date().getFullYear()} | All Rights Reserved
            </Col>
          </Row>
      </Footer>
    )
}

 
