import Link from 'next/link';
import Image from 'next/image';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'] });

export default function Home() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col row-start-2 sm:flex-row">  {/*Changed the main to a row */}
              {/* Text and community part */}
              <div className="flex flex-col sm:w-1/2 sm:pr-6">  {/* Added sm:w-1/2 */}
                {/* Personal Statement */}
                  <div className={`text-left px-0 sm:px-0  text-black ${firaCode.className}`}>
                      <p className="text-sm sm:text-base leading-relaxed">
                          I am very efficient in computational fields and very effective in areas of business.
                          I have a strong background of running organizations and start-ups, so I bring a fresh new perspective to coding tasks.
                          I know how a piece of code works but more importantly, I understand how it makes money for the corporation.
                          I understand the difference between a project and a PRODUCT. I am Apurva Malasi, and I am the best at what I do.
                      </p>
                  </div>


                    {/* Community Heading and Icon */}
                    <div className="flex flex-col items-left gap-4 mt-6 text-black">
                        <h2 className="text-2xl font-bold">
                            COMMUNITY
                        </h2>
                        <Link href="https://www.linkedin.com/company/voxago " passHref> 
                        <div className="bg-white rounded-full p-6">
                            <Image
                                src="project.svg"
                                alt="Projects Icon"
                                width={60}
                                height={60}
                            />
                        </div>
                      </Link>
                    </div>
              </div>
              {/* Video */}
              <div className="sm:w-1/2 flex justify-end">
                    <video
                        src="picasso.mp4"
                        controls
                        autoPlay
                        className="object-cover object-center w-full h-full"
                    />
                </div>
            </main>
            {/* Empty footer */}
            <footer className="row-start-3">

            </footer>
        </div>
    );
}
