
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Users, Clock, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Building2,
      title: "Detailed Design Package",
      description: "Complete engineered drawing packages suitable for permitting, procurement, and construction.",
    },
    {
      icon: CheckCircle,
      title: "Licensed Professional Engineers",
      description: "All drawings and calculations sealed by licensed Professional Engineers for your assurance.",
    },
    {
      icon: Clock,
      title: "Comprehensive Support",
      description: "From conceptual design through construction support with ongoing consulting services.",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Engineering Excellence for
              <span className="block text-blue-200">Infrastructure Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in">
              Professional civil engineering design consultancy providing comprehensive 
              solutions from conceptual design to construction support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose InfraTech Global Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive civil engineering solutions with precision, 
              expertise, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From initial concepts to final construction, we provide end-to-end 
              engineering solutions for your infrastructure projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Detailed Design Package</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Conceptual Design (30%)</strong> - Initial layout planning and stormwater modeling
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Detailed Design (90%)</strong> - Comprehensive site grading and access road design
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Construction Ready (100%)</strong> - Permit-ready drawings sealed by licensed PE
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">General Consulting Support</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <span>Scheduled support meetings and contractor submittal review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <span>RFI support and value engineering solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <span>EOR letters and permitting updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-1 flex-shrink-0" />
                  <span>As-recorded drawings and project completion support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/services">
                Learn More About Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team of licensed Professional Engineers 
            and let's discuss how we can bring your infrastructure vision to life.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
            <Link to="/contact">
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
