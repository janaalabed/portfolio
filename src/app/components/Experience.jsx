export default function Experience() {
  const experiences = [
    {
      startDate: "May 2026",
      endDate: "Jul 2026",
      companyName: "IDS",
      bullets: [
        "Built the complete backend for an IT Help Desk & Ticketing platform, including ticket CRUD, filtering, assignment, and escalation logic in ASP.NET Core, EF Core, and PostgreSQL, delivering a fully functional API layer capable of supporting the platform's core support workflows end-to-end",
        "Secured application access by implementing JWT-based authentication and custom role-based access control for 4 distinct user roles, which ensured protected resources and permission-based functionality",
        "Built a notification system and role-gated knowledge base module, reducing repetitive support inquiries through self service access to common issue resolutions",
        "Improved usability across user types by designing 7 role-specific dashboards and pages in React and Tailwind CSS, giving each role a focused, relevant interface tailored to their responsibilities",
      ],
    },
    {
      startDate: "Jan 2026",
      endDate: "Mar 2026",
      companyName: "EFE Lebanon",
      bullets: [
        "Completed a 3-month cybersecurity apprenticeship (endorsed by the Lebanese IT Syndicate), applying core security principles to authentication flows, token-based access control, and data protection practices relevant to full-stack development",
        "Led a 4-member team through structured project milestones, coordinating tasks and timelines to ensure on-time delivery ",
        " Delivered 2 technical presentations, strengthening clear communication of security and technical concepts to varied audiences",
      ],
    },

    {
      startDate: "Nov 2025",
      endDate: "Dec 2025",
      companyName: "TechTalks",
      bullets: [
        " Led a team of 6 developers as Team Lead, facilitating Scrum ceremonies and managing sprint planning and task tracking in Jira across 4 sprints to ensure coordinated execution and on-time delivery",
        "Designed and developed scalable frontend features using Next.js, React, and Tailwind CSS, enhancing UI responsiveness and reducing page load times by 30% ",
        "Implemented backend services and database architecture using PostgreSQL and Supabase, enabling secure data management and reliable CRUD operations",
        "Maintained code quality through version control and pull request reviews on GitHub, reducing integration issues ",
      ],
    },

    {
      startDate: "Aug 2025",
      endDate: "Oct 2025",
      companyName: "Vanrise",
      bullets: [
        "Developed a reservation system with integrated client management, supporting 500+ client records and streamlining booking operations by 40% ",
        "Built a responsive and user-friendly frontend using HTML5, CSS3, JavaScript, Bootstrap, and AngularJS, reducing user interaction barriers by 30% across devices ",
        "Implemented server-side logic using C# and .NET, improving backend stability and reducing server-side errors by 25% ",
        "Designed and optimized SQL Server (MSSQL) database schemas, accelerating query performance by 35% while ensuring data accuracy and accessibility ",
      ],
    },
  ];
  return (
    <>
      <section id="experience">
        {experiences.map((item, index) => (
          <div key={index}>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
            <p>{item.companyName}</p>
            <p>{item.bullets}</p>
          </div>
        ))}
        ;
      </section>
    </>
  );
}
