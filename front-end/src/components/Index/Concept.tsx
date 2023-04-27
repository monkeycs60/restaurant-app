import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Concept = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div className='concept-bg relative flex h-[100vh] w-[100vw] justify-end'>
			<div className='flex w-[50%] flex-col  items-center  p-20'>
				<h2 className='font-handwriting text-9xl text-gray-300  ' ref={ref}>
					Concept
				</h2>
				<motion.p
					className='p-12 text-gray-300'
					initial={{ opacity: 0, x: 100 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
					}
					transition={{ duration: 1.7 }}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
					rerum mollitia quod fuga iusto at similique, esse temporibus
					nesciunt, explicabo quis! Deserunt dolores quisquam a facilis,
					optio voluptate iure saepe?
				</motion.p>
				<motion.p
					className='p-12 text-gray-300'
					initial={{ opacity: 0, x: 100 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
					}
					transition={{ duration: 1.7 }}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
					rerum mollitia quod fuga iusto at similique, esse temporibus
					nesciunt, explicabo quis! Deserunt dolores quisquam a facilis,
					optio voluptate iure saepe? Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Similique ipsa iusto odio numquam
					magnam doloremque natus facere architecto maiores voluptates
					alias ducimus reprehenderit, laborum, quas voluptatem adipisci
					quis ex possimus.
				</motion.p>
				<motion.p
					className='p-12 text-gray-300'
					initial={{ opacity: 0, x: 100 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
					}
					transition={{ duration: 1.7 }}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
					rerum mollitia quod fuga iusto at similique, esse temporibus
					nesciunt, explicabo quis! Deserunt dolores quisquam a facilis,
					optio voluptate iure saepe?
				</motion.p>
				<motion.p
					className='p-12 text-gray-300'
					initial={{ opacity: 0, x: 100 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
					}
					transition={{ duration: 1.7 }}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
					rerum mollitia quod fuga iusto at similique, esse temporibus
					nesciunt, explicabo quis! Deserunt dolores quisquam a facilis,
					optio voluptate iure saepe? Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Aut quas totam at cupiditate,
					blanditiis reprehenderit quae laudantium vel saepe sequi nam
					aliquam autem, voluptatibus assumenda nesciunt. Recusandae
					similique dolor, molestias corporis unde consequatur consequuntur
					eligendi veritatis dolorem quos amet tempora aperiam quae nisi
					tenetur, numquam ad nemo repellendus ullam sint explicabo hic
					vero? Voluptates laudantium facere eos nulla sit. Quidem.
				</motion.p>
				<motion.p
					className='p-12 text-gray-300'
					initial={{ opacity: 0, x: 100 }}
					animate={
						isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
					}
					transition={{ duration: 1.7 }}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
					rerum mollitia quod fuga iusto at similique, esse temporibus
					nesciunt, explicabo quis! Deserunt dolores quisquam a facilis,
					optio voluptate iure saepe? Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Aut quas totam at cupiditate,
					blanditiis reprehenderit quae laudantium vel saepe sequi nam
					aliquam autem, voluptatibus assumenda nesciunt. Recusandae
					similique dolor, molestias corporis unde consequatur consequuntur
					eligendi veritatis dolorem quos amet tempora aperiam quae nisi
					tenetur, numquam ad nemo repellendus ullam sint explicabo hic
					vero? Voluptates laudantium facere eos nulla sit. Quidem.
				</motion.p>
			</div>
		</motion.div>
	);
};

export default Concept;
