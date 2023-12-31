import Header from "@/components/Navbar";
import "./globals.css";
import { Sora } from "next/font/google";
import { Providers } from "@/redux/Provider";
import Footer from "@/components/Footer";

const inter = Sora({ subsets: ["latin"] });

export const metadata = {
	title: "S Commerce",
	description: "This a demo project created for educational purpose",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			{/* <body> */}
			<body className={inter.className}>
				<Providers>
					<Header />
					<main className='lg:px-24 lg:py-16 md:p-16 p-8 mx-auto min-h-screen container'>
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
