function Skills(props: { skills: string[] }) {
  const { skills } = props;
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
}

export default Skills;
