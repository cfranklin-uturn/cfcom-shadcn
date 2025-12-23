import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getResumeData } from "@/lib/resume"
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconWorld, 
  IconBrandLinkedin,
  IconUser,
  IconBriefcase,
  IconSchool,
  IconCertificate,
  IconCode,
  IconLanguage
} from "@tabler/icons-react"

export default function ResumePage() {
  const resume = getResumeData()

  const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-muted-foreground min-w-0 flex-1">{skill}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot <= level ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              
              {/* Header Section */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <Avatar className="w-20 h-20 shrink-0">
                      <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                        {resume.personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center sm:text-left">
                      <h1 className="text-3xl font-bold">{resume.personalInfo.name}</h1>
                      <p className="text-lg text-muted-foreground">{resume.personalInfo.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Left Column - Main Content */}
                <div className="xl:col-span-2 space-y-6">
                  
                  {/* Resume Summary */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconUser className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-semibold">Resume Summary</h2>
                      </div>
                      <div className="text-muted-foreground">
                        <p>{resume.summary}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Experience */}
                  <div className="space-y-6">
                    {/* Experience Header */}
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconBriefcase className="w-5 h-5 text-primary" />
                          </div>
                          <h2 className="text-xl font-semibold">Experience</h2>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Individual Job Cards */}
                    {resume.experience.map((exp, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{exp.position}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {exp.period}
                            </Badge>
                          </div>
                          <p className="text-primary font-medium mb-3">{exp.company}</p>
                          {exp.skills && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {exp.skills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <ul className="text-muted-foreground space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Education */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconSchool className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-semibold">Education</h2>
                      </div>
                      
                      <div className="space-y-4">
                        {resume.education.map((edu, index) => (
                          <div key={index}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <h3 className="font-semibold">{edu.degree}</h3>
                              <Badge variant="secondary" className="text-xs">
                                {edu.period}
                              </Badge>
                            </div>
                            <p className="text-primary font-medium mb-2">{edu.institution}</p>
                            {edu.details && (
                              <ul className="text-muted-foreground text-sm space-y-1">
                                {edu.details.map((detail, detIndex) => (
                                  <li key={detIndex} className="flex gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Certifications */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconCertificate className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-xl font-semibold">Certifications</h2>
                      </div>
                      
                      <div className="space-y-4">
                        {resume.certifications.map((cert, index) => (
                          <div key={index}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <h3 className="font-semibold">{cert.name}</h3>
                              <Badge variant="secondary" className="text-xs">
                                {cert.year}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Sidebar Info */}
                <div className="space-y-6">
                  
                  {/* Personal Info */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconUser className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-lg font-semibold">Personal Info</h2>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <IconMapPin className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">Address</p>
                            <p className="text-sm text-muted-foreground">{resume.personalInfo.address}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <IconMail className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">E-mail</p>
                            <p className="text-sm text-muted-foreground">{resume.personalInfo.email}</p>
                          </div>
                        </div>
                        
                        {resume.personalInfo.website && (
                          <div className="flex items-center gap-3">
                            <IconWorld className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">Website</p>
                              <p className="text-sm text-muted-foreground">{resume.personalInfo.website}</p>
                            </div>
                          </div>
                        )}
                        
                        {resume.personalInfo.linkedin && (
                          <div className="flex items-center gap-3">
                            <IconBrandLinkedin className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm font-medium">LinkedIn</p>
                              <p className="text-sm text-muted-foreground">{resume.personalInfo.linkedin}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Skills */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconBriefcase className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-lg font-semibold">Skills</h2>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {resume.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Software */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconCode className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-lg font-semibold">Systems / Platforms</h2>
                      </div>
                      
                      <div className="space-y-4">
                        {resume.software.map((software, index) => (
                          <div key={index}>
                            <SkillBar skill={software.name} level={software.level} />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Languages */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconLanguage className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-lg font-semibold">Languages</h2>
                      </div>
                      
                      <div className="space-y-4">
                        {resume.languages.map((language, index) => (
                          <div key={index}>
                            <SkillBar skill={language.name} level={language.level} />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}