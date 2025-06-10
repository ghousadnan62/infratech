
import { CheckCircle, FileText, Users, Clock, Shield, Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const detailedServices = [
    {
      title: "Cover Page",
      description: "Project overview, vicinity location, and sheet index andquantities table"
    },
    {
      title: "General Notes",
      description: "Project-specific design criteria, assumptions, design implementation strategies, and constraints"
    },
    {
      title: "Existing Conditions Plan",
      description: "Inclusion of survey details into existing site conditions plan including topography, structures, and utilities"
    },
    {
      title: "Site Plan", 
      description: "Overall project layout showing proposed location of tracker layout, fence, access road, equipment pad and other site features"
    },
    {
      title: "Grading plan and Erosion Control Plan",
  description: "The grading plan showing existing and proposed contours, highlighting elevation differences between them. Implementation of erosion control devices to manage soil stability and prevent runoff issues, ensuring effective site development and environmental compliance."
    },
    {
      title: "Access Road Plan & Profile Sheet",
      description: "Complete roadway design with profile and cross section design as per location AHJs requirements and site conditions"
    },
    {
      title: "Erosion Control Notes and Details",
      description: "Environmental protection measures and implementation details"
    },
    {
      title: "Landscape Plans",
      description: "Site beautification and environmental enhancement designs"
    }
  ];

  const consultingServices = [
    {
      icon: Users,
      title: "Support Meetings",
      description: "Routinely scheduled project coordination and progress meetings"
    },
    {
      icon: FileText,
      title: "Submittal Review",
      description: "Contractor submittal review and approval processes"
    },
    {
      icon: Clock,
      title: "RFI Support",
      description: "Rapid response to Requests for Information during construction"
    },
    {
      icon: Calculator,
      title: "Value Engineering",
      description: "Cost optimization while maintaining design integrity"
    },
    {
      icon: Shield,
      title: "EOR Letters",
      description: "Engineer of Record documentation and certifications"
    },
    {
      icon: CheckCircle,
      title: "Permitting Updates",
      description: "AHJ comment incorporation and permitting process support"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Engineering Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive civil engineering solutions from concept to construction
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Design Package */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Design Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete engineered drawing packages suitable for submission to permitting 
              authorities, procurement and takeoff, and construction.
            </p>
          </div>

          {/* Process Steps */}
          {/* <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    30%
                  </div>
                  <CardTitle className="text-xl">Conceptual Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Initial planning phase creating conceptual layouts of proposed arrays, 
                    utilities, and access roads.
                  </p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Existing Conditions Plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">General Site Plan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Stormwater Modeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center h-full">
                <CardHeader>
                  <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    90%
                  </div>
                  <CardTitle className="text-xl">Detailed Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive design development with substantial detailing of 
                    site grading and access road layouts.
                  </p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Cover Page & General Notes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Drainage & Erosion Control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Road Plans & Profiles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center h-full">
                <CardHeader>
                  <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    100%
                  </div>
                  <CardTitle className="text-xl">Issue for Construction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Final construction-ready drawings with all necessary information 
                    for permits and construction.
                  </p>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">PE Sealed Drawings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Permit Ready Documentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Complete Calculations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div> */}

          {/* Detailed Service List */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complete Drawing Package Includes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detailedServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              General Consulting Support
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Offering comprehensive consulting services to support your project from design 
              through construction completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="bg-white bg-opacity-10 border-white border-opacity-20 text-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-blue-100 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <h3 className="text-xl font-semibold mb-4">Additional Services Include:</h3>
            <ul className="text-blue-100 space-y-2 max-w-2xl mx-auto">
              <li>• As-Built drawings preparation</li>
              <li>• Construction administration support</li>
              <li>• Regulatory compliance assistance</li>
              <li>• Project closeout documentation</li>
            </ul>
          </div> */}
        </div>
      </section>

      {/* Process and Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Project Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach ensuring quality deliverables and client satisfaction
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                <p className="text-gray-600 text-sm">Project requirements and site assessment</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Design Development</h3>
                <p className="text-gray-600 text-sm">Progressive design phases with client review</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Final Documentation</h3>
                <p className="text-gray-600 text-sm">PE sealed drawings</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">Construction phase assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to learn how we can support your PV civil design needs.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
