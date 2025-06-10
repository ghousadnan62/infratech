import { useState } from 'react';
import { MapPin, Calendar, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Solar Farm Civil Design",
      category: "renewable",
      location: "Illinois, USA",
      year: "2025",
      description: "Complete civil engineering design for a 150MW solar installation including access roads, drainage systems, and utility infrastructure.",
      scope: ["Site Planning", "Grading Design", "Drainage Systems", "Access Roads", "Utility Coordination"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Industrial Complex Site Development",
      category: "industrial",
      location: "California, USA",
      year: "2023",
      description: "Comprehensive site design for manufacturing facility including stormwater management, fire access roads, and loading dock areas.",
      scope: ["Site Layout", "Fire Access Design", "Stormwater Management", "Utility Infrastructure", "Erosion Control"],
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Residential Subdivision Infrastructure",
      category: "residential",
      location: "Florida, USA",
      year: "2022",
      description: "Multi-phase residential development with complete utilities, roadways, and stormwater detention systems.",
      scope: ["Subdivision Design", "Utility Planning", "Road Networks", "Detention Ponds", "Landscape Design"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Commercial Retail Center",
      category: "commercial",
      location: "Arizona, USA",
      year: "2022",
      description: "Shopping center development with parking design, traffic flow optimization, and utility coordination.",
      scope: ["Parking Design", "Traffic Engineering", "Site Utilities", "ADA Compliance", "Landscaping"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Wind Farm Access Infrastructure",
      category: "renewable",
      location: "Oklahoma, USA",
      year: "2023",
      description: "Heavy-duty access road design for wind turbine installation and maintenance, including bridge and culvert design.",
      scope: ["Heavy Load Roads", "Bridge Design", "Culvert Systems", "Soil Stabilization", "Environmental Protection"],
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Municipal Water Treatment Facility",
      category: "municipal",
      location: "Nevada, USA",
      year: "2021",
      description: "Site development for water treatment facility including specialized foundations, utility connections, and environmental controls.",
      scope: ["Foundation Design", "Utility Integration", "Environmental Controls", "Access Systems", "Safety Features"],
      status: "Completed",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'renewable', name: 'Renewable Energy' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
    { id: 'municipal', name: 'Municipal' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { icon: Award, number: "100+", label: "Projects Completed" },
    { icon: Users, number: "50+", label: "Satisfied Clients" },
    { icon: MapPin, number: "25+", label: "States Served" },
    { icon: Calendar, number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Showcasing successful infrastructure projects across diverse sectors
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`${
                  activeFilter === category.id 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'bg-green-600' : 'bg-orange-600'}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-gray-900">Project Scope:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.scope.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Project Capabilities
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From concept to completion, we deliver comprehensive engineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-bold mb-2">Site Planning</h3>
                <p className="text-blue-100 text-sm">Comprehensive site analysis and optimal layout design</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-bold mb-2">Infrastructure</h3>
                <p className="text-blue-100 text-sm">Utility coordination and infrastructure integration</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-bold mb-2">Environmental</h3>
                <p className="text-blue-100 text-sm">Stormwater management and erosion control</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-4">
                <h3 className="text-2xl font-bold mb-2">Compliance</h3>
                <p className="text-blue-100 text-sm">Regulatory compliance and permitting support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven track record can benefit your infrastructure development.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="/contact">Contact Us Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
