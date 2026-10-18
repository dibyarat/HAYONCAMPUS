/**
 * HayonCampus — Single Source of Truth Constants
 * All external URLs, brand copy, feature lists, and navigation links
 * are consolidated here for seamless maintainability.
 */

const HAYON_CONSTANTS = {
  brand: {
    name: 'HayonCampus',
    wordmarkFirst: 'Hayon',
    wordmarkSecond: 'Campus',
    tagline: 'A better way to navigate campus life.',
    badge: 'THE FUTURE OF CAMPUS LIFE',
    hero: {
      titleMain: 'Campus life,',
      titleAccent: 'reimagined.',
      subtitle: 'A unified operating system for higher education. Streamline your attendance, lectures, and daily schedule with CampAssist, while powering your team collaborations and notes in StudyOS.',
      ctaPrimary: 'Explore our platforms',
      ctaSecondary: 'Discover Hayoncampus',
      trustLine: 'Built by students, for students. Powering modern campus communities.',
    },
    statement: {
      headline: "Education shouldn't feel fragmented. We're uniting every facet of student life.",
      subtext: 'From your first morning lecture to your final capstone presentation, Hayoncampus provides the backbone for your college journey.',
      cta: 'Get started now',
    },
    about: {
      badge: 'ABOUT HAYONCAMPUS',
      title: 'Purpose-built for the rhythm of modern university life.',
      p1: 'University life moves fast. Students traditionally juggle disjointed spreadsheets for attendance, fragmented group chats for classroom notes, and buried emails when recruiting project teammates.',
      p2: 'Hayoncampus unifies these separate realities into two synchronized, high-performance engines: CampAssist for day-to-day schedule and attendance survival, and StudyOS for collaborative academic excellence.',
      highlight: 'One shared student ecosystem. Zero fragmented noise.',
    },
  },

  urls: {
    campassist: 'https://www.campassist.me/',
    studyos: 'https://studyos-nu-three.vercel.app/',
    hayoncampus: 'https://hayoncampus.vercel.app',
    github: 'https://github.com/dibyarat',
    supportEmail: 'contact@hayoncampus.com',
    privacy: '#',
    terms: '#',
  },

  navLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'Platforms', href: '#platforms' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
  ],

  platforms: [
    {
      id: 'campassist',
      name: 'CampAssist',
      tagline: 'Your campus, under control.',
      description: 'The smart student daily companion that tracks lecture schedules, classroom locations, and protects your 75% attendance threshold with safe-bunk calculation.',
      logo: 'assets/campassist-icon.png',
      badge: 'Daily Campus Companion',
      urlKey: 'campassist',
      features: [
        'Real-time lecture timetable & classroom countdowns',
        '75% attendance bunk-guard & safe-skip calculator',
        'Campus room finder & seating directory',
      ],
      mockup: {
        type: 'campassist',
        classTitle: 'Data Structures & Algorithms',
        classMeta: 'Room 302 • 10:30 AM – 11:30 AM • Prof. Roy',
        attendancePercent: '86.4%',
        attendanceStatus: 'Safe to Skip: 2 Lectures',
        statusChip: 'Live Schedule',
      },
    },
    {
      id: 'studyos',
      name: 'StudyOS',
      tagline: 'Your learning, in sync.',
      description: 'The academic collaborative workspace for verified subject vaults, syllabus progress, and recruiting high-impact teammates for hackathons and capstone labs.',
      logo: 'assets/studyos-mark.png',
      badge: 'Academic Workspace',
      urlKey: 'studyos',
      features: [
        'Course modules & lecture recording archive',
        'Shared student notes vault with PDF reader',
        'Skill-based team finder for labs & hackathons',
      ],
      mockup: {
        type: 'studyos',
        noteTitle: 'Distributed Systems Vault.pdf',
        noteMeta: 'Unit 3: Consensus Protocols • 4.9 ★',
        teamTitle: 'Hackathon Squad',
        teamMeta: '3/4 Members • Need 1 React/Node Dev',
        statusChip: 'Cloud Sync Active',
      },
    },
  ],

  ecosystemSteps: [
    {
      step: '01',
      title: 'Organize',
      copy: 'Sync your lectures, attendance thresholds, and exam dates in one frictionless schedule.',
      icon: 'calendar',
    },
    {
      step: '02',
      title: 'Learn',
      copy: 'Access peer-reviewed notes, course archives, and study resources in high-speed vaults.',
      icon: 'book',
    },
    {
      step: '03',
      title: 'Move forward',
      copy: 'Assemble high-impact hackathon teams, showcase your skills, and master your semester.',
      icon: 'rocket',
    },
  ],

  features: [
    {
      id: 'feat-timetable',
      title: 'Smart Timetable Matrix',
      category: 'CampAssist Engine',
      description: 'A dynamic day-view that automatically highlights your live classroom, upcoming labs, and professors.',
      colSpan: 'col-span-7',
      badge: 'Real-time countdown',
    },
    {
      id: 'feat-attendance',
      title: '75% Attendance Safeguard',
      category: 'Attendance Planner',
      description: 'Intelligent bunk-guard calculations tell you precisely how many classes you can afford to skip or need to attend.',
      colSpan: 'col-span-5',
      badge: 'Zero Debar Risk',
    },
    {
      id: 'feat-notifications',
      title: 'Instant Campus Dispatch',
      category: 'Push Notification Alerts',
      description: 'Immediate mobile notifications whenever a class is rescheduled, a room is swapped, or an urgent circular drops.',
      colSpan: 'col-span-4',
      badge: 'Instant Sync',
    },
    {
      id: 'feat-vault',
      title: 'Synchronized Notes Vault',
      category: 'StudyOS Repository',
      description: 'Peer-reviewed student notes, exam prep summaries, community ratings, and high-speed in-browser PDF previews.',
      colSpan: 'col-span-4',
      badge: 'Cloud Powered',
    },
    {
      id: 'feat-team',
      title: 'Skill-Based Team Finder',
      category: 'Collaborative Matcher',
      description: 'Recruit classmates by specific skillset tags (React, Node, ML, Figma) with integrated vacancy indicators.',
      colSpan: 'col-span-4',
      badge: 'Squad Builder',
    },
    {
      id: 'feat-roomfinder',
      title: 'Classroom & Hall Seating Locator',
      category: 'Campus Navigation',
      description: 'Find any department room, computer lab, or mid-term exam hall desk without asking around.',
      colSpan: 'col-span-12',
      badge: 'Interactive Wayfinding',
    },
  ],

  footer: {
    platformLinks: [
      { label: 'CampAssist Platform', href: 'https://www.campassist.me/' },
      { label: 'StudyOS Workspace', href: 'https://studyos-nu-three.vercel.app/' },
      { label: 'Timetable Countdown', href: '#features' },
      { label: 'Attendance Bunk-Guard', href: '#features' },
      { label: 'Shared Notes Vault', href: '#features' },
      { label: 'Hackathon Recruiter', href: '#features' },
    ],
    companyLinks: [
      { label: 'About HayonCampus', href: '#about' },
      { label: 'Product Ecosystem', href: '#ecosystem' },
      { label: 'Platform Features', href: '#features' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Support & Inquiries', href: 'mailto:contact@hayoncampus.com' },
    ],
  },
};

// Expose on global window object and export for module consumers
if (typeof window !== 'undefined') {
  window.HAYON_CONSTANTS = HAYON_CONSTANTS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = HAYON_CONSTANTS;
}
