import Navbar from "@/components/Navbar"; 
import Image from "next/image";

export default function About() {

  const skills = [
    {
      name: "HTML",
      level: 95,
      icon: "/html.svg",
      desc: "Semantic markup and accessible layouts.",
    },
    {
      name: "CSS",
      level: 90,
      icon: "/css.svg",
      desc: "Responsive design and custom styling with SCSS.",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: "/js.svg",
      desc: "DOM manipulation, ES6+, async/await, fetch API.",
    },
    {
      name: "ReactJS",
      level: 80,
      icon: "/react.svg",
      desc: "Built SPAs using hooks, context API, and reusable components.",
    },
    {
      name: "Next.js",
      level: 75,
      icon: "/nextjs.svg",
      desc: "Used for SSR and routing in portfolio & dashboards.",
    },
    {
      name: "Python",
      level: 70,
      icon: "/python.svg",
      desc: "Built APIs with authentication, pagination, and filtering.",
    },
    {
      name: "Django REST Framework",
      level: 70,
      icon: "/django.svg",
      desc: "Built APIs with authentication, pagination, and filtering.",
    },
    {
      name: "MySQL",
      level: 70,
      icon: "/mysql.svg",
      desc: "Handled relational databases and complex queries.",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: "/tailwindcss.svg",
      desc: "Styled UIs with utility-first classes for responsive design.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen px-6 md:px-16 py-16 bg-gradient-to-br from-green-100 via-blue-50 to-blue-200 scroll-smooth">
        {/* About Me Section */}
        <div className="mb-16 animate-fadeInUp">
          <h3 className="text-4xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition-colors duration-300">About Me</h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl text-lg hover:text-gray-800 transition-colors duration-300">
            Junior Software Engineer with experience building and maintaining production-level web applications using ReactJS and Django REST Framework. Worked on an internal HR Management System that was live for one year, handling frontend development, API integration, authentication flows, and role-based UI.
          </p>
        </div>

        {/* Skills Section */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-4xl font-bold mb-8 text-gray-900 hover:text-blue-600 transition-colors duration-300">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-white shadow-md rounded-xl p-6 flex flex-col gap-3 items-start transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Icon and Name */}
                <div className="flex items-center gap-4 w-full">
                  <div className="w-14 h-14 relative transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-semibold text-gray-800 mb-2">
                      <span className="group-hover:text-blue-600 transition-colors duration-300">{skill.name}</span>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Description */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-xs text-gray-600 mt-2 pl-16 pr-2 font-medium">
                  {skill.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
            
        {/* Experience Section */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-600 mt-16 mb-8 rounded-full"></div>
          <h3 className="text-4xl font-bold mb-8 mt-6 text-gray-900 hover:text-blue-600 transition-colors duration-300">My Experience</h3>
        
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <h4 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">Avgi Solution Pvt, Ltd.</h4>
              <p className="text-sm text-gray-500 mt-1 font-semibold">Junior Software Engineer</p>
              <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-102 mt-4 border-l-4 border-blue-500 hover:border-blue-600">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">HR Management System</h5>
                <p className="text-gray-600 leading-relaxed">
                  February 2024 - Present. Worked on building employee dashboards,
                  leave management, and integrated the system with the backend APIs
                  using ReactJS and MUI. Focused on creating responsive user interfaces and optimizing performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}