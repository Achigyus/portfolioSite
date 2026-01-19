"use client";

import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center p-4 md:p-8 justify-center bg-zinc-50 dark:bg-black font-mono1 dark:text-[#eaeff5] text-[#121212]">
      <header className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="header-top flex flex-col items-center justify-center gap-1.5">
          <pre className="text-[10px] sm:text-xs md:text-sm lg:text-xl neon-text">
            {` █████╗  ██████╗██╗  ██╗██╗
██╔══██╗██╔════╝██║  ██║██║
███████║██║     ███████║██║
██╔══██║██║     ██╔══██║██║
██║  ██║╚██████╗██║  ██║██║
╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝
                           `}
          </pre>
        </div>
        <div className="header-bottom flex flex-col items-center gap-4">
          <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            Achi
          </h1>
          <p className="border-t-2 border-b-2 text-sm md:text-lg text-center py-2 px-4">
            &gt; Full-Stack Developer & AI Enthusiast
          </p>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex max-w-4xl mx-auto flex-col items-center justify-between gap-8 py-8">
        {/* About Section */}
        <div className="border-2 border-border min-w-full">
          <div className="border-b-2 border-border px-4 py-2 flex items-center justify-between bg-muted">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-close"></div>
                <div className="w-3 h-3 rounded-full bg-minimize"></div>
                <div className="w-3 h-3 rounded-full bg-maximize"></div>
              </div>
              <span className="text-xs md:text-sm font-mono font-bold ml-2 text-foreground">
                about.txt
              </span>
            </div>
          </div>
          <div className="p-4 md:p-6 flex flex-col gap-4">
            <p className="text-sm leading-relaxed whitespace-pre-wrap text-left w-full">I'm a Full Stack Developer focused on building fast, scalable, and user-friendly web applications. I work mainly with React, Next.js, and Node.js, and I enjoy turning complex ideas into clean, intuitive products.</p>
            <p className="text-sm leading-relaxed whitespace-pre-wrap text-left w-full">I'm especially interested in Web3, DeFi, and AI-driven applications, and I've built everything from Chrome extensions to on-chain tools and dApps. I like shipping quickly, iterating often, and learning in public.</p>
            <p className="text-sm leading-relaxed whitespace-pre-wrap text-left w-full">When I'm not coding, I'm usually exploring new crypto protocols, breaking down technical ideas, or engaging with the builder community on X.</p>
            <ul className="about-links flex gap-2 flex-wrap">
              <a
                className="hover:bg-border hover:text-[#eaeff5] py-1 px-3 border-border border-2 text-inherit lowercase text-sm"
                href="http://github.com/Achigyus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>&gt; Github</li>
              </a>

              <a
                className="hover:bg-border hover:text-[#eaeff5] py-1 px-3 border-border border-2 text-inherit lowercase text-sm"
                href="/AchiLatestCV.pdf"
                download="Achi_Resume.pdf"
                rel="noopener noreferrer"
              >
                <li>&gt; Resume</li>
              </a>
            </ul>
          </div>
        </div>

        {/* Experience Section */}
        <div className="border-2 border-border min-w-full">
          <div className="border-b-2 border-border px-4 py-2 flex items-center justify-between bg-muted">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-close"></div>
                <div className="w-3 h-3 rounded-full bg-minimize"></div>
                <div className="w-3 h-3 rounded-full bg-maximize"></div>
              </div>
              <span className="text-xs md:text-sm font-mono font-bold ml-2 text-foreground">
                experience.log
              </span>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-muted-foreground pl-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <h3 className="text-2xl md:text-3xl font-bold">Freelance Web Developer</h3>
                  <span className="text-sm text-muted-foreground">
                    2023 - Present
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Self-employed</p>
                <p className="text-sm mt-2">Building full-stack web apps using React, Next.js, Node.js, and Supabase. Shipping SaaS tools, Chrome extensions, and crypto-native apps with a focus on clean UI and performance.</p>
                <p className="text-sm mt-2">Integrating Web3 features such as wallet connections and on-chain interactions. Using AI-assisted workflows (GitHub Copilot) to iterate quickly while maintaining code quality.</p>
              </div>
              <div className="border-l-2 border-muted-foreground pl-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <h3 className="text-2xl md:text-3xl font-bold">Student Developer</h3>
                  <span className="text-sm text-muted-foreground">
                    2021 - 2023
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Independent</p>
                <p className="text-sm mt-2">Built a strong foundation in HTML, CSS, and JavaScript through hands-on projects. Learned modern frontend and backend concepts by building and shipping small apps. Developed practical skills in version control, deployment, and debugging.</p>
              </div>
              <div className="border-l-2 border-muted-foreground pl-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <h3 className="text-2xl md:text-3xl font-bold">Open Source & Hackathons</h3>
                  
                </div>
                <p className="text-sm text-muted-foreground">Independent</p>
                <p className="text-sm mt-2">Contributed to open-source projects and shared codebases, collaborating with other developers. Built production-ready prototypes in hackathon environments, including Web3 and multisig tooling. Comfortable reviewing PRs, iterating on feedback, and working in fast-moving teams.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="border-2 border-border min-w-full">
          <div className="border-b-2 border-border px-4 py-2 flex items-center justify-between bg-muted">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-close"></div>
                <div className="w-3 h-3 rounded-full bg-minimize"></div>
                <div className="w-3 h-3 rounded-full bg-maximize"></div>
              </div>
              <span className="text-xs md:text-sm font-mono font-bold ml-2 text-foreground">
                projects.md
              </span>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border-2 border-border p-4 transition-colors group">
                <h3 className="font-bold text-lg mb-2">XeetViewer</h3>
                <p className="text-sm mb-3">
                  A lightweight browser extension that surfaces Xeet (xeet.ai) scores directly on 𝕏 profile pages and in the timeline.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs border border-border px-2 py-1">
                    &gt; Javascript
                  </span>
                  <span className="text-xs border border-border px-2 py-1">
                    &gt; Chrome APIs
                  </span>
                  <span className="text-xs border border-border px-2 py-1">
                    &gt; CSS3
                  </span>
                  <span className="text-xs border border-border px-2 py-1">
                    &gt; HTML5
                  </span>
                  
                </div>
                <div className="flex gap-3 text-sm">
                  <a
                    href="https://chromewebstore.google.com/detail/xeet-viewer/gpnkjeleabmeaompajmdjbieecdhbpbh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:bg-border hover:text-[#eaeff5] py-1 px-3 border-border border-2 text-inherit lowercase"
                  > [
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link h-3 w-3"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                    Live Demo ]
                  </a>
                </div>
              </div>
              <div className="border-2 border-border p-4 transition-colors group">
                <h3 className="font-bold text-lg mb-2">Pomodoro Timer Extension</h3>
                <p className="text-sm mb-3">
                  A simple, customizable Pomodoro timer Chrome extension to help you focus and manage your work/break cycles.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs border border-border px-2 py-1">
                    &gt; Javascript
                  </span>
                  <span className="text-xs border border-border px-2 py-1">
                    &gt; HTML5
                  </span>
                  <span className="text-xs border border-border px-2 py-1">
                    &gt; CSS3
                  </span>
                  <span className="text-xs border border-border px-2 py-1">
                    &gt; Chrome APIs
                  </span>
                </div>
                <div className="flex gap-3 text-sm">
                  <a
                    href="https://chromewebstore.google.com/detail/pomodoro-timer/nhiggbakjnoinnggjkepegicfchliebp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:bg-border hover:text-[#eaeff5] py-1 px-3 border-border border-2 text-inherit lowercase"
                  > [
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link h-3 w-3"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                    Live Demo ]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="border-2 border-border min-w-full">
          <div className="border-b-2 border-border px-4 py-2 flex items-center justify-between bg-muted">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-close"></div>
                <div className="w-3 h-3 rounded-full bg-minimize"></div>
                <div className="w-3 h-3 rounded-full bg-maximize"></div>
              </div>
              <span className="text-xs md:text-sm font-mono font-bold ml-2 text-foreground">
                skills.sh
              </span>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <ul className="grid gap-2 grid-cols-1 md:grid-cols-2">
              <li className="text-sm mb-2">&gt; JavaScript & TypeScript</li>
              <li className="text-sm mb-2">&gt; React.js & Next.js</li>
              <li className="text-sm mb-2">&gt; Node.js & Express.js</li>
              <li className="text-sm mb-2">&gt; Tailwind CSS & CSS3</li>
              <li className="text-sm mb-2">&gt; PostgreSQL & MongoDB</li>
              <li className="text-sm mb-2">&gt; Git & GitHub</li>
              <li className="text-sm mb-2">&gt; RESTful APIs & GraphQL</li>
              <li className="text-sm mb-2">&gt; Deployment (Vercel, Heroku)</li>
              <li className="text-sm mb-2">&gt; Ethers.js</li>
              <li className="text-sm mb-2">&gt; Docker</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-2 border-border min-w-full">
          <div className="border-b-2 border-border px-4 py-2 flex items-center justify-between bg-muted">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-close"></div>
                <div className="w-3 h-3 rounded-full bg-minimize"></div>
                <div className="w-3 h-3 rounded-full bg-maximize"></div>
              </div>
              <span className="text-xs md:text-sm font-mono font-bold ml-2 text-foreground">
                contacts.json
              </span>
            </div>
          </div>

          <div className="p-4 md:p-6 flex flex-col gap-4">
            <div className="text-center">
              <p>┌───────────────┐</p>
              <a className="underline" href="mailto:achigyus@gmail.com">achigyus@gmail.com</a>
              <p>└───────────────┘</p>
            </div>
            <ul className="contact-links flex justify-center gap-2 flex-wrap">
              <a
                className="hover:bg-border hover:text-[#eaeff5] py-1 px-3 border-border border-2 text-inherit lowercase text-sm"
                href="http://github.com/Achigyus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>&gt; Github</li>
              </a>

              <a
                className="hover:bg-border hover:text-[#eaeff5] py-1 px-3 border-border border-2 text-inherit lowercase text-sm"
                href="/AchiLatestCV.pdf"
                download="Achi_Resume.pdf"
                rel="noopener noreferrer"
              >
                <li>&gt; Resume</li>
              </a>
            </ul>
          </div>
        </div>

      </main>

      <footer className="flex max-w-4xl w-full mx-auto flex-col items-center justify-between border-t border-border py-8">
        <p className="text-sm text-center w-full">
          &copy; {new Date().getFullYear()} Achigyus. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
