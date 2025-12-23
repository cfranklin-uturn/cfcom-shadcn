# Resume Page

The resume page is located at `/resume` and displays a professional resume layout that matches your site's design system.

## How to Update Your Resume

### Easy Method (Recommended)
Edit the markdown file at `content/resume.md`. The resume data is stored in the YAML frontmatter at the top of the file:

```yaml
---
personalInfo:
  name: "Your Name"
  title: "Your Job Title"
  # ... other fields
---
```

### Structure Overview

The resume includes these sections:

#### Personal Info
- `name`: Your full name
- `title`: Your professional title
- `address`: Your location
- `phone`: Phone number
- `email`: Email address
- `website`: Your website (optional)
- `linkedin`: Your LinkedIn profile (optional)

#### Summary
- A brief professional summary paragraph

#### Experience
Array of job positions with:
- `position`: Job title
- `company`: Company name
- `period`: Date range (e.g., "2022 - Present")
- `achievements`: Array of bullet points describing your accomplishments

#### Education
Array of educational background with:
- `degree`: Degree name
- `institution`: School name
- `period`: Date range
- `details`: Array of additional details (optional)

#### Certifications
Array of certifications with:
- `name`: Certification name
- `year`: Year obtained

#### Skills
Array of skill names that will be displayed as badges

#### Software
Array of software skills with proficiency ratings:
- `name`: Software/technology name
- `level`: Proficiency level (1-5, displayed as dots)

#### Languages
Array of languages with proficiency ratings:
- `name`: Language name
- `level`: Proficiency level (1-5, displayed as dots)

## Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile
- **Dark Mode**: Automatically matches your site's dark theme
- **Professional Layout**: Two-column design with timeline-style experience section
- **Skill Ratings**: Visual dot ratings for software and language proficiency
- **Easy Updates**: Just edit the markdown file and the page updates automatically
- **Consistent Styling**: Uses your site's existing color scheme and typography

## Customization

If you need to modify the layout or styling, edit `app/resume/page.tsx`. The page uses:
- Tailwind CSS for styling
- shadcn/ui components for consistency
- Tabler Icons for visual elements
- Responsive grid layout

The resume data loading logic is in `lib/resume.ts` if you need to modify how the markdown is processed.