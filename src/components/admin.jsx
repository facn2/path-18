import React from 'react';

const Admin = () => (
  <div>
    <h1>Admin Page</h1>
    <form action="">
      <label htmlFor="title">Title</label>
      <input id="title" type="text"/>
      <label htmlFor="tagline">Tagline</label>
      <input id="tagline" type="text"/>
      <label htmlFor="description">Description</label>
      <input id="description" type="text"/>
      <label htmlFor="imageUrl">Image url</label>
      <input id="imageUrl" type="text"/>
      <label htmlFor="degree">Degree</label>
      <input id="degree" type="text"/>
      <label htmlFor="grade_bagrut">Bagrut Grade</label>
      <input id="grade_bagrut" type="text"/>
      <label htmlFor="grade_psychometric">Psychometric Grade</label>
      <input id="grade_psychometric" type="text"/>
      <label htmlFor="universities">Universities</label>
      <input id="universities" type="text"/>
      <label htmlFor="salary_start">Starting Salary</label>
      <input id="salary_start" type="text"/>
      <label htmlFor="salary_ten_year">Ten Year Salary</label>
      <input id="salary_ten_year" type="text"/>
      <button>Submit</button>
    </form>
  </div>
);

export default Admin;
