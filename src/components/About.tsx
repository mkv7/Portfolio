export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-6xl font-bold">
              Photo
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Professional Developer & Problem Solver
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With over few years of experience in full-stack development, I specialize in building
              scalable web applications that solve real-world problems. My passion lies in writing
              clean, efficient code and creating intuitive user experiences.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;ve worked with startups and established companies, helping them transform their
              ideas into successful digital products. I&apos;m always eager to learn new technologies
              and stay updated with industry trends.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
