import React from 'react';
import {useSelector} from 'react-redux';

function CourseList() {
  const courses = useSelector(state => state.data);
  console.log(courses);
  return (
    <ul>
      { courses.map((course) => (
        <li>{course}</li>
      ))}
    </ul>
  )
}

export default CourseList
