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
              Welcome to your Virtual Nation of Tomorrow
            </h2>
            <p className="text-xl mb-8 text-white">
              Join Virtual Ethiopia, our very own, blockchain-based digital country; and become part of a cutting edge global community.
            </p>
          </section>

          {/* Obligations and Privileges Section */}
          <section id="obligations" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
              Citizen Privileges and Obligations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                    Privileges
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Opportunity to form companies in the physical world, with fellow virtual citizens</li>
                    <li>Access to exclusive business and networking opportunities</li>
                    <li>Participate in profit-sharing from successful ventures</li>
                    <li>Influence the direction of philanthropic initiatives in Ethiopia</li>
                    <li>Opportunity to earn tokens through community-approved work within and outside</li>
                    <li>Learn and develop your skills, while enjoying sharing what you know</li>
                  </ul>
                </CardContent>
              </Card>              
              <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                    Obligations
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Participate in governance by voting on key decisions</li>
                    <li>Contribute to the community through work or token payments</li>
                    <li>Adhere to the digital nation&apos;s code of conduct</li>
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
                link="#global-community"
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
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-8 text-left bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                  Token System
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <p>
                  Virtual Ethiopia&apos;s innovative token system represents a groundbreaking approach to digital citizenship and economic 
                  empowerment. At its core, our tokenomics model creates a self-sustaining ecosystem where every contribution, whether 
                  intellectual, creative, or practical, is recognized and rewarded. Citizens earn tokens through a diverse range of 
                  activities, including mentoring fellow citizens, contributing to community projects, sharing expertise, or participating 
                  in governance activities. These tokens transcend traditional virtual currencies by maintaining real-world value through 
                  established exchange rates with physical currencies. This means that your efforts within Virtual Ethiopia translate directly 
                  into tangible economic benefits. Whether you&apos;re a professional offering consulting services, an artist sharing cultural 
                  works, or an entrepreneur building new ventures, our token system ensures that your contributions create both community 
                  and personal value. The system is designed with multiple tiers of engagement, allowing citizens to accumulate tokens through 
                  both major projects and daily micro-contributions, ensuring that everyone, regardless of their time commitment or expertise 
                  level, can participate meaningfully in the economy.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="company-formation" className="mb-16">
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
              <CardHeader>
              <CardTitle className="text-3xl font-bold mb-8 text-left bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                  Business Opportunity
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <p>
                Our virtual nation serves as a powerful incubator for transforming innovative ideas into successful real-world enterprises. 
                Through Virtual Ethiopia&apos;s sophisticated networking platform, citizens can discover complementary talents, align with 
                potential partners, and access a pool of expertise that spans continents. The platform offers structured pathways for company 
                formation, including access to legal resources, business planning tools, and mentorship from successful entrepreneurs within 
                our community. Citizens can leverage our token system to fund their ventures, attract initial team members, and reward early 
                contributors. What sets our platform apart is its comprehensive support system – from initial ideation through to market 
                entry. Whether you&apos;re looking to create a tech startup, establish a cultural exchange business, or develop sustainable 
                solutions for traditional industries, Virtual Ethiopia provides the digital infrastructure, knowledge resources, and human 
                capital necessary for success. Our success stories include companies that have grown from simple collaborative projects to 
                established enterprises operating across multiple countries, demonstrating the tangible power of our virtual incubation model.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="decentralized-voting" className="mb-16">
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
              <CardHeader>
              <CardTitle className="text-3xl font-bold mb-8 text-left bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                  Decentralized Voting
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <p>
                Our commitment to transparent and equitable governance is embodied in our state-of-the-art blockchain-based voting system. 
                This sophisticated platform ensures that every citizen&apos;s voice carries equal weight in shaping our community&apos;s future. The 
                system employs advanced cryptographic protocols to guarantee both anonymity and security, while maintaining complete 
                transparency in the tallying process. Citizens can participate in various levels of decision-making, from routine 
                administrative matters to major strategic initiatives. Our voting dapp features an intuitive interface that makes 
                participation accessible to all, regardless of technical expertise. The system includes robust verification mechanisms that 
                prevent double-voting while maintaining voter privacy, and all voting records are immutably stored on the blockchain for 
                future reference. This democratic framework extends beyond simple yes/no decisions – it includes features for proposal 
                submission, community deliberation periods, and staged voting processes for complex decisions. The system&apos;s reliability 
                has been proven through numerous successful initiatives, from selecting community projects for funding to establishing 
                new platform features and governance policies.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="global-community" className="mb-16">
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
              <CardHeader>
              <CardTitle className="text-3xl font-bold mb-8 text-left bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                  Global Community
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <p>
                Virtual Ethiopia transcends traditional geographical constraints to create a truly borderless digital nation. While 
                deeply rooted in Ethiopian heritage, our platform welcomes global citizens who share our vision of collaborative 
                growth and cultural exchange. Our digital infrastructure enables seamless communication and collaboration across 
                time zones, languages, and cultural backgrounds. The platform features real-time translation services, cultural 
                context guides, and timezone-aware scheduling tools to facilitate smooth interaction between members worldwide. 
                Citizens can create and join interest-based groups focusing on business ventures, cultural preservation, educational 
                initiatives, healthcare improvements, or family support networks. Our community hosts regular virtual events, from 
                business networking sessions to cultural celebrations, creating a vibrant, interconnected ecosystem. The platform&apos;s 
                sophisticated matching algorithms help citizens find others with complementary skills, shared interests, or similar 
                goals, fostering meaningful connections that often evolve into productive partnerships or lasting friendships.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="philanthropic-opportunities" className="mb-16">
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 shadow-lg"> {/* Added shadow-lg */}
              <CardHeader>
              <CardTitle className="text-3xl font-bold mb-8 text-left bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
                  Philanthropic Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <p>
                Virtual Ethiopia&apos;s philanthropic initiatives represent the heart of our community&apos;s commitment to positive social change. 
                Our integrated approach combines the power of our token economy, business success stories, and democratic governance to 
                create sustainable impact in Ethiopia and beyond. Successful businesses incubated on our platform contribute a portion of 
                their profits to a community-managed philanthropic fund, which is then allocated to carefully selected projects through 
                our democratic voting system. Citizens can propose projects ranging from educational initiatives and healthcare 
                improvements to infrastructure development and environmental conservation. Our platform provides comprehensive tools 
                for project proposal development, including impact assessment frameworks, budget planning templates, and collaboration 
                features for refining ideas with community input. The transparency of our blockchain-based voting and fund management 
                systems ensures that every donation is tracked and utilized effectively. Regular progress updates and impact reports keep 
                citizens informed about the tangible results of their contributions. Through this system, we&apos;ve already supported numerous 
                successful initiatives, from establishing technology learning centers in rural areas to funding sustainable agriculture 
                projects, demonstrating our commitment to creating lasting positive change in Ethiopia and empowering its citizens both 
                locally and globally.
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
