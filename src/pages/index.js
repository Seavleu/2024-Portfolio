import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Skills from '@/src/components/Skills';
import Projects from '@/src/components/Projects';
import Contact from '@/src/components/Contact';
import Chatbot from '../components/Chatbot';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Jenny&apos;s Portfolio</title>
				<meta name="description" content="Joel's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<Chatbot/>
			</div>
		</>
	);
};

export default Home;