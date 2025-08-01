import { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [ currentItem, setCurrentItem ] = useState(0);

  const fetchData = async () =>{
    const res = await fetch(url);
    if(!res.ok){
      return res.status(400).json({erro:"Não foi possível realizar o fetch."})
    }
    const data = await res.json();
    setJobs(data);
    setIsLoading(false)  
  }

  useEffect(()=>{
    fetchData();
  }, [])

  if(isLoading){
    return(
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }
  

  return(
    <section className="jobs-center">
      <BtnContainer jobs={jobs} setCurrentItem={setCurrentItem} currentItem={currentItem}/>
      <JobInfo jobs={jobs} currentItem={currentItem}/>
    </section>
  );
};
export default App;
