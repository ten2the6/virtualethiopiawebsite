'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Building2, Vote, Users, Landmark, Menu, X } from "lucide-react"
import Link from 'next/link'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white"> {/* Outer container with white background */}
      <div className="min-h-screen bg-black bg-opacity-80 text-white"> {/* Inner container with dark background and white text */}
        <header className="container mx-auto px-4 py-8 flex items-center justify-between">
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center space-x-4 ml-auto">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
              Virtual Ethiopia
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-white"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
        </header>

        {mobileMenuOpen && (
          <nav className="md:hidden bg-gray-800 bg-opacity-90 p-4">
            <ul className="space-y-2">
              <li><a href="#features" className="text-white hover:text-yellow-400">Features</a></li>
              <li><a href="#obligations" className="text-white hover:text-yellow-400">Obligations & Privileges</a></li>
              <li><a href="#how-it-works" className="text-white hover:text-yellow-400">How It Works</a></li>
              <li><a href="#join" className="text-white hover:text-yellow-400">Join Us</a></li>
            </ul>
          </nav>
        )}

        <main className="container mx-auto px-4 py-8">
          <section className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
              Welcome to the Virtual Nation of Tomorrow
            </h2>
            <p className="text-xl mb-8 text-white">
              Join Virtual Ethiopia, our blockchain-based digital country, and become part of a cutting edge global community.
            </p>
            <p>
              Citizens who choose not to start businesses can contribute to philanthropic projects adopted by
              Virtual Ethiopia. These opportunities allow citizens to earn tokens while making a positive impact on
              the world.
            </p>
          </section>

          {/* Obligations and Privileges Section */}
          <section id="obligations" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
              Obligations and Privileges
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                    Citizen Obligations
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Participate in governance by voting on key decisions</li>
                    <li>Contribute to the community through work or token payments</li>
                    <li>Adhere to the digital nation&apos;s code of conduct</li>
                    <li>Engage in continuous learning and skill development</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                    Citizen Privileges
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Form companies with other citizens in the physical world</li>
                    <li>Access to exclusive business and networking opportunities</li>
                    <li>Participate in profit-sharing from successful ventures</li>
                    <li>Influence the direction of philanthropic initiatives</li>
                    <li>Earn tokens through community-approved work</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Features of Our Digital Nation Section */}
          <section id="features" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
              Features of Our Digital Nation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Coins className="h-8 w-8 mb-4" />}
                title="Token-Based Economy"
                briefDescription="Earn and spend digital tokens for various activities within the nation."
                link="#token-system" // Link to the "Token System" section
              />
              <FeatureCard
                icon={<Building2 className="h-8 w-8 mb-4" />}
                title="Business Opportunities"
                briefDescription="Form companies with fellow citizens and operate in the physical world."
                link="#company-formation" // Link to the "Company Formation" section
              />
              <FeatureCard
                icon={<Vote className="h-8 w-8 mb-4" />}
                title="Decentralized Voting" // Updated title
                briefDescription="Participate in decision-making through blockchain-based voting."
                link="#decentralized-voting" // Link to the "Decentralized Voting" section
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 mb-4" />}
                title="Global Community"
                briefDescription="Connect with like-minded individuals from around the world."
                link="/features/global-community"
              />
              <FeatureCard
                icon={<Landmark className="h-8 w-8 mb-4" />}
                title="Philanthropic Opportunities" // Title of the card
                briefDescription="Contribute to and vote on charitable projects using community funds."
                link="#philanthropic-opportunities" // Link to the "Philanthropic Opportunities" section
              />
            </div>
          </section>

          <section id="token-system" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
              Token System
            </h2>
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                  Token System
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <p>
                  Our Virtual Ethiopia operates on a unique token system. Citizens earn tokens by contributing to the
                  community through various forms of work. These tokens can be used to fulfill obligations and access
                  privileges within Virtual Ethiopia.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="company-formation" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
              Company Formation
            </h2>
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                  Company Formation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <p>
                  Citizens can collaborate to form companies that operate in the physical world. These companies agree
                  to donate 20% of their profits back to Virtual Ethiopia, fueling its growth and supporting various
                  initiatives.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="decentralized-voting" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
              Decentralized Voting
            </h2>
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                  Decentralized Voting
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <p>
                  Virtual Ethiopia utilizes blockchain-based decentralized applications (dapps) for voting. Citizens can
                  participate in decision-making processes, including voting on philanthropic projects funded by
                  donations from successful companies.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="philanthropic-opportunities" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
              Philanthropic Opportunities
            </h2>
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                  Philanthropic Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <p>
                  Citizens who choose not to start businesses can contribute to philanthropic projects adopted by
                  Virtual Ethiopia. These opportunities allow citizens to earn tokens while making a positive impact on
                  the world.
                </p>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="bg-gray-800 bg-opacity-80 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Virtual Ethiopia. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, briefDescription, link }: { icon: JSX.Element; title: string; briefDescription: string; link: string }) {
  return (
    <Link href={link}>
      <Card className="bg-gray-800 bg-opacity-50 border-gray-700 cursor-pointer">
        <CardHeader>
          <CardTitle className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text flex flex-col items-center">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-white">
            {briefDescription}
          </CardDescription>
          {/* Removed the inner <a> tag */}
          <span className="text-yellow-400 hover:underline mt-2 block">
            Read more
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
