
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Image} from 'antd';

import logo from '../../images/logo.PNG'

const { Header} = Layout;

export default () => {
    const location = useLocation();

    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div>
                <Image
                    preview={false}
                    style={{width: 40, height: 40, marginRight: '40px'}}
                    src={logo}
                />
            </div>
            <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]} style={{ flex: 1, minWidth: 0 }}>
                <Menu.Item key="/">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="/gallery">
                    <Link to="/gallery">Gallery</Link>
                </Menu.Item>
                <Menu.Item key="/blog">
                    <Link to="/blog">Blog</Link>
                </Menu.Item>
                <Menu.Item key="/newsletter">
                    <Link to="/newsletter">News Letter</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}
