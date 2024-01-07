import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import imageURL from "/public/banner.jpg";

export default function (props) {
	return (
		<>
			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
					<div className="lg:col-span-3">
						<h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
							Get That T-shirt
						</h1>
						<p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
							A collection of sources from where you can actually
							get a tshirt.
						</p>
						<div class="mt-7 grid gap-3 w-full sm:inline-flex">
							<a
								class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href="#"
							>
								Get started
								<ChevronRightIcon className="h-4 w-4" />
							</a>
							<a
								class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href="#"
							>
								Contribute
							</a>
						</div>
					</div>
					<div className="lg:col-span-4 mt-10 lg:mt-0">
						<Image
							className="w-full rounded-xl aspect-square object-cover"
							src={imageURL}
							alt="Image Description"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
