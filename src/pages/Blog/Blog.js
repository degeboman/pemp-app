import { Layout, theme, Card, Flex, Typography, Image, Row, Col } from 'antd';
import Header from '../../components/Header/Header';
import Footer from  '../../components/Footer/Footer';

import graf1 from '../../images/IMG_3166.PNG'
import graf2 from '../../images/IMG_3911.JPG'
import graf3 from '../../images/IMG_3754.JPG'
import graf4 from '../../images/IMG_7528.JPG'
// import vitebsk_festival from '../../images/vitebsk_festival.jpg'

const { Content } = Layout;
const { Paragraph, Title } = Typography;

export default () => {
     const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
    return (
        <Layout >
            <Header />
                <Content
                    style={{
                        padding: '2% 48px',
                        height: '900%'
                    }}
                >
                    <Flex 
                        wrap
                        vertical
                        gap="large"
                    >
                        <Card bordered={false}>
                            <Row>
                                <Col xl={24} xs={24}>
                                    <Paragraph>I paint mostly freestylin’. It all just flows raw — every canvas is a straight-up war between colors and shapes, crashing into each other till my gut says “yeah, that’s it.” I create in pure flow, that’s what art is to me. My pieces don’t need no meaning — same way graffiti or modern rap don’t.</Paragraph>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} xs={24}>
                                        <Image
                                        width={350}
                                        height={250}
                                        style={{padding:'5%'}}
                                        src={graf1}
                                    />
                                </Col>
                                  <Col xl={6} xs={24}>
                                        <Image
                                        width={350}
                                        height={250}
                                        style={{padding:'5%'}}
                                        src={graf2}
                                    />
                                </Col>
                                  <Col xl={6} xs={24}>
                                        <Image
                                        width={350}
                                        height={250}
                                        style={{padding:'5%'}}
                                        src={graf3}
                                    />
                                </Col>
                                 <Col xl={6} xs={24}>
                                        <Image
                                        width={350}
                                        height={250}
                                        style={{padding:'5%'}}
                                        src={graf4}
                                    />
                                </Col>
                                04.09.2025
                            </Row>
                        </Card>
                    </Flex>
                </Content>
            <Footer />
      </Layout>
    )
}