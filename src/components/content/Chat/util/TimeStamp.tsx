import { Moment } from 'moment';

interface Props {
	timestamp: Moment;
}

const TimeStamp = ({ timestamp }: Props) => {
	const isCurrentDate = timestamp.isSame(new Date(), 'day');
	return <>{isCurrentDate ? timestamp.format('HH:mm') : timestamp.format('DD/MM')}</>;
};

export default TimeStamp;
