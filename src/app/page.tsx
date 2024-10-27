'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Coins, Building2, Vote, Users, Landmark, Menu, X, ChevronDown } from "lucide-react"
import Link from 'next/link'

export default function ModernLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    for (const item of menuItems) {
      const element = document.getElementById(item.anchor);
      if (element && scrollPosition >= element.offsetTop - 100) {
        setActiveSection(item.anchor);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const menuItems = [
    { name: 'Privileges', anchor: 'privileges' },
    { name: 'Obligations', anchor: 'obligations' },
    { name: 'Features', anchor: 'features' },
    { name: 'Token System', anchor: 'token-system' },
    { name: 'Business', anchor: 'company-formation' },
    { name: 'Voting', anchor: 'decentralized-voting' },
    { name: 'Community', anchor: 'global-community' },
    { name: 'Philanthropy', anchor: 'philanthropic-opportunities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
              Virtual Ethiopia
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={`#${item.anchor}`}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                  activeSection === item.anchor ? 'text-yellow-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-md z-40"
          >
            <ul className="py-4 px-6 space-y-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`#${item.anchor}`}
                    className="text-white hover:text-yellow-400 transition-colors block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 pt-24">
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text"
          >
            Welcome to Virtual Ethiopia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl"
          >
            Join our blockchain-based digital nation and become part of a cutting-edge global community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="#privileges"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors"
            >
              Explore Citizenship
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="animate-bounce" />
          </motion.div>
        </section>

        <section id="privileges" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Citizen Privileges and Obligations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card id="privileges" className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-yellow-400">Privileges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2 text-yellow-400" /> Form companies with fellow virtual citizens</li>
                  <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2 text-yellow-400" /> Access exclusive business opportunities</li>
                  <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2 text-yellow-400" /> Participate in profit-sharing</li>
                  <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2 text-yellow-400" /> Influence philanthropic initiatives</li>
                  <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2 text-yellow-400" /> Earn tokens through community work</li>
                  <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2 text-yellow-400" /> Learn and develop skills</li>
                </ul>
              </CardContent>
            </Card>
            <Card id="obligations" className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-yellow-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-yellow-400">Obligations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2 text-yellow-400" /> Participate in governance voting</li>
                  <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2 text-yellow-400" /> Contribute to the community</li>
                  <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2 text-yellow-400" /> Adhere to the code of conduct</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="features" className="py-20">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Features of Our Digital Nation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Coins className="h-12 w-12 mb-4 text-yellow-400" />}
              title="Token-Based Economy"
              description="Earn and spend digital tokens for various activities within the nation."
              link="#token-system"
            />
            <FeatureCard
              icon={<Building2 className="h-12 w-12 mb-4 text-yellow-400" />}
              title="Business Opportunities"
              description="Form companies with fellow citizens and operate in the physical world."
              link="#company-formation"
            />
            <FeatureCard
              icon={<Vote className="h-12 w-12 mb-4 text-yellow-400" />}
              title="Decentralized Voting"
              description="Participate in decision-making through blockchain-based voting."
              link="#decentralized-voting"
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 mb-4 text-yellow-400" />}
              title="Global Community"
              description="Connect with like-minded individuals from around the world."
              link="#global-community"
            />
            <FeatureCard
              icon={<Landmark className="h-12 w-12 mb-4 text-yellow-400" />}
              title="Philanthropic Opportunities"
              description="Contribute to and vote on charitable projects using community funds."
              link="#philanthropic-opportunities"
            />
          </div>
        </section>

        <section id="token-system" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Token System
          </h2>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-yellow-400 transition-colors">
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed font-sans">
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

        <section id="company-formation" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Business Opportunity
          </h2>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-yellow-400 transition-colors">
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed font-sans">
                Our virtual nation serves as a powerful incubator for transforming innovative ideas into successful real-world enterprises. 
                Through Virtual Ethiopia&apos;s sophisticated networking platform, citizens can discover complementary talents, align with 
                potential partners, and access a pool of expertise that spans continents. The platform offers structured pathways for company 
                formation, including access to legal resources, business planning tools, and mentorship from successful entrepreneurs within 
                our community. Citizens can leverage our token system to fund their ventures, attract initial team members, and reward early 
                contributors. What sets our platform apart is its comprehensive support system – from initial ideation through to market 
                entry. Whether you&apos;re looking to create a tech startup, establish a cultural exchange business, or develop sustainable 
                solutions for traditional industries, Virtual Ethiopia provides the digital infrastructure, knowledge resources, and human 
                capital necessary for success. We wish to build success stories include companies that have grown from simple collaborative 
                projects to established enterprises operating across multiple countries, demonstrating the tangible power of our virtual 
                incubation model.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="decentralized-voting" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Decentralized Voting
          </h2>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-yellow-400 transition-colors">
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed font-sans">
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

        <section id="global-community" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center  bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Global Community
          </h2>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-yellow-400 transition-colors">
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed font-sans">
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

        <section id="philanthropic-opportunities" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
            Philanthropic Opportunities
          </h2>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-yellow-400 transition-colors">
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed font-sans">
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

      <footer className="bg-gray-900 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Virtual Ethiopia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description, link }: { icon: JSX.Element; title: string; description: string; link: string }) {
  return (
    <Link href={link} className="block h-full">
      <Card className="bg-gray-800 bg-opacity-50 border-gray-700 hover:border-yellow-400 transition-colors cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="flex flex-col items-center">
            {icon}
            <span className="mt-4 text-xl font-bold text-yellow-400">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-300 text-center">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
