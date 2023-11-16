import { useCallback, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useInfoModalStore, useMovie } from "@/hooks";
import { PlayButton, FavoriteButton } from ".";

interface InfoModalProps {
	visible?: boolean;
	onClose: any;
}

export const InfoModal = (props: InfoModalProps) => {
	const { visible, onClose } = props;

	const [isVisible, setIsVisible] = useState<boolean>(!!visible);

	const { movieId } = useInfoModalStore();
	const { data = {} } = useMovie(movieId);

	useEffect(() => {
		setIsVisible(!!visible);
	}, [visible]);

	const handleClose = useCallback(() => {
		setIsVisible(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose]);

	if (!visible) {
		return null;
	}

	return (
		<div className="z-50 transition duration-300 bg-amber-950 bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
			<div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
				<div
					className={`${
						isVisible ? "scale-100" : "scale-0"
					} transform duration-300 relative flex-auto bg-zinc-900 bg-opacity-60 drop-shadow-md`}
				>
					<div className="relative h-96">
						<video
							poster={data?.thumbnailUrl}
							autoPlay
							muted
							loop
							src={data?.videoUrl}
							className="w-full brightness-[60%] object-cover h-full"
						/>
						<div
							onClick={handleClose}
							className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center"
						>
							<XMarkIcon className="text-amber-100 w-6" />
						</div>
						<div className="absolute bottom-[10%] left-10">
							<p className="text-amber-100 text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
								{data?.title}
							</p>
							<div className="flex flex-row gap-4 items-center">
								<PlayButton movieId={data?.id} />
								<FavoriteButton movieId={data?.id} />
							</div>
						</div>
					</div>

					<div className="px-12 py-8">
						<div className="flex flex-row items-center gap-2 mb-8">
							<p className="text-green-400 font-semibold text-lg">New</p>
							<p className="text-amber-100 text-lg">{data?.duration}</p>
							<p className="text-amber-100 text-lg">{data?.genre}</p>
						</div>
						<p className="text-amber-100 text-lg">{data?.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
