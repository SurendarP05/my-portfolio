import Navbar from "@/components/Navbar";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "HR Management System (Production – 1 Year)",
      description:
        "An internal HRMS developed at Avgi Solution Pvt. The system was deployed and used internally for one year before product shutdown due to business strategy changes.",
      role: "Frontend Developer (React)",
      contributions: [
        "Developed responsive UI for Employee, Attendance, and Leave modules using ReactJS",
        "Integrated REST APIs built with Django REST Framework",
        "Implemented form validation and handled API error states (400, 401, 403)",
        "Managed JWT-based authentication flow",
        "Implemented role-based UI rendering (Admin, HR, Employee)",
        "Fixed production UI bugs and handled feature updates post-deployment",
      ],
      technologies: ["ReactJS", "Django REST Framework", "MySQL"],
      image: "/hrms.png",
      link: null, // Internal project
    },
    {
      title: "Rapido Clone Website",
      description:
        "A responsive frontend clone of the Rapido homepage built using ReactJS and Tailwind CSS. Focused on modern layout, UI responsiveness, and pixel-perfect design replication.",
      technologies: ["ReactJS", "Tailwind CSS"],
      image: "/rapido-clone.png",
      link: "https://myrapidoclone.netlify.app/",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen px-6 md:px-16 py-16 bg-gradient-to-br from-green-100 via-blue-50 to-blue-200">
        {/* Introduction Section */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            My Projects
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project reflects
            my experience building modern web applications and working on
            production-level systems.
          </p>
        </div>

        {/* Project Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white shadow-lg rounded-xl p-6 transform transition-transform duration-300 hover:scale-[1.05] hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 mb-3 text-sm">
                {project.description}
              </p>

              {/* Role */}
              {project.role && (
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Role: {project.role}
                </p>
              )}

              {/* Contributions */}
              {project.contributions && (
                <ul className="text-xs text-gray-600 mb-3 list-disc list-inside space-y-1">
                  {project.contributions.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="text-sm text-gray-500 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs mr-2 mb-2 inline-block"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Link (Only if Exists) */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View Live
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;