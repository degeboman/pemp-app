import { Carousel, Image } from 'antd';

import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image4 from '../../images/image4.jpg';
import image5 from '../../images/IMG_1841.JPG';
import image6 from '../../images/IMG_1343.PNG';

const contentStyle = {
    height: '100%',
    width: '100%',
    color: '#fff',
    textAlign: 'center',
  };

export default () => {
    return  (
        <Carousel arrows autoplay  infinite={true}>
            <div>
                <h3 style={contentStyle}>
                    <Image
                        style={{padding:'5%'}}
                        src={image1}
                    />
                </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                    <Image
                        style={{padding:'5%'}}
                        src={image6}
                    />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <Image
                        style={{padding:'5%'}}
                        src={image5}
                    />
                </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                    <Image
                        style={{padding:'5%'}}
                        src={image2}
                    />
                </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                    <Image
                        style={{padding:'5%'}}
                        src={image3}
                    />
                </h3>
            </div>
            <div>
                 <h3 style={contentStyle}>
                    <Image
                        style={{padding:'5%'}}
                        src={image4}
                    />
                </h3>
            </div>
        </Carousel>
    )
}