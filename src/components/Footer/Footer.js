
import { Layout, Col, Row, Typography, Flex, Divider, Image} from 'antd';
import {InstagramOutlined, WhatsAppOutlined} from '@ant-design/icons'

import logo2 from '../../images/logo2.PNG'

const { Footer} = Layout;
const { Paragraph} = Typography;

export default () => {
    return (
        <Footer>
          <Divider style={{ borderColor: '#001529' }}></Divider>
          <Row>
            <Col xl={8} xs={24}>
              <Paragraph>
                Contact me or visit me at 
              </Paragraph>
              <Paragraph>
                Gdansk Poland, Junony 24,80-299
              </Paragraph>
            </Col>
            <Col xl={8} xs={24}>
                <Image
                    preview={false}
                    style={{width: 100, height: 100}}
                    src={logo2}
                />
            </Col>
            <Col xl={8} xs={24}>
            <Flex wrap gap="small" vertical>
              <Flex wrap gap="small">
                <InstagramOutlined /> pembcc
              </Flex>
              <Flex>
                <WhatsAppOutlined /> +48 537 569 864
              </Flex>
            </Flex>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              Copyright © {new Date().getFullYear()} | All Rights Reserved
            </Col>
          </Row>
      </Footer>
    )
}

 
