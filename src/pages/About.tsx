
import { Award, Users, Target, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in engineering design and project delivery, ensuring every solution meets or exceeds industry benchmarks."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our licensed Professional Engineers provide dependable, code-compliant designs that stand the test of time and regulatory scrutiny."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients to ensure seamless project execution from concept to completion."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Every calculation, drawing, and recommendation is meticulously crafted to deliver optimal outcomes for your project needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About InfraTech Global Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in civil design of solar energy projects.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Engineering the Future of Infrastructure
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                InfraTech Global Solutions LLC is a premier civil engineering consultancy specializing in 
                solar energy and sustainable infrastructure.  
                 
                
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of licensed Professional Engineers brings decades of combined experience 
                in civil engineering design and construction support.
              </p>
              <p className="text-lg text-gray-600">
                From feasibility 
                studies to final commissioning, we provide PV civil design services 
                that keep projects on schedule, within budget, and designed to the highest standards.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Licensed Excellence</h3>
                  <p className="text-gray-600"> Issued for construction drawings sealed by Professional Engineers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every project we undertake and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures quality, compliance, and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Conceptual Design (30%)
              </h3>
              <p className="text-gray-600">
                We integrate survey data—covering existing conditions, parcel details, 
                nearby structures, and topography—into civil design. Using this, we plan roads, 
                analyze terrain, finalize layouts, design fencing, complete site plans, 
                implement erosion control, landscaping plan and, if needed, add stormwater ponds.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Detailed Design (90%)
              </h3>
              <p className="text-gray-600">
                Expanding on the approved 30% design, we develop detailed drawings with refined grading plans, 
                drainage systems, and access road designs, ensuring seamless integration with site conditions and 
                a strong foundation for construction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Construction Ready (100%)
              </h3>
              <p className="text-gray-600">
                Building on previous designs, we deliver construction-ready, engineer-sealed drawings with detailed site plans, 
                grading plan, and road design, and landscaping plan ensuring and smooth construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experienced Professional Team
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Our team of licensed Professional Engineers and design specialists 
            brings extensive experience in PV civil design projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-2">15+</h3>
                <p className="text-blue-100">Years Combined Experience</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-2">PE</h3>
                <p className="text-blue-100"> Professional Engineers</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-blue-100">Project Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
