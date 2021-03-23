import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NextIcon from './NextIcon';
import PrevIcon from './PrevIcon';
const CarouselElement = () => {
	const [index, setIndex] = useState(0);
	const interval = 2000;
	const handleSelect = (selectedIndex: number, e: any) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			nextIcon={<NextIcon />}
			prevIcon={<PrevIcon />}
		>
			<Carousel.Item interval={interval}>
				<img
					className='d-block w-100'
					src='https://res.cloudinary.com/mrhencke/image/upload/v1616366706/resources-ChatApp/demo_ihe4zr.png'
					alt=''
				/>
			</Carousel.Item>
			<Carousel.Item interval={interval}>
				<img
					className='d-block w-100'
					src='https://res.cloudinary.com/mrhencke/image/upload/v1616370465/resources-ChatApp/demo2_frpzyi.png'
					alt=''
				/>
			</Carousel.Item>
			<Carousel.Item interval={interval}>
				<img
					className='d-block w-100'
					src='https://res.cloudinary.com/mrhencke/image/upload/v1616370465/resources-ChatApp/demo3_um1uca.png'
					alt=''
				/>
			</Carousel.Item>
			<Carousel.Item interval={interval}>
				<img
					className='d-block w-100'
					src='https://res.cloudinary.com/mrhencke/image/upload/v1616370465/resources-ChatApp/demo4_rquxer.png'
					alt=''
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselElement;
