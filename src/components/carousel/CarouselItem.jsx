import { PropTypes } from "prop-types";
export default function CarouselItem({ img }) {
	return (
		<div className='flex items-center md:gap-4 gap-2 w-full h-full bg-gradient-to-r md:from-[#F5F5F580] from-[#0080004d] to-[#008000b8] md:to-[#F5F5F580] md:p-10 p-4'>
			<div className='flex flex-col items-start justify-center h-full max-w-[557px] '>
				<p className='md:text-[14px] text-[11px] uppercase leading-[16px] mb-[10px] font-[500] tracking-[10%] text-[#3D3D3D]'>
					Welcome to GreenShop
				</p>
				<h1 className='md:text-[70px] text-[24px] leading-[29px] font-[900] text-[#3D3D3D] md:leading-[70px]'>
					Let’s Make a Better <span className='text-[#46A358]'>Planet</span>
				</h1>
				<p className='md:mt-4 mt-2 md:mb-8 mb-3 font-normal text-[14px] leading-[24px] text-[#727272] overflow-hidden line-clamp-2'>
					We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban
					Jungle. Order your favorite plants!
				</p>
				<button className='px-6 bg-[#46A358] h-[40px] rounded-[6px] text-[12px] leading-[14px] md:text-[16px] md:leading-[20px] font-bold text-white hover:bg-[green] transition-all'>
					SHOP NOW
				</button>
			</div>

			<img className='w-full md:max-w-[500px] min-w-[180px] max-[390px]:min-w-[120px] object-cover' src={img} alt='carousel-img' />
		</div>
	);
}

CarouselItem.propTypes = {
	img: PropTypes.node,
};
