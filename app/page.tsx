import Image from 'next/image'
import { Coins, Users, ArrowRight, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-200">
      <header className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9R_3cY-a_400x400.jpg-ZKNidmGJ11XtDOnDwTEQLNrcC12AKg.jpeg" 
              alt="Dwarfy Mascot - Cute orange dwarf rabbit with tongue out" 
              width={40} 
              height={40} 
              className="rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-orange-800">Dwarfy</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-orange-800 hover:text-orange-600">About</a></li>
              <li><a href="#features" className="text-orange-800 hover:text-orange-600">Features</a></li>
              <li><a href="#community" className="text-orange-800 hover:text-orange-600">Community</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-orange-800 mb-6">Welcome to Dwarfy</h1>
              <p className="text-xl md:text-2xl text-orange-700 mb-8">The Cutest Coin in the Burrow!</p>
              <a href="https://t.me/dwarfyyrabbit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block">
                Get Dwarfy Now
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5685826c-4b62-406d-b1f4-70f6f38c978d.jpg-Fclu9CokRGHWQba0Jz3ihzmCTGRkL7.jpeg"
                  alt="Dwarfy Mascot - Cute orange rabbit with sunglasses and lollipop in a flower meadow"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8 text-center">About Dwarfy</h2>
            <div className="text-lg text-orange-700 max-w-3xl mx-auto">
              <p className="mb-4">
                Introducing Dwarfy, the irresistible meme coin starring a lovable orange dwarf rabbit with an insatiable appetite!
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><span className="font-semibold">Cute Overload:</span> Prepare for a surge of adorableness as Dwarfy's charming antics and insatiable appetite take over the crypto world.</li>
                <li><span className="font-semibold">Community-Driven Fun:</span> Join a vibrant community of fellow rabbit enthusiasts and experience the joy of a truly decentralized and organic meme coin.</li>
                <li><span className="font-semibold">Delicious Rewards:</span> Every transaction fuels Dwarfy's insatiable hunger, unlocking exclusive rewards and exciting community events.</li>
                <li><span className="font-semibold">Low Market Cap Gem:</span> Hop in early and witness Dwarfy's meteoric rise as this adorable coin burrows its way into the hearts of crypto investors worldwide.</li>
              </ul>
              <p className="text-sm italic">
                Disclaimer: Investing in meme coins carries significant risk. Always conduct thorough research and invest responsibly.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-12 text-center">Dwarfy Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Users className="w-12 h-12 text-orange-500" />}
                title="Vibrant Community"
                description="Join fellow rabbit enthusiasts in a decentralized and organic meme coin community."
              />
              <FeatureCard 
                icon={<Coins className="w-12 h-12 text-orange-500" />}
                title="Delicious Rewards"
                description="Unlock exclusive rewards and exciting events with every transaction."
              />
              <FeatureCard 
                icon={<TrendingUp className="w-12 h-12 text-orange-500" />}
                title="Growth Potential"
                description="Get in early on this low market cap gem with potential for meteoric rise."
              />
            </div>
          </div>
        </section>

        <section id="community" className="bg-orange-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join the Dwarfy Community</h2>
            <p className="text-xl mb-8">Be part of our growing family of crypto enthusiasts and meme lovers!</p>
            <div className="flex justify-center space-x-4">
              <SocialButton href="https://x.com/rex_t88640" label="Twitter" />
              <SocialButton href="https://t.me/dwarfyyrabbit" label="Telegram" />
              <SocialButton href="#" label="Discord" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-orange-800 text-orange-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Dwarfy Coin. All rights reserved.</p>
          <p className="mt-2 text-sm">Disclaimer: Dwarfy is a meme coin for entertainment purposes. Please invest responsibly.</p>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode; // This is the type for React components or elements
  title: string; // The title is a string
  description: string; // The description is a string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-orange-800 mb-2">{title}</h3>
      <p className="text-orange-700">{description}</p>
    </div>
  )
}
interface SocialButtonProps {
  href: string; // 'href' should be a string
  label: string; // 'label' should be a string
}
const SocialButton: React.FC<SocialButtonProps> = ({ href, label }) => {
  return (
    <a 
      href={href} 
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out"
    >
      {label}
      <ArrowRight className="ml-2 w-4 h-4" />
    </a>
  )
}

