import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: '4xl',
    fontSize: '60px'
}

const Home = () => {
    return (
        <Box >
            <MyCarousel />

            <Container
                minW={'container.xl'}
                minH={'100vh'}
                p={'16'}
            >
                <Heading
                    textTransform={'uppercase'}
                    py={'2'}
                    w={'fit-content'}
                    borderBottom={'2px solid'}
                    m={'auto'}
                >
                    Services
                </Heading>
                <Stack 
                h={'full'}
                p={'4'}
                alignItems={'center'}
                direction={["column","row"]}
                >
                    <Image 
                    src={img5} 
                    h={['40','400']} 
                    filter={'hue-rotate(-130deg)'}
                    />
                    <Text 
                    letterSpacing={'widest'} 
                    lineHeight={'190%'} 
                    p={['4','16']}
                    textAlign={'center'}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas odit harum nisi dignissimos mollitia eum nulla? Nesciunt temporibus facilis magnam pariatur ipsum cumque at, nulla modi dignissimos quis, molestias nemo repellendus adipisci? Odit, adipisci fugiat excepturi eos, recusandae, vel facilis voluptas ea sapiente porro in aspernatur quam. Error numquam ut, perferendis quae dolorum officia sequi fugit fugiat aspernatur perspiciatis magni pariatur ullam deserunt! Nisi itaque fugiat nostrum quod corporis repellat tenetur nihil! Voluptate eum quia sint omnis error officiis facilis necessitatibus ad, asperiores aperiam sed odio fuga at porro impedit sit incidunt corrupti a, quasi, dolorum nihil nam aliquam repellendus?
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night Life is Cool
            </Heading>
        </Box>
    </Carousel>
);

export default Home;