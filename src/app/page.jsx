import CourseCard from "@/components/Course/CourseCard";
import styles from "./page.module.css";
import { getCourses } from "@/actions/get-courses";
import SearchBox from "@/components/Course/SearchBox";

export default async function Home({
  searchParams,
}) {
  const courses = await getCourses(searchParams);

  return (
    <main className={styles.main}>
      <div className={styles.page_header}>SecureMyScholarship-Jois</div>

      <SearchBox />

      <div className={styles.results_container}>
        {
          courses.map(course => (
            <CourseCard key={course.course_id} course={course} />
          ))
        }
      </div>
      {
        courses.length === 0 && <div className={styles.no_course}>There's No Courses available in results...</div>
      }
    </main>
  );
}
