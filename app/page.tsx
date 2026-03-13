// import Homepage from "./(pages)/homepage/homepage";
// import WebLayout from "./(pages)/layout";

// export default function Home() {
//   return (
//    <WebLayout>
//       <Homepage/>
//    </WebLayout>
//   );
// }
import CTA from '@/components/sections/CTA'
import Features from '@/components/sections/Features'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Solutions from '@/components/sections/Solutions'
import Industries from '@/components/sections/Industries'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import Trust from '@/components/sections/Trust'
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Trust/>
        <Stats/>
        <Solutions/>
        <Industries/>
        <Services/>
        <Features/>
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}