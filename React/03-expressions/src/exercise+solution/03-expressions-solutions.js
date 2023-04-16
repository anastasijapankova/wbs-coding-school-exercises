// 01

function TodaysDate() {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return <div>{dateString}</div>;
}

export default TodaysDate;
