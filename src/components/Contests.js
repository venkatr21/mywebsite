import React,{Component} from 'react';
import {
  Carousel, CarouselCaption, CarouselIndicators, CarouselControl, CarouselItem
} from 'reactstrap';
const items = [
	{
		src: require('./images/inf.jpg'),
		altText: 'Infosys Intercollege Hackathon',
		caption: 'Dec-2019 to Jan-2020'
	},
	{
		src: require('./images/sih.jpg'),
		altText: 'Smart India Hackathon',
		caption: 'Jan-2020 to Mar-2020 | Finalist'
	},
	{
		src: require('./images/ohf.jpg'),
		altText: 'D2C Online Hackathon Festival',
		caption: 'Apr-2020 to May-2020 | Rank 81/6500'
	},
	{
		src: require('./images/sth.jpg'),
		altText: 'Scilab Toolbox Hackathon',
		caption: 'May-2020 to Jul-2020 | Runner up'
	},
	{
		src: require('./images/ydo.jpg'),
		altText: 'Yaadhum Oorae Hackathon',
		caption: 'Oct-2020 | Runner up'
	},
	{
		src: require('./images/myn.jpg'),
		altText: 'Myntra HackerRamp',
		caption: 'Sep-2020 to Nov-2020 | National Finalist'
	},
	{
		src: require('./images/ctc.jpg'),
		altText: 'Philips CodetoCare',
		caption: 'Nov-2020 to Dec-2020 | National Winner'
	},
	{
		src: require('./images/zs.jpg'),
		altText: 'ZSPrize Healthcare Hack',
		caption: 'Nov-2020'
	},
	{
		src: require('./images/ic.jpg'),
		altText: 'Microsoft Imagine Cup',
		caption: 'Dec-2020'
	},
];

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
                    key={item.src}>
					<img width="100%" src={item.src} alt={item.altText} />
					<CarouselCaption captionText={item.caption} captionHeader={item.altText} />
				</CarouselItem>
			);
		});

		return (
			<div align="center" class="col-lg-7 col-md-9">
				<center><h2 className="heading"><span>Extras</span></h2>
    			<br />
				<div class=' container'>
				<p class='lead'>
					I'm an avid participant in Hackathons, and here to name a few!
				</p>
				</div>
				</center>
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
					interval ={2000}
				>
					<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
					{slides}
					<CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
					<CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
				</Carousel>
			</div>
		);
	}
}

export default Example;
