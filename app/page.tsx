'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Leaf, Shield, Award } from 'lucide-react'

export default function EmersonNaturalsWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isVisible, setIsVisible] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const certifications = [
    { icon: '/images/icons/pesticide-free.png', title: 'Pesticide-Free' },
    { icon: '/images/icons/ethically-sourced.png', title: 'Ethically Sourced' },
    { icon: '/images/icons/sustainably-made.png', title: 'Sustainably Made' },
    { icon: '/images/icons/small-batch.png', title: 'Small Batch' },
    { icon: '/images/icons/lab-tested.png', title: '3rd Party Lab Tested' },
    { icon: '/images/icons/wild-harvested.png', title: 'Wild-Harvested' },
    { icon: '/images/icons/gmp.png', title: 'GMP Compliant' },
    { icon: '/images/icons/biodegradable.png', title: '100% Biodegradable' },
    { icon: '/images/icons/uv-sterilization.png', title: 'UV Sterilization' }
  ]

  const strains = [
    {
      id: 'green-maeng-da',
      name: 'Green Maeng Da',
      image: '/images/strains/maeng-da.jpg',
      description: 'Our #1 best selling strain for 7 years! Green Maeng Da offers the highest potency and most balanced effects of any strain. Perfect for those looking for an energetic boost and improved mood.',
      benefits: ['Highest potency', 'Most balanced effects', 'Energetic boost', 'Improved mood'],
      effects: ['Energetic', 'Balanced', 'Best Seller'],
      color: 'green',
      duration: 'Long-lasting',
      bestFor: 'First time buyers and daily use'
    },
    {
      id: 'white-maeng-da',
      name: 'White Maeng Da',
      image: '/images/strains/white-maeng-da.jpg',
      description: 'One of our most popular strains offering incredibly high potency and a boost of clean energy. Perfect for promoted focus and clarity of mind.',
      benefits: ['High potency', 'Clean energy boost', 'Enhanced focus', 'Mental clarity'],
      effects: ['Energizing', 'Focus', 'Clarity'],
      color: 'white',
      duration: 'Long-lasting',
      bestFor: 'Pre-workout and mental tasks'
    },
    {
      id: 'red-maeng-da',
      name: 'Red Maeng Da',
      image: '/images/strains/red-maeng-da.jpg',
      description: 'All the potency you expect from a Maeng Da but with a warm relaxed feel. Results in an energetic yet calm experience with effects lasting up to 8 hours.',
      benefits: ['Active mind', 'General well-being', 'Warm relaxation', 'Long duration'],
      effects: ['Relaxing', 'Energetic', 'Long-lasting'],
      color: 'red',
      duration: 'Up to 8 hours',
      bestFor: 'Active relaxation and well-being'
    },
    {
      id: 'red-borneo',
      name: 'Red Borneo',
      image: '/images/strains/red-borneo.jpg',
      description: 'Widely considered one of the most relaxing strains available. Perfect for winding down after a long day with mellow, sedative properties.',
      benefits: ['Most relaxing', 'Mellow effects', 'Sedative properties', 'Evening use'],
      effects: ['Relaxing', 'Sedative', 'Evening'],
      color: 'red',
      duration: 'Up to 8 hours',
      bestFor: 'Evening relaxation and unwinding'
    },
    {
      id: 'green-bali',
      name: 'Green Bali',
      image: '/images/strains/green-bali.jpg',
      description: 'One of the most balanced strains with high alkaloid concentration. Provides improved mood, increased energy, and relaxation - perfect for daily use.',
      benefits: ['Most balanced', 'High alkaloids', 'Improved mood', 'Increased energy'],
      effects: ['Balanced', 'Energizing', 'Daily Use'],
      color: 'green',
      duration: 'Moderate',
      bestFor: 'Daily use and balanced effects'
    },
    {
      id: 'green-malay',
      name: 'Green Malay',
      image: '/images/strains/green-malay.jpg',
      description: 'From the rainy forests of Malaysia, this potent strain boosts energy levels with mood-enhancing effects. Improves focus while remaining calm and centered.',
      benefits: ['Energy boost', 'Mood enhancement', 'Improved focus', 'Calm & centered'],
      effects: ['Energizing', 'Focus', 'Mood'],
      color: 'green',
      duration: 'Long-lasting',
      bestFor: 'Focus and concentration with calm energy'
    },
    {
      id: 'indo-white',
      name: 'Indo White',
      image: '/images/strains/indo-white.jpg',
      description: 'Known for helping with focus and concentration. Provides stimulation to mind and body without the "coffee jitters" - great for that extra boost.',
      benefits: ['Enhanced focus', 'Better concentration', 'Mind & body stimulation', 'No jitters'],
      effects: ['Focus', 'Stimulating', 'Clean'],
      color: 'white',
      duration: 'Moderate',
      bestFor: 'Focus without jitters'
    },
    {
      id: 'yellow-vein',
      name: 'Yellow Vein',
      image: '/images/strains/yellow-vein.jpg',
      description: 'Achieved through a longer drying process, offering mild and calming effects with a balance between focus and relaxation. A unique, warm experience.',
      benefits: ['Mild effects', 'Calming feeling', 'Balanced focus', 'Unique profile'],
      effects: ['Mild', 'Calming', 'Balanced'],
      color: 'yellow',
      duration: 'Moderate',
      bestFor: 'Balanced calm focus'
    }
  ]

  const [selectedStrain, setSelectedStrain] = useState(strains[0])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Emerson Naturals"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-stone-600 hover:text-stone-900 transition-colors">About</a>
              <a href="#products" className="text-stone-600 hover:text-stone-900 transition-colors">Products</a>
              <a href="#certifications" className="text-stone-600 hover:text-stone-900 transition-colors">Quality</a>
              <a href="#contact" className="text-stone-600 hover:text-stone-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Premium Emerson Naturals Kratom Products"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-16">
            {/* Text Content - Left Side */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                100% Pure
                <span className="block text-green-400">
                  Mitragyna Speciosa
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Wild harvested and cultivated without chemicals. Experience the highest quality kratom products backed by rigorous testing and sustainable practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Contact for Wholesale
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-stone-800 hover:bg-stone-900 text-white border-2 border-stone-800 hover:border-stone-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  View Products
                </Button>
              </div>
            </div>
            
            {/* Right Side - Let image show through */}
            <div className="hidden lg:block">
              {/* This space intentionally left for image visibility */}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
<section id="about" className="py-24 px-4 bg-gradient-to-b from-stone-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-4 text-green-700 border-green-200">
        Since 2016
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-800">About Us</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto"></div>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Image Section */}
      <div className="relative">
        <Image
          src="/images/product-showcase.jpg"
          alt="Emerson Naturals Maeng Da product with capsules and powder"
          width={600}
          height={400}
          className="rounded-2xl shadow-xl w-full"
        />
      </div>
      
      {/* Content Section */}
      <div className="space-y-6">
        {/* Main Description */}
        <div className="prose prose-lg text-stone-700 max-w-none">
          <p className="text-lg leading-relaxed">
            Since 2016 Emerson Naturals has been dedicated to offering the highest quality herbal products in the industry. Our expertise is building relationships with local harvesters and maintaining purity and potency of our herbal products. Our customers love that they can trust we will deliver exactly what they paid for without the cutting of corners.
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {/* Environmental */}
          <div className="bg-white rounded-lg border border-stone-200 shadow-sm">
            <button 
              onClick={() => setOpenAccordion(openAccordion === 'environmental' ? null : 'environmental')}
              className="flex items-center justify-between p-6 w-full text-left hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Leaf className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-stone-800">Environmental</h3>
              </div>
              <div className={`text-stone-400 transition-transform ${openAccordion === 'environmental' ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openAccordion === 'environmental' && (
              <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                From day one we have made it our mission to reduce our use of single use plastics in our packaging and our packaging and fulfillment operations. We use a strict eco-friendly approach to all of our business processes and products.
              </div>
            )}
          </div>

          {/* Transparency & Honesty */}
          <div className="bg-white rounded-lg border border-stone-200 shadow-sm">
            <button 
              onClick={() => setOpenAccordion(openAccordion === 'transparency' ? null : 'transparency')}
              className="flex items-center justify-between p-6 w-full text-left hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-stone-800">Transparency & Honesty</h3>
              </div>
              <div className={`text-stone-400 transition-transform ${openAccordion === 'transparency' ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openAccordion === 'transparency' && (
              <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                With any Emerson Naturals product you can expect to know exactly what you're getting. We stand behind anything we put our name on, publicly or privately. Trust in our brand and the team behind our brand is the highest priority for us.
                <br /><br />
                We provide full testing for potency, contaminants, heavy metals, pesticides, and mycotoxins. You can trust we are always working to ensure our products not only surpass industry standards but also meet our own passion of excellence.
              </div>
            )}
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white rounded-lg border border-stone-200 shadow-sm">
            <button 
              onClick={() => setOpenAccordion(openAccordion === 'customer' ? null : 'customer')}
              className="flex items-center justify-between p-6 w-full text-left hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-stone-800">Customer Satisfaction</h3>
              </div>
              <div className={`text-stone-400 transition-transform ${openAccordion === 'customer' ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openAccordion === 'customer' && (
              <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                We're not company-first. We're customer-first. Please send us any feedback, and you will receive a reply from one of our team leads here. We consistently read each review, rotate through customer support, conduct surveys, gather feedback, and we're always looking for more insight from our customers.
              </div>
            )}
          </div>

          {/* Sustainability */}
          <div className="bg-white rounded-lg border border-stone-200 shadow-sm">
            <button 
              onClick={() => setOpenAccordion(openAccordion === 'sustainability' ? null : 'sustainability')}
              className="flex items-center justify-between p-6 w-full text-left hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-stone-800">Sustainability</h3>
              </div>
              <div className={`text-stone-400 transition-transform ${openAccordion === 'sustainability' ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {openAccordion === 'sustainability' && (
              <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                Our Kratom is grown and harvested in a sustainable way, ensuring that the environment and local communities are not harmed in the process. We believe in wild-harvesting our kratom, which means that we only harvest leaves from trees that are naturally growing in the wild. This allows us to avoid damaging delicate ecosystems and ensures that our kratom is of the highest quality.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Product Showcase */}
      <section id="products" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-800">Our Premium Strains</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Carefully selected and expertly processed for consistent quality and potency
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="relative">
              <Image
                src={selectedStrain.image || "/placeholder.svg"}
                alt={`${selectedStrain.name} Kratom Package`}
                width={600}
                height={800}
                className="w-full max-w-lg mx-auto transition-all duration-500"
              />
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-stone-800">
                    {selectedStrain.name}
                  </h3>
                  {selectedStrain.name === 'Green Maeng Da' && (
                    <Badge className="bg-amber-500 text-white px-3 py-1">
                      #1 Best Seller
                    </Badge>
                  )}
                </div>
                <p className="text-lg text-stone-600 leading-relaxed mb-6">
                  {selectedStrain.description}
                </p>
                
                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-stone-700 mb-3 uppercase tracking-wide">Key Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStrain.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="px-3 py-1 text-sm border-green-200 text-green-700">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Duration and Best For */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-stone-50 rounded-lg">
                  <div>
                    <span className="text-sm font-semibold text-stone-700">Duration:</span>
                    <p className="text-stone-600">{selectedStrain.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-stone-700">Best For:</span>
                    <p className="text-stone-600">{selectedStrain.bestFor}</p>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-stone-700 text-sm">
                    <strong>Packaging:</strong> Resealable, eco-friendly, food-grade packaging keeps your kratom fresh. 
                    <br />
                    <strong>Capsules:</strong> 1 capsule = ½ gram kratom powder
                  </p>
                </div>
              </div>

              {/* Strain Selector */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-stone-800">Explore Our Strains:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {strains.map((strain) => (
                    <button
                      key={strain.id}
                      onClick={() => setSelectedStrain(strain)}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedStrain.id === strain.id
                          ? 'border-green-500 bg-green-50 shadow-lg'
                          : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="font-medium text-sm text-stone-800">
                        {strain.name}
                      </div>
                      <div className={`text-xs mt-1 ${
                        strain.color === 'green' ? 'text-green-600' :
                        strain.color === 'red' ? 'text-red-600' :
                        strain.color === 'white' ? 'text-amber-600' :
                        'text-yellow-600'
                      }`}>
                        {strain.color.charAt(0).toUpperCase() + strain.color.slice(1)} Vein
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quality Indicators */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-stone-700 text-sm">Lab Tested</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-stone-700 text-sm">GMP Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span className="text-stone-700 text-sm">Wild Harvested</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="text-stone-700 text-sm">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-4 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-800">What Makes Us Different</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Our commitment to quality, sustainability, and transparency sets us apart in the industry
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 mx-auto w-24 h-24 md:w-32 md:h-32">
                  <Image
                    src={cert.icon || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-stone-700 group-hover:text-stone-900 transition-colors">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Sustainability */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mountain-bg.jpg"
            alt="Mountain landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-stone-900/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Transparency & Sustainability
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-amber-400 mb-8"></div>
              <div className="space-y-6 text-lg">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Wild-Harvested to protect biodiversity</span>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Partnered with trusted Indonesian supplier</span>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Full transparency — testing available online</span>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>Environmentally responsible packaging</span>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>GMP certified sterile packaging process</span>
                </div>
              </div>
            </div>
            <div className="text-white">
              <blockquote className="text-xl md:text-2xl italic leading-relaxed">
                "We don't chase trends or hype 'legal highs.' We care about kratom's natural, healing properties. That's where our focus will always be."
              </blockquote>
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-lg">
                  We sterilize every batch before packaging, and we always use GMP compliant manufacturing for safe and clean production. Emerson Naturals is packaged in resealable, eco-friendly, food-grade bags — perfect for staying fresh at home or on the go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-800">Get In Touch</h2>
            <p className="text-xl text-stone-600">
              For wholesale inquiries or product questions, reach out using the form below.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto mt-6"></div>
          </div>
          
          <Card className="shadow-2xl border-0 bg-gradient-to-b from-white to-stone-50">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-stone-700 font-semibold text-lg">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 border-stone-300 focus:border-green-500 focus:ring-green-500 rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-stone-700 font-semibold text-lg">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 border-stone-300 focus:border-green-500 focus:ring-green-500 rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-stone-700 font-semibold text-lg">Company Name (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12 border-stone-300 focus:border-green-500 focus:ring-green-500 rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-stone-700 font-semibold text-lg">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-stone-300 focus:border-green-500 focus:ring-green-500 rounded-lg resize-none"
                  />
                </div>
                
                <div className="text-center pt-4">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-16 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-stone-900 to-stone-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/leaf-icon.png"
              alt="Emerson Naturals Leaf Icon"
              width={64}
              height={64}
              className="mx-auto filter invert"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Emerson Naturals LLC</h3>
            <p className="text-stone-300 text-lg">Asheville, NC</p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-amber-400 mx-auto"></div>
            <p className="text-stone-400">© 2025 Emerson Naturals. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
