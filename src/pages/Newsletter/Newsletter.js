import { Layout,Col, Button, Input, Typography, Row, theme, Flex, Form, notification } from 'antd';
import Header from '../../components/Header/Header';
import Footer from  '../../components/Footer/Footer';

const { Content } = Layout;
const { Paragraph, Title } = Typography;

export default () => {
    const [api, contextHolder] = notification.useNotification();
     const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    
      const onFinish = async (values) => {
        try {
            const response = await fetch('https://formspree.io/manqbydz', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },        
                body: JSON.stringify({
                    chat_id: 670052995,
                    text: "На вас подписался " + values.Name + ". Его email - "+ values.email,
                  }),
              });
    
          if (response.ok) {
            api.success({
                message: 'Success',
                description: 'subscription successfully completed!',
              });
            console.log('Сообщение успешно отправлено');
          } else {
            console.error('Ошибка при отправке сообщения');
          }
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };

      const onFinishFailed = (errorInfo) => {
        api.error({
            message: 'Error',
            description: 'Please retry!',
            placement: 'topRight',
          });
        console.log('Failed:', errorInfo);
      };

    return (
        <Layout >
            {contextHolder}
            <Header />
                <Content
                style={{
                    padding: '0 48px',
                    height: '100%'
                }}
                >
                <div
                    style={{
                    padding: 24,
                    minHeight: 380,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}
                >
                    <Row justify="center" style={{ width: '100%' }}>
                        <Col 
                            xl={16}
                            xs={24}
                            style={{ textAlign: 'center' }}
                        >
                            <Title>Artist Newsletter</Title>
                            <Paragraph>
                                Let’s connect on Newsletter!
                            </Paragraph>
                            <Paragraph>
                            Get exclusive content that I only share with email subscribers. Sign up for the latest news from Pemb about events, original work, or products.
                            </Paragraph>
                            
                            <Flex justify="center">
                                <Form
                                    name="basic"
                                    style={{
                                    maxWidth: 600,
                                    width: '100%'
                                    }}
                                    initialValues={{
                                    remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                    name="Name"
                                    rules={[
                                        {
                                        required: true,
                                        message: 'Please input your Name!',
                                        },
                                    ]}
                                    >
                                    <Input placeholder="Your Name" />
                                    </Form.Item>

                                    <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                        required: true,
                                        message: 'Please input your Email!',
                                        },
                                    ]}
                                    >
                                    <Input placeholder="Your Email" />
                                    </Form.Item>

                                    <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                        Subscribe
                                    </Button>
                                    </Form.Item>
                                </Form>
                            </Flex>
                        </Col>
                    </Row>
                </div>
                </Content>
            <Footer />
      </Layout>
    )
}