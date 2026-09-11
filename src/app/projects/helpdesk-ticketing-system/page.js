import Architecture from "@/app/components/caseStudyComponents/Architecture";
import BackToProjects from "@/app/components/caseStudyComponents/BackToProjects";
import Header from "@/app/components/caseStudyComponents/Header";
import Role from "@/app/components/caseStudyComponents/Role";
import Screenshots from "@/app/components/caseStudyComponents/Screenshots";
export default function ProjectCaseStudy() {
  return (
    <>
      <BackToProjects />
      <Header />
      <Screenshots />
      <Role />
      <Architecture />
    </>
  );
}
