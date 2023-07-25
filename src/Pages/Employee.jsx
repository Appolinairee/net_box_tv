import React, {useEffect, useState} from 'react';

const Employee = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3500/api', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJuYW1lIjoiQWZyaWNhIiwicm9sZXMiOlsyMDAxLG51bGwsbnVsbF19LCJpYXQiOjE2OTAyMzk4MDQsImV4cCI6MTY5MDI0MjgwNH0.7JglLgoV3HC--6_6GGUX8gH1OX77yfg4fdDistBEF6A',
        },
      })
      .then(res => {
      return res.json();
      })
      .then(result => setData(result));
    }, []);

  return (
    <div>
      {
        data.map((empl) => (
            <div className="div">
                {empl.firstname}
            </div>
        ))
      }
    </div>
  )
}

export default Employee;