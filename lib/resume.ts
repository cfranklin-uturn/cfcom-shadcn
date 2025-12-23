import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const resumeFile = path.join(process.cwd(), 'content/resume.md')

export interface ResumeData {
  personalInfo: {
    name: string
    title: string
    address: string
    email: string
    website?: string
    linkedin?: string
  }
  summary: string
  experience: Array<{
    position: string
    company: string
    period: string
    skills?: string[]
    achievements: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    period: string
    details?: string[]
  }>
  certifications: Array<{
    name: string
    year: string
  }>
  skills: string[]
  software: Array<{
    name: string
    level: number
  }>
  languages: Array<{
    name: string
    level: number
  }>
}

export function getResumeData(): ResumeData {
  if (!fs.existsSync(resumeFile)) {
    // Return default data if file doesn't exist
    return {
      personalInfo: {
        name: "Carson H. Franklin",
        title: "Software Developer",
        address: "Your City, State ZIP",
        email: "your.email@example.com",
        website: "yourwebsite.com",
        linkedin: "linkedin.com/in/yourprofile"
      },
      summary: "Passionate software developer with experience in modern web technologies and a strong foundation in computer science. Focused on creating efficient, scalable solutions and continuously learning new technologies.",
      experience: [
        {
          position: "Software Developer",
          company: "Tech Company",
          period: "2022 - Present",
          skills: ["JavaScript/TypeScript", "React/Next.js", "Node.js"],
          achievements: [
            "Developed and maintained web applications using React and Node.js",
            "Collaborated with cross-functional teams to deliver high-quality software",
            "Implemented responsive design principles for mobile-friendly applications"
          ]
        }
      ],
      education: [
        {
          degree: "Bachelor of Computer Science",
          institution: "University Name",
          period: "2018 - 2022",
          details: [
            "Graduated Magna Cum Laude",
            "Relevant coursework: Data Structures, Algorithms, Software Engineering"
          ]
        }
      ],
      certifications: [
        {
          name: "AWS Certified Developer",
          year: "2023"
        }
      ],
      skills: [
        "JavaScript/TypeScript",
        "React/Next.js",
        "Node.js",
        "Python",
        "Git/Version Control",
        "Agile Development"
      ],
      software: [
        { name: "JavaScript/TypeScript", level: 5 },
        { name: "React/Next.js", level: 5 },
        { name: "Node.js", level: 4 },
        { name: "Python", level: 3 },
        { name: "Docker", level: 3 }
      ],
      languages: [
        { name: "English", level: 5 },
        { name: "Spanish", level: 2 }
      ]
    }
  }

  const fileContents = fs.readFileSync(resumeFile, 'utf8')
  const { data } = matter(fileContents)
  
  return data as ResumeData
}