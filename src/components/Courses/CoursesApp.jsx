import React, { useState } from "react";
import PopularCourses from "./PopularCourses";
import CourseDetailsPage from "./CourseDetailsPage";

const CoursesApp = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleCourseSelect = (courseId) => {
    setSelectedCourseId(courseId);
  };

  const handleBack = () => {
    setSelectedCourseId(null);
  };

  return (
    <div>
      {selectedCourseId ? (
        <CourseDetailsPage courseId={selectedCourseId} onBack={handleBack} />
      ) : (
        <PopularCourses onCourseSelect={handleCourseSelect} />
      )}
    </div>
  );
};

export default CoursesApp;
