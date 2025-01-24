import Link from 'next/link';
import Image from 'next/image';
import { Geist } from 'next/font/google';
import { Fira_Code } from 'next/font/google';
const firaCode = Fira_Code({ subsets: ['latin'] });


const geistCondensed = Geist({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  adjustFontFallback: false,
});

const Navbar = () => {
    const socialLinks = [
        { name: 'Email', href: 'mailto:apurvamalasi5@gmail.com', icon: 'gmail.svg' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/apurvamalasi', icon: 'linkedin.svg' },
        { name: 'GitHub', href: 'https://github.com/ApurvaMalasi23',icon: 'github.svg' },
        { name: 'X', href: 'https://twitter.com/apurvamalasi10', icon: 'twitter.svg' },
        { name: 'WhatsApp', href: 'https://wa.me/+918076805246', icon: 'whatsapp.svg' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#F5F5F0] shadow-md z-10">
            <div className="container mx-auto py-4 px-6 flex flex-col items-start">
                <div className="flex items-center">
                    <h1 className="text-5xl font-bold text-black mr-8">  {/* Increased to 4xl */}
                        Apurva Malasi
                    </h1>
                    <p className={`text-sm italic ${firaCode.className}`} style={{ color: '#828282' }}> {/* Added self-center */}
                        Be naive enough to learn and confident enough to back it up
                    </p>
                </div>
               <div className="flex flex-row justify-between space-x-4 w-full mt-4"> {/* Increased to mt-4 */}
                    {socialLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-75 transition-opacity duration-200"
                        >
                           <Image
                                src={`/${link.icon}`}
                                alt={link.name}
                                width={24}
                                height={24}
                            />
                            <span className="sr-only">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
