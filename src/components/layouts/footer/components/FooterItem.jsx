import PropTypes from "prop-types";
import FooterItemTitle from "./FooterItemTitle";
import FooterItemP from "./FooterItemP";

export default function FooterItem({ info, Icon, title }) {
	return (
		<div className='flex flex-col sm:gap-4 gap-1  p-[0.8rem] sm:border-r border-r-none sm:col-span-1 col-span-2'>
			<div className="relative w-full !h-[87px] mb-[1rem] before:absolute before:content-[''] before:bg-[#46A35821] before:bottom-[-10px] before:left-[-1rem] before:w-[74px] before:h-[74px] before:rounded-full  ">
				{Icon}
			</div>
			<FooterItemTitle title={title} />
			<FooterItemP info={info} />
		</div>
	);
}

FooterItem.propTypes = {
	info: PropTypes.string,
	title: PropTypes.string,
	Icon: PropTypes.node,
};
