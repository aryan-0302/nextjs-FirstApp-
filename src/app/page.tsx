import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonial from "@/components/TestimonialCards"
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { AnimatedTooltipPreview } from "@/components/AnimatedToolTipPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection></HeroSection>
        <FeaturedCourses></FeaturedCourses>
        <WhyChooseUs></WhyChooseUs>
        <Testimonial></Testimonial>
        <UpcomingWebinars></UpcomingWebinars>
        <AnimatedTooltipPreview></AnimatedTooltipPreview>
        <Footer></Footer>
    </main>
  );
}



// TYPESCRIPT (WE HAVE TO DEFINE THE TYPE OF VARIABLE)
// let username:string="hitesh"